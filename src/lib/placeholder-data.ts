
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
      organization: {
        vi: "CLB Thể thao Điện tử Đại học Phenikaa",
        en: "PHENIKAA ESPORTS CLUB"
      },
      date: "10/2021 — nay",
      description: {
        vi: "Thiết kế và quản lý các sản phẩm truyền thông cho CLB, đảm bảo nhận diện thương hiệu cho các sự kiện và giải đấu.",
        en: "Designed and managed media products for the club, ensuring brand identity for events and tournaments."
      },
    },
    {
      id: "2",
      title: {
        vi: "Graphic Designer",
        en: "Graphic Designer"
      },
      organization: {
        vi: "HỘI SINH VIÊN BẮC GIANG TẠI HÀ NỘI",
        en: "BAC GIANG STUDENTS ASSOCIATION IN HANOI"
      },
      date: "10/2023 — 12/2024",
      description: {
        vi: "Thiết kế các ấn phẩm truyền thông (bài đăng, poster, banner) cho các hoạt động của hội trên mạng xã hội.",
        en: "Designed media publications (posts, posters, banners) for the association's activities on social media."
      },
    },
    {
      id: "3",
      title: {
        vi: "CTV Designer",
        en: "Collaborator Designer"
      },
      organization: {
        vi: "FLAZER THUỘC TEAM FLASH VIETNAM",
        en: "FLAZER (UNDER TEAM FLASH VIETNAM)"
      },
      date: "10/2023 — Nay",
      description: {
        vi: "Tạo các sản phẩm truyền thông cho cộng đồng người hâm mộ Team Flash, góp phần nâng cao hình ảnh thương hiệu.",
        en: "Created media products for the Team Flash fan community, contributing to enhancing the brand image."
      },
    },
    {
      id: "4",
      title: {
        vi: "Cộng tác viên Media",
        en: "Media Collaborator"
      },
      organization: {
        vi: "NECTECH",
        en: "NECTECH"
      },
      date: "04/2024 — Nay",
      description: {
        vi: "Sản xuất video ngắn và quản lý các kênh mạng xã hội, phát triển nội dung sáng tạo để thu hút người xem.",
        en: "Produced short videos and managed social media channels, developing creative content to engage viewers."
      },
    },
    {
      id: "5",
      title: {
        vi: "Admin & Media Esports",
        en: "Admin & Esports Media"
      },
      organization: {
        vi: 'Kênh Tiktok "Chớp con bận làm MEDIA."',
        en: 'Tiktok Channel "Chớp con bận làm MEDIA."'
      },
      date: "05/2024 — Nay",
      description: {
        vi: "Quản trị và sản xuất nội dung media về Esports, xây dựng và phát triển cộng đồng trên nền tảng Tiktok.",
        en: "Administered and produced Esports media content, building and developing the community on the Tiktok platform."
      },
    },
    {
      id: "6",
      title: {
        vi: "CTV Vận hành sự kiện",
        en: "Event Operations Collaborator"
      },
      organization: {
        vi: "FLAZER THUỘC TEAM FLASH VIETNAM",
        en: "FLAZER (UNDER TEAM FLASH VIETNAM)"
      },
      date: "07/2024 — Nay",
      description: {
        vi: "Hỗ trợ vận hành các sự kiện và giải đấu, giám sát và đảm bảo quy trình diễn ra suôn sẻ, chuyên nghiệp.",
        en: "Assisted in operating events and tournaments, monitoring and ensuring a smooth and professional process."
      },
    }
];



