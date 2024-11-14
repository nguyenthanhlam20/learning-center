import BookOpenIcon from "@heroicons/react/24/solid/BookOpenIcon";
import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import NewspaperIcon from "@heroicons/react/24/solid/NewspaperIcon";
import QuestionMarkCircleIcon from "@heroicons/react/24/solid/QuestionMarkCircleIcon";
import {
  AirplaneTicketRounded,
  Feedback,
  Info,
  MessageRounded,
  People,
  ShoppingBasket,
} from "@mui/icons-material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { SvgIcon } from "@mui/material";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";

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
    title: "Quản lý học viên",
    path: ROUTE_CONSTANTS.ADMIN.STUDENT_PAGE,
    icon: (
      <SvgIcon fontSize="small">
        <People />
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
  {
    title: "Phản hồi của học viên",
    path: ROUTE_CONSTANTS.ADMIN_FEEDBACK_PAGE,
    icon: (
      <SvgIcon fontSize="small">
        <Feedback />
      </SvgIcon>
    ),
  },
];

export const staffRoutes = [
  {
    title: "Thông tin cá nhân",
    path: ROUTE_CONSTANTS.ADMIN.EDIT_ACCOUNT,
    icon: (
      <SvgIcon fontSize="small">
        <Info />
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
  {
    title: "Phản hồi của học viên",
    path: ROUTE_CONSTANTS.ADMIN_FEEDBACK_PAGE,
    icon: (
      <SvgIcon fontSize="small">
        <Feedback />
      </SvgIcon>
    ),
  },
];

export const teacherRoutes = [
  {
    title: "Thông tin cá nhân",
    path: ROUTE_CONSTANTS.ADMIN.EDIT_ACCOUNT,
    icon: (
      <SvgIcon fontSize="small">
        <Info />
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
];
