import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import BookOpenIcon from "@heroicons/react/24/solid/BookOpenIcon";
import QuestionMarkCircleIcon from "@heroicons/react/24/solid/QuestionMarkCircleIcon";
import FaceSmileIcon from "@heroicons/react/24/solid/FaceSmileIcon";
import NewspaperIcon from "@heroicons/react/24/solid/NewspaperIcon";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { SvgIcon } from "@mui/material";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import {
  AirplaneTicketRounded,
  CheckOutlined,
  MessageRounded,
  QuestionAnswer,
  QuestionMarkRounded,
  ShoppingBasket,
} from "@mui/icons-material";

export const adminRoutes = [
  {
    title: "Tổng quan",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Quản lý khóa học",
    path: "/authen/course",
    icon: (
      <SvgIcon fontSize="small">
        <BookOpenIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Quản lý lớp học",
    path: ROUTE_CONSTANTS.CLASS.INDEX,
    icon: (
      <SvgIcon fontSize="small">
        <NewspaperIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Quản lý nhân viên",
    path: ROUTE_CONSTANTS.ADMIN.STAFF_PAGE,
    icon: (
      <SvgIcon fontSize="small">
        <QuestionMarkCircleIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Quản lý giáo viên",
    path: ROUTE_CONSTANTS.ADMIN.TEACHER_PAGE,
    icon: (
      <SvgIcon fontSize="small">
        <ReceiptLongIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Quản lý phiếu đăng ký",
    path: ROUTE_CONSTANTS.ADMIN.REGISTRATION_FORM.INDEX,
    icon: (
      <SvgIcon fontSize="small">
        <AirplaneTicketRounded />
      </SvgIcon>
    ),
  },
  {
    title: "Quản lý hóa đơn",
    path: ROUTE_CONSTANTS.ADMIN_INVOICE_PAGE,
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBasket />
      </SvgIcon>
    ),
  },
  {
    title: "Quản lý hỗ trợ",
    path: ROUTE_CONSTANTS.ADMIN_SUPPORT_PAGE,
    icon: (
      <SvgIcon fontSize="small">
        <QuestionMarkCircleIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Quản lý liên hệ",
    path: ROUTE_CONSTANTS.ADMIN_CONTACT_PAGE,
    icon: (
      <SvgIcon fontSize="small">
        <MessageRounded />
      </SvgIcon>
    ),
  },
];

export const staffRoutes = [
  {
    title: "Quản lý lớp học",
    path: "/authen/course",
    icon: (
      <SvgIcon fontSize="small">
        <BookOpenIcon />
      </SvgIcon>
    ),
  },
];

export const teacherRoutes = [
  {
    title: "Quản lý lớp học",
    path: "/authen/course",
    icon: (
      <SvgIcon fontSize="small">
        <BookOpenIcon />
      </SvgIcon>
    ),
  },

  {
    title: "Quản lý điểm",
    path: "/authen/test",
    icon: (
      <SvgIcon fontSize="small">
        <QuestionMarkCircleIcon />
      </SvgIcon>
    ),
  },
];
