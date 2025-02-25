import { Avatar, Stack } from "@mui/material";
import RatingStar from "../Star";
const defaultAvatar =
  "https://yt3.googleusercontent.com/ytc/AL5GRJUCfVHiY_T0o_KOKqH85MEsTZoEFs0uE4anTUdN5A=s900-c-k-c0x00ffffff-no-rj;";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }) => {
  console.log("testimonial", testimonial);
  let ratingIcons = [];
  for (let index = 0; index < testimonial?.star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full ">
      <div
        className="wow fadeInUp h-full rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center justify-between space-x-1">
          <span style={{ display: "block" }}>
            {testimonial?.course?.course_name}
          </span>
          <RatingStar disabled={true} value={testimonial?.star} />
        </div>

        <p className="mb-8 h-36 overflow-auto border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{testimonial?.message}“
        </p>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Avatar src={testimonial?.emailNavigation?.avatar_url} alt="avatar" />
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {testimonial?.emailNavigation?.name}
            </h5>
            <p className="text-sm text-body-color">{"Học viên tiếng Anh"}</p>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default SingleTestimonial;
