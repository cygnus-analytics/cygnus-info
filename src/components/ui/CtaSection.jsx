"use client";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="">
      <div className="pb-12 px-4 mx-auto max-w-screen-xl sm:pb-20 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
          Empowering Businesses with Next-Gen IT Solutions
          </h2>

          <p className="mb-8 text-gray-600 sm:text-lg md:text-xl">
           At Cygnus we help organizations stay ahead with
            innovative solutions in cloud computing, AI/ML, cybersecurity,
            networking, and infrastructure. Our mission is to transform
            businesses into agile, secure, and future-ready enterprises.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/solutions"
              className="hidden lg:block text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-3xl text-sm px-5 py-3 text-center"
              >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
