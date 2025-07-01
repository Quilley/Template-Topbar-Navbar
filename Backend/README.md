# FastAPI Excel Processing Server

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python main.py
# or
uvicorn main:app --reload
```

Server runs on: http://localhost:8000

## API Endpoints

### GET /
- Returns welcome message

### GET /health
- Health check endpoint

### POST /upload-excel
- Accepts Excel file and parameters
- **Parameters:**
  - `file`: Excel file (.xlsx or .xls)
  - `integer_param`: Integer value
  - `string_param`: String value
  - `month`: Month string
  - `year`: Year string

## Example Usage (curl)

```bash
curl -X POST "http://localhost:8000/upload-excel" \
  -H "accept: application/json" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@your_file.xlsx" \
  -F "integer_param=123" \
  -F "string_param=test" \
  -F "month=January" \
  -F "year=2024"
```

## React Integration

The server includes CORS for React development servers (ports 3000 and 5173).