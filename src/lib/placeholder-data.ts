
import { PlaceHolderImages } from "./placeholder-images";
import type { Skill, Project, Resource, Experience, PersonalInfo } from "./types";

export const personalInfo: PersonalInfo = {
    fullName: "Thac Nguyen Dinh Vu",
    footerName: "Thac Nguyen Dinh Vu",
    title: "Freelancer Esports Media || Esports Event Operations Associate",
    fieldOfStudy: "Information Technology",
    dateOfBirth: "20/07/2003",
    email: "thacnguyendinhvu.esports@gmail.com",
    phone: "0964664117",
    phoneHref: "tel:+84964664117",
    address: "Hà Đông, Hà Nội",
};


export const skills: Skill[] = [
  { id: "1", name: "ADOBE PHOTOSHOP / ILLUSTRATOR / ...", level: 75, description: "Advanced proficiency in Adobe Creative Suite." },
  { id: "2", name: "GRAPHIC DESIGNER", level: 75, description: "Comprehensive skills in graphic design principles." },
  { id: "3", name: "WORKING GROUP", level: 60, description: "Experienced in collaborative team environments." },
  { id: "4", name: "OFFICE INFORMATION", level: 55, description: "Proficient with standard office software." },
];


export const projects: Project[] = [
  {
    id: "1",
    slug: "fpt-university-art-show-2024",
    name: "FPT UNIVERSITY ART SHOW 2024",
    category: "Art Direction",
    shortDescription: "Dự án thiết kế cho sự kiện Art Show 2024 của Đại học FPT.",
    description: "Dự án thiết kế cho sự kiện Art Show 2024 của Đại học FPT, bao gồm chỉ đạo nghệ thuật, xây dựng thương hiệu và minh họa. Sử dụng các yếu tố đồ họa và typography nổi bật để tạo ra một poster chính thức cho sự kiện.",
    designPrinciples: "Sử dụng các yếu tố đồ họa và typography nổi bật để tạo ra một poster chính thức cho sự kiện.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-fpt-art-show')?.imageUrl || '',
      alt: "Poster for FPT University Art Show 2024",
      aiHint: "event poster design",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "2",
    slug: "chop-con-lam-media-project",
    name: "CHOP CON LAM MEDIA PROJECT",
    category: "Branding",
    shortDescription: "Dự án thiết kế thương hiệu cho 'Chớp con làm Media'.",
    description: "Dự án thiết kế thương hiệu cho 'Chớp con làm Media', tập trung vào chỉ đạo nghệ thuật và thiết kế đồ họa. Logo và các ấn phẩm thương hiệu sử dụng tông màu đỏ và đen đặc trưng để tạo sự nổi bật.",
    designPrinciples: "Logo và các ấn phẩm thương hiệu sử dụng tông màu đỏ và đen đặc trưng để tạo sự nổi bật.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-chop-con-lam')?.imageUrl || '',
      alt: "Branding for Chop con lam Media",
      aiHint: "media branding red",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "3",
    slug: "fpt-flash-logo-redesign-concept",
    name: "FPT FLASH LOGO REDESIGN - CONCEPT",
    category: "Branding",
    shortDescription: "Ý tưởng thiết kế lại logo cho đội tuyển FPT Flash.",
    description: "Một concept thiết kế lại logo cho đội tuyển FPT Flash, kết hợp giữa xây dựng thương hiệu, thiết kế đồ họa và minh họa. Logo được thiết kế lại tập trung vào biểu tượng tia chớp hoặc linh vật để thể hiện tinh thần của đội.",
    designPrinciples: "Logo được thiết kế lại tập trung vào biểu tượng tia chớp hoặc linh vật để thể hiện tinh thần của đội.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-fpt-flash-logo')?.imageUrl || '',
      alt: "FPT Flash Logo Redesign",
      aiHint: "esports logo lightning",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "4",
    slug: "logo-folio",
    name: "LOGO FOLIO",
    category: "Branding",
    shortDescription: "Một bộ sưu tập các thiết kế logo (logo portfolio).",
    description: "Một bộ sưu tập các thiết kế logo đa dạng, thể hiện khả năng xây dựng thương hiệu và thiết kế đồ họa. Một lưới hiển thị nhiều mẫu logo khác nhau, thể hiện sự đa dạng trong phong cách thiết kế.",
    designPrinciples: "Một lưới hiển thị nhiều mẫu logo khác nhau, thể hiện sự đa dạng trong phong cách thiết kế.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-logo-folio')?.imageUrl || '',
      alt: "Logo Folio",
      aiHint: "logo collection grid",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "5",
    slug: "artwork-for-team-flash",
    name: "ARTWORK FOR TEAM FLASH",
    category: "Illustration",
    shortDescription: "Các tác phẩm artwork (minh họa, thiết kế) dành cho Team Flash.",
    description: "Các tác phẩm artwork dành cho Team Flash, bao gồm chỉ đạo nghệ thuật, thiết kế đồ họa và minh họa. Các tác phẩm minh họa và thiết kế đồ họa ấn tượng liên quan đến tuyển thủ hoặc thương hiệu Team Flash.",
    designPrinciples: "Các tác phẩm minh họa và thiết kế đồ họa ấn tượng liên quan đến tuyển thủ hoặc thương hiệu Team Flash.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-team-flash-artwork')?.imageUrl || '',
      alt: "Artwork for Team Flash",
      aiHint: "esports player illustration",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "6",
    slug: "poster-collection",
    name: "POSTER COLLECTION",
    category: "Graphic Design",
    shortDescription: "Bộ sưu tập các thiết kế poster.",
    description: "Một bộ sưu tập các thiết kế poster, thể hiện kỹ năng về xây dựng thương hiệu và thiết kế đồ họa. Một thiết kế poster nổi bật từ bộ sưu tập, thể hiện kỹ năng về bố cục và typography.",
    designPrinciples: "Một thiết kế poster nổi bật từ bộ sưu tập, thể hiện kỹ năng về bố cục và typography.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-poster-collection')?.imageUrl || '',
      alt: "Poster Collection",
      aiHint: "graphic design posters",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "7",
    slug: "project-quan-an-cua-me",
    name: "PROJECT. QUAN AN CUA ME",
    category: "Branding",
    shortDescription: "Dự án thiết kế cho 'Quán Ăn Của Mẹ'.",
    description: "Dự án thiết kế cho 'Quán Ăn Của Mẹ', tập trung vào xây dựng thương hiệu, thiết kế đồ họa và minh họa. Logo và bộ nhận diện thương hiệu mang phong cách gần gũi, truyền thống, phù hợp với một quán ăn gia đình.",
    designPrinciples: "Logo và bộ nhận diện thương hiệu mang phong cách gần gũi, truyền thống, phù hợp với một quán ăn gia đình.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-quan-an')?.imageUrl || '',
      alt: "Branding for Quan An Cua Me",
      aiHint: "restaurant logo traditional",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "8",
    slug: "landing-page-fpt-university",
    name: "Landing Page FPT University",
    category: "UI/UX",
    shortDescription: "Thiết kế Landing Page (trang đích) cho Đại học FPT.",
    description: "Thiết kế Landing Page cho Đại học FPT, tập trung vào UI/UX, thiết kế web và đồ họa. Giao diện trang web có bố cục và thiết kế UI/UX hiện đại, thu hút người dùng.",
    designPrinciples: "Giao diện trang web có bố cục và thiết kế UI/UX hiện đại, thu hút người dùng.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-fpt-landing-page')?.imageUrl || '',
      alt: "Landing Page for FPT University",
      aiHint: "university website design",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "9",
    slug: "ui-ux-for-web-game",
    name: "UI/UX FOR WEB GAME",
    category: "UI/UX",
    shortDescription: "Thiết kế giao diện người dùng và trải nghiệm người dùng (UI/UX) cho một Web Game.",
    description: "Thiết kế UI/UX cho một Web Game, kết hợp giữa thiết kế game, đồ họa và UI/UX. Các màn hình và thành phần giao diện được thiết kế để mang lại trải nghiệm người dùng tốt nhất cho người chơi.",
    designPrinciples: "Các màn hình và thành phần giao diện được thiết kế để mang lại trải nghiệm người dùng tốt nhất cho người chơi.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-web-game-ui')?.imageUrl || '',
      alt: "UI/UX for Web Game",
      aiHint: "game ui interface",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  },
  {
    id: "10",
    slug: "illustration-collection",
    name: "ILLUSTRATION",
    category: "Illustration",
    shortDescription: "Một dự án hoặc bộ sưu tập về minh họa.",
    description: "Một bộ sưu tập các tác phẩm minh họa, thể hiện kỹ năng chỉ đạo nghệ thuật và thiết kế đồ họa. Một tác phẩm minh họa kỹ thuật số chi tiết, thể hiện phong cách vẽ cá nhân.",
    designPrinciples: "Một tác phẩm minh họa kỹ thuật số chi tiết, thể hiện phong cách vẽ cá nhân.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-illustration-collection')?.imageUrl || '',
      alt: "Illustration Collection",
      aiHint: "digital art detailed",
    },
    year: 2024,
    behanceUrl: "https://www.behance.net/TNDVKenn",
  }
];


export const resources: Resource[] = [
    {
      id: "1",
      category: "Nguồn website tham khảo",
      title: "Behance",
      description: "Showcase and discover the latest work from top creatives.",
      url: "https://www.behance.net/",
    },
    {
      id: "2",
      category: "Nguồn website tham khảo",
      title: "Dribbble",
      description: "A community for creatives to share their work.",
      url: "https://dribbble.com/",
    },
    {
      id: "3",
      category: "Nguồn website tham khảo",
      title: "Awwwards",
      description: "The best of web design and development.",
      url: "https://www.awwwards.com/",
    },
    {
      id: "4",
      category: "Link Drive sưu tầm",
      title: "My Collected Resources",
      description: "A personal collection of design assets and inspiration.",
      url: "#",
    },
    {
      id: "5",
      category: "Link driver design community",
      title: "Community Design Drive",
      description: "Shared resources from the design community.",
      url: "#",
    },
    {
      id: "6",
      category: "Link drive cho editor",
      title: "Editor's Asset Drive",
      description: "A collection of assets for video and photo editors.",
      url: "#",
    },
];


export const experiences: Experience[] = [
    {
      id: "1",
      title: {
        vi: "Graphics Designer",
        en: "Graphics Designer"
      },
      organization: "PHENIKAA ESPORTS CLUB",
      date: "10/2021 — nay",
      description: {
        vi: "Thiết kế chính - Đảm nhiệm việc thiết kế và quản lý hầu hết các sản phẩm truyền thông của tổ chức. Chịu trách nhiệm về việc thiết kế và sản xuất các tài liệu truyền thông cho câu lạc bộ, như poster, banner, bài đăng trên mạng xã hội, backdrop, standee, v.v. Bảo đảm tính đồng nhất và liên kết trong thiết kế cho các sự kiện & giải đấu, đóng góp vào việc nâng cao nhận diện thương hiệu và hiệu quả trong truyền thông.",
        en: "Lead Designer - Responsible for designing and managing most of the organization's media products. In charge of designing and producing media materials for the club, such as posters, banners, social media posts, backdrops, standees, etc. Ensuring consistency and cohesion in design for events & tournaments, contributing to enhancing brand identity and communication effectiveness."
      },
    },
    {
      id: "2",
      title: {
        vi: "Graphic Designer",
        en: "Graphic Designer"
      },
      organization: "HỘI SINH VIÊN BẮC GIANG TẠI HÀ NỘI",
      date: "10/2023 — 12/2024",
      description: {
        vi: "Thành viên của Hội Truyền Thông chịu trách nhiệm thiết kế các sản phẩm truyền thông cho câu lạc bộ trên các mạng xã hội. Sáng tạo và thiết kế các ấn phẩm như bài đăng, poster, banner, video, để thu hút và nâng cao mức độ tương tác trên các nền tảng mạng xã hội. Đảm bảo sự nhất quán của hình ảnh của Hội, góp phần cải thiện hiệu quả truyền thông và nhận diện của Hội Sinh Viên.",
        en: "Member of the Media Association responsible for designing media products for the club on social networks. Creating and designing publications such as posts, posters, banners, videos, to attract and increase engagement on social media platforms. Ensuring the consistency of the Association's image, contributing to improving communication effectiveness and the identity of the Student Association."
      },
    },
    {
      id: "3",
      title: {
        vi: "CTV Designer",
        en: "Collaborator Designer"
      },
      organization: "FLAZER THUỘC TEAM FLASH VIETNAM",
      date: "10/2023 — Nay",
      description: {
        vi: "Cộng tác viên Thiết kế (Designer) - Chịu trách nhiệm về việc tạo ra các sản phẩm truyền thông cho cộng đồng Flazer (Người hâm mộ Team Flash Esports Việt Nam). Tạo ra và phát triển các ấn phẩm truyền thông như poster, banner, bài đăng trên các trang mạng xã hội, ảnh bìa, video,... đảm bảo tính phù hợp với từng chiến dịch của cộng đồng. Sử dụng thông thạo các phần mềm: Adobe Photoshop, Illustrator, After Effects, Canva,... để sản xuất các sản phẩm chất lượng, sáng tạo và hấp dẫn. Thành tựu đã đạt được: Các sản phẩm thiết kế thu hút được số lượng tương tác cao trên các nền tảng mạng xã hội. Góp phần nâng cao giá trị hình ảnh thương hiệu và kết nối cộng đồng người hâm mộ Team Flash.",
        en: "Collaborator Designer - Responsible for creating media products for the Flazer community (fans of Team Flash Esports Vietnam). Creating and developing media publications such as posters, banners, posts on social media pages, cover photos, videos,... ensuring appropriateness for each community campaign. Proficient in using software: Adobe Photoshop, Illustrator, After Effects, Canva,... to produce high-quality, creative, and engaging products. Achievements: Designed products that attracted high engagement on social media platforms. Contributed to enhancing the brand's image value and connecting the Team Flash fan community."
      },
    },
    {
      id: "4",
      title: {
        vi: "TTS Marketing",
        en: "Marketing Intern"
      },
      organization: "NECTECH CORPORATE DIGITAL TRANSFORMATION",
      date: "01/2025 — 04/2025",
      description: {
        vi: "Thực tập sinh trong lĩnh vực SEO Marketing / Social Media - Đảm nhiệm việc theo dõi và cập nhật thông tin trên các nền tảng mạng xã hội của công ty công nghệ Việt Nam tại Nhật Bản. Chịu trách nhiệm quản lý nội dung và tối ưu hóa SEO cho các bài viết trên Facebook, Website,... với mục tiêu nâng cao khả năng tiếp cận và tương tác. Làm quen với các công cụ như: Google Analytics, Google Search Console, Meta Business Suite,... để đánh giá hiệu suất của nội dung.",
        en: "Intern in SEO Marketing / Social Media - Responsible for monitoring and updating information on the social media platforms of a Vietnamese technology company in Japan. In charge of content management and SEO optimization for posts on Facebook, Website,... aiming to enhance reach and interaction. Familiar with tools such as Google Analytics, Google Search Console, Meta Business Suite,... to evaluate content performance."
      },
    },
];
