# 🚀 Hướng Dẫn Deploy lên Vercel

## Option 1: Deploy bằng GitHub + Vercel (Recommended - Auto Deploy)

Cách này, mỗi khi bạn push code lên GitHub, Vercel tự động rebuild và deploy.

### Step 1: Khởi tạo Git repo

```bash
cd /Users/nhi/Học\ tập/cm1_11/tributary-page

# Khởi tạo git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit - Commemorative Tribute Page"

# Đặt tên branch thành main
git branch -M main
```

### Step 2: Tạo repo GitHub

1. Truy cập https://github.com/new
2. Đăng nhập (nếu chưa có account, tạo mới)
3. Đặt tên repo: `tribute-page` (hoặc tên khác)
4. Chọn "Public" (để Vercel có thể access)
5. Click "Create repository"

### Step 3: Push code lên GitHub

Sau khi tạo repo, GitHub sẽ hiển thị lệnh:

```bash
git remote add origin https://github.com/YOUR_USERNAME/tribute-page.git
git branch -M main
git push -u origin main
```

Chạy 3 lệnh này trong terminal.

### Step 4: Connect GitHub to Vercel

1. Truy cập https://vercel.com
2. Đăng nhập/Tạo account (dùng GitHub để dễ)
3. Click "Import Project"
4. Select "GitHub"
5. Chọn repository `tribute-page` từ danh sách
6. Click "Import"

### Step 5: Configure Vercel

Vercel sẽ auto-detect:
- **Framework**: React
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

Thường không cần chỉnh sửa, click "Deploy"

### Step 6: Done! 🎉

Sau ~2-3 phút:
- Vercel sẽ build project
- Cấp cho bạn URL công khai: `https://your-project-name.vercel.app`
- Chia sẻ link này với mọi người!

---

## Auto-Deploy trên cập nhật

Từ giờ, mỗi khi bạn:
1. Chỉnh sửa file local
2. Commit: `git commit -m "Update messages"`
3. Push: `git push`

→ Vercel tự động rebuild & deploy trong vài giây!

---

## Option 2: Deploy bằng Vercel CLI (Nhanh)

Nếu không muốn dùng GitHub, có thể deploy trực tiếp:

```bash
# Cài đặt vercel CLI
npm i -g vercel

# Deploy
cd /Users/nhi/Học\ tập/cm1_11/tributary-page
vercel
```

Làm theo hướng dẫn trên terminal.

---

## Option 3: Deploy Manual trên Vercel (Khó nhất)

1. Build project: `npm run build`
2. Upload thư mục `dist/` lên Vercel
3. (Không khuyến khích - auto-deploy tốt hơn)

---

## Kiểm Tra Live Site

### Sau khi deploy:
1. Truy cập URL Vercel cấp cho bạn
2. Kiểm tra:
   - ✅ Hero section hiển thị đúng
   - ✅ Ảnh colleagues tải được
   - ✅ Hover vào ảnh → tin nhắn hiện ra
   - ✅ Scroll animations hoạt động
   - ✅ Nút music (♫) góc dưới phải
   - ✅ Responsive trên mobile

### Nếu có lỗi:
1. Kiểm tra Vercel logs: Vào project trên vercel.com → "Logs"
2. Thường là lỗi missing images hoặc CSS
3. Fix trên GitHub → auto-deploy lại

---

## Cập Nhật Content (Thêm ảnh/tin nhắn)

### Sau khi deploy:

1. **Local:** Chỉnh sửa `src/data/messages.js`
   ```javascript
   {
     id: 7,
     name: "Tên người mới",
     message: "Tin nhắn mới",
     photoUrl: "URL ảnh mới",
     position: "Vị trí"
   }
   ```

2. **Commit & Push:**
   ```bash
   git add src/data/messages.js
   git commit -m "Add new colleague"
   git push
   ```

3. **Vercel auto-deploy** → Live update trong 10-30 giây!

---

## Custom Domain (Tùy chọn)

Muốn dùng domain riêng thay vì `vercel.app`?

1. Trên Vercel project → Settings → Domains
2. Add domain riêng của bạn
3. Config DNS (hướng dẫn trên Vercel)

Ví dụ: `/`` thay vì `your-project.vercel.app`

---

## Vercel Features

- **Auto-scaling** - Tự động xử lý traffic
- **CDN Global** - Tải nhanh từ mọi quốc gia
- **HTTPS** - Bảo mật miễn phí
- **Analytics** - Xem số lượt truy cập
- **Edge Functions** - API endpoints (nếu cần)

---

## Troubleshooting Deploy

### "Build failed"
✅ Kiểm tra `npm run build` local chạy được không
✅ Xem Vercel logs để xem lỗi chính xác

### "Images not loading"
✅ Kiểm tra URL ảnh có đúng không
✅ Thử ảnh từ Unsplash (đã test OK)

### "Music không phát"
✅ Kiểm tra `/public/celebration.mp3` tồn tại
✅ Thử click nút music

---

## Chia Sẻ Trang

Sau deploy, chia sẻ link với mọi người:

**Email/Slack:**
```
Mình vừa làm trang kỷ niệm cho bạn [tên]!
Xem tại: https://your-project.vercel.app

Trang có ảnh các bạn cùng phòng + lời chúc để tạm biệt 💙
```

**QR Code:** (Optional)
- Truy cập https://qr-code-generator.com
- Paste URL Vercel
- Download QR code, in ra hoặc share

---

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Status: https://vercel.status.page/
- Contact: support@vercel.com

---

**Chúc bạn deploy thành công!** 🎉
