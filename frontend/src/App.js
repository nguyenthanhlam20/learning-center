import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { TopNav } from "./layouts/dashboard/top-nav";
import Header from "./components/Header";
import { SideNav } from "./layouts/dashboard/side-nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { routes } from "./contexts/routes";
import React from "react";
import { ROLE } from "./constants/constants";
import ErrorPage from "./pages/error";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ROUTE_CONSTANTS } from "./constants/route.constants";
function App() {
  let user = useSelector((state) => state.authen.user);
  console.log(user);
  const renderRoute = () => {
    return routes.map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.isPrivate ? (
              !user ? (
                <Navigate to="/signin" />
              ) : route?.roles?.includes(user?.role_id) ? (
                route.component
              ) : (
                <Navigate to={ROUTE_CONSTANTS.ERROR_PAGE} />
              )
            ) : (
              route.component
            )
          }
          exact={route.exact}
        />
      );
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <div>
          {user?.role_id === ROLE.USER || user?.role_id === undefined ? (
            <Header />
          ) : (
            <TopNav />
          )}
          {user?.role_id === ROLE.USER || user?.role_id === undefined ? (
            <></>
          ) : (
            <SideNav />
          )}

          <Routes>
            {renderRoute()}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {user?.role_id === ROLE.USER || user?.role_id === undefined ? (
            <Footer />
          ) : (
            <></>
          )}
          <ScrollToTop />
        </div>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
