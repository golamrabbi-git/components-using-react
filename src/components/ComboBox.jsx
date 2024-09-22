import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegTimesCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const ComboBox = ({ options = [], title = "", }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const handleToggleOption = () => {
    setIsToggle((prevState) => !prevState);
  };

  const handleSelectDay = (opt) => {
    setSelectedOption(opt);
    setIsToggle(true);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsToggle((prevState) => !prevState);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef} onClick={handleToggleOption} className="flex justify-center flex-col items-center mt-20">
        <div className="flex items-center justify-between px-3 w-64 h-12 border-sky-600 border hover:border-2 rounded-md cursor-pointer relative">
          <h1 className={`text-gray-600`}>{selectedOption && selectedOption.title}</h1>
          <span
            className={`absolute left-4 select-none transition-transform duration-300 ease-in-out bg-white px-1 ${
             ( selectedOption) &&("-translate-y-6 text-sky-600 text-xs")
            }`}
          > 
            {title}
          </span>
          {isToggle ? (
            <FaAngleUp className="text-xl text-gray-600 mr-4 hover:bg-slate-300 hover:rounded-full" />
          ) : (
            <FaAngleDown className="text-xl text-gray-600 mr-4 hover:bg-slate-300 hover:rounded-full" />
          )}
          {selectedOption && <FaRegTimesCircle className="absolute right-14 text-gray-600  hover:bg-slate-300 hover:rounded-full" onClick={()=> setSelectedOption('')}/>}
        </div>
        {isToggle && (
          <ul className="max-h-64 overflow-y-auto mt-1 border-sky-600 border w-64 rounded-md bg-white">
            {options.map((option, idx) => (
              <li
                key={idx}
                className={`p-2 pl-4 hover:bg-sky-100 cursor-pointer rounded-md ${
                  selectedOption === option ? "bg-sky-200" : "bg-white"
                }`}
                onClick={() => handleSelectDay(option)}
              >
                {option.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
