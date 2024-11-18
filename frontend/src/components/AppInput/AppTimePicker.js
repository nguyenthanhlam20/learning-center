import { TimePicker } from "@mui/x-date-pickers";
import React from "react";

const AppTimePicker = ({
  disabled,
  placeholder,
  value,
  handleChangeValue,
  title,
  height,
}) => {
  return (
    <div className="w-full">
      <div className="relative h-14 w-full p-0">
        <TimePicker
          style={{ boxShadow: "none", borderTop: "none" }}
          className={`peer ${height} border-blue-gray-200  text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 h-full  w-full rounded-[7px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-2 disabled:border-gray-200 disabled:border-t-transparent disabled:bg-gray-100 disabled:outline-0`}
          label={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            handleChangeValue(title, e);
          }}
        />
      </div>
    </div>
  );
};

export default AppTimePicker;
