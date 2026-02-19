
const SignUp = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4 lg:p-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden min-h-[600px]">

        {/* Left Section: Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-5 bg-indigo-900 rounded-sm clip-mountain"></div>
            <span className="font-bold text-gray-800 tracking-tight">himalayas</span>
          </div>

          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Sign up</h1>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Create an account to start posting jobs and build your remote team with Himalayas.
          </p>

          {/* Google Button */}
          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-md py-2.5 px-4 hover:bg-gray-50 transition-colors mb-6">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
          </button>

          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-xs text-gray-400">or sign up using email</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2.5 border-b border-gray-300 focus:outline-none focus:border-indigo-600 transition-colors"
              />
            </div>

            <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 rounded-md transition-all flex items-center justify-center gap-2 group">
              Continue
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account? <a href="#" className="text-indigo-600 font-semibold hover:underline">Sign in</a>
          </p>
        </div>

        {/* Right Section: Abstract Background */}
        <div className="hidden lg:block lg:w-1/2 bg-indigo-800 relative overflow-hidden">
          {/* Abstract concentric circles to mimic the image */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-900">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[40px] border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-[40px] border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-[40px] border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] border-[40px] border-white/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;