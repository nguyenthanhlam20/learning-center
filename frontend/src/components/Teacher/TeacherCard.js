import InfoIcon from "@mui/icons-material/Info";
import { Chip, SvgIcon } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherCard = ({ teacher }) => {
  console.log("teacher", teacher);
  const navigate = useNavigate();
  const { avatar_url, name, gender, description } = teacher;

  const handleGoToTeacher = () => {
    navigate("");
  };

  return (
    <div className="h-full w-full">
      <div
        className="wow fadeInUp relative z-10 h-full rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2144]"
        data-wow-delay=".1s"
        style={{ cursor: "pointer" }}
      >
        <div
          onClick={handleGoToTeacher}
          className="relative mb-5 block h-[230px] w-full"
        >
          <img
            src={avatar_url}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className=" rounded  "
            alt="image"
          />
        </div>

        <Stack
          direction={"row"}
          spacing={2}
          mb={3}
          justifyContent={"space-between"}
        >
          <h3 style={{ maxWidth: "100%", overflow: "auto" }}>
            <div
              onClick={handleGoToTeacher}
              style={{ fontSize: "20px", wordWrap: "normal" }}
              className="mb-4 block font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {(gender ? "Thầy" : "Cô") + " " + name}
            </div>
          </h3>
          <div>
            <div
              style={{
                borderRadius: "5px",
                padding: "5px 10px",
                backgroundColor: "#0288d1",
                color: "white",
                fontSize: "13px",
              }}
            >
              IELTS: 8+
            </div>
          </div>
        </Stack>
        <p className="mb-6 h-20 max-h-20 overflow-auto border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {description}
        </p>
        {/* <div className="row mb-1 mt-7 flex border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
          <button
            onClick={() => handleGoToTeacher()}
            className="mr-3 flex w-full items-center justify-center rounded-md bg-cteal p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <InfoIcon />
            </SvgIcon>
            Chi tiết
          </button>
        </div> */}
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
