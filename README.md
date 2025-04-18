# 📦 Product Management API (Hapi.js + PostgreSQL)

API ini digunakan untuk mengelola data produk dan supplier, serta terhubung ke sistem Machine Learning untuk memantau stok barang.

---

### TODO
- Pisahkan Route dengan handler
- Tambahkan Validasi jika perlu
- Tambahkan response status success/gagal beserta error codenya

## 🛠 Base URL
```
http://localhost:3000
```

---

## 📁 Endpoints

### 🔹 GET `/product`
Ambil semua data produk.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "macha",
      "stock": 4000,
      "supplier_id": 1
    }
  ]
}
```

### 🔹 POST `/product`
Tambah data produk baru.

**Body:** `application/x-www-form-urlencoded`
```
name=macha&stock=4000&supplier_id=1
```

**Response:**
```json
{
  "success": true,
  "data": [ { "id": 2, "name": "macha", "stock": 4000, "supplier_id": 1 } ]
}
```

### 🔹 PATCH `/product/{id}/low-stock`
Tandai produk sebagai stok rendah.

**Response:**
```json
[ { "id": 2, "is_low_stock": true } ]
```

### 🔹 DELETE `/product/{id}`
Hapus produk berdasarkan ID.

**Response:**
```json
[ { "id": 2, "name": "macha" } ]
```

---

### 🔹 GET `/supplier`
Ambil semua data supplier.

### 🔹 POST `/supplier`
Tambah data supplier baru.

**Body:**
```
name=PT Cina sejati&phone=08992040913&address=Jl Jambu&email=egoirfan123@gmail.com
```

**Response:**
```json
{
  "success": true,
  "data": [ { "id": 1, "name": "PT Cina sejati", ... } ]
}
```

---

## ⚠️ Error Format
```json
{
  "success": false,
  "message": "Deskripsi error"
}
```

---

## 📌 Notes
- Semua data disimpan di PostgreSQL
- Validasi dasar dilakukan manual tanpa Joi
- Endpoint `low-stock` disiapkan untuk integrasi dengan sistem Machine Learning (trigger dari luar)


