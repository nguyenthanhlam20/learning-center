const AppTextArea = ({
  placeholder,
  value,
  handleChangeValue,
  title,
  height,
  disabled,
}) => {
  return (
    <>
      <div className="w-full">
        <div className="relative w-full">
          <textarea
            disabled={disabled}
            value={value}
            className={`peer ${height} border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 h-full  w-full w-full resize-none rounded-[7px]  rounded-[7px] border border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-2 disabled:border-gray-200 disabled:border-t-transparent disabled:bg-gray-100 disabled:outline-0`}
            placeholder={placeholder}
            onChange={(e) => handleChangeValue(title, e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default AppTextArea;
