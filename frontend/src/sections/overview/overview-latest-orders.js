import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";

export const OverviewLatestOrders = (props) => {
  const navigate = useNavigate();
  const { data = [], sx } = props;

  return (
    <>
      <Card sx={sx}>
        <CardHeader title="Doanh thu theo học viên" />
        <Box sx={{ minWidth: 800, maxHeight: 450, overflow: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Họ và tên</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Số điện thoại</TableCell>
                <TableCell>Tổng doanh thu</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((payment) => {
                return (
                  <TableRow hover key={payment.payment_id}>
                    <TableCell>{payment.name}</TableCell>
                    <TableCell>{payment.email}</TableCell>
                    <TableCell>{payment.phone}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("vi-VN").format(
                        Number(payment.total)
                      ) + "₫"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            color="inherit"
            endIcon={
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            }
            size="small"
            variant="text"
            onClick={() => navigate(ROUTE_CONSTANTS.ADMIN_INVOICE_PAGE)}
          >
            Xem tất cả
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
