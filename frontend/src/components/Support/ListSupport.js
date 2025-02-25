import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  SvgIcon,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AppInput from "../../components/AppInput/AppInput";
import { ACTION_TYPE } from "../../constants/constants";
import {
  deleteSupport,
  insertSupport,
  updateSupport,
} from "../../redux/supportSlice";
import { SupportTable } from "../../sections/table/support-table";
import AppTextArea from "../AppInput/AppTextArea";
import ConfirmDialog from "../Confirm";

const ListSupport = ({ data }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [supports, setSupports] = useState(data);
  const [supportsPagination, setSupportsPagination] = useState(
    supports.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [currentSupport, setCurrentSupport] = useState(null);
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });
  const [actionType, setActionType] = React.useState(ACTION_TYPE.INSERT);
  const [values, setValues] = React.useState({
    support_name: "",
    message: "",
  });

  React.useEffect(() => {
    if (isOpenModal === false) {
      setValues({
        support_name: "",
        message: "",
      });
      setCurrentSupport(null);
    }
  }, [isOpenModal]);

  // console.log(data);
  React.useEffect(() => {
    setSupports(data);
    setSupportsPagination(
      data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [data]);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handlePageChange = (value) => {
    setPage(value);
    setSupportsPagination(
      supports.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
    );
  };

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
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
    if (supports.length < endIndex) endIndex = supports.length;

    setSupportsPagination(supports.slice(0, endIndex));
  };
  React.useEffect(() => {
    const result = data.filter((support) =>
      support?.support_name
        .toLowerCase()
        .includes(searchTerm.value.toLowerCase())
    );
    setSupports(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result.length < endIndex) endIndex = result.length;

    setSupportsPagination(result.slice(0, endIndex));
  }, [searchTerm.value]);

  const handleClearSearch = () => {
    setSearchTerm({
      value: "",
    });
  };

  const handleSubmit = () => {
    if (actionType === ACTION_TYPE.INSERT) {
      dispatch(
        insertSupport({
          support_name: values.support_name,
          message: values.message,
        })
      );
      setValues({
        support_name: "",
        message: "",
      });
    } else {
      const newValues = {
        ...values,
        support_id: currentSupport.support_id,
      };
      console.log(newValues);
      dispatch(updateSupport(newValues));
      setValues({
        support_name: "",
        message: "",
      });
    }
    setIsOpenModal(false);
  };

  const handleDeleteSupport = (status) => {
    console.log(currentSupport);
    if (status === true) {
      dispatch(deleteSupport(currentSupport));
      setCurrentSupport(null);
    }
    setIsOpenConfirmModal(false);
  };

  React.useEffect(() => {
    if (currentSupport !== null) {
      setValues(currentSupport);
    }
  }, [currentSupport]);

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
            <Card sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
              <div className="flex flex-row justify-between">
                <Stack direction={"row"} spacing={2}>
                  <div className="w-96 ">
                    <AppInput
                      value={searchTerm.value}
                      handleChangeValue={handleChangeSearchTerm}
                      placeholder={"Tìm kiếm hỗ trợ"}
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
                <Button
                  onClick={() => {
                    setActionType(ACTION_TYPE.INSERT);
                    setIsOpenModal(true);
                  }}
                  variant="contained"
                  color="primary"
                >
                  <SvgIcon sx={{ mr: 1 }}>
                    <PlusIcon />
                  </SvgIcon>
                  Thêm mới hỗ trợ
                </Button>
              </div>
            </Card>
            {supports.length > 0 ? (
              <SupportTable
                count={supports.length}
                items={supportsPagination}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                setIsOpenModal={setIsOpenModal}
                setIsOpenConfirmModal={setIsOpenConfirmModal}
                isOpenModal={isOpenModal}
                setActionType={setActionType}
                setCurrentSupport={setCurrentSupport}
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

      <Dialog
        maxWidth="md"
        fullWidth
        open={isOpenModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>Thêm mới hỗ trợ</DialogTitle>
        <DialogContent
          sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            p: 0,
            pb: 2,
            height: 380,
            width: "100%",
          }}
          dividers
        >
          <Box sx={{ p: 5 }}>
            <Stack direction={"column"} spacing={2}>
              <div>
                <AppInput
                  placeholder={"Tiêu đề"}
                  value={values.support_name}
                  title={"support_name"}
                  handleChangeValue={handleChangeValue}
                />
              </div>
              <div className="h-[170px]">
                <AppTextArea
                  height={"h-[160px]"}
                  value={values.message}
                  title={"message"}
                  handleChangeValue={handleChangeValue}
                  placeholder={"Nội dung"}
                />
              </div>
              <div className="flex w-full justify-end">
                <Button
                  variant="contained"
                  sx={{ mr: 2 }}
                  title="Hủy"
                  className="bg-cteal"
                  onClick={handleCloseModal}
                >
                  Hủy
                </Button>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                >
                  Lưu
                </Button>
              </div>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
      <ConfirmDialog
        title={"Xác nhận xóa hỗ trợ"}
        description={"Hỗ trợ sẽ bị khóa. Bạn có muốn tiếp tục?"}
        isOpen={isOpenConfirmModal}
        handleAction={handleDeleteSupport}
      />
    </>
  );
};

export default ListSupport;
