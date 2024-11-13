const AppInputDecimalNumber = ({
  disabled,
  placeholder,
  value,
  handleChangeValue,
  title,
  height = "",
  max = 10, // Default max is set to 10
}) => {
  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    // Allow only numbers and a single decimal point
    let numericValue = inputValue.replace(/[^0-9.]/g, "");

    // Ensure there's only one decimal point
    const decimalIndex = numericValue.indexOf(".");
    if (decimalIndex !== -1) {
      numericValue =
        numericValue.slice(0, decimalIndex + 1) +
        numericValue.slice(decimalIndex + 1).replace(/\./g, "");
    }

    // Prevent leading zeros unless it's a decimal number less than 1
    if (
      numericValue.startsWith("0") &&
      numericValue.length > 1 &&
      numericValue[1] !== "."
    ) {
      numericValue = numericValue.replace(/^0+/, "");
    }

    // Convert to number to compare with max, handling empty input as "0"
    const numericValueAsNumber = parseFloat(numericValue) || 0;
    if (numericValueAsNumber > max) {
      numericValue = max.toString(); // Set to max if it exceeds the limit
    }

    handleChangeValue(title, numericValue);
  };

  return (
    <>
      <div className="w-full">
        <div className="relative h-10 w-full p-0">
          <input
            className={`peer ${height} border-blue-gray-200  text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 h-full  w-full rounded-[7px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-2 disabled:border-blue-500 disabled:border-t-transparent disabled:outline-0 `}
            placeholder=" "
            value={value}
            disabled={disabled}
            onChange={handleInputChange}
          />
          <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 0 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-blue-500 peer-disabled:text-[11px] peer-disabled:leading-tight peer-disabled:text-blue-500 peer-disabled:before:border-l-2 peer-disabled:before:border-t-2 peer-disabled:before:border-blue-500 peer-disabled:after:border-r-2 peer-disabled:after:border-t-2 peer-disabled:after:border-blue-500">
            {placeholder}
          </label>
        </div>
      </div>
    </>
  );
};

export default AppInputDecimalNumber;
