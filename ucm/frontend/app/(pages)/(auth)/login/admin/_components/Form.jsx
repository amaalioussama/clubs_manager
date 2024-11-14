import Link from "next/link";

export default function Form() {
  return (
    <form className="w-full flex flex-col gap-y-7">
      <div className="w-full flex flex-col gap-y-0">
        <label for="email">Email</label>
        <div className="group w-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 absolute left-0 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
            />
          </svg>

          <input
            className="w-full border-b border-solid border-gray-500 focus:border-black outline-none py-2 px-6 placeholder:text-gray-500 placeholder:font-light"
            type="email"
            id="email"
            name=""
            placeholder="Type your email here..."
            required
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-0">
        <label for="password">Password</label>
        <div className="flex flex-col gap-y-1">
          <div className="group w-full relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 absolute left-0 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>

            <input
              className="w-full border-b border-solid border-gray-500 focus:border-black outline-none py-2 px-6 placeholder:text-gray-500 placeholder:font-light"
              type="password"
              id="password"
              name=""
              placeholder="Type your password here..."
              required
            />
          </div>

          <div className="w-full flex justify-end">
            <Link href="/" className="text-xs text-red-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>

      <button className="w-full h-[60px] bg-black/80 text-white flex justify-center items-center hover:bg-black duration-300 mt-3">
        Log in
      </button>
    </form>
  );
}
