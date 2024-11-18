import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import {
  Box,
  Button,
  Card,
  Chip,
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

import { People, PeopleOutline } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export const ClassTable = (props) => {
  const {
    title,
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    allowInsert,
  } = props;

  const navigate = useNavigate();
  const handleEditClass = (classId) => {
    console.log("classId", classId);
    navigate(ROUTE_CONSTANTS.CLASS.EDIT + "?classId=" + classId);
  };

  const navigateToClassMemberPage = (classId) => {
    navigate(ROUTE_CONSTANTS.CLASS_MEMBER.INDEX + "?classId=" + classId);
  };

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
                  <TableCell>Mã lớp</TableCell>
                  <TableCell>Tên lớp</TableCell>
                  <TableCell>Khóa học</TableCell>
                  <TableCell>Sĩ số</TableCell>
                  <TableCell>Ngày bắt đầu</TableCell>
                  <TableCell>Ngày kết thúc</TableCell>
                  <TableCell>Buổi học</TableCell>
                  <TableCell>Thời gian học</TableCell>
                  <TableCell>Phòng học</TableCell>
                  <TableCell>Giảng viên</TableCell>
                  <TableCell>Trạng thái</TableCell>
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
                {items.map((classes) => {
                  const startTime =
                    dayjs().format("YYYY-MM-DD") + " " + classes?.startTime;

                  const endTime =
                    dayjs().format("YYYY-MM-DD") + " " + classes?.endTime;
                  return (
                    <TableRow hover key={classes.className}>
                      <TableCell>
                        <Tooltip
                          title={
                            classes?.course?.code + "-00" + classes.classId
                          }
                          arrow
                          placement="top"
                        >
                          <p>
                            {classes?.course?.code + "-00" + classes.classId}
                          </p>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        <Tooltip
                          title={classes.className}
                          arrow
                          placement="top"
                        >
                          <p>{classes.className}</p>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        <Tooltip
                          title={classes.course.course_name}
                          arrow
                          placement="top"
                        >
                          <p>{classes.course.course_name}</p>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        <Tooltip
                          title={classes.classMembers.length}
                          arrow
                          placement="top"
                        >
                          <p>
                            {classes.classMembers.length +
                              "/" +
                              classes?.numberOfStudent}
                          </p>
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
                      <TableCell>{classes.daysOfWeek}</TableCell>
                      <TableCell>
                        {dayjs(startTime).format("HH:mm A") +
                          " - " +
                          dayjs(endTime).format("HH:mm A")}
                      </TableCell>
                      <TableCell>{classes.room}</TableCell>
                      <TableCell>
                        {classes.teacherEmailNavigation.name}
                      </TableCell>
                      <TableCell>
                        <Chip
                          color={classes.status ? "secondary" : "error"}
                          label={classes.status ? "Active" : "Deactive"}
                        />
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
                          {allowInsert && (
                            <Button
                              onClick={() => handleEditClass(classes.classId)}
                              variant="contained"
                              className="bg-primary"
                              size="small"
                            >
                              <SvgIcon>
                                <PencilIcon />
                              </SvgIcon>
                            </Button>
                          )}
                          <Button
                            onClick={() =>
                              navigateToClassMemberPage(classes.classId)
                            }
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
