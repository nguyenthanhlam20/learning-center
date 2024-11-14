import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import AppInput from "../../components/AppInput/AppInput";
import { FeedbackTable } from "../../sections/table/feedback-table";

const ListFeedback = ({ data }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [feedbacks, setFeedbacks] = useState(data);

  const [feedbacksPagination, setFeedbacksPagination] = useState(
    feedbacks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handlePageChange = useCallback((value) => {
    setPage(value);
    setFeedbacksPagination(
      feedbacks.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
    );
  }, []);

  const handleChangeSearchTerm = (key, value) => {
    setSearchTerm({
      [key]: value,
    });
  };

  const handleRowsPerPageChange = useCallback((event) => {
    setPage(0);
    setRowsPerPage(event.target.value);

    let endIndex = rowsPerPage;
    if (feedbacks.length < endIndex) endIndex = feedbacks.length;

    setFeedbacksPagination(feedbacks.slice(0, endIndex));
  }, []);

  React.useEffect(() => {
    const result = data.filter((feedback) =>
      feedback?.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
    setFeedbacks(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result.length < endIndex) endIndex = result.length;

    setFeedbacksPagination(result.slice(0, endIndex));
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
            <Card sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
              <Stack direction={"row"} spacing={2}>
                <div className="w-96 ">
                  <AppInput
                    value={searchTerm.value}
                    handleChangeValue={handleChangeSearchTerm}
                    placeholder={"Tìm kiếm phản hồi"}
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
            </Card>
            {feedbacks.length > 0 ? (
              <FeedbackTable
                count={feedbacks.length}
                items={feedbacksPagination}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
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
    </>
  );
};

export default ListFeedback;
