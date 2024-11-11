import Breadcrumb from "../../components/Common/Breadcrumb";
import TeacherCard from "../../components/Teacher/TeacherCard";

const TeacherList = ({ data }) => {
  return (
    <>
      <Breadcrumb
        pageName="Giảng viên"
        description="Danh sách giảng viên tại trung tâm"
      />
      <div className="relative w-full pb-40 pl-20 pr-20">
        <div
          className={` grid h-full w-full grid-cols-1 gap-x-8 gap-y-10 duration-700 ease-in-out md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 `}
        >
          {data.map((teacher, index) => (
            <TeacherCard key={"teacher-" + index} teacher={teacher} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeacherList;
