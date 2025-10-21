# Portfolio Cá Nhân - KENN

Đây là dự án portfolio cá nhân được xây dựng trên nền tảng Next.js, được thiết kế để dễ dàng tùy chỉnh và quản lý nội dung.

## Công nghệ sử dụng

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Thư viện UI:** [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Hướng dẫn tùy chỉnh nội dung

Hầu hết nội dung trên trang web có thể được quản lý tập trung tại một vài tệp chính. Điều này giúp bạn dễ dàng cập nhật thông tin mà không cần phải can thiệp sâu vào mã nguồn của từng trang.

### 1. Nội dung Đa ngôn ngữ (Tiếng Việt/Tiếng Anh)

Các văn bản tĩnh trên giao diện (như tiêu đề trang, nhãn nút bấm, các đoạn văn giới thiệu...) được quản lý trong tệp:
`src/lib/content.ts`

Bạn có thể chỉnh sửa nội dung cho cả hai ngôn ngữ (`vi` và `en`) tại đây. Khi người dùng chuyển đổi ngôn ngữ, nội dung sẽ được tự động cập nhật.

```javascript
export const content = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      // ...
    },
    // ...
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      // ...
    },
    // ...
  },
};
```

### 2. Dữ liệu chính (Thông tin cá nhân, Kỹ năng, Kinh nghiệm, Dự án, Tài nguyên)

Tất cả các dữ liệu lõi này được quản lý trong tệp:
`src/lib/placeholder-data.ts`

Bạn chỉ cần mở tệp này và chỉnh sửa các đối tượng và mảng dữ liệu tương ứng. Dữ liệu này được viết bằng một ngôn ngữ (tiếng Anh) và sẽ được hiển thị trên cả hai phiên bản ngôn ngữ của trang web.

#### a. Thông tin cá nhân (`personalInfo`)

Thay đổi tên, chức danh, email, số điện thoại, v.v.

```javascript
export const personalInfo: PersonalInfo = {
    fullName: "Tên đầy đủ của bạn",
    footerName: "Tên hiển thị ở chân trang",
    title: "Chức danh của bạn",
    fieldOfStudy: "Ngành học",
    dateOfBirth: "Ngày/Tháng/Năm sinh",
    email: "email@example.com",
    phone: "0123456789",
    phoneHref: "tel:+84123456789",
    address: "Địa chỉ của bạn",
};
```

#### b. Kỹ năng (`skills`)

Thêm, sửa, hoặc xóa các kỹ năng. `level` là một số từ 0 đến 100 để hiển thị trên thanh tiến trình.

```javascript
export const skills: Skill[] = [
  { 
    id: "1", 
    name: "ADOBE PHOTOSHOP / ILLUSTRATOR", 
    level: 75, 
    description: "Mô tả ngắn về kỹ năng." 
  },
  // ... thêm các kỹ năng khác
];
```

#### c. Kinh nghiệm làm việc (`experiences`)

Liệt kê các vị trí công việc của bạn.

```javascript
export const experiences: Experience[] = [
    {
      id: "1",
      title: "LEADER DESIGNER",
      organization: "Tên công ty/tổ chức",
      date: "Tháng/Năm — Tháng/Năm",
      description: "Mô tả công việc và trách nhiệm.",
    },
    // ... thêm các kinh nghiệm khác
];
```

#### d. Dự án (`projects`)

Quản lý các dự án trong portfolio của bạn.

- `slug`: Chuỗi định danh duy nhất cho URL (ví dụ: `ten-du-an-moi`).
- `image.src`: Lấy URL từ tệp `placeholder-images.json` (xem mục 3).

```javascript
export const projects: Project[] = [
  {
    id: "1",
    slug: "fpt-university-art-show-2024",
    name: "FPT UNIVERSITY ART SHOW 2024",
    category: "Art Direction",
    shortDescription: "Mô tả ngắn gọn hiển thị ở danh sách dự án.",
    description: "Mô tả chi tiết hiển thị ở trang chi tiết dự án.",
    designPrinciples: "Nguyên tắc, ý tưởng thiết kế chính.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-fpt-art-show')?.imageUrl || '',
      alt: "Mô tả hình ảnh (quan trọng cho SEO)",
      aiHint: "goi-y-cho-ai-de-tim-anh"
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/your-project-link",
  },
  // ... thêm các dự án khác
];
```

#### e. Tài nguyên (`resources`)

Chia sẻ các công cụ, trang web, hoặc liên kết hữu ích. Các tài nguyên sẽ được tự động nhóm theo `category`.

```javascript
export const resources: Resource[] = [
    {
      id: "1",
      category: "Nguồn website tham khảo",
      title: "Behance",
      description: "Mô tả ngắn về tài nguyên.",
      url: "https://www.behance.net/",
    },
    // ... thêm các tài nguyên khác
];
```

### 3. Quản lý Hình ảnh

Tất cả hình ảnh được quản lý trong tệp:
`src/lib/placeholder-images.json`

Để thay đổi hoặc thêm ảnh mới:
1.  Thêm một đối tượng mới vào mảng `placeholderImages` trong tệp này.
2.  Cung cấp `id` duy nhất, `description` (mô tả), `imageUrl` (đường dẫn ảnh), và `imageHint` (gợi ý cho AI).
3.  Cập nhật `id` của ảnh trong tệp `placeholder-data.ts` (ví dụ: trong mảng `projects`).

```json
{
  "placeholderImages": [
    {
      "id": "hero-background",
      "description": "Mô tả về ảnh.",
      "imageUrl": "https://images.unsplash.com/your-image-url",
      "imageHint": "goi y cho AI"
    },
    // ...
  ]
}
```

### 4. Liên kết mạng xã hội

Các liên kết mạng xã hội được đặt ở ba nơi:
- **Chân trang (Footer):** Mở tệp `src/components/layout/Footer.tsx` và cập nhật các đường dẫn `href`.
- **Trang liên hệ (Contact Page):** Mở tệp `src/app/contact/page.tsx` và cập nhật các đường dẫn `href`.
- **Nút liên hệ nhanh:** Mở tệp `src/components/layout/QuickContact.tsx` và cập nhật các liên kết.

---

## Hướng dẫn chạy dự án trên máy tính

Để chạy dự án trên máy tính của bạn, hãy làm theo các bước sau:

1.  **Cài đặt các gói phụ thuộc:**
    Mở terminal và chạy lệnh:
    ```bash
    npm install
    ```

2.  **Khởi động máy chủ phát triển:**
    Sau khi cài đặt xong, chạy lệnh:
    ```bash
    npm run dev
    ```

3.  Mở trình duyệt và truy cập vào [http://localhost:9002](http://localhost:9002) để xem trang web.

Trang web sẽ tự động tải lại mỗi khi bạn thực hiện thay đổi trong mã nguồn.
