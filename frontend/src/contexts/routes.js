import { ROUTE_CONSTANTS } from "../constants/route.constants";
import { HomePage } from "../pages";
import SigninPage from "../pages/signin";
import SignupPage from "../pages/signup";
import ForgotPasswordPage from "../pages/forgot-password";
import ErrorPage from "../pages/error";
import BlogPage from "../pages/blog";
import AdminBlogPage from "../pages/admin/blog";
import AdminContactPage from "../pages/admin/contact";
import ContactPage from "../pages/contact";
import SupportPage from "../pages/support";
import AccountPage from "../pages/account";
import AdminCoursesPage from "../pages/admin/courses";
import CoursePage from "../pages/course";
import MyCoursePage from "../pages/user/course/MyCoursePage";
import AdminCourseDetailsPage from "../pages/admin/course-details";
import CourseDetailPage from "../pages/course-details";
import LessonViewPage from "../pages/user/course/LessonViewPage";
import BlogDetailsPage from "../pages/blog-details";
import AdminFeedbackPage from "../pages/admin/feedback";
import AdminSupportPage from "../pages/admin/support";
import SettingPage from "../pages/admin/settings";
import AdminTestPage from "../pages/admin/test";
import AdminTestDetailsPage from "../pages/admin/test-details";
import ChangePasswordPage from "../pages/change-password";
import AdminBlogDetailsPage from "../pages/admin/blog-details";
import PaymentPage from "../pages/user/payment";
import PaymentResultPage from "../pages/user/payment/PaymentResultPage";
import PaymentHistoryPage from "../pages/payment-history";
import AdminInvoicePage from "../pages/admin/invoice";
import NewPasswordPage from "../pages/create-new-password";
import AdminStaffPage from "../pages/admin/staffs";
import EditAccount from "../pages/account/edit";
import AdminTeacherPage from "../pages/admin/teachers";
import AdminClassPage from "../pages/classes";
import EditClassPage from "../pages/classes/edit";
import AddCalendarPage from "../pages/calendar/create";
import EditCalendarPage from "../pages/calendar/edit";
import AdminClassMemberPage from "../pages/class-members";
import EditClassMemeberPage from "../pages/class-members/edit";
import TeacherPage from "../pages/teacher";
import RegistrationFormPage from "../pages/user/registration-form";
import EditRegistrationFormPage from "../pages/user/registration-form/edit";
import MyClassPage from "../pages/user/class";
import ListRegistrationPage from "../pages/admin/registration";
import AddInvoicePage from "../pages/admin/invoice/add";
import AdminStudentPage from "../pages/admin/students";

export const routes = [
  {
    path: ROUTE_CONSTANTS.HOME_PAGE,
    isPrivate: false,
    component: <HomePage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.NEW_PASSWORD_PAGE,
    isPrivate: false,
    component: <NewPasswordPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.CHANGE_PASSWORD_PAGE,
    isPrivate: true,
    component: <ChangePasswordPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.BLOG_DETAILS_PAGE,
    isPrivate: false,
    component: <BlogDetailsPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_TEST_PAGE,
    isPrivate: true,
    component: <AdminTestPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.PAYMENT_HISTORY,
    isPrivate: true,
    component: <PaymentHistoryPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_TEST_DETAILS,
    isPrivate: true,
    component: <AdminTestDetailsPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.SETING_PAGE,
    isPrivate: true,
    component: <SettingPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.PAYMENT,
    isPrivate: true,
    component: <PaymentPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_FEEDBACK_PAGE,
    isPrivate: true,
    component: <AdminFeedbackPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_SUPPORT_PAGE,
    isPrivate: true,
    component: <AdminSupportPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.COURSE_PAGE,
    isPrivate: false,
    component: <CoursePage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.COURSE_DETAILS_PAGE,
    isPrivate: true,
    component: <CourseDetailPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.LESSON_VIEW_PAGE,
    isPrivate: true,
    component: <LessonViewPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.MY_COURSE_PAGE,
    isPrivate: true,
    component: <MyCoursePage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ACCOUNT_PAGE,
    isPrivate: true,
    component: <AccountPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN.EDIT_ACCOUNT,
    isPrivate: false,
    component: <EditAccount />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.PAYMENT_RESULT_PAGE,
    isPrivate: true,
    component: <PaymentResultPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_INVOICE_PAGE,
    isPrivate: true,
    component: <AdminInvoicePage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.BLOG_PAGE,
    isPrivate: false,
    component: <BlogPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.SUPPORT_PAGE,
    isPrivate: false,
    component: <SupportPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_BLOG_PAGE,
    isPrivate: true,
    component: <AdminBlogPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_BLOG_DETAILS_PAGE,
    isPrivate: true,
    component: <AdminBlogDetailsPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_COURSE_DETAILS,
    isPrivate: true,
    component: <AdminCourseDetailsPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_COURSE_PAGE,
    isPrivate: true,
    component: <AdminCoursesPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_CONTACT_PAGE,
    isPrivate: true,
    component: <AdminContactPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.CONTACT_PAGE,
    isPrivate: false,
    component: <ContactPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.SIGN_IN,
    isPrivate: false,
    component: <SigninPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.SIGN_UP,
    isPrivate: false,
    component: <SignupPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.FORGOT_PASSOWRD,
    isPrivate: false,
    component: <ForgotPasswordPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ERROR_PAGE,
    isPrivate: false,
    component: <ErrorPage />,
    exact: true,
  },

  {
    path: ROUTE_CONSTANTS.ADMIN.STAFF_PAGE,
    isPrivate: true,
    component: <AdminStaffPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN.TEACHER_PAGE,
    isPrivate: true,
    component: <AdminTeacherPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.CLASS.INDEX,
    isPrivate: true,
    component: <AdminClassPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.CLASS.EDIT,
    isPrivate: true,
    component: <EditClassPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.CALENDAR.ADD,
    isPrivate: true,
    component: <AddCalendarPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.CALENDAR.EDIT,
    isPrivate: true,
    component: <EditCalendarPage />,
    exact: true,
  },

  {
    path: ROUTE_CONSTANTS.CLASS_MEMBER.INDEX,
    isPrivate: true,
    component: <AdminClassMemberPage />,
    exact: true,
  },

  {
    path: ROUTE_CONSTANTS.CLASS_MEMBER.EDIT,
    isPrivate: true,
    component: <EditClassMemeberPage />,
    exact: true,
  },

  {
    path: ROUTE_CONSTANTS.REGISTRATION_FORM.INDEX,
    isPrivate: true,
    component: <RegistrationFormPage />,
    exact: true,
  },

  {
    path: ROUTE_CONSTANTS.REGISTRATION_FORM.EDIT,
    isPrivate: true,
    component: <EditRegistrationFormPage />,
    exact: true,
  },

  {
    path: ROUTE_CONSTANTS.TEACHER.INDEX,
    isPrivate: false,
    component: <TeacherPage />,
    exact: true,
  },

  {
    path: ROUTE_CONSTANTS.CLASS.MINE,
    isPrivate: true,
    component: <MyClassPage />,
    exact: true,
  },

  {
    path: ROUTE_CONSTANTS.ADMIN.REGISTRATION_FORM.INDEX,
    isPrivate: true,
    component: <ListRegistrationPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN.INVOICE.ADD,
    isPrivate: true,
    component: <AddInvoicePage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN.STUDENT_PAGE,
    isPrivate: true,
    component: <AdminStudentPage />,
    exact: true,
  },
];
