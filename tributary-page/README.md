# 🎉 Trang Kỷ Niệm - Commemorative Tribute Page

Một trang web đẹp để gửi lời chúc tạm biệt đồng nghiệp với hình ảnh, thông điệp, hiệu ứng animation và âm nhạc.

![React](https://img.shields.io/badge/React-19.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-8.0.2-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Latest-blue)

## ✨ Tính Năng Chính

- ✅ **Hero Section** - Tiêu đề, confetti animation, hiệu ứng floating decorations
- ✅ **Photo Gallery** - Thư viện ảnh colleagues với hover effects
- ✅ **Message Overlay** - Hiển thị thông điệp khi hover vào ảnh
- ✅ **Scroll Animations** - Fade-in, slide-up animations kích hoạt khi cuộn
- ✅ **Background Music** - Nút nhạc có thể toggle ở góc dưới phải
- ✅ **Celebration Effects** - Confetti burst khi tải trang
- ✅ **Responsive Design** - Hoạt động tốt trên mobile, tablet, desktop
- ✅ **Light White/Blue Theme** - Màu sắc tươi sáng, dễ chịu

## 🚀 Cách Cài Đặt & Chạy

### 1. Cài đặt dependencies
```bash
cd tributary-page
npm install
```

### 2. Chạy dev server
```bash
npm run dev
```
Truy cập `http://localhost:5173` để xem ứng dụng.

### 3. Build cho production
```bash
npm run build
```
Kết quả sẽ nằm trong thư mục `dist/`.

## 📝 Tùy Chỉnh Nội Dung

### Chỉnh sửa thông điệp từ colleagues
Mở file `src/data/messages.js` và chỉnh sửa mảng `colleagueMessages`:

```javascript
{
  id: 1,
  name: "Tên Người",
  position: "Vị trí công việc",
  message: "Lời chúc của bạn",
  photoUrl: "URL ảnh (từ cloud storage)",
  color: "from-blue-400 to-blue-600"
}
```

**Lưu ý URL ảnh:**
- Sử dụng ảnh từ Google Photos, Imgur, hoặc cloud storage khác
- Ảnh phải có format: `.jpg`, `.png`, `.webp`
- Kích thước tối ưu: 500x500px

### Chỉnh sửa tiêu đề & màu sắc
Chỉnh sửa phần `siteConfig` trong `src/data/messages.js`:
- `title` - Tiêu đề trang
- `subtitle` - Phụ đề
- `closing` - Lời kết

### Thêm nhạc nền
1. Lấy file nhạc MP3 từ [Pixabay Music](https://pixabay.com/music/)
2. Đặt file vào thư mục `public/` và đặt tên `celebration.mp3`

## 🎨 Tùy Chỉnh Màu Sắc

Các màu chính được định nghĩa trong `tailwind.config.js`.
Để thay đổi blue → màu khác, chỉnh sửa các Tailwind classes:
- `bg-blue-500` → `bg-green-500`, `bg-purple-500`, etc.
- `text-blue-600` → thay đổi theo ý muốn

## 📱 File Structure

```
tributary-page/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Opening section
│   │   ├── PhotoCard.jsx      # Individual photo card
│   │   ├── Gallery.jsx        # Gallery grid
│   │   ├── Footer.jsx         # Closing section
│   │   └── BackgroundMusic.jsx# Music player
│   ├── data/
│   │   └── messages.js        # Config (customize here!)
│   ├── styles/
│   │   └── globals.css        # Animations & styles
│   └── App.jsx                # Main component
├── public/
│   └── celebration.mp3        # Background music
└── package.json
```

## 🚀 Deploy lên Vercel

### GitHub + Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel (vercel.com)
3. Auto-deploy on every push!

### Vercel CLI
```bash
npm i -g vercel
vercel
```

## 🐛 Troubleshooting

### Ảnh không hiển thị
- Kiểm tra URL ảnh có đúng không
- Thử ảnh từ Unsplash: https://unsplash.com/
- Đảm bảo ảnh cho phép CORS

### Nhạc không phát
- Kiểm tra `/public/celebration.mp3` tồn tại
- Click nút music trước (browser policy)
- Thử file `.wav` nếu `.mp3` không hoạt động

## 📄 License
MIT - Tự do sử dụng

---

**Chúc bạn tạo trang kỷ niệm đẹp!** 🎊
