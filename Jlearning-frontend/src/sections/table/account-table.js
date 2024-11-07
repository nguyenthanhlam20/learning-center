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

export const AccountTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const navigate = useNavigate();
  const handleEditAccount = (id) => {
    navigate(ROUTE_CONSTANTS.ADMIN_COURSE_DETAILS + "?account_id=" + id);
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
                  <TableCell>Tên</TableCell>

                  <TableCell>Thời gian</TableCell>
                  <TableCell>Giá</TableCell>
                  <TableCell>Số bài học</TableCell>
                  <TableCell>Ngày tạo</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((account) => {
                  const createdAt = format(
                    new Date(account.created_at),
                    "dd/MM/yyyy"
                  );

                  return (
                    <TableRow hover key={account.account_id}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Avatar src={account.account_avatar_url}>
                            {getInitials(account.account_name)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {account.account_name}
                          </Typography>
                        </Stack>
                      </TableCell>

                      <TableCell>{account.duration} tháng</TableCell>
                      <TableCell>
                        {account.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </TableCell>
                      <TableCell>{account.chapters.length}</TableCell>
                      <TableCell>{createdAt}</TableCell>
                      <TableCell>
                        <Chip
                          color={account.status ? "secondary" : "error"}
                          label={account.status ? "Công khai" : "Khóa"}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleEditAccount(account.account_id)}
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
