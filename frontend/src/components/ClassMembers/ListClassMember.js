import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  SvgIcon,
} from "@mui/material";
import { capitalize, isEmpty } from "lodash";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { insertClassMember } from "../../redux/classMemberSlice";
import userSlice from "../../redux/userSlice";
import { ClassMemberTable } from "../../sections/table/classMember-table";
import AppInput from "../AppInput/AppInput";
import { ClassMemberDetails } from "./ClassMemberDetails";
import { CSVLink } from "react-csv";
import { FileDownload } from "@mui/icons-material";
import { isValidPhoneNumber, validateEmail } from "../../helpers/validation";

const ListClassMember = ({ data, roleId, title, classId }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [classMembers, setClassMembers] = useState(data || []);
  const [classMembersPagination, setClassMembersPagination] = useState(
    classMembers?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });

  const [values, setValues] = useState({
    classId: classId,
    name: "",
    email: "",
    address: "",
    gender: 1,
    phone: "",
    description: "",
    status: true,
    role_id: roleId,
  });

  const headers = [
    { label: "Tên sinh viên", key: "student.name" },
    { label: "Email", key: "student.email" },
    { label: "Địa chỉ", key: "student.address" },
    { label: "Ngày sinh", key: "student.date_of_birth" },
    { label: "Giới tính", key: "student.gender" },
    { label: "Số điện thoại", key: "student.phone" },
    { label: "Ngày nhập học", key: "enrollmentDate" },
  ];

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý " + title));
  }, []);

  // console.log(data);
  React.useEffect(() => {
    setClassMembers(data);
    setClassMembersPagination(
      data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [data]);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handlePageChange = (value) => {
    setPage(value);
    setClassMembersPagination(
      classMembers.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
    );
  };

  const handleSubmitClassMember = () => {
    if (isEmpty(values.name.trim())) {
      toast.warning("Chưa nhập tên ");
      return;
    }

    if (isEmpty(values.address.trim())) {
      toast.warning("Chưa nhập địa chỉ ");
      return;
    }

    if (isEmpty(values.email.trim())) {
      toast.warning("Chưa nhập địa chỉ email ");
      return;
    }

    if (!validateEmail(values.email.trim())) {
      toast.warning("Địa chỉ email không hợp lệ");
      return;
    }

    if (isEmpty(values.phone.trim())) {
      toast.warning("Chưa nhập số điện thoại ");
      return;
    }

    if (!isValidPhoneNumber(values.phone.trim())) {
      toast.warning("Số điện thoại không hợp lệ");
      return;
    }

    dispatch(insertClassMember(values));
    setValues({
      classId: classId,
      name: "",
      email: "",
      address: "",
      gender: 1,
      phone: "",
      description: "",
      status: true,
      role_id: roleId,
    });

    setIsOpenModal(false);
    // console.log(values);
  };

  const handleChangeSearchTerm = (key, value) => {
    setSearchTerm({
      [key]: value,
    });
  };

  const handleRowsPerPageChange = (event) => {
    const rows = event.target.value;
    setPage(0);
    setRowsPerPage(rows);

    let endIndex = rowsPerPage;
    if (classMembers.length < endIndex) endIndex = classMembers.length;

    setClassMembersPagination(classMembers.slice(0, endIndex));
  };
  React.useEffect(() => {
    const result = data.filter((classMember) =>
      classMember?.student.email
        .toLowerCase()
        .includes(searchTerm.value.toLowerCase())
    );
    setClassMembers(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result.length < endIndex) endIndex = result.length;

    setClassMembersPagination(result.slice(0, endIndex));
  }, [searchTerm.value]);

  const handleClearSearch = () => {
    setSearchTerm({
      value: "",
    });
  };

  return (
    <>
      <Box
        className="ml-72"
        component="main"
        sx={{
          flexGrow: 1,
          py: 0,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Card
              sx={{
                p: 2,

                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              }}
            >
              <div className="flex flex-row justify-between">
                <Stack direction={"row"} spacing={2}>
                  <div className="w-96 ">
                    <AppInput
                      value={searchTerm.value}
                      handleChangeValue={handleChangeSearchTerm}
                      placeholder={"Tìm kiếm " + title}
                      title={"value"}
                    />
                  </div>
                  {searchTerm.value != "" ? (
                    <Button
                      onClick={handleClearSearch}
                      variant="contained"
                      size="medium"
                      color="error"
                    >
                      Xóa
                    </Button>
                  ) : (
                    <></>
                  )}
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <Button variant="contained" color="secondary" size="medium">
                    <CSVLink
                      data={data}
                      headers={headers}
                      filename={"students.csv"}
                    >
                      <SvgIcon sx={{ mr: 1 }}>
                        <FileDownload />
                      </SvgIcon>
                      Xuất excel
                    </CSVLink>
                  </Button>
                  <Button
                    onClick={() => {
                      setIsOpenModal(true);
                    }}
                    variant="contained"
                    color="primary"
                    size="medium"
                  >
                    <SvgIcon sx={{ mr: 1 }}>
                      <PlusIcon />
                    </SvgIcon>
                    Thêm mới
                  </Button>
                </Stack>
              </div>
            </Card>
            {classMembers.length > 0 ? (
              <ClassMemberTable
                count={classMembers.length}
                items={classMembersPagination}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                title={capitalize(title)}
              />
            ) : (
              <>
                <Card
                  sx={{
                    p: 2,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                    height: 525,
                  }}
                >
                  <CardContent>
                    <div className="mt-[200px] h-full w-full text-center text-xl font-bold">
                      Không tìm thấy kết quả
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </Stack>
        </Container>
      </Box>

      <Dialog maxWidth="lg" open={isOpenModal} onClose={handleCloseModal}>
        <DialogTitle>THÊM MỚI {title.toUpperCase()}</DialogTitle>
        <DialogContent
          sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          }}
          dividers
        >
          <div className="my-2">
            <Stack spacing={3}>
              <ClassMemberDetails
                handleChangeValue={handleChangeValue}
                values={values}
                width={900}
              />
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
                  onClick={handleSubmitClassMember}
                  color="primary"
                  variant="contained"
                  className="ml-3 w-[150px]"
                >
                  <SvgIcon className="mr-2">
                    <HandThumbUpIcon />
                  </SvgIcon>
                  Lưu
                </Button>
              </Stack>
            </Stack>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ListClassMember;
