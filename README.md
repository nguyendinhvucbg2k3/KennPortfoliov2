
# KENN - Digital Portfolio

Chào mừng bạn đến với mã nguồn của portfolio cá nhân **KENN** — một không gian kỹ thuật số được thiết kế để trưng bày các tác phẩm và hoạt động trong lĩnh vực Thiết kế đồ họa và Esports. Dự án này không chỉ là một trang web tĩnh, mà là một sản phẩm được xây dựng với kiến trúc hiện đại, dễ dàng tùy chỉnh và mang đậm dấu ấn thẩm mỹ "Neon Garden".

---

## ✨ Tính năng nổi bật

- **Thiết kế "Neon Garden" độc đáo**: Giao diện kết hợp giữa tone màu tối sâu, các chi tiết neon rực rỡ (màu đỏ chủ đạo) và hiệu ứng phát sáng, tạo ra một không gian tương lai và đầy năng lượng.
- **Hỗ trợ song ngữ (Tiếng Việt/Tiếng Anh)**: Người dùng có thể dễ dàng chuyển đổi ngôn ngữ, giúp portfolio tiếp cận đối tượng quốc tế.
- **Linh vật "Rồng cuộn trang"**: Một thanh cuộn được cách điệu thành hình một con rồng SVG uốn lượn, tự "vẽ" mình khi người dùng cuộn trang, tạo ra một trải nghiệm độc đáo.
- **Hiệu ứng chuyển động tinh tế**: Sử dụng **Framer Motion** để tạo ra các hiệu ứng chuyển động mượt mà khi tải trang, tương tác với các phần tử, và hiệu ứng nền "Liquid Flow" sống động.
- **Quản lý nội dung tập trung**: Toàn bộ thông tin cá nhân, dự án, kỹ năng, hoạt động và tài nguyên đều được quản lý trong các tệp dữ liệu riêng biệt, giúp việc cập nhật trở nên dễ dàng mà không cần can thiệp vào mã nguồn.
- **Responsive hoàn toàn**: Giao diện được tối ưu hóa để hiển thị đẹp mắt trên mọi thiết bị, từ máy tính để bàn đến điện thoại di động.

---

## 🚀 Công nghệ & Kiến trúc

Dự án được xây dựng với một stack công nghệ hiện đại, tập trung vào hiệu suất và trải nghiệm phát triển.

- **Framework:** **Next.js 14** (App Router) - Tận dụng sức mạnh của Server Components để tối ưu hiệu suất tải trang.
- **Ngôn ngữ:** **TypeScript** - Đảm bảo mã nguồn chặt chẽ, an toàn và dễ bảo trì.
- **Thư viện UI:** **React** - Nền tảng xây dựng giao diện người dùng linh hoạt.
- **Styling:**
    - **Tailwind CSS**: Sử dụng các lớp utility để tạo giao diện nhanh chóng và nhất quán.
    - **Shadcn/ui**: Một bộ sưu tập các component React được xây dựng sẵn, đẹp mắt và dễ tùy chỉnh. Toàn bộ màu sắc (primary, background, accent...) được quản lý thông qua biến CSS trong `globals.css`.
- **Animation:** **Framer Motion** - Thư viện mạnh mẽ để tạo ra các hiệu ứng chuyển động phức tạp và mượt mà.
- **Icons:** **Lucide React** - Thư viện icon stroke-based gọn nhẹ và đồng bộ.

---

## 🔧 Hướng dẫn tùy chỉnh và chạy dự án

### Cấu trúc quản lý nội dung

Hầu hết nội dung trên trang web có thể được cập nhật dễ dàng bằng cách chỉnh sửa các tệp sau trong thư mục `src/lib/`:

1.  **Nội dung giao diện song ngữ (`content.ts`)**:
    - **Tệp**: `src/lib/content.ts`
    - **Mục đích**: Quản lý các chuỗi văn bản tĩnh trên giao diện (tiêu đề, nhãn nút, mô tả ngắn...). Thay đổi nội dung trong các đối tượng `vi` và `en` tại đây.

2.  **Dữ liệu chính (`placeholder-data.ts`)**:
    - **Tệp**: `src/lib/placeholder-data.ts`
    - **Mục đích**: Quản lý dữ liệu lõi của portfolio.
        - `personalInfo`: Thông tin cá nhân (tên, chức danh, email, SĐT...).
        - `skills`: Danh sách các kỹ năng và mức độ thành thạo.
        - `experiences`: Danh sách các hoạt động, công việc (đã được cấu trúc song ngữ).
        - `projects`: Danh sách các dự án portfolio.
        - `resources`: Các tài nguyên, liên kết hữu ích.

3.  **Quản lý hình ảnh (`placeholder-images.json`)**:
    - **Tệp**: `src/lib/placeholder-images.json`
    - **Mục đích**: Quản lý tập trung tất cả các URL hình ảnh được sử dụng trong dự án. Để thay đổi một hình ảnh, bạn chỉ cần cập nhật `imageUrl` trong tệp này.

4.  **Liên kết mạng xã hội**:
    - **Footer**: `src/components/layout/Footer.tsx`
    - **Trang liên hệ**: `src/app/contact/page.tsx`
    - **Nút liên hệ nhanh (Quick Contact)**: `src/components/layout/QuickContact.tsx`

> **Lưu ý**: Các tệp hướng dẫn chi tiết cho từng mục được đặt trong thư mục `docs/huong-dan/`.

### Chạy dự án trên máy tính

1.  **Cài đặt các gói phụ thuộc:**
    ```bash
    npm install
    ```

2.  **Khởi động máy chủ phát triển:**
    ```bash
    npm run dev
    ```

3.  Mở trình duyệt và truy cập vào [http://localhost:9002](http://localhost:9002) để xem trang web.
