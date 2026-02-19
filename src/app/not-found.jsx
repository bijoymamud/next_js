import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen dark:bg-black flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-black text-gray-900 dark:text-white mb-6">
          404
        </h1>

        {/* Main Message */}
        <h2 className="text-2xl font-medium text-gray-600 mb-2 dark:text-white">
          Oops, This Page Not Found!
        </h2>

        {/* Subtext */}
        <p className=" text-gray-900 dark:text-gray-400 ">
          The link might be corrupted,
        </p>
        <p className="text-sm text-gray-900 dark:text-gray-400 mb-8">
          or the page may have been removed
        </p>

        {/* Button */}
        <Link href="/">
          <button className="bg-black dark:bg-white dark:text-black font-semibold text-white px-8 py-3 text-sm hover:dark:bg-gray-200 hover:bg-gray-800 transition-colors duration-200 hover:cursor-pointer">
            GO BACK HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
