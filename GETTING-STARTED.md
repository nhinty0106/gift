# 🎉 Trang Kỷ Niệm Tạm Biệt - Getting Started

Xin chào! Bạn vừa tạo một trang web kỷ niệm đẹp để gửi lời chúc tạm biệt cho đồng nghiệp! 

## 📁 Cấu Trúc Thư Mục

```
tributary-page/                    ← Project root
├── src/
│   ├── components/               ← React components
│   │   ├── Hero.jsx             (Header section)
│   │   ├── PhotoCard.jsx        (Photo card component)
│   │   ├── Gallery.jsx          (Photo gallery)
│   │   ├── Footer.jsx           (Bottom section)
│   │   └── BackgroundMusic.jsx  (Music player)
│   ├── data/
│   │   └── messages.js          ⭐️ CHỈNH SỬA ĐÂY - colleagues + thông điệp
│   ├── styles/
│   │   └── globals.css          (Animations + custom styles)
│   ├── App.jsx                  (Main component)
│   └── main.jsx                 (Entry point)
├── public/
│   └── celebration.mp3          🎵 ĐẶT FILE NHẠC ĐÂY
├── QUICK-START.md               ⚡️ Hướng dẫn nhanh
├── README.md                    📖 Tài liệu chi tiết
├── ADD-IMAGES-AND-MUSIC.md      📸 Cách thêm ảnh/nhạc
├── DEPLOYMENT.md                🚀 Hướng dẫn deploy Vercel
└── package.json
```

---

## 🚀 Bắt Đầu Ngay

### 1️⃣ Cài đặt Dependencies
```bash
cd /Users/nhi/Học\ tập/cm1_11/tributary-page
npm install
```

### 2️⃣ Chạy Dev Server
```bash
npm run dev
```

Mở browser: **http://localhost:5174/**

### 3️⃣ Chỉnh Sửa Nội Dung
Mở file: `src/data/messages.js`

Thêm/sửa colleagues:
```javascript
{
  id: 1,
  name: "Tên Người",
  position: "Trưởng phòng / Đồng nghiệp",
  message: "Lời chúc cho người này",
  photoUrl: "URL ảnh từ Unsplash/Pexels/Google Drive",
  color: "from-blue-400 to-blue-600"
}
```

---

## 🎨 Tính Năng Chính

✅ **Hero Section**
- Tiêu đề lớn với text gradient
- Confetti animation khi tải trang
- Floating decorations (emoji)

✅ **Photo Gallery**
- Ảnh colleagues trong grid responsive
- Hover effect: zoom + message reveal
- Scroll trigger animations (fade-in, slide-up)

✅ **Message Overlay**
- Khi hover vào ảnh → hiển thị thông điệp
- Tên + vị trí + lời chúc

✅ **Background Music**
- Nút ♫ góc dưới phải
- Toggle play/pause
- Icon xoay khi đang phát

✅ **Footer**
- Lời cảm ơn + lời kết
- Floating emoji animations
- Backdrop gradient effects

✅ **Responsive Design**
- Mobile: 1 cột
- Tablet: 2 cột
- Desktop: 3 cột

---

## 📝 Tùy Chỉnh Nhanh

### Thay đổi Tiêu Đề
`src/data/messages.js`:
```javascript
export const siteConfig = {
  title: "Hello Chị Linh dễ thương",           ← Thay đổi ở đây
  subtitle: "Những kỷ niệm...",    ← Và ở đây
  closing: "Cảm ơn vì tất cả!"    ← Và ở đây
}
```

### Thêm Colleague
Thêm vào array `colleagueMessages`:
```javascript
{
  id: 7,
  name: "Người X",
  position: "Đồng nghiệp",
  message: "Tin nhắn",
  photoUrl: "https://...",
  color: "from-purple-400 to-pink-600"
}
```

### Thêm Nhạc Nền
1. Download MP3 từ https://pixabay.com/music/
2. Đặt vào `public/` folder
3. Đặt tên là `celebration.mp3`
4. Done! App tự động load

### Thay Màu Theme
Trong components, chỉnh sửa Tailwind classes:
- `bg-blue-500` → `bg-green-500`
- `text-blue-600` → `text-purple-600`
- Gradients: `from-blue-400 to-cyan-600` → `from-green-400 to-teal-600`

---

## 📸 Cách Lấy URL Ảnh

### Unsplash (Dễ nhất)
1. Truy cập https://unsplash.com/
2. Tìm ảnh bạn thích
3. Copy link ảnh
4. Paste vào `photoUrl`

### Pexels
1. https://www.pexels.com/
2. Right click ảnh → Copy image link
3. Paste vào `photoUrl`

### Google Drive (Cá nhân)
1. Upload ảnh lên Drive
2. Right click → Get link
3. Thay `view?usp=sharing` → `preview`
4. Format: `https://drive.google.com/uc?export=view&id=YOUR_ID`

---

## 🎵 Cách Thêm Nhạc

### Pixabay Music (Free, Royalty-free)
1. https://pixabay.com/music/
2. Search "celebration", "happy", "upbeat"
3. Download MP3
4. Đặt vào `public/celebration.mp3`

### Ứng Dụng Khác
- Freepik Music: https://www.freepikmusic.org/
- Udio.com: AI-generated music
- Soundraw.io: AI music creation
- YouTube Audio Library (chỉ cần YouTube account)

---

## 🌐 Deploy lên Vercel (Live URL)

### Cách 1: GitHub + Vercel (Auto-Deploy, Recommended)

**A. Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/tribute-page.git
git push -u origin main
```

**B. Connect to Vercel:**
1. Truy cập https://vercel.com
2. Click "Import Project"
3. Chọn GitHub → Chọn `tribute-page` repo
4. Click "Deploy"

**Kết quả:** URL công khai như `https://tribute-page-xyz.vercel.app`

### Cách 2: Vercel CLI (Nhanh)
```bash
npm i -g vercel
vercel
```

### Auto-Update sau Deploy
```bash
# Chỉnh sửa file local
git add .
git commit -m "Update colleagues"
git push

# → Vercel tự động rebuild trong 10-30 giây!
```

---

## ✅ Kiểm Tra Danh Sách

Trước khi deploy, kiểm tra:
- [ ] Tất cả ảnh colleagues đã thêm
- [ ] URL ảnh chính xác (không broken)
- [ ] Tin nhắn chính xác
- [ ] Nhạc nền file tồn tại trong `public/`
- [ ] Test trên mobile (responsive)
- [ ] `npm run dev` chạy không lỗi
- [ ] `npm run build` thành công

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Ảnh không hiển thị | Copy URL vào tab mới check, hoặc thử Unsplash image |
| Nhạc không phát | Check file `/public/celebration.mp3` + click nút ♫ |
| Dev server lỗi | `Ctrl+C` → `npm run dev` |
| Component không update | Dev server auto-reload, wait 1-2s |
| Deploy fail | Xem Vercel logs: vercel.com → Logs |

---

## 📚 Tài Liệu Đầy Đủ

Xem các file này để biết chi tiết:
- **QUICK-START.md** - Hướng dẫn nhanh (5 phút)
- **README.md** - Tính năng + cách dùng
- **ADD-IMAGES-AND-MUSIC.md** - Cách thêm ảnh/nhạc (chi tiết)
- **DEPLOYMENT.md** - Hướng dẫn deploy Vercel (chi tiết)

---

## 💡 Tips

1. **Backup files** - Commit code vào Git sau mỗi lần chỉnh sửa
2. **Test responsive** - Kiểm tra trên mobile (F12 → Toggle device)
3. **Images tối ưu** - Dùng ảnh square, kích thước ~500x500px
4. **Nhạc background** - Chọn instrumental, không quá ồn
5. **Deploy early** - Không cần hoàn thiện 100% mới deploy!

---

## 🎓 Công Nghệ Sử Dụng

- **React 19** - UI framework
- **Vite 8** - Build tool (siêu nhanh!)
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Confetti** - Celebration effect
- **Vercel** - Hosting & auto-deploy

---

## 🚀 Bước Tiếp Theo

### Ngay Bây Giờ:
```bash
npm run dev
```

### Sau Đó:
1. Chỉnh sửa `src/data/messages.js` → thêm colleagues
2. Test locally → chạy hết → check responsive
3. Deploy lên Vercel → chia sẻ URL

### Tùy Chọn:
- Thay đổi màu theme
- Thêm đặc tính mới (VD: guestbook, countdown)
- Custom domain riêng

---

## ❓ Cần Giúp?

- **Lỗi build?** - Xem console error, google error message
- **Ảnh không load?** - Kiểm tra URL, thử link khác
- **Deploy fail?** - Xem Vercel logs page
- **Muốn tính năng mới?** - Xem docs Framer Motion, Tailwind, React

---

## 🎊 Thành Công!

Bạn đã tạo xong một **trang web kỷ niệm đẹp** với:
- ✅ Ảnh colleagues
- ✅ Lời chúc tạm biệt
- ✅ Animations mượt mà
- ✅ Responsive mobile
- ✅ Deploy live (Vercel)

**Chia sẻ link với đồng nghiệp bây giờ!** 🎉

---

**Happy coding! 💙💙💙**

Bắt đầu:
```bash
cd /Users/nhi/Học\ tập/cm1_11/tributary-page
npm run dev
```
