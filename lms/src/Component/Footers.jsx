export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Inam Ullah. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-400">
          <a
            href="https://github.com/sheenzada"
            className="hover:text-red-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            className="hover:text-yellow-200 transition"
          >
            LinkedIn
          </a>
          <a
            href="sheenzada7@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
