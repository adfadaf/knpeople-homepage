import { faMagnifyingGlass, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faComments, faLightbulb } from "@fortawesome/free-regular-svg-icons";

const menu = [
  {
    menu: "회사소개",
    subMenu: [
      { id: "intro", title: "회사개요", isLink: false },
      { id: "ceo", title: "CEO 인사말", isLink: false },
      { id: "history", title: "연혁", isLink: false },
      { id: "map", title: "오시는 길", isLink: false },
    ],
  },
  {
    menu: "제품",
    subMenu: [
      { id: "aspera", title: "Aspera", isLink: false },
      { id: "IBM", title: "IBM Solution", isLink: false },
    ],
  },
  {
    menu: "고객지원",
    subMenu: [{ id: "contact", title: "문의하기", isLink: false }],
  },
  {
    menu: "소식",
    subMenu: [
      {
        id: "youtube",
        title: "유튜브",
        isLink: true,
        link: "https://www.youtube.com/@knpeople4271",
      },
      {
        id: "blog",
        title: "블로그",
        isLink: true,
        link: "https://knpeople2018-itstudio.tistory.com/",
      },
    ],
  },
];

const banner = [
  {
    title: "분석합니다",
    content:
      "실력을 갖춘 IT 전문가는 느낌보다는 데이터로 시작합니다. 데이터를 분석하여 고객의 요구를 이해하고, 사용자 경험을 개선하기 위한 방안을 도출합니다.",
    icon: faMagnifyingGlass,
  },
  {
    title: "이야기합니다",
    content:
      "IT 기술을 이용하는 건 결국 사람입니다. 사람과 대화하고 사람을 이해하고 사람을 배려합니다. 우리는 이야기하는 IT 기업입니다.",
    icon: faComments,
  },
  {
    title: "고민합니다",
    content:
      "고객님의 문제를 함께 고민하고 그려보고 경험하며, 경험을 바탕으로 더 나은 해답을 제시하겠습니다.",
    icon: faLightbulb,
  },
  {
    title: "함께합니다",
    content:
      "서비스에 제공으로 그치지 않고 사후관리까지 철저한 마무리로 든든한 파트너로써 고객님들과 함께 하겠습니다.",
    icon: faUsers,
  },
];

const business = [
  {
    title: "S/I",
    content:
      "통합 정보시스템을 대상으로 최적의 개발방법론을 적용하여 맞춤형 서비스 제공",
    icon: "si",
  },
  {
    title: "Consulting",
    content: "정보시스템 구축 및 운영의 전문화된 서비스를 제공",
    icon: "consulting",
  },
  {
    title: "Solution",
    content: "정보시스템 구축 및 운영의 전문화된 서비스를 제공",
    icon: "solution",
  },
];

const company = {
  company: "(주)케이엔피플",
  since: "2018년 09월 21일",
  business: "소프트웨어 개발 및 공급업",
  address:
    "서울특별시 광진구 광나루로56길85, 사무동17층08호(구의동,테크노마트) 케이엔피플",
  tel: "02-6212-7882",
  email: "help@knpeople.com",
  ceo: "김기남",
  businessNum: "492-87-01077",
};

export { menu, banner, business, company };
