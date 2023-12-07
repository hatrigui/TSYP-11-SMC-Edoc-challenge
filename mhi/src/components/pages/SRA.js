import Scale from "../../tools/ScaleM";

const SRA = () => {
  return (
    <div>
      <h1 className="text-center text-white text-6xl ">
        Social Relationships Assessment 1/2
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          How would you rate the quality of your social relationships?{" "}
        </h3>
        <Scale />
      </div>

      {/* qsr */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          How would you assess the quality of your social relationships with
          your peers?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Everything is going well"
                type="radio"
                value="Everything is going well"
                name="qsr"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Everything is going well"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Everything is going well
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="There are some issues"
                type="radio"
                value="There are some issues"
                name="qsr"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="There are some issues"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                There are some issues
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Continuous conflicts"
                type="radio"
                value="Continuous conflicts"
                name="qsr"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Continuous conflicts"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Continuous conflicts
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Single"
                type="radio"
                value="Not at all"
                name="qsr"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="Single"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Single
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* ss */}
      <div className=" flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          Do you feel that you have a support system (e.g., friends, mentors)
          that you can turn to when you’re feeling stressed or down?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="ss"
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
                name="ss"
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

      {/* rd */}
      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-10 text-2xl text-center">
          Have you encountered relational difficulties recently? Please briefly
          describe
        </h3>
        <input
          className="mt-8 h-12 w-56 sm:w-96 rounded-lg dark:bg-gray-700 border-blue-600 indent-4 text-white shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
          type="text"
          placeholder="Your Answer"
        />
      </div>

      {/* fr */}
      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white mt-20 text-2xl text-center">
          How would you describe your relationship with your family members?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Bad"
                type="radio"
                value="Bad"
                name="fr"
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
                name="fr"
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
                name="fr"
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
                name="fr"
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

      <a href="social_Rel2">
        <button className="w-56 mb-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mt-20 float-right mr-10">
          Next
        </button>
      </a>
    </div>
  );
};

export default SRA;
