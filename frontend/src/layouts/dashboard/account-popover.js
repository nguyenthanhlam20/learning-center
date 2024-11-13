import KeyIcon from "@heroicons/react/24/solid/KeyIcon";
import PowerIcon from "@heroicons/react/24/solid/PowerIcon";
import UserIcon from "@heroicons/react/24/solid/UserCircleIcon";
import {
  AirplaneTicketRounded,
  BookRounded,
  School,
} from "@mui/icons-material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROLE } from "../../constants/constants";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import authenSlice from "../../redux/authenSlice";
import courseSlice from "../../redux/courseSlice";

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const user = useSelector((state) => state.authen.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signOut } = authenSlice.actions;
  const { resetCourseData } = courseSlice.actions;

  const redirectToPage = useCallback((path) => {
    onClose?.();
    navigate(path);
  });

  const handleSignOut = useCallback(() => {
    onClose?.();
    navigate("/");
    dispatch(signOut());
    dispatch(resetCourseData());
  }, [onClose]);

  return (
    <Popover
      sx={{ mt: 3, mr: 2 }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 250 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Tài khoản</Typography>
        <Typography color="text.secondary" variant="body2">
          {user?.name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        {user?.role_id === ROLE.USER ? (
          <>
            <MenuItem
              onClick={() => redirectToPage(ROUTE_CONSTANTS.MY_COURSE_PAGE)}
            >
              <SvgIcon fontSize="small" color="primary" className="mr-3">
                <BookRounded />
              </SvgIcon>
              Khóa học của tôi
            </MenuItem>

            <MenuItem
              onClick={() => redirectToPage(ROUTE_CONSTANTS.CLASS.MINE)}
            >
              <SvgIcon fontSize="small" color="primary" className="mr-3">
                <School />
              </SvgIcon>
              Lớp học của tôi
            </MenuItem>
            <MenuItem
              onClick={() =>
                redirectToPage(ROUTE_CONSTANTS.REGISTRATION_FORM.INDEX)
              }
            >
              <SvgIcon fontSize="small" color="primary" className="mr-3">
                <AirplaneTicketRounded />
              </SvgIcon>
              Phiếu đăng ký khóa học
            </MenuItem>
            <MenuItem
              onClick={() => redirectToPage(ROUTE_CONSTANTS.ACCOUNT_PAGE)}
            >
              <SvgIcon color="primary" fontSize="small" className="mr-3">
                <UserIcon />
              </SvgIcon>
              Thông tin cá nhân
            </MenuItem>
            <MenuItem
              onClick={() => redirectToPage(ROUTE_CONSTANTS.PAYMENT_HISTORY)}
            >
              <SvgIcon color="primary" fontSize="small" className="mr-3">
                <MonetizationOnIcon />
              </SvgIcon>
              Lịch sử giao dịch
            </MenuItem>
            <MenuItem
              onClick={() =>
                redirectToPage(ROUTE_CONSTANTS.CHANGE_PASSWORD_PAGE)
              }
            >
              <SvgIcon color="primary" fontSize="small" className="mr-3">
                <KeyIcon />
              </SvgIcon>
              Thay đổi mật khẩu
            </MenuItem>
          </>
        ) : (
          <></>
        )}
        <MenuItem onClick={handleSignOut}>
          <SvgIcon color="primary" fontSize="small" className="mr-3">
            <PowerIcon />
          </SvgIcon>
          Đăng xuất
        </MenuItem>
      </MenuList>
    </Popover>
  );
};
