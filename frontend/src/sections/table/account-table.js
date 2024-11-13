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
    title,
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const navigate = useNavigate();
  const handleEditAccount = (email) => {
    navigate(ROUTE_CONSTANTS.ADMIN.EDIT_ACCOUNT + "?email=" + email);
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
                  <TableCell>Chức vụ</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((account) => {
                  return (
                    <TableRow hover key={account.email}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Avatar src={account.avatar_url}>
                            {getInitials(account.name)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {account.name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{account.email}</TableCell>
                      <TableCell>{account.address}</TableCell>
                      <TableCell>
                        {account.date_of_birth &&
                          new Date(account?.date_of_birth).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{account.gender ? "Nam" : "Nữ"}</TableCell>
                      <TableCell>{account.phone}</TableCell>
                      <TableCell>{title}</TableCell>
                      <TableCell>
                        <Chip
                          color={account.status ? "secondary" : "error"}
                          label={account.status ? "Active" : "Deactive"}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleEditAccount(account.email)}
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
