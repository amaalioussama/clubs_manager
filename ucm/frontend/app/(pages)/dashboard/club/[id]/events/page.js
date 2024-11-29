import Image from "next/image";

// components
import Add from "./_components/Add";
import View from "./_components/View";
import Edit from "./_components/Edit";
import Delete from "./_components/Delete";

// Fetch Events
const getEvents = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/club-events/${id}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      return;
    }

    const result = await response.json();
    return result?.events;
  } catch (error) {
    console.error(error);
  }
};

export default async function Events({ params }) {
  const id = params.id;
  const data = await getEvents(id);

  return (
    <div className="h-full w-full flex flex-col gap-y-28 p-10 overflow-y-auto">
      {/* Search Input */}
      <form className="w-full">
        <div className="w-full max-w-[350px] relative text-sm">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="w-full py-3 outline-none border-b border-solid text-black placeholder:text-gray-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </form>

      {/* Events */}
      <div className="w-full flex flex-col gap-y-5">
        <div className="w-full flex justify-between items-center bg-white py-2">
          <h1 className="font-medium">Events ({data?.length})</h1>
          <Add id={id} />
        </div>

        <ul className="w-full grid grid-cols-4 gap-5">
          {data?.map((item, key) => (
            <li key={key}>
              <div className="w-full flex justify-center items-center">
                <div className="group w-full max-w-[300px] h-[300px] rounded-3xl border flex flex-col justify-start items-center overflow-hidden">
                  <div className="w-full h-1/2 overflow-hidden border-b">
                    {item?.picture && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_APP_BASE_FILE_PATH}/events/${item?.picture}`}
                        alt="Background"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    )}
                  </div>
                  <div className="w-full h-1/2 flex flex-col justify-between items-center gap-y-3 p-3 text-sm">
                    <h2 className="font-original_surfer text-center line-clamp-2">
                      {item?.name}
                    </h2>
                    <div className="w-full flex flex-col gap-y-1 text-xs text-gray-600">
                      <span className="line-clamp-1">
                        Location:{" "}
                        <span className="text-black font-medium">
                          {item?.location}
                        </span>
                      </span>
                      <span>
                        Date:{" "}
                        <span className="text-black font-medium">
                          {item?.date}
                        </span>
                      </span>
                    </div>
                    <div className="w-full flex justify-end items-center gap-x-1">
                      <View event={item} id={id} />
                      <Edit event={item} />
                      <Delete id={item?.id} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const revalidate = 0;