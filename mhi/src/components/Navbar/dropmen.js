import React from "react";

function Dropmen() {
  return (
    <div className="w-full" id="navbar-hamburger">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a
            href="/"
            className="block py-2 px-3 text-gray-900 hover:bg-gray-100 rounded dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://enit.ieee.tn/?fbclid=IwAR26qvyV2XVjlfoJsLM8mphBfROh27N1GUVw0kJmcbB8Ueg-kmB9k9lK4lk"
            target="_blank"
            rel="noreferrer"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href={`${window.location.href}/Podcasts`}
            target="_blank"
            rel="noreferrer"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
          >
            Podcasts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropmen;
