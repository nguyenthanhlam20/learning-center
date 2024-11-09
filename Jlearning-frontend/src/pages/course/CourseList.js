import Breadcrumb from "../../components/Common/Breadcrumb";
import CourseCard from "../../components/Course/CourseCard";

const CourseList = ({ data }) => {
  return (
    <>
      <Breadcrumb
        pageName="Khóa học"
        description="Tổng hợp các khóa học thịnh hành"
      />
      <div className="relative w-full pb-40 pl-20 pr-20">
        <div
          className={` grid h-full w-full grid-cols-1 gap-x-8 gap-y-10 duration-700 ease-in-out md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 `}
        >
          {data.map((course, index) => (
            <CourseCard key={"course-" + index} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseList;
