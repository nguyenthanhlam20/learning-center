import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Check } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import AppTextArea from "../../components/AppInput/AppTextArea";
import Badge from "../../components/Badge";
import { Scrollbar } from "../../components/ScrollBar";
import { Status } from "../../constants/status";
import {
  cancelForm,
  confirmForm,
  pendingForm,
  successForm,
} from "../../redux/registrationFormSlice";
import { getInitials } from "../../utils/get-initials";
import getStatus from "../../utils/get-status";
import dayjs from "dayjs";

export const RegistrationTable = (props) => {
  const dispatch = useDispatch();
  const {
    title,
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const handleConfirm = (id) => {
    dispatch(confirmForm(id));
  };

  const handlePending = (id) => {
    dispatch(pendingForm(id));
  };

  const handleCloseModal = () => setIsOpenModal(false);
  const handleOpenModal = (register) => {
    setSelected({
      className: register.class.className,
      courseName: register.course.course_name,
      name: register.student.name,
      address: register.student.address,
      date_of_birth: register.student.date_of_birth,
      phone: register.student.phone,
    });

    handleChangeValue("id", register.id);
    setIsOpenModal(true);
  };

  const handleAddToClass = (id) => {
    dispatch(successForm(id));
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selected, setSelected] = useState({});

  const [values, setValues] = useState({
    id: 0,
    reason: "",
  });

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (isEmpty(values.reason.trim())) {
      toast.warning("Vui lòng nhập lý do hủy phiếu");
      return;
    }

    dispatch(cancelForm(values));
    setValues({
      id: 0,
      reason: "",
    });

    setIsOpenModal(false);
    // console.log(values);
  };

  console.log("items", items);
  return (
    <>
      <Card
        sx={{ height: 450, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
      >
        <Scrollbar>
          <Box sx={{ minWidth: 800, maxHeight: 450 }}>
            <Table stickyHeader style={{ minWidth: "1800px" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Họ và tên</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Số điện thoại</TableCell>
                  <TableCell>Lớp học</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Ngày tạo</TableCell>
                  <TableCell>Khóa học</TableCell>
                  <TableCell>Ngày sinh</TableCell>
                  <TableCell>Giới tính</TableCell>
                  <TableCell
                    sx={{
                      width: "210px",
                      textAlign: "center",
                      position: "sticky",
                      right: 0,
                      background: "white",
                      zIndex: 100,
                    }}
                  >
                    Hành động
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ overflow: "auto" }}>
                {items.map((register) => {
                  return (
                    <TableRow hover key={register.class.name}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Avatar src={register.student.avatar_url}>
                            {getInitials(register.student.name)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {register.student.name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{register.student.email}</TableCell>
                      <TableCell>{register.student.phone}</TableCell>
                      <TableCell>{register.class.className}</TableCell>
                      <TableCell>
                        <Badge
                          text={getStatus(register.status).message}
                          color={getStatus(register.status).color}
                        />
                      </TableCell>
                      <TableCell>
                        {dayjs(register.createdDate).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>{register.course.course_name}</TableCell>
                      <TableCell>{register.student.date_of_birth}</TableCell>
                      <TableCell>
                        {register.student.gender === 0 ? "Female" : "Male"}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          position: "sticky",
                          right: 0,
                          background: "white",
                          zIndex: 100,
                        }}
                      >
                        <Stack
                          direction={"row"}
                          spacing={2}
                          justifyContent={"center"}
                        >
                          {register.status === Status.CANCEL && (
                            <Button
                              onClick={() => handlePending(register.id)}
                              color="secondary"
                              size="small"
                            >
                              Chờ xác nhận
                            </Button>
                          )}
                          {register.status === Status.PENDING && (
                            <Button
                              onClick={() => handleConfirm(register.id)}
                              size="small"
                            >
                              Xác nhận
                            </Button>
                          )}
                          {register.status !== Status.COMPLETE &&
                            register.status !== Status.CANCEL && (
                              <Stack direction={"row"} spacing={2}>
                                {register.status !== Status.PENDING && (
                                  <Button
                                    onClick={() =>
                                      handleAddToClass(register?.id)
                                    }
                                    color="success"
                                    size="small"
                                  >
                                    Thêm vào lớp
                                  </Button>
                                )}
                                <Button
                                  onClick={() => handleOpenModal(register)}
                                  color="error"
                                  size="small"
                                >
                                  Hủy Phiếu
                                </Button>
                              </Stack>
                            )}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
      </Card>

      <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
        <TablePagination
          component="div"
          count={count}
          onPageChange={(event, number) => onPageChange(number)}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          labelDisplayedRows={({ from, to, count }) =>
            `Hiện thị từ ${from}-${to} trong tổng số ${count} bản ghi`
          }
          boundaryCount={4}
          labelRowsPerPage={"Số bản ghi"}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>

      <Dialog fullWidth open={isOpenModal} onClose={handleCloseModal}>
        <DialogTitle textAlign={"center"} color="red">
          Xác nhận huỷ phiếu đăng ký
        </DialogTitle>
        <DialogContent
          sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
          dividers
        >
          <Stack spacing={3} mb={1} mt={1}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack spacing={3}>
                <Stack>
                  <Typography color={"gray"} variant="subtitle2">
                    Khóa học:
                  </Typography>
                  <Typography>{selected?.courseName}</Typography>
                </Stack>
                <Stack>
                  <Typography color={"gray"} variant="subtitle2">
                    Lớp học:
                  </Typography>
                  <Typography>{selected?.className}</Typography>
                </Stack>
              </Stack>
              <Stack spacing={3}>
                <Stack>
                  <Typography color={"gray"} variant="subtitle2">
                    Họ và tên học viên:
                  </Typography>
                  <Typography>{selected?.name}</Typography>
                </Stack>
                <Stack>
                  <Typography color={"gray"} variant="subtitle2">
                    Địa chỉ:
                  </Typography>
                  <Typography>{selected?.address}</Typography>
                </Stack>
              </Stack>
              <Stack spacing={3}>
                <Stack>
                  <Typography color={"gray"} variant="subtitle2">
                    Ngày sinh:
                  </Typography>
                  <Typography>{selected?.date_of_birth}</Typography>
                </Stack>
                <Stack>
                  <Typography color={"gray"} variant="subtitle2">
                    Số điện thoại
                  </Typography>
                  <Typography>{selected?.phone}</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <h6 style={{ color: "red" }}>* Lý do hủy</h6>
              <AppTextArea
                value={values?.reason}
                title={"reason"}
                handleChangeValue={handleChangeValue}
                height={"h-[150px]"}
                placeholder={"Nhập lý do hủy phiếu"}
              />
            </Stack>
            <Divider />
            <Stack spacing={2} direction={"row"} justifyContent={"end"}>
              <Button
                color="error"
                variant="contained"
                className=" w-[150px]"
                onClick={handleCloseModal}
              >
                <SvgIcon className="mr-2">
                  <XMarkIcon />
                </SvgIcon>
                Hủy
              </Button>
              <Button
                onClick={handleSubmit}
                color="primary"
                variant="contained"
                className="ml-3 w-[150px]"
              >
                <SvgIcon className="mr-2">
                  <Check />
                </SvgIcon>
                Xác nhận
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
