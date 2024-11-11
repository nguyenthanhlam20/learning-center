import { ROUTE_CONSTANTS } from "../../constants/route.constants";

const menuData = [
  {
    id: 1,
    title: "Trang chủ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Khóa học",
    path: "/courses",
    newTab: false,
  },

  {
    id: 4,
    title: "Giảng viên",
    path: ROUTE_CONSTANTS.TEACHER.INDEX,
    newTab: false,
  },
  {
    id: 5,
    title: "Hỗ trợ",
    path: "/support",
    newTab: false,
  },
  {
    id: 6,
    title: "Liên hệ",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
