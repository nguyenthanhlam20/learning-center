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
  Typography,
} from "@mui/material";
import React from "react";
import { Scrollbar } from "../../components/ScrollBar";

export const FeedbackTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;
  console.log("items", items);

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
                  <TableCell>Họ và Tên</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Khóa học</TableCell>
                  <TableCell>Lớp học</TableCell>
                  <TableCell>Số sao</TableCell>
                  <TableCell>Nội dung đánh giá</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items?.map((feedback) => {
                  return (
                    <TableRow hover key={feedback?.feedback_id}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Typography variant="subtitle2">
                            {feedback?.emailNavigation?.name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{feedback?.emailNavigation?.email}</TableCell>
                      <TableCell>{feedback?.course.course_name}</TableCell>
                      <TableCell>{feedback?.class.className}</TableCell>
                      <TableCell>{feedback?.star}</TableCell>
                      <TableCell>
                        <p
                          style={{ whiteSpace: "nowrap" }}
                          className="w-[420px] overflow-auto "
                        >
                          {feedback?.message}
                        </p>
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
