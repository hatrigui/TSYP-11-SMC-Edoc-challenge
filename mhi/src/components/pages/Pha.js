import Scale from "../../tools/ScaleM";

const Pha = () => {
  return (
    <div>
      <h1 className="text-center text-white text-6xl ">
        Physical Health Assessment 1/2
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          On a scale of 1 to 10, how would you rate your overall physical
          health?
        </h3>
        <Scale />
      </div>

      {/* activities */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          How often do you engage in physical activities (e.g., exercise,
          sports)?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Every day"
                type="radio"
                value="Every day"
                name="activity"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Every day"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Every day
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Between once and 3 times per week"
                type="radio"
                value="Between once and 3 times per week"
                name="activity"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Between once and 3 times per week"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Between once and 3 times per week
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Once a month"
                type="radio"
                value="Once a month"
                name="activity"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Once a month"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Once a month
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Not at all"
                type="radio"
                value="Not at all"
                name="activity"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Not at all"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Not at all
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* entertainment */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          How often do you engage in activities that you enjoy (e.g., hobbies,
          relaxation, entertainment)?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Never"
                type="radio"
                value="Never"
                name="entertainment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Never"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Never
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Occasionally"
                type="radio"
                value="Occasionally"
                name="entertainment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Occasionally"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Occasionally
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Sometimes"
                type="radio"
                value="Sometimes"
                name="entertainment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Sometimes"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sometimes
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Often"
                type="radio"
                value="Often"
                name="entertainment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Often"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Often
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Always"
                type="radio"
                value="Always"
                name="entertainment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Always"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Always
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* medical cond */}
      <div className=" flex flex-col items-center justify-center ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          Do you have any existing medical conditions that you think may impact
          your physical health?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium text-gray-900  border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="medc"
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
                name="medc"
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

      {/* Sleep */}
      <div className=" flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          On average, how many hours of sleep do you get per night?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="4 to 6 hours"
                type="radio"
                value="4 to 6 hours"
                name="sleep"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="4 to 6 hours"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                4 to 6 hours
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="7 to 9 hours"
                type="radio"
                value="Oft7 to 9 hoursen"
                name="sleep"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="7 to 9 hours"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                7 to 9 hours
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="10 to 12 hours"
                type="radio"
                value="10 to 12 hours"
                name="sleep"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="10 to 12 hours"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                10 to 12 hours
              </label>
            </div>
          </li>
        </ul>
      </div>

      <a href="phy_health2">
        <button className="mb-10  w-56 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mt-20 float-right mr-10">
          Next
        </button>
      </a>
    </div>
  );
};

export default Pha;
