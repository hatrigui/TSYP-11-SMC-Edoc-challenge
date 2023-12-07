import Footer from "../footer/Footer";
const Steps = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-md sm:w-full">
          <h1 className="text-xl text-white font-semibold mb-4">
            Please enter your Email
          </h1>
          <p className=" text-white mb-6">Don't worry we will not share it!</p>
          <div className="mb-4">
            <input
              type="email"
              placeholder="you@example.com"
              className=" email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
              required
            />
            <a href="Steps/personal_info">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mt-7">
                Next
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Steps;
