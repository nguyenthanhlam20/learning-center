import React, { useRef, useState } from "react";
import { format } from "date-fns";
import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Typography,
  SvgIcon,
  Chip,
  Avatar,
} from "@mui/material";
import { Scrollbar } from "../../components/ScrollBar";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import { getInitials } from "../../utils/get-initials";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";

import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import AlertDialog from "../../pages/class-members/alert";

export const ClassMemberTable = (props) => {
  const {
    title,
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const [selectedClassMember, setSelectedClassMember] = useState({
    classId: 0,
    studentEmail: "",
  });
  const navigate = useNavigate();
  const handleEditClassMember = (email, classId) => {
    console.log(
      "ok",
      `${ROUTE_CONSTANTS.CLASS_MEMBER.EDIT}?email=${email}&classId=${classId}`
    );
    navigate(
      `${ROUTE_CONSTANTS.CLASS_MEMBER.EDIT}?email=${email}&classId=${classId}`
    );
  };

  const dialogRef = useRef(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.openDialog();
    }
  };

  const handleSubmit = () => {
    console.log("Submitted!");
    //TODO: dispatch remove class member
  };

  const handleRemoveClassMember = (email, classId) => {
    handleOpenDialog();
    setSelectedClassMember({
      classId: classId,
      studentEmail: email,
    });
  };

  return (
    <>
      <Card
        sx={{ height: 450, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
      >
        <Scrollbar>
          <Box sx={{ minWidth: 800, maxHeight: 450 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Họ và tên</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Địa chỉ </TableCell>
                  <TableCell>Ngày sinh</TableCell>
                  <TableCell>Giới tính</TableCell>
                  <TableCell>Số điện thoại</TableCell>
                  <TableCell>Ngày nhập học</TableCell>
                  <TableCell sx={{ width: "180px", textAlign: "center" }}>
                    Hành động
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((classMember) => {
                  return (
                    <TableRow hover key={classMember.student.email}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Avatar src={classMember.student.avatar_url}>
                            {getInitials(classMember.student.name)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {classMember.student.name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{classMember.student.email}</TableCell>
                      <TableCell>{classMember.student.address}</TableCell>
                      <TableCell>
                        {classMember.student.date_of_birth &&
                          new Date(
                            classMember?.student.date_of_birth
                          ).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {classMember.student.gender ? "Nam" : "Nữ"}
                      </TableCell>
                      <TableCell>{classMember.student.phone}</TableCell>
                      <TableCell>{classMember.enrollmentDate}</TableCell>
                      <TableCell>
                        <Stack direction={"row"} spacing={2}>
                          <Button
                            onClick={() =>
                              handleEditClassMember(
                                classMember.studentEmail,
                                classMember.classId
                              )
                            }
                            variant="contained"
                            className="bg-primary"
                            size="small"
                          >
                            <SvgIcon>
                              <PencilIcon />
                            </SvgIcon>
                          </Button>
                          <Button
                            onClick={() =>
                              handleRemoveClassMember(
                                classMember.studentEmail,
                                classMember.classId
                              )
                            }
                            variant="contained"
                            color="error"
                            size="small"
                          >
                            <SvgIcon>
                              <Delete />
                            </SvgIcon>
                          </Button>
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

      <AlertDialog
        ref={dialogRef}
        handleSubmit={handleSubmit}
        message={"Bạn có muốn xóa học viên đã chọn?"}
      />

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
    </>
  );
};
