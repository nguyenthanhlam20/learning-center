import { format } from "date-fns";
import React from "react";
import {
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Chip,
  Typography,
  SvgIcon,
} from "@mui/material";
import EyeIcon from "@heroicons/react/24/solid/EyeIcon";

import { Scrollbar } from "../../components/ScrollBar";
import dayjs from "dayjs";

export const InvoiceTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    user,
    courses,
    setIsOpenModal,
    setCurrentInvoice,
  } = props;

  const getInvoiceId = (id) => {
    const idStr = new String(id);

    let str = "#00000";
    const result = str.slice(0, str.length - idStr.length);
    console.log(result);
    return result + id;
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
                  <TableCell>Mã hóa đơn</TableCell>
                  <TableCell>Người mua</TableCell>
                  <TableCell>Khóa học</TableCell>
                  <TableCell>Lớp học</TableCell>
                  <TableCell>Giá</TableCell>
                  <TableCell>Ngày mua</TableCell>
                  <TableCell>Phương thức </TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((invoice) => {
                  return (
                    <TableRow hover key={invoice?.paymentId}>
                      <TableCell>{getInvoiceId(invoice?.paymentId)}</TableCell>
                      <TableCell>{invoice?.student?.name}</TableCell>
                      <TableCell>
                        <Typography sx={{ width: 150 }} variant="subtitle2">
                          {invoice?.course?.course_name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ width: 150 }} variant="subtitle2">
                          {invoice?.class?.className}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {new Intl.NumberFormat("vi-VN").format(
                          Number(invoice?.amount)
                        ) + "₫"}
                      </TableCell>
                      <TableCell>
                        {dayjs(invoice?.paymentDate).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>{invoice?.paymentMethod}</TableCell>
                      <TableCell sx={{ width: 150 }}>
                        <Chip color="success" label={"Đã thanh toán"} />
                      </TableCell>
                      <TableCell sx={{ width: 150 }}>
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          onClick={() => {
                            setIsOpenModal(true);
                            setCurrentInvoice(invoice);
                          }}
                        >
                          <SvgIcon>
                            <EyeIcon />
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
