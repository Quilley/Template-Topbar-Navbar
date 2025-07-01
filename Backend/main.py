from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
import io
from typing import Optional

app = FastAPI(title="Excel Processing API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "FastAPI Excel Processing Server"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "Server is running"}

@app.post("/upload-excel")
async def process_excel(
    file: UploadFile = File(...),
    integer_param: int = Form(...),
    product_param: str = Form(...),
    month: str = Form(...),
    year: str = Form(...)
):
    if not file.filename.endswith(('.xlsx', '.xls')):
        raise HTTPException(status_code=400, detail="File must be an Excel file (.xlsx or .xls)")
    
    try:
        contents = await file.read()
        df = pd.read_excel(io.BytesIO(contents))
        
        # Check if Product column exists
        if 'Product' not in df.columns:
            raise HTTPException(status_code=400, detail="Product column not found in Excel file")
        
        # Check if ALL values in Product column match product_param
        unique_products = df['Product'].dropna().unique()
        if len(unique_products) != 1 or unique_products[0] != product_param:
            return JSONResponse(
                status_code=400,
                content={
                    "status": "error",
                    "message": f"Product column must contain only '{product_param}' values",
                    "found_products": unique_products.tolist()
                }
            )
        
        result = {
            "status": "success",
            "message": "Excel file processed successfully",
            "file_info": {
                "filename": file.filename,
                "rows": len(df),
                "columns": len(df.columns),
                "column_names": df.columns.tolist()
            },
            "parameters": {
                "integer_param": integer_param,
                "product_param": product_param,
                "month": month,
                "year": year
            },
            "data_preview": df.head(5).to_dict(orient="records") if not df.empty else []
        }
        
        return JSONResponse(content=result)
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing file: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)