"use client";
import Link from "next/link";

export default function Heads() {
  return (
    <section className="bg-blue-100 py-20 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">Want to join us?</h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        Want to come along for a ride?
      </p>
      <Link href="/contact">
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg font-medium rounded-lg text-sm px-6 py-2.5">
          Contact Us
        </button>
      </Link>
    </section>
  );
}
