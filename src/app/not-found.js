// pages/404.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded  transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
