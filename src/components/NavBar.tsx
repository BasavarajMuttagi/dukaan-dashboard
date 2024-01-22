import {
  QuestionMarkCircledIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
function NavBar() {
  return (
    <div>
      <nav className="">
        <ul className="flex justify-between items-center">
          <li>
            <div>
              <span className="font-bold text-black text-xl mr-4">Payouts</span>{" "}
              <QuestionMarkCircledIcon className="inline-block opacity-80" />{" "}
              <span className="text-sm opacity-80">How it works</span>
            </div>
          </li>
          <li>
            <div className="relative w-full ">
              <input
                type="text"
                className="outline-none bg-grey p-2 rounded w-[160%] pl-8"
                placeholder={"      Search features, tutorials, etc."}
              />
              <MagnifyingGlassIcon className="absolute top-3 left-3 scale-[150%] text-[#808080]" />
            </div>
          </li>
          <li>
            <div className="flex space-x-5 mr-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_107079_4436)">
                  <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                  <path
                    d="M28.4211 10.0237L11.1158 13.3823C10.4632 13.499 10 14.1287 10 14.8517V22.5019C10 23.225 10.4632 23.8547 11.1158 23.9713L12.8842 24.3212C13.6 25.6273 14.9474 27.8897 16.7579 29.7323C17.3684 30.362 18.3789 29.8022 18.2526 28.8693C18.0842 27.6331 18.1263 26.3037 18.1895 25.3707L28.4211 27.3766C29.2421 27.5398 30 26.8401 30 25.9072V11.4931C30 10.5602 29.2421 9.86046 28.4211 10.0237ZM16.4632 19.6331C16.4632 19.8897 16.2737 20.0996 16.0421 20.0996H14.3158C14.0842 20.0996 13.8947 19.8897 13.8947 19.6331V17.7206C13.8947 17.464 14.0842 17.2541 14.3158 17.2541H16.0421C16.2737 17.2541 16.4632 17.464 16.4632 17.7206V19.6331ZM21.2842 19.6331C21.2842 19.8897 21.0947 20.0996 20.8632 20.0996H19.1368C18.9053 20.0996 18.7158 19.8897 18.7158 19.6331V17.7206C18.7158 17.464 18.9053 17.2541 19.1368 17.2541H20.8632C21.0947 17.2541 21.2842 17.464 21.2842 17.7206V19.6331ZM26.1263 19.6331C26.1263 19.8897 25.9368 20.0996 25.7053 20.0996H23.9789C23.7474 20.0996 23.5579 19.8897 23.5579 19.6331V17.7206C23.5579 17.464 23.7474 17.2541 23.9789 17.2541H25.6842C25.9158 17.2541 26.1053 17.464 26.1053 17.7206V19.6331H26.1263Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_107079_4436">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_107079_4441)">
                  <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                  <path
                    d="M21.1109 25.5021C20.5156 26.1582 19.4844 26.1582 18.8891 25.5021L13.6151 19.689C12.7406 18.7251 13.4245 17.1811 14.726 17.1811L25.274 17.1811C26.5755 17.1811 27.2594 18.7251 26.3849 19.689L21.1109 25.5021Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_107079_4441">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
