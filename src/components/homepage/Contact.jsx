const Contact = () => {
  return (
    <div className="relative py-16 px-8 overflow-hidden bg-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Header Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                Get in Touch
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Have an inquiry, suggestion, or collaboration offer?
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below, and let's create something extraordinary together!
              </p>
            </div>
          </div>

          {/* Right Column - Form Section */}
          <div className="space-y-6">
            <form className="w-full grid gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative h-16 bg-gray-200 rounded-2xl px-6">
                  <label className="absolute text-gray-700 text-base lg:text-xl font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-full bg-transparent pt-4 text-gray-800 font-semibold focus:outline-none"
                  />
                </div>
                <div className="relative h-16 bg-gray-200 rounded-2xl px-6">
                  <label className="absolute text-gray-700 text-base lg:text-xl font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full h-full bg-transparent pt-4 text-gray-800 font-semibold focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative h-16 bg-gray-200 rounded-2xl px-6">
                  <label className="absolute text-gray-700 text-base lg:text-xl font-semibold">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full h-full bg-transparent pt-4 text-gray-800 font-semibold focus:outline-none"
                  />
                </div>
                <div className="relative h-16 bg-gray-200 rounded-2xl px-6">
                  <label className="absolute text-gray-700 text-base lg:text-xl font-semibold">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full h-full bg-transparent pt-4 text-gray-800 font-semibold focus:outline-none"
                  />
                </div>
              </div>
              <div className="relative bg-gray-200 rounded-2xl px-6 pt-4">
                <label className="absolute text-gray-700 text-base lg:text-xl font-semibold">
                  Description
                </label>
                <textarea
                  className="w-full h-24 bg-transparent pt-4 text-gray-800 font-semibold resize-none focus:outline-none"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="group hover:scale-105 transition-transform duration-300 rounded-full flex items-center bg-gray-900 p-4">
                <span className="text-white text-base font-medium uppercase px-8">Go back</span>
              </button>
              <button className="group hover:scale-105 transition-transform duration-300 rounded-full flex items-center bg-gray-900 p-4">
                <span className="text-white text-base font-medium uppercase px-8">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
