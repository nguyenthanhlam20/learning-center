import SectionTitle from "../Common/SectionTitle";
import CourseCard from "./CourseCard";
import Carousel from "react-material-ui-carousel";
import React from "react";

const CourseCarousel = ({ data, title, paragraph }) => {
  const totalCourse = data.length;
  let totalPage = Math.floor(totalCourse / 3);
  let pageList = [];
  if (Math.floor(totalCourse % 3) != 0) totalPage += 1;

  for (let i = 0; i < totalPage; i++) {
    pageList.push(i);
  }

  const [currentPage, setCurrentPage] = React.useState(1);

  const handleAction = () => {};
  return (
    <section id="pricing" className="relative z-10 ">
      <div className="container">
        <SectionTitle
          title={title}
          paragraph={paragraph}
          center
          width="665px"
        />

        <div className="relative w-full p-10 pt-0">
          <Carousel
            indicators={totalPage > 1 ? true : false}
            autoPlay={true}
            animation="slide"
            navButtonsAlwaysInvisible
            interval={10000}
            index={currentPage - 1}
            className="h-[670px]"
          >
            {pageList.map((pageNumber) => {
              let startIndex = pageNumber * 3;
              let endIndex = startIndex + 3;
              if (endIndex > totalCourse) endIndex = totalCourse;

              return (
                <div
                  key={"item-" + pageNumber}
                  className={`grid h-full w-full grid-cols-1 gap-x-8 gap-y-10 p-3 duration-700 ease-in-out md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 `}
                >
                  {data.slice(startIndex, endIndex).map((course) => (
                    <CourseCard course={course} />
                  ))}
                </div>
              );
            })}
          </Carousel>

          <div className={`${totalPage > 1 ? "block" : "hidden"}`}>
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                } else {
                  setCurrentPage(totalPage);
                }
              }}
              type="button"
              className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center  focus:outline-none"
            >
              <span className="inline-flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-primary transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp sm:h-10 sm:w-10">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (currentPage < totalPage) {
                  setCurrentPage(currentPage + 1);
                } else {
                  setCurrentPage(1);
                }
              }}
              className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center  focus:outline-none"
            >
              <span className="inline-flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-primary transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp sm:h-10 sm:w-10">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default CourseCarousel;
