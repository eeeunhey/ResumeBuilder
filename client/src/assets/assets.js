import dummy_profile from './dummy_profile.png'

export const dummyResumeData = [
  {
    // ----------------------------------------------------- Resume 1 ------------------------------------------------------
    personal_info: {
      full_name: "김도현",
      email: "alex@example.com",
      phone: "010-1234-5678",
      location: "서울, 대한민국",
      linkedin: "https://www.linkedin.com",
      website: "https://www.example.com",
      profession: "풀스택 개발자",
      image: dummy_profile
    },
    _id: "68d2a31a1c4dd38875bb037e",
    userId: "68c180acdf1775dfd02c6d87",
    title: "김도현 이력서",
    public: true,
    professional_summary:
      "6년간 SQL, Python, 시각화 도구를 활용하여 복잡한 데이터를 실용적인 인사이트로 전환해온 데이터 기반 풀스택 개발자입니다.",
    skills: [
      "JavaScript",
      "React.js",
      "Full Stack Development",
      "Git",
      "GitHub",
      "Next.js",
      "Express",
      "Node.js",
      "TypeScript"
    ],
    experience: [
      {
        company: "Example Technologies",
        position: "시니어 풀스택 개발자",
        start_date: "2023-06",
        end_date: "Present",
        description:
          "백엔드 아키텍처 설계와 프론트엔드 UI 개발을 포함한 핵심 웹서비스 구축을 주도했습니다. 확장성과 안정성을 고려한 시스템을 설계하고 구현했습니다.",
        is_current: true,
        _id: "68d2a31a1c4dd38875bb037f"
      },
      {
        company: "Example Technologies",
        position: "풀스택 개발자",
        start_date: "2019-08",
        end_date: "2023-05",
        description:
          "사용자 요구사항 분석 후 프론트엔드와 백엔드 전반의 기능을 개발하며 효율적인 웹 서비스를 구축했습니다.",
        is_current: false,
        _id: "68d4f7abc8f0d46dc8a8b114"
      }
    ],
    education: [
      {
        institution: "한국 IT 공과대학",
        degree: "공학 학사",
        field: "컴퓨터공학",
        graduation_date: "2023-05",
        gpa: "4.3/4.5",
        _id: "68d2a31a1c4dd38875bb0380"
      },
      {
        institution: "서울 공립고등학교",
        degree: "고등학교 졸업",
        field: "이과",
        graduation_date: "2019-03",
        gpa: "",
        _id: "68d2a31a1c4dd38875bb0381"
      },
      {
        institution: "서울중학교",
        degree: "중학교 졸업",
        field: "",
        graduation_date: "2017-03",
        gpa: "",
        _id: "68d2a31a1c4dd38875bb0382"
      }
    ],
    template: "minimal-image",
    accent_color: "#14B8A6",
    project: [
      {
        name: "팀 협업 기반 업무 관리 시스템",
        type: "웹 애플리케이션 (생산성 도구)",
        description:
          "팀원 간 실시간 태스크 생성·배정·진행 상황을 조회할 수 있는 협업 중심 업무 관리 시스템입니다.",
        _id: "68d4f882c8f0d46dc8a8b139"
      },
      {
        name: "EduHub 온라인 학습 플랫폼",
        type: "웹 애플리케이션 (교육 플랫폼)",
        description:
          "강의·퀴즈·자료 제공 기능을 갖춘 온라인 교육 플랫폼으로 학습자 경험을 강화했습니다.",
        _id: "68d4f89dc8f0d46dc8a8b147"
      }
    ],
    updatedAt: "2025-09-23T13:39:38.395Z",
    createdAt: "2025-09-23T13:39:38.395Z"
  },

  // ----------------------------------------------------- Resume 2 ------------------------------------------------------
  {
    personal_info: {
      full_name: "이서준",
      email: "jordan.lee@example.com",
      phone: "010-9876-5432",
      location: "부산, 대한민국",
      linkedin: "https://www.linkedin.com/in/jordanlee",
      website: "https://www.jordanlee.dev",
      profession: "프론트엔드 엔지니어",
      image: dummy_profile
    },
    _id: "78e3b42c2d5ff49286cc148f",
    userId: "78d2e0bdcf2886efg03e7e98",
    title: "이서준 이력서",
    public: true,
    professional_summary:
      "React·Vue 기반의 UI 개발에 강점을 가진 프론트엔드 엔지니어로, 디자인 시스템 구축과 웹 접근성 개선 프로젝트를 주도한 경험이 있습니다.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vue.js",
      "SASS",
      "Tailwind CSS",
      "Figma",
      "Web Accessibility",
      "REST APIs"
    ],
    experience: [
      {
        company: "TechSpark Inc.",
        position: "리드 프론트엔드 엔지니어",
        start_date: "2022-02",
        end_date: "Present",
        description:
          "프론트엔드 팀을 리딩하며 디자인 시스템 구축, 공통 컴포넌트 아키텍처 설계, UI 성능 최적화 프로젝트를 수행했습니다.",
        is_current: true,
        _id: "78e3b42c2d5ff49286cc1490"
      },
      {
        company: "PixelForge Labs",
        position: "프론트엔드 개발자",
        start_date: "2018-09",
        end_date: "2022-01",
        description:
          "React·Vue.js 기반 UI 컴포넌트 개발, REST API 연동, SPA 성능 최적화를 담당했습니다.",
        is_current: false,
        _id: "78e3b42c2d5ff49286cc1491"
      }
    ],
    education: [
      {
        institution: "디지털 아트 대학",
        degree: "컴퓨터과학 학사",
        field: "Computer Science",
        graduation_date: "2018-06",
        gpa: "3.8/4.0",
        _id: "78e3b42c2d5ff49286cc1492"
      },
      {
        institution: "부산 중앙고등학교",
        degree: "고등학교 졸업",
        field: "이과",
        graduation_date: "2014-05",
        gpa: "",
        _id: "78e3b42c2d5ff49286cc1493"
      }
    ],
    template: "minimal-image",
    accent_color: "#6366F1",
    project: [
      {
        name: "FitTrack - 피트니스 대시보드",
        type: "웹 애플리케이션 (헬스/피트니스)",
        description:
          "운동 기록, 진행률, 통계를 시각화해 사용자가 자신의 운동 패턴을 한눈에 볼 수 있도록 한 분석 대시보드입니다.",
        _id: "78e3b42c2d5ff49286cc1494"
      },
      {
        name: "ShopEase - 이커머스 UI 키트",
        type: "프론트엔드 UI 키트",
        description:
          "상품 리스트·장바구니·반응형 메뉴 등 기본 기능을 포함한 모듈형 전자상거래 UI 템플릿입니다.",
        _id: "78e3b42c2d5ff49286cc1495"
      }
    ],
    updatedAt: "2025-09-25T15:10:21.184Z",
    createdAt: "2025-09-25T15:10:21.184Z"
  },

  // ----------------------------------------------------- Resume 3 ------------------------------------------------------
  {
    personal_info: {
      full_name: "박진우",
      email: "riley.morgan@example.com",
      phone: "010-1122-3344",
      location: "대구, 대한민국",
      linkedin: "https://www.linkedin.com/in/rileymorgan",
      website: "https://www.rileym.dev",
      profession: "백엔드 개발자",
      image: dummy_profile
    },
    _id: "89f4c53d3e6gg59397dd259g",
    userId: "89e3f1cedg3997fgh14f8f09",
    title: "박진우 이력서",
    public: true,
    professional_summary:
      "Node.js·Python 기반 API 개발 및 마이크로서비스 아키텍처 구축 경험을 보유한 백엔드 개발자로, CI/CD 자동화 및 시스템 성능 개선에 강점을 가지고 있습니다.",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Redis",
      "GraphQL",
      "AWS"
    ],
    experience: [
      {
        company: "DataNest Solutions",
        position: "시니어 백엔드 엔지니어",
        start_date: "2021-03",
        end_date: "Present",
        description:
          "Node.js 기반 마이크로서비스 설계 및 개발, Redis 기반 인증·레이트 리밋팅 시스템 구축, Docker 기반 배포 환경 개선을 담당했습니다.",
        is_current: true,
        _id: "89f4c53d3e6gg59397dd259h"
      },
      {
        company: "CloudCore Systems",
        position: "백엔드 개발자",
        start_date: "2016-07",
        end_date: "2021-02",
        description:
          "Python·PostgreSQL 기반 백엔드 시스템 유지보수 및 성능 개선, GitLab CI/CD 도입을 통해 배포 프로세스를 자동화했습니다.",
        is_current: false,
        _id: "89f4c53d3e6gg59397dd259i"
      }
    ],
    education: [
      {
        institution: "텍사스 공과대학",
        degree: "공학 학사",
        field: "정보기술",
        graduation_date: "2016-05",
        gpa: "3.9/4.0",
        _id: "89f4c53d3e6gg59397dd259j"
      },
      {
        institution: "대구 중앙고등학교",
        degree: "고등학교 졸업",
        field: "이과",
        graduation_date: "2012-04",
        gpa: "",
        _id: "89f4c53d3e6gg59397dd259k"
      }
    ],
    template: "minimal-image",
    accent_color: "#F59E0B",
    project: [
      {
        name: "Invoicr - 인보이스 관리 시스템",
        type: "웹 애플리케이션 (핀테크)",
        description:
          "Node.js·MongoDB·Stripe 기반의 청구서 자동화 플랫폼으로, 프리랜서 및 소규모 기업을 위한 실용적 청구 관리 기능을 제공합니다.",
        _id: "89f4c53d3e6gg59397dd259l"
      },
      {
        name: "API 모니터링 대시보드",
        type: "DevOps 도구",
        description:
          "Prometheus·Grafana 기반 API 실시간 모니터링 시스템으로, 응답 시간·가용성·에러율을 시각화합니다.",
        _id: "89f4c53d3e6gg59397dd259m"
      }
    ],
    updatedAt: "2025-09-25T15:26:49.652Z",
    createdAt: "2025-09-25T15:26:49.652Z"
  }
]
