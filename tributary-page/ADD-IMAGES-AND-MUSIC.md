# 🎵 Hướng Dẫn Thêm Ảnh & Nhạc

## Thêm Ảnh từ Cloud

### Lấy ảnh từ Unsplash (Miễn phí, chất lượng cao)

1. Truy cập https://unsplash.com/
2. Tìm ảnh bạn thích, click vào 
3. Copy URL ảnh (format: `https://images.unsplash.com/photo-...`)
4. Paste vào `src/data/messages.js` trong trường `photoUrl`

**Ví dụ:**
```javascript
photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
```

### Lấy ảnh từ Pexels (Miễn phí)
1. Truy cập https://www.pexels.com/
2. Tìm ảnh, nhấp chuột phải → "Copy image link"
3. Paste vào `photoUrl`

### Lấy ảnh từ Google Drive (Cá nhân)
1. Upload ảnh lên Google Drive
2. Click phải vào ảnh → "Get link"
3. Sao chép link, thay đổi cuối từ `view?usp=sharing` thành `preview`
4. Format:
```
https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
```

## Thêm Nhạc Nền

### Cách 1: Tải từ Pixabay Music (Dễ nhất)

1. Truy cập https://pixabay.com/music/
2. Tìm nhạc nền vui, hẹn (search: "celebration", "happy", "upbeat")
3. Click "Download" → chọn MP3 format
4. Đặt file vào thư mục `public/` và đặt tên là `celebration.mp3`

### Cách 2: Tải từ Freepik Music
1. Truy cập https://www.freepikmusic.org/
2. Chọn nhạc
3. Download → đặt trong `public/celebration.mp3`

### Cách 3: Dùng ứng dụng tạo nhạc AI
- Udio.com - AI music generator (tạo nhạc theo style)
- Soundraw.io - AI music creation
- Download file MP3, đặt vào `public/`

### Cách 4: Tìm nhạc royalty-free
- YouTube Audio Library (đăng nhập Google)
- Epidemic Sound
- Artlist

## Chỉnh Sửa Nhanh - messages.js

### Cấu trúc mỗi colleague:
```javascript
{
  id: 1,                    // ID duy nhất (1, 2, 3, ...)
  name: "Tên Người",        // Tên hiển thị
  position: "Vị trí",      // Chức vụ (Trưởng phòng, Đồng nghiệp, etc)
  message: "Lời chúc...",  // Thông điệp (có thể dài)
  photoUrl: "URL",         // Link ảnh từ cloud
  color: "from-blue-400 to-blue-600" // Gradient background
}
```

### Thêm colleague mới:
```javascript
{
  id: 7,  // Tăng số id
  name: "Người X",
  position: "Đồng nghiệp",
  message: "Lời chúc cho người X",
  photoUrl: "https://images.unsplash.com/...",
  color: "from-purple-400 to-pink-600"
}
```

### Màu gradient options:
```
"from-blue-400 to-blue-600"        // Xanh
"from-cyan-400 to-blue-500"        // Xanh nhạt-xanh
"from-purple-400 to-pink-600"      // Tím-hồng
"from-green-400 to-teal-600"       // Xanh lá-xanh lục
"from-orange-400 to-red-600"       // Cam-đỏ
"from-indigo-400 to-blue-600"      // Indigo-xanh
"from-sky-400 to-blue-500"         // Trời xanh-xanh
"from-yellow-400 to-orange-600"    // Vàng-cam
```

## Tệp Cấu Trúc

```
tributary-page/
├── src/
│   ├── data/
│   │   └── messages.js          ← Chỉnh sửa ĐÂY để thêm ảnh/tin nhắn
│   └── ...
├── public/
│   └── celebration.mp3          ← ĐẶT FILE NHẠC ĐÂY
└── ...
```

## Kiểm Tra

1. Chỉnh sửa `messages.js` → Save
2. App tự động reload (HMR - Hot Module Replacement)
3. Xem ảnh/tin nhắn mới trên http://localhost:5173

## Lỗi Thường Gặp

### Ảnh không hiển thị
❌ URL không đúng
✅ Kiểm tra URL bằng cách copy vào tab mới

❌ Server chặn CORS
✅ Thử ảnh từ Unsplash, Pexels (đã cho phép)

### Nhạc không phát
❌ File không tồn tại trong `public/`
✅ Kiểm tra file `celebration.mp3` trong thư mục `public/`

❌ Browser chặn autoplay
✅ Bấm nút music (♫) góc dưới phải để phát

❌ Format không hỗ trợ
✅ Thử `.mp3`, `.wav`, hoặc `.ogg`

## Tips & Tricks

1. **Ảnh square tốt nhất** - Kích thước 500x500px hoặc lớn hơn
2. **Nhạc background không quá ồn** - Chọn nhạc calming, instrumental
3. **Tin nhắn ngắn gọn** - Tối đa 3 dòng hiển thị đẹp nhất
4. **Cập nhật sau deploy** - Sau khi chỉnh sửa, Vercel auto-rebuild trong vài giây

---

**Cần giúp?** Xem README.md hoặc liên hệ!
