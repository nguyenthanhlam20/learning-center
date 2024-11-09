import React from "react";
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

export const CourseTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const navigate = useNavigate();
  const handleEditCourse = (id) => {
    navigate(ROUTE_CONSTANTS.ADMIN_COURSE_DETAILS + "?course_id=" + id);
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
                  <TableCell>Tên khóa học</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>Học phí</TableCell>
                  <TableCell>Số buổi học </TableCell>
                  <TableCell>Cập độ</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((course) => {
                  const createdAt = format(
                    new Date(course.created_at),
                    "dd/MM/yyyy"
                  );

                  return (
                    <TableRow hover key={course.course_id}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Avatar
                            sx={{ borderRadius: "0", width: 70 }}
                            src={course.course_avatar_url}
                          >
                            {getInitials(course.course_name)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {course.course_name}
                          </Typography>
                        </Stack>
                      </TableCell>

                      <TableCell>{course.code}</TableCell>
                      <TableCell>
                        {course.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </TableCell>
                      <TableCell>{course.number_of_slots}</TableCell>
                      <TableCell>{course.level}</TableCell>

                      <TableCell>
                        <Chip
                          color={course.status ? "secondary" : "error"}
                          label={course.status ? "Active" : "Deactive"}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleEditCourse(course.course_id)}
                          variant="contained"
                          className="bg-primary"
                          size="small"
                        >
                          <SvgIcon>
                            <PencilIcon />
                          </SvgIcon>
                        </Button>
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
    </>
  );
};
