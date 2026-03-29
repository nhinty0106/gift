# ⚡ Quick Start Guide - Trang Kỷ Niệm

## 🎯 Các Bước Cơ Bản

### 1. Chạy trang web locally
```bash
cd /Users/nhi/Học\ tập/cm1_11/tributary-page
npm run dev
```
Mở: http://localhost:5174/

### 2. Thêm ảnh & thông điệp
Mở file: `src/data/messages.js`

Chỉnh sửa mảng `colleagueMessages` - thêm colleagues:
```javascript
{
  id: 7,
  name: "Tên người",
  position: "Vị trí (VD: Đồng nghiệp)",
  message: "Lời chúc tạm biệt",
  photoUrl: "Link ảnh từ Unsplash/Pexels",
  color: "from-blue-400 to-blue-600"
}
```

**Cách lấy ảnh URL:**
- Unsplash: https://unsplash.com/ → Copy image URL
- Pexels: https://www.pexels.com/ → Right click → Copy image link
- Google Drive: Upload ảnh → Right click → Get link → Chỉnh format

### 3. Thêm nhạc nền
Tải MP3 từ: https://pixabay.com/music/ (search "celebration")

Đặt file vào: `public/celebration.mp3`

App sẽ tự động load nhạc!

### 4. Tùy chỉnh tiêu đề
Trong `src/data/messages.js`, chỉnh sửa:
```javascript
export const siteConfig = {
  title: "Tiêu đề trang",
  subtitle: "Phụ đề",
  closing: "Lời kết"
}
```

---

## 🚀 Deploy lên Vercel (2 phút)

### Cách dễ nhất:
1. Push code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "First commit"
   git remote add origin https://github.com/YOU/tribute-page.git
   git push -u origin main
   ```

2. Truy cập https://vercel.com/import
3. Chọn GitHub repo
4. Click "Import" → "Deploy"

Done! Bạn có URL công khai: `https://your-app.vercel.app`

### Cập nhật sau deploy:
```bash
# Chỉnh sửa file -> save
git add .
git commit -m "Update messages"
git push

# Vercel auto-deploy! (10-30 giây)
```

---

## 🎨 Tùy Chỉnh Giao Diện

### Thay đổi màu
Mở components và thay `blue` → màu khác:
- `bg-blue-500` → `bg-green-500`, `bg-purple-500`, etc.
- `text-blue-600` → màu khác
- Gradient: `from-blue-400 to-cyan-600` → `from-purple-400 to-pink-600`

### Thay đổi font
Trong `index.css`, import Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

body { font-family: 'Playfair Display', serif; }
```

---

## 📱 File Quan Trọng

| File | Điều chỉnh |
|------|-----------|
| `src/data/messages.js` | ⭐️ **Ảnh, tin nhắn, tiêu đề** |
| `public/celebration.mp3` | 🎵 Nhạc nền |
| `src/components/Hero.jsx` | Header section |
| `src/components/PhotoCard.jsx` | Kiểu ảnh hover |
| `tailwind.config.js` | Màu sắc theme |

---

## ❓ FAQ

**Q: Ảnh không hiển thị**
A: 
- Kiểm tra URL có đúng không (copy vào tab mới)
- Thử ảnh từ Unsplash/Pexels (đã test OK)

**Q: Nhạc không phát**
A:
- Kiểm tra file `/public/celebration.mp3` tồn tại
- Click nút ♫ góc dưới phải
- Kiểm tra browser Allow audio

**Q: Thay đổi file nhưng dev server không update**
A:
- Save file → Dev server auto reload (HMR)
- Nếu chậm, restart: `Ctrl+C` → `npm run dev`

**Q: Deploy trên Vercel bị lỗi**
A:
- Xem logs: vercel.com → project → Logs
- Thường là lỗi missing images
- Fix local → `git push` → auto-redeploy

---

## 📚 Tài Liệu Chi Tiết

Xem các file này:
- `README.md` - Tính năng đầy đủ
- `ADD-IMAGES-AND-MUSIC.md` - Hướng dẫn chi tiết ảnh/nhạc
- `DEPLOYMENT.md` - Hướng dẫn deploy Vercel

---

## ✨ Ví Dụ Hoàn Chỉnh

### Step-by-step:

**1. Chỉnh sửa colleagues:**
```javascript
// src/data/messages.js
export const colleagueMessages = [
  {
    id: 1,
    name: "Nguyễn Thị Hương",
    position: "Trưởng phòng",
    message: "Cảm ơn bạn đã làm việc tuyệt vời! Chúc bạn thành công!",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    color: "from-blue-400 to-blue-600"
  },
  // ... thêm người khác
]
```

**2. Thêm nhạc:**
- Download từ Pixabay
- Đặt vào `public/celebration.mp3`

**3. Chạy local:**
```bash
npm run dev
```

**4. Deploy:**
```bash
git add .
git commit -m "Ready to deploy"
git push
# Vercel auto-deploy!
```

**5. Chia sẻ URL!** 🎉

---

## 🎓 Học Thêm

- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/
- Vite: https://vite.dev/
- React: https://react.dev/

---

**Bước tiếp theo?** Mở terminal và bắt đầu! 🚀

```bash
cd /Users/nhi/Học\ tập/cm1_11/tributary-page
npm run dev
```
