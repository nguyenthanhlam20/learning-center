import { CurrencyBitcoinRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Paper,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import * as React from "react";
import Badge from "../../../components/Badge";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import SmoothScrollUp from "../../../components/Common/SmoothScrollUp";
import { Status } from "../../../constants/status";
import { getInitials } from "../../../utils/get-initials";
import getStatus from "../../../utils/get-status";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../constants/route.constants";

const ListRegistration = ({ data }) => {
  const navigate = useNavigate();

  const handlePayment = (id) =>
    navigate(ROUTE_CONSTANTS.PAYMENT + "?registerId=" + id);
  return (
    <>
      <SmoothScrollUp />
      <Breadcrumb
        pageName={"Phiếu đăng ký khóa học"}
        description={"Xem danh sách phiếu đăng ký khóa học của bạn"}
      />
      <div className="relative w-full pb-40 pl-20 pr-20">
        {data?.length > 0 && (
          <Stack
            sx={{
              width: "100%",
              padding: "100px",
              paddingTop: "0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            direction={"column"}
            spacing={3}
          >
            <Stack direction={"column"} spacing={3}>
              <h6
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Danh sách phiếu đăng ký
              </h6>
              <TableContainer
                component={Paper}
                sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#fafafa" }}>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Họ và tên
                      </TableCell>

                      <TableCell sx={{ fontWeight: "bold" }}>
                        Khóa học
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Lớp học</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Ngày tạo
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Phản hồi
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", width: "150px" }}>
                        Trạng thái
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          width: "180px",
                          textAlign: "center",
                        }}
                      >
                        Hành động
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ overflow: "auto" }}>
                    {data?.map((register) => {
                      return (
                        <TableRow hover key={register.class.name}>
                          <TableCell>
                            <Stack
                              alignItems="center"
                              direction="row"
                              spacing={2}
                            >
                              <Avatar src={register.student.avatar_url}>
                                {getInitials(register.student.name)}
                              </Avatar>
                              <Typography variant="subtitle2">
                                {register.student.name}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>{register.course.course_name}</TableCell>
                          <TableCell>{register.class.className}</TableCell>
                          <TableCell>{register.createdDate}</TableCell>{" "}
                          <TableCell>{register.response}</TableCell>
                          <TableCell>
                            <Badge
                              text={getStatus(register.status).message}
                              color={getStatus(register.status).color}
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                            }}
                          >
                            <Stack
                              direction={"row"}
                              spacing={2}
                              justifyContent={"center"}
                            >
                              {register.status === Status.CONFIRM && (
                                <Button
                                  variant="contained"
                                  size="small"
                                  onClick={() => handlePayment(register.id)}
                                >
                                  <SvgIcon>
                                    <CurrencyBitcoinRounded />
                                  </SvgIcon>
                                  Thanh toán
                                </Button>
                              )}
                            </Stack>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>
        )}
      </div>
    </>
  );
};

export default ListRegistration;
