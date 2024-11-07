import { Link } from "react-router-dom";
import { Box, Divider, Drawer, Stack } from "@mui/material";
import { Logo } from "../../components/Logo";
import { Scrollbar } from "../../components/ScrollBar";
import { adminRoutes, items, staffRoutes, teacherRoutes } from "./config";
import { SideNavItem } from "./side-nav-item";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ROLE } from "../../constants/constants";
import { useSelector } from "react-redux";

export const SideNav = () => {
  const location = useLocation();
  const user = useSelector((state) => state.authen.user);

  let items = adminRoutes;

  useEffect(() => {
    if (user?.role_id == ROLE.ADMIN) {
      items = adminRoutes;
    }

    if (user?.role_id == ROLE.STAFF) {
      items = staffRoutes;
    }

    if (user?.role_id == ROLE.TEACHER) {
      items = teacherRoutes;
    }
  }, [user]);

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "#6C737F",
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box component={Link} href="/">
            <Logo />
          </Box>
        </Box>
        <Divider sx={{ borderColor: "#2F3746" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              let active = false;

              if (location.pathname === "/" || item.path === "/") {
                active = item.path ? location.pathname === item.path : false;
              } else {
                active = item.path
                  ? location.pathname.includes(item.path)
                  : false;
              }

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: "#2F3746" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        ></Box>
      </Box>
    </Scrollbar>
  );

  return (
    <Drawer
      anchor="left"
      open
      PaperProps={{
        sx: {
          backgroundColor: "#1C2536",
          color: "#ffffff",
          width: 280,
        },
      }}
      variant="permanent"
    >
      {content}
    </Drawer>
  );
};
