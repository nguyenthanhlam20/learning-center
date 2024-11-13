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
import userSlice, { insertUser } from "../../redux/userSlice";
import { AccountTable } from "../../sections/table/account-table";
import AppInput from "../AppInput/AppInput";
import { AccountDetails } from "./AccountDetails";
import { CSVLink } from "react-csv";
import { FileDownload } from "@mui/icons-material";

const ListAccount = ({ data, roleId, title }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [accounts, setAccounts] = useState(data || []);
  const [accountsPagination, setAccountsPagination] = useState(
    accounts?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });

  const [values, setValues] = useState({
    avatar_url: "",
    name: "",
    email: "",
    address: "",
    date_of_birth: "",
    gender: 1,
    phone: "",
    description: "",
    status: true,
    role_id: roleId,
  });

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };
  const headers = [
    { label: "Họ và tên", key: "name" },
    { label: "Email", key: "email" },
    { label: "Địa chỉ", key: "address" },
    { label: "Ngày sinh", key: "date_of_birth" },
    { label: "Giới tính", key: "gender" },
    { label: "Số điện thoại", key: "phone" },
  ];
  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý " + title));
  }, []);

  // console.log(data);
  React.useEffect(() => {
    setAccounts(data);
    setAccountsPagination(
      data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [data]);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handlePageChange = (value) => {
    setPage(value);
    setAccountsPagination(
      accounts.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
    );
  };

  const handleSubmitAccount = () => {
    if (isEmpty(values.name.trim())) {
      toast.warning("Chưa nhập tên " + title);
      return;
    }

    if (isEmpty(values.address.trim())) {
      toast.warning("Chưa địa chỉ " + title);
      return;
    }

    if (isEmpty(values.email.trim())) {
      toast.warning("Chưa nhập địa chỉ email " + title);
      return;
    }

    if (isEmpty(values.phone.trim())) {
      toast.warning("Chưa nhập số điện thoại " + title);
      return;
    }

    dispatch(insertUser(values));
    setValues({
      avatar_url: "",
      name: "",
      email: "",
      address: "",
      date_of_birth: "",
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
    if (accounts.length < endIndex) endIndex = accounts.length;

    setAccountsPagination(accounts.slice(0, endIndex));
  };
  React.useEffect(() => {
    const result = data.filter((account) =>
      account?.email.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
    setAccounts(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result.length < endIndex) endIndex = result.length;

    setAccountsPagination(result.slice(0, endIndex));
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
                      filename={"accounts.csv"}
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
            {accounts.length > 0 ? (
              <AccountTable
                count={accounts.length}
                items={accountsPagination}
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
              <AccountDetails
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
                  onClick={handleSubmitAccount}
                  color="primary"
                  variant="contained"
                  className="ml-3 w-[150px]"
                >
                  <SvgIcon className="mr-2">
                    <HandThumbUpIcon />
                  </SvgIcon>{" "}
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

export default ListAccount;
