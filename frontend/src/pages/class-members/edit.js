import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { ArrowBack, Headphones } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Button, Divider, SvgIcon, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { isEmpty } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AvatarDefault from "../../assets/images/avatar_default.jpeg";
import AppDatePicker from "../../components/AppInput/AppDatePicker";
import AppInput from "../../components/AppInput/AppInput";
import AppRadioButton from "../../components/AppInput/AppRadioButton";
import AppTextArea from "../../components/AppInput/AppTextArea";
import ScoreCard from "../../components/Score";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import { addScore, getClassMember } from "../../redux/classMemberSlice";
import { updateInfo } from "../../redux/userSlice";
import AddGradeDialog from "./add-grade";
import AppInputPhone from "../../components/AppInput/AppInputPhone";

function EditClassMemberPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const classId = params.get("classId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classMember = useSelector((state) => state.classMember.specific);
  const isRefresh = useSelector((state) => state.classMember.isRefresh);

  const grade = classMember?.student?.grades?.find(
    (x) => x.classId === classMember.classId
  );

  React.useEffect(() => {
    dispatch(getClassMember({ email, classId }));
  }, [isRefresh]);

  useEffect(() => {
    setValues({
      ...classMember?.student,
      enrollmentDate: classMember?.enrollmentDate,
      classId: classMember?.classId,
    });
    if (grade !== undefined) {
      setScore(grade);
    } else {
      setScore({
        classId: classId,
        studentEmail: email,
        gradeName: "Điểm cuối khóa",
        listening: 0,
        speaking: 0,
        writing: 0,
        reading: 0,
        overall: 0,
      });
    }
  }, [classMember]);

  const [values, setValues] = useState(classMember);
  const [score, setScore] = useState(
    grade ?? {
      classId: classId,
      studentEmail: email,
      gradeName: "Điểm cuối khóa",
      listening: 0,
      speaking: 0,
      writing: 0,
      reading: 0,
      overall: 0,
    }
  );

  const handleChangeScoreValue = (key, value) => {
    setScore((prevValues) => {
      const updatedScores = {
        ...prevValues,
        [key]: value,
      };
      return {
        ...updatedScores,
        overall: calculateOverall(updatedScores),
      };
    });
  };

  const calculateOverall = (scores) => {
    const { listening, speaking, writing, reading } = scores;
    // Convert text values to numbers, defaulting to 0 if conversion fails
    const total = [listening, speaking, writing, reading]
      .map((score) => parseFloat(score) || 0)
      .reduce((acc, val) => acc + val, 0);

    return total / 4;
  };

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleCancel = () => {
    navigate(ROUTE_CONSTANTS.ADMIN.STAFF_PAGE);
  };

  const handleSubmitAccount = () => {
    dispatch(updateInfo(values));
  };

  const handleSubmitScore = () => {
    dispatch(addScore(score));
  };
  const dialogRef = useRef(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.openDialog();
    }
  };

  return (
    <Box className="my-4 ml-72 p-4 ">
      <Stack direction={"row"} spacing={3}>
        <Box
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
          p={2}
        >
          <Typography variant="h6" fontWeight={600} mb={2}>
            Thông tin học viên
          </Typography>
          <Stack spacing={2}>
            <div
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                width: "500px",
                height: "250px",
              }}
              className="bg-blue-gray-500 shadow-blue-gray-500/40  relative   overflow-hidden rounded-xl rounded-xl bg-white bg-clip-border bg-clip-border text-gray-700 text-white shadow-lg shadow-md"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={
                  isEmpty(values?.avatar_url)
                    ? AvatarDefault
                    : values?.avatar_url
                }
                alt="img-blur-shadow"
              />
            </div>
            <AppInput
              value={values?.avatar_url}
              title={"avatar_url"}
              handleChangeValue={handleChangeValue}
              placeholder={"Ảnh thẻ"}
            />

            <AppInput
              value={values?.name}
              title={"name"}
              handleChangeValue={handleChangeValue}
              placeholder={"Họ và tên "}
            />
            <AppInput
              value={values?.address}
              title={"address"}
              handleChangeValue={handleChangeValue}
              placeholder={"Địa chỉ"}
            />
            <AppDatePicker
              value={values?.date_of_birth}
              title={"date_of_birth"}
              handleChangeValue={handleChangeValue}
              placeholder={"Ngày sinh"}
            />

            <AppDatePicker
              value={values?.enrollmentDate}
              title={"enrollmentDate"}
              handleChangeValue={handleChangeValue}
              placeholder={"Ngày nhập học"}
            />
            <AppInput
              value={values?.email}
              disabled={true}
              title={"email"}
              handleChangeValue={handleChangeValue}
              placeholder={"Email"}
            />
            <AppInputPhone
              value={values?.phone}
              title={"phone"}
              handleChangeValue={handleChangeValue}
              placeholder={"Số điện thoại"}
            />
            <AppTextArea
              height={"h-[175px]"}
              value={values?.description}
              title={"description"}
              handleChangeValue={handleChangeValue}
              placeholder={"Mô tả"}
            />
            <AppRadioButton
              value={values?.gender}
              handleChangeValue={handleChangeValue}
            />

            <Divider />
            <Stack spacing={2} direction={"row"} justifyContent={"end"}>
              <Button
                color="success"
                variant="contained"
                className=" w-full"
                onClick={handleCancel}
              >
                <SvgIcon className="mr-2">
                  <ArrowBack />
                </SvgIcon>
                Quay trở lại
              </Button>
              <Button
                onClick={handleSubmitAccount}
                color="primary"
                variant="contained"
                className="w-full"
              >
                <SvgIcon className="mr-2">
                  <HandThumbUpIcon />
                </SvgIcon>
                Lưu
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            width: "100%",
          }}
          p={2}
        >
          <Stack direction={"row"} spacing={2} mb={2}>
            <Typography variant="h6" fontWeight={600}>
              Điểm môn học
            </Typography>
            <Button
              onClick={handleOpenDialog}
              color="primary"
              variant="contained"
              size="small"
            >
              <SvgIcon>{grade ? <PencilIcon /> : <PlusIcon />}</SvgIcon>
            </Button>
          </Stack>
          {grade && (
            <Stack direction={"column"} spacing={2}>
              <Stack direction={"row"} spacing={2}>
                <ScoreCard
                  title={"Listening"}
                  icon={<Headphones />}
                  score={score.listening}
                  color={"#FCF596"}
                />
                <ScoreCard
                  title={"Reading"}
                  icon={<AutoStoriesIcon />}
                  score={score.reading}
                  color={"#FBD288"}
                />
                <ScoreCard
                  title={"Writing"}
                  icon={<PencilIcon />}
                  score={score.writing}
                  color={"#C4E1F6"}
                />
                <ScoreCard
                  title={"Speaking"}
                  icon={<VolumeUpIcon />}
                  score={score.speaking}
                  color={"#FFF1DB"}
                />
              </Stack>
              <ScoreCard
                title={"Overall"}
                icon={<SportsScoreIcon />}
                score={score.overall}
                color={"#C2FFC7"}
              />
            </Stack>
          )}

          <AddGradeDialog
            ref={dialogRef}
            values={score}
            handleChangeValue={handleChangeScoreValue}
            handleSubmit={handleSubmitScore}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default EditClassMemberPage;
