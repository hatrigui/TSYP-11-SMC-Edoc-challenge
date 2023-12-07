import React, { useState } from "react";

const Scale = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative mt-8">
      <button
        id="dropdownHelperRadioButton"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        Rate!{" "}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Drop downmenu */}
      {isDropdownVisible && (
        <div
          id="dropdownRadio"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-30 dark:bg-gray-700 dark:divide-gray-600"
          style={{ top: "100%", left: 0 }}
        >
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="1"
                    name="mscale"
                    type="radio"
                    value="1"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="1"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>1</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="2"
                    name="mscale"
                    type="radio"
                    value="2"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="2"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>2</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="3"
                    name="mscale"
                    type="radio"
                    value="3"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="3"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>3</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="4"
                    name="mscale"
                    type="radio"
                    value="4"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="4"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>4</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="5"
                    name="mscale"
                    type="radio"
                    value="5"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="5"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>5</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="6"
                    name="mscale"
                    type="radio"
                    value="6"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="6"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>6</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="7"
                    name="mscale"
                    type="radio"
                    value="7"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="7"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>7</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="8"
                    name="mscale"
                    type="radio"
                    value="8"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="8"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>8</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="9"
                    name="mscale"
                    type="radio"
                    value="9"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="9"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>9</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="10"
                    name="mscale"
                    type="radio"
                    value="10"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="10"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>10</div>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Scale;
