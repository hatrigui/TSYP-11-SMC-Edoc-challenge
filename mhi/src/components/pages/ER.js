import Scale from "../../tools/ScaleM";

const ER = () => {
  return (
    <div>
      <h1 className="text-center text-white text-6xl ">
        Emotional Resilience and Academic Performance Assessment
      </h1>
      <h1 className="mt-5 text-center text-red-500 text-3xl ">
        Emotional Resilience = Ability to respond to stressful or unexpected
        situations and crises.{" "}
      </h1>

      {/* tcc */}
      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          How do you typically cope with challenges or setbacks in your academic
          and personal life?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Bad"
                type="radio"
                value="Bad"
                name="tcc"
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
                name="tcc"
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
                name="tcc"
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
                name="tcc"
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

      {/* ner */}
      <div className=" flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          Do you have any existing medical conditions that you think may impact
          your physical health?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="ner"
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
                name="ner"
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
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Unsure"
                type="radio"
                value="Unsure"
                name="ner"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Unsure"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Unsure
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* mhr */}
      <div className=" flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          Are you aware of the mental health resources available at your school
          (e.g., counseling services, support groups)?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="mhr"
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
                name="mhr"
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

      {/* mhr2 */}
      <div className=" flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          If yes, have you ever used these resources?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="mhr2"
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
                name="mhr2"
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

      {/* ac */}

      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          How would you rate your academic performance?
        </h3>
        <Scale />
      </div>

      {/* mhap */}
      <div className=" flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          Have you noticed a correlation between your mental health and your
          academic performance?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="mhap"
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
                name="mhap"
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

      {/* mhap2 */}
      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          If yes, could you briefly describe this correlation?
        </h3>
        <input
          className=" w-56 mt-8 h-12 sm:w-96 rounded-lg dark:bg-gray-700 border-blue-600 indent-4 text-white shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
          type="text"
          placeholder="Your Answer"
        />
      </div>

      <a href="recommendations_comments">
        <button className="mb-10 w-56 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mt-20 float-right mr-10">
          Next
        </button>
      </a>
    </div>
  );
};

export default ER;
