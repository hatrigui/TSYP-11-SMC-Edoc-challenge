const SRA2 = () => {
  return (
    <div>
      <h1 className="text-center text-white text-6xl ">
        Social Relationships Assessment 2/2
      </h1>

      {/* sl */}
      <div className=" flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          Is your social life influenced by the dynamics within your family?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="sl"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Yes"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yes
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="No"
                type="radio"
                value="No"
                name="sl"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="No"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* sb */}
      <div className=" flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          Do you feel a sense of belonging within your academic community?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="sb"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Yes"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yes
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="No"
                type="radio"
                value="No"
                name="sb"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="No"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* sa */}
      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          What types of social activities or clubs do you participate in, if
          any?
        </h3>
        <input
          className="sm:w-96 mt-8 h-12 w-56 rounded-lg dark:bg-gray-700 border-blue-600 indent-4 text-white shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
          type="text"
          placeholder="Your Answer"
        />
      </div>

      {/* ir */}
      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          How would you rate how involvement in such groups influenced your
          social connections?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Bad"
                type="radio"
                value="Bad"
                name="ir"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Bad"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Bad
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Normal"
                type="radio"
                value="Between once and 3 times per week"
                name="ir"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Normal"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Normal
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Good"
                type="radio"
                value="Good"
                name="ir"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Good"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Good
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Very good"
                type="radio"
                value="Very good"
                name="ir"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Very good"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Very good
              </label>
            </div>
          </li>
        </ul>
      </div>

      <a href="emotional_Res">
        <button className="w-56 mb-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mt-20 float-right mr-10">
          Next
        </button>
      </a>
    </div>
  );
};

export default SRA2;
