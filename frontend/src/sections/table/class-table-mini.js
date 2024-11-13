import {
  Box,
  Button,
  Card,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import { Scrollbar } from "../../components/ScrollBar";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";

import { Info, People } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

export const ClassTableMini = ({ items }) => {
  const navigate = useNavigate();
  const handleEditClass = (classId) => {
    navigate(ROUTE_CONSTANTS.CLASS.EDIT + "?classId=" + classId);
  };

  const navigateToClassMemberPage = (classId) => {
    navigate(ROUTE_CONSTANTS.CLASS_MEMBER.INDEX + "?classId=" + classId);
  };

  return (
    <Box sx={{ maxHeight: 450 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Tên lớp</TableCell>
            <TableCell>Sĩ số</TableCell>
            <TableCell>Ngày bắt đầu</TableCell>
            <TableCell>Ngày kết thúc</TableCell>
            <TableCell
              sx={{
                width: "210px",
                textAlign: "center",
              }}
            >
              Hành động
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflow: "auto" }}>
          {items.map((classes) => {
            return (
              <TableRow hover key={classes.className}>
                <TableCell>
                  <Tooltip title={classes.className} arrow placement="top">
                    <p>{classes.className}</p>
                  </Tooltip>
                </TableCell>

                <TableCell>
                  <Tooltip
                    title={classes.classMembers.length}
                    arrow
                    placement="top"
                  >
                    <p>{classes.classMembers.length}</p>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {classes.startDate &&
                    new Date(classes?.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {classes.endDate &&
                    new Date(classes?.endDate).toLocaleDateString()}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    position: "sticky",
                  }}
                >
                  <Stack direction={"row"} spacing={2}>
                    <Button
                      onClick={() => handleEditClass(classes.classId)}
                      variant="contained"
                      className="bg-primary"
                      size="small"
                    >
                      <SvgIcon>
                        <Info />
                      </SvgIcon>
                    </Button>
                    <Button
                      onClick={() => navigateToClassMemberPage(classes.classId)}
                      variant="contained"
                      className="bg-primary"
                      size="small"
                    >
                      <SvgIcon>
                        <People />
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
  );
};
