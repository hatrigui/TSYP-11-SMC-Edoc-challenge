const Pi = () => {
  return (
    <div>
      <h1 className="text-center text-white text-6xl ">
        Personal Informations
      </h1>

      {/* Age */}
      <div className=" flex flex-col items-center justify-center ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-10 text-2xl text-center">
          Age:
        </h3>
        <ul className="items-center w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="18-20"
                type="radio"
                value="18-20"
                name="age"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="18-20"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                18-20
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="21-24"
                type="radio"
                value="21-24"
                name="age"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="21-24"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                21-24
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="25-29"
                type="radio"
                value="25-29"
                name="age"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="25-29"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                25-29
              </label>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="30 and above"
                type="radio"
                value="30 and above"
                name="age"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="30 and above"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                30 and above
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* Gender*/}

      <br />
      <div className=" flex flex-col items-center justify-center ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-10 text-2xl text-center">
          Gender:
        </h3>
        <ul className="w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Male"
                type="radio"
                value="Male"
                name="gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Male"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Male
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Female"
                type="radio"
                value="Female"
                name="gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Female"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Female
              </label>
            </div>
          </li>
        </ul>
      </div>
      <br />
      <div className=" flex flex-col items-center justify-center ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-10 text-2xl text-center">
          Field of study (e.g., Engineering, Medical, Finance...)
        </h3>
        <input
          className="mt-3 h-12 sm:w-96 mx-2 w-auto rounded-lg dark:bg-gray-700 border-blue-600 indent-4 text-white shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
          type="text"
          placeholder="Your Answer"
        />
      </div>
      <div>
        <a href="mental_health">
          <button className="mb-10 w-56 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mt-20 float-right mr-10">
            Next
          </button>
        </a>
      </div>
    </div>
  );
};

export default Pi;
