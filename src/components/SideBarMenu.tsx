import { ChevronDownIcon } from "@radix-ui/react-icons";
function SideBarMenu() {
  return (
    <div className="text-white bg-sidebar w-fit p-2  pt-1 h-full flex flex-col justify-between">
      <div className="flex flex-col justify-between">
        <div className="flex space-x-4 items-center mb-4 p-2">
          <div className="h-[39px] w-[39px] bg-[#4f46e5]  text-center rounded-sm">
            B
          </div>
          <div>
            <h1 className="opacity-80 hover:text-[#7e22ce]">
              {" "}
              <a href="https://twitter.com/basavaraj9600" target="_blank">
                Basavaraj
              </a>
            </h1>
            <p className="underline text-[13px] font-thin opacity-50">
              Visit store
            </p>
          </div>
          <div>
            <ChevronDownIcon className="scale-[200%] ml-16 opacity-80" />
          </div>
        </div>
        <ul className="space-y-1">
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      d="M20.8278 22.5H16.1811C15.7598 22.5 15.3556 22.3333 15.0568 22.0364C14.758 21.7394 14.5888 21.3363 14.5862 20.915V14.5947H10.3727V20.915C10.3701 21.3363 10.2009 21.7394 9.90213 22.0364C9.60332 22.3333 9.19915 22.5 8.77787 22.5H4.13117C3.64552 22.5 3.17977 22.3071 2.83637 21.9637C2.49297 21.6203 2.30005 21.1545 2.30005 20.6689V9.59358C2.30043 9.30848 2.36738 9.0274 2.49557 8.77274C2.62375 8.51808 2.80963 8.29686 3.0384 8.12672L11.4852 1.86549C11.8019 1.62823 12.1871 1.5 12.5828 1.5C12.9786 1.5 13.3638 1.62823 13.6805 1.86549L21.9599 8.11688C22.1799 8.29411 22.3563 8.51934 22.4758 8.7753C22.5952 9.03127 22.6545 9.31117 22.6491 9.59358V20.6689C22.6504 20.9089 22.6042 21.1468 22.5133 21.3689C22.4223 21.591 22.2884 21.7929 22.1191 21.9631C21.9499 22.1333 21.7487 22.2683 21.527 22.3604C21.3054 22.4526 21.0678 22.5 20.8278 22.5ZM16.2795 20.8264H20.8475C20.8875 20.8239 20.9251 20.8062 20.9526 20.7769C20.98 20.7477 20.9952 20.709 20.9952 20.6689V9.59358C20.996 9.57052 20.991 9.54762 20.9807 9.52698C20.9704 9.50634 20.955 9.48862 20.9361 9.47545L12.637 3.22406C12.6094 3.20543 12.5768 3.19549 12.5435 3.19549C12.5101 3.19549 12.4776 3.20543 12.4499 3.22406L4.01303 9.48529C3.99266 9.50007 3.97589 9.51925 3.96395 9.54141C3.95202 9.56357 3.94524 9.58813 3.94412 9.61327V20.6689C3.94412 20.7107 3.96071 20.7507 3.99025 20.7803C4.01979 20.8098 4.05986 20.8264 4.10163 20.8264H8.66958V14.4273C8.67216 14.0287 8.83168 13.647 9.1136 13.3651C9.39551 13.0832 9.77713 12.9237 10.1758 12.9211H14.7536C14.9527 12.9198 15.1501 12.9577 15.3345 13.0327C15.519 13.1077 15.6868 13.2183 15.8285 13.3582C15.9702 13.498 16.083 13.6645 16.1604 13.8479C16.2378 14.0313 16.2783 14.2282 16.2795 14.4273V20.8264Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Home</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.6565 2.38484C17.4341 1.43551 16.5868 0.75 15.5964 0.75H9.40376L9.24665 0.755896L9.08336 0.774508L8.92277 0.805705C7.97344 1.0281 7.28793 1.87545 7.28793 2.86583V3.12387H5.53334L5.3533 3.12861C3.74368 3.21353 2.43701 4.42974 2.43701 5.96217V20.4117L2.44234 20.5806C2.53775 22.0885 3.90266 23.25 5.53334 23.25H19.4668L19.6469 23.2453C21.2565 23.1604 22.5632 21.9442 22.5632 20.4117V5.96217L22.5578 5.79325C22.4624 4.28536 21.0975 3.12387 19.4668 3.12387H17.7122V2.86583L17.7064 2.70872L17.6877 2.54543L17.6565 2.38484ZM17.7122 4.67204V4.93005C17.7122 5.92042 17.0267 6.76777 16.0774 6.99017L15.9168 7.02137L15.7535 7.03998L15.5964 7.04587H9.40376C8.41338 7.04587 7.56604 6.36037 7.34364 5.41103L7.31244 5.25044L7.29383 5.08716L7.28793 4.93005V4.67204H5.53334C4.71075 4.67204 4.06518 5.20286 3.99208 5.84131L3.98518 5.96217V20.4117C3.98518 21.062 4.58236 21.631 5.38128 21.6957L5.53334 21.7019H19.4668C20.2894 21.7019 20.935 21.171 21.0081 20.5326L21.015 20.4117V5.96217C21.015 5.31193 20.4178 4.74285 19.6189 4.67815L19.4668 4.67204H17.7122ZM9.71307 1.93693H15.2871C15.8235 1.93693 16.2909 2.281 16.4605 2.78236L16.4965 2.91087L16.5184 3.04335L16.5256 3.1755L16.525 4.64049L16.5142 4.78717L16.4887 4.92102L16.4443 5.06278C16.3138 5.40435 16.038 5.66932 15.6906 5.79012L15.5571 5.82854L15.4176 5.85183L15.2871 5.85895L9.69299 5.85829L9.54631 5.84749L9.41246 5.82198L9.2707 5.77762C8.92913 5.64711 8.66417 5.37125 8.54336 5.02387L8.50495 4.8904L8.48166 4.75086L8.47454 4.62037L8.47519 3.15538L8.48599 3.0087L8.5115 2.87485L8.55586 2.73309C8.68637 2.39152 8.96223 2.12656 9.30961 2.00575L9.44309 1.96734L9.58262 1.94405L9.71307 1.93693Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M7.05561 12.7151C7.62587 12.7151 8.08817 12.2528 8.08817 11.6826C8.08817 11.1123 7.62587 10.65 7.05561 10.65C6.48534 10.65 6.02304 11.1123 6.02304 11.6826C6.02304 12.2528 6.48534 12.7151 7.05561 12.7151Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M10.1533 10.7382C9.63491 10.7382 9.21464 11.1585 9.21464 11.6769C9.21464 12.1953 9.63491 12.6156 10.1533 12.6156H18.0384C18.5568 12.6156 18.9771 12.1953 18.9771 11.6769C18.9771 11.1585 18.5568 10.7382 18.0384 10.7382H10.1533Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M9.21468 16.9826C9.21468 16.4642 9.63495 16.0439 10.1534 16.0439H18.0384C18.5568 16.0439 18.9771 16.4642 18.9771 16.9826C18.9771 17.5011 18.5568 17.9213 18.0384 17.9213H10.1534C9.63495 17.9213 9.21468 17.5011 9.21468 16.9826Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M7.05565 18.0208C7.62592 18.0208 8.08821 17.5585 8.08821 16.9883C8.08821 16.418 7.62592 15.9557 7.05565 15.9557C6.48538 15.9557 6.02308 16.418 6.02308 16.9883C6.02308 17.5585 6.48538 18.0208 7.05565 18.0208Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Orders</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      d="M20.9971 13C21.8255 13 22.4971 13.6716 22.4971 14.5V20.5C22.4971 21.3284 21.8255 22 20.9971 22H14.9971C14.1686 22 13.4971 21.3284 13.4971 20.5V14.5C13.4971 13.6716 14.1686 13 14.9971 13H20.9971ZM10 13C10.8284 13 11.5 13.6716 11.5 14.5V20.5C11.5 21.3284 10.8284 22 10 22H4C3.17157 22 2.5 21.3284 2.5 20.5V14.5C2.5 13.6716 3.17157 13 4 13H10ZM20.797 14.7H15.197V20.3H20.797V14.7ZM9.8 14.7H4.2V20.3H9.8V14.7ZM10 2C10.8284 2 11.5 2.67157 11.5 3.5V9.5C11.5 10.3284 10.8284 11 10 11H4C3.17157 11 2.5 10.3284 2.5 9.5V3.5C2.5 2.67157 3.17157 2 4 2H10ZM20.9971 2C21.8255 2 22.4971 2.67157 22.4971 3.5V9.5C22.4971 10.3284 21.8255 11 20.9971 11H14.9971C14.1686 11 13.4971 10.3284 13.4971 9.5V3.5C13.4971 2.67157 14.1686 2 14.9971 2H20.9971ZM9.8 3.7H4.2V9.3H9.8V3.7ZM20.797 3.7H15.197V9.3H20.797V3.7Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Products</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 3.64444C1.5 3.18285 1.87256 2.80865 2.33214 2.80865H16.1974C16.657 2.80865 17.0296 3.18285 17.0296 3.64444V15.7136C17.0296 16.1752 16.657 16.5494 16.1974 16.5494H2.33214C1.87256 16.5494 1.5 16.1752 1.5 15.7136V3.64444ZM3.16429 4.48023V14.8778H15.3653V4.48023H3.16429Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3653 8.28647C15.3653 7.82488 15.7378 7.45069 16.1974 7.45069H19.8948C20.1155 7.45069 20.3272 7.53874 20.4832 7.69548L23.2563 10.4807C23.4123 10.6374 23.5 10.85 23.5 11.0717V15.7137C23.5 16.1753 23.1274 16.5495 22.6679 16.5495L16.1974 16.5494C15.7378 16.5494 15.3653 16.1753 15.3653 15.7137V8.28647ZM17.0295 9.12226V14.8779H21.8357V11.4179L19.5501 9.12226H17.0295Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.49167 16.5494C5.67499 16.5494 5.01293 17.2144 5.01293 18.0346C5.01293 18.8549 5.67499 19.5198 6.49167 19.5198C7.30835 19.5198 7.9704 18.8549 7.9704 18.0346C7.9704 17.2144 7.30835 16.5494 6.49167 16.5494ZM3.34865 18.0346C3.34865 16.2912 4.75583 14.8778 6.49167 14.8778C8.22751 14.8778 9.63469 16.2912 9.63469 18.0346C9.63469 19.7781 8.22751 21.1914 6.49167 21.1914C4.75583 21.1914 3.34865 19.7781 3.34865 18.0346Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.5083 16.5494C17.6916 16.5494 17.0295 17.2144 17.0295 18.0346C17.0295 18.8549 17.6916 19.5198 18.5083 19.5198C19.325 19.5198 19.987 18.8549 19.987 18.0346C19.987 17.2144 19.325 16.5494 18.5083 16.5494ZM15.3653 18.0346C15.3653 16.2912 16.7724 14.8778 18.5083 14.8778C20.2441 14.8778 21.6513 16.2912 21.6513 18.0346C21.6513 19.7781 20.2441 21.1914 18.5083 21.1914C16.7724 21.1914 15.3653 19.7781 15.3653 18.0346Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Delivery</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8" clip-path="url(#clip0_26_3557)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.0289 2.74908C16.1784 2.12208 17.5799 2.95407 17.5799 4.26345V19.7366C17.5799 21.046 16.1784 21.878 15.0289 21.251L5.35635 15.9751H3.35C1.9831 15.9751 0.875 14.867 0.875 13.5001V10.5001C0.875 9.13315 1.9831 8.02506 3.35 8.02506H5.3563L15.0289 2.74908ZM15.6299 4.64247L6.57994 9.57883V14.4213L15.6299 19.3576V4.64247ZM2.825 10.5001C2.825 10.2101 3.06005 9.97506 3.35 9.97506H4.625V14.0251H3.35C3.06005 14.0251 2.825 13.79 2.825 13.5001V10.5001Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M22.8664 6.39095C23.2028 6.81143 23.1346 7.42499 22.7141 7.76138L20.2141 9.76138C19.7936 10.0978 19.1801 10.0296 18.8437 9.60911C18.5073 9.18863 18.5755 8.57507 18.996 8.23868L21.496 6.23868C21.9164 5.9023 22.53 5.97047 22.8664 6.39095Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M19.105 12.0251C19.105 11.4866 19.5415 11.05 20.08 11.05H23.13C23.6685 11.05 24.105 11.4866 24.105 12.0251C24.105 12.5635 23.6685 13 23.13 13H20.08C19.5415 13 19.105 12.5635 19.105 12.0251Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M20.2141 14.7387C19.7936 14.4023 19.1801 14.4705 18.8437 14.891C18.5073 15.3115 18.5755 15.925 18.996 16.2614L21.496 18.2614C21.9164 18.5978 22.53 18.5296 22.8664 18.1091C23.2028 17.6887 23.1346 17.0751 22.7141 16.7387L20.2141 14.7387Z"
                      fill="#FFFFFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_26_3557">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Marketing</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.69507 13.125C3.69507 12.6114 4.11144 12.195 4.62507 12.195H9.87507C10.3887 12.195 10.8051 12.6114 10.8051 13.125C10.8051 13.6386 10.3887 14.055 9.87507 14.055H5.55507V19.875C5.55507 20.3886 5.13869 20.805 4.62507 20.805C4.11144 20.805 3.69507 20.3886 3.69507 19.875V13.125Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.19507 19.875C2.19507 19.3614 2.61144 18.945 3.12507 18.945H21.8751C22.3887 18.945 22.8051 19.3614 22.8051 19.875C22.8051 20.3886 22.3887 20.805 21.8751 20.805H3.12507C2.61144 20.805 2.19507 20.3886 2.19507 19.875Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.94507 8.62501C8.94507 8.11138 9.36144 7.69501 9.87507 7.69501H15.1251C15.6387 7.69501 16.0551 8.11138 16.0551 8.62501C16.0551 9.13863 15.6387 9.55501 15.1251 9.55501H10.8051V19.875C10.8051 20.3886 10.3887 20.805 9.87507 20.805C9.36144 20.805 8.94507 20.3886 8.94507 19.875V8.62501Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.1951 4.12501C14.1951 3.61138 14.6114 3.19501 15.1251 3.19501H20.3751C20.8887 3.19501 21.3051 3.61138 21.3051 4.12501V19.875C21.3051 20.3886 20.8887 20.805 20.3751 20.805H15.1251C14.6114 20.805 14.1951 20.3886 14.1951 19.875V4.12501ZM16.0551 5.05501V18.945H19.4451V5.05501H16.0551Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Analytics</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_26_3571)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 16.5H2.27273C1.29368 16.5 0.5 15.8284 0.5 15V4.5C0.5 3.67157 1.29368 3 2.27273 3H18.2273C19.2063 3 20 3.67157 20 4.5L20 7.5H22.7273C23.7063 7.5 24.5 8.25552 24.5 9.1875V19.3125C24.5 20.2445 23.7063 21 22.7273 21H6.77273C5.79368 21 5 20.2445 5 19.3125V16.5ZM6.5 7.2C5.50589 7.2 4.7 8.00589 4.7 9V14.7H2.3V4.8H18.2L18.2 7.2H6.5ZM14.75 17.25C16.4069 17.25 17.75 15.9069 17.75 14.25C17.75 12.5931 16.4069 11.25 14.75 11.25C13.0931 11.25 11.75 12.5931 11.75 14.25C11.75 15.9069 13.0931 17.25 14.75 17.25Z"
                      fill="#FFFFFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_26_3571">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Payouts</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      d="M15.815 7.39496C15.991 7.5318 16.1088 7.72999 16.145 7.94995C16.1771 8.16667 16.1233 8.38736 15.995 8.56496L10.37 16.065C10.292 16.1729 10.1891 16.2604 10.07 16.3199C9.94872 16.3798 9.81522 16.4107 9.67999 16.41C9.49717 16.4081 9.31929 16.3505 9.16999 16.245C9.07972 16.1748 9.00336 16.0882 8.94496 15.9899C8.88109 15.8956 8.84003 15.7878 8.82498 15.6749C8.80997 15.5655 8.80997 15.4544 8.82498 15.3449C8.8597 15.238 8.91028 15.1369 8.97499 15.045L14.6 7.54497C14.6685 7.45501 14.7541 7.37951 14.8519 7.32286C14.9498 7.26622 15.0579 7.22956 15.17 7.21497H15.305C15.4906 7.21476 15.6706 7.2783 15.815 7.39496Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M14.6572 13.1285C14.858 13.0461 15.073 13.0042 15.29 13.005C15.507 13.0042 15.7221 13.0461 15.9228 13.1285C16.1236 13.2108 16.3061 13.332 16.46 13.485C16.6898 13.7162 16.8461 14.0102 16.909 14.33C16.9719 14.6498 16.9387 14.9811 16.8136 15.282C16.6884 15.583 16.4769 15.8401 16.2057 16.021C15.9346 16.2019 15.616 16.2985 15.29 16.2985C14.9641 16.2985 14.6455 16.2019 14.3743 16.021C14.1032 15.8401 13.8916 15.583 13.7665 15.282C13.6413 14.9811 13.6081 14.6498 13.671 14.33C13.734 14.0102 13.8902 13.7162 14.12 13.485C14.2739 13.332 14.4564 13.2108 14.6572 13.1285Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M10.8351 10.2C11.1429 9.88838 11.3154 9.46802 11.3154 9.03001C11.3154 8.59201 11.1429 8.17165 10.8351 7.86002C10.5234 7.55223 10.1031 7.37964 9.66507 7.37964C9.22707 7.37964 8.8067 7.55223 8.49507 7.86002C8.18477 8.17032 8.01044 8.59118 8.01044 9.03001C8.01044 9.46885 8.18477 9.88971 8.49507 10.2C8.80537 10.5103 9.22623 10.6846 9.66507 10.6846C10.1039 10.6846 10.5248 10.5103 10.8351 10.2Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.58 12.315L23.405 14.145C23.5743 14.5112 23.6565 14.9117 23.645 15.315C23.6479 15.7078 23.5661 16.0967 23.405 16.455C23.2535 16.804 23.0283 17.1161 22.745 17.37C22.4602 17.6253 22.1293 17.8239 21.77 17.955L19.925 18.66C19.7726 18.7137 19.6342 18.8008 19.52 18.915C19.4058 19.0292 19.3186 19.1676 19.265 19.32L18.56 21.165C18.4259 21.5296 18.2163 21.8619 17.945 22.14C17.6744 22.4244 17.3474 22.6492 16.985 22.8C16.6284 22.9583 16.2426 23.0402 15.8525 23.0402C15.4623 23.0402 15.0765 22.9583 14.72 22.8L12.92 22.005C12.7768 21.9285 12.6173 21.8874 12.455 21.885C12.2938 21.8822 12.1343 21.9182 11.99 21.99L10.19 22.815C9.74018 23.0214 9.24374 23.1052 8.7511 23.0578C8.25845 23.0104 7.78716 22.8335 7.38499 22.545C6.90875 22.2157 6.54282 21.7504 6.33498 21.21L5.64499 19.365C5.59134 19.2126 5.50419 19.0742 5.38997 18.96C5.27575 18.8458 5.13735 18.7587 4.98499 18.705L3.125 18C2.76541 17.8766 2.43557 17.6794 2.1566 17.4211C1.87763 17.1628 1.65567 16.849 1.50497 16.5C1.34388 16.1417 1.26201 15.7528 1.26497 15.36C1.26228 14.972 1.34418 14.5881 1.50497 14.235L2.33 12.435C2.45013 12.1366 2.45013 11.8033 2.33 11.505L1.50497 9.705C1.3461 9.34538 1.25948 8.95802 1.25 8.56499C1.24999 8.17395 1.32641 7.78668 1.47499 7.42497C1.61855 7.06236 1.83853 6.73496 2.11998 6.465C2.40047 6.19671 2.73203 5.98756 3.09497 5.84999L4.955 5.16C5.10703 5.09862 5.24485 5.00669 5.35998 4.88997C5.47027 4.77838 5.55697 4.64578 5.61496 4.5L6.30499 2.63997C6.43524 2.26987 6.65108 1.9358 6.93497 1.66498C7.20554 1.38056 7.53254 1.15576 7.89499 1.00497C8.25293 0.85189 8.63819 0.77298 9.0275 0.77298C9.4168 0.77298 9.80202 0.85189 10.16 1.00497L11.96 1.83C12.2583 1.95013 12.5916 1.95013 12.89 1.83L14.69 1.00497C15.045 0.848 15.427 0.761425 15.815 0.75C16.206 0.749987 16.5933 0.826411 16.955 0.974991C17.3123 1.12637 17.6357 1.34767 17.9061 1.62589C18.1766 1.9041 18.3887 2.23358 18.53 2.59497L19.235 4.455C19.293 4.60078 19.3797 4.73338 19.49 4.84497C19.6051 4.96169 19.743 5.05357 19.895 5.11496L21.74 5.80499C22.1004 5.92654 22.4323 6.12052 22.715 6.375C22.9987 6.63447 23.2237 6.95154 23.375 7.30499C23.5433 7.66146 23.6306 8.05075 23.6306 8.44496C23.6306 8.83917 23.5433 9.22851 23.375 9.58498L22.58 11.385C22.5065 11.5287 22.4703 11.6886 22.475 11.85C22.4739 12.011 22.5098 12.1701 22.58 12.315ZM21.755 14.775L21.02 13.035C20.8729 12.6737 20.8064 12.2846 20.825 11.895C20.836 11.4892 20.9332 11.0904 21.11 10.725L21.935 8.92497C22.0404 8.63424 22.0404 8.3157 21.935 8.02496C21.81 7.73911 21.5787 7.51316 21.29 7.39499L19.43 6.705C19.0455 6.57019 18.6966 6.34958 18.41 6.05997C18.1235 5.77079 17.9034 5.42275 17.765 5.03998L17.06 3.17999C17.0132 3.03228 16.9307 2.89834 16.82 2.78998C16.7138 2.68008 16.5862 2.59329 16.445 2.535C16.3063 2.47058 16.1553 2.43718 16.0025 2.43718C15.8496 2.43718 15.6986 2.47058 15.56 2.535L13.76 3.35999C13.3876 3.52812 12.9836 3.61505 12.575 3.61505C12.1664 3.61505 11.7624 3.52812 11.39 3.35999L9.59 2.535C9.4424 2.47479 9.2844 2.44417 9.125 2.44496C8.98154 2.41503 8.83344 2.41503 8.68999 2.44496C8.40413 2.5699 8.17814 2.80128 8.05997 3.09L7.36998 4.94998C7.22375 5.30756 7.00981 5.63355 6.73996 5.91C6.45331 6.19962 6.10451 6.42018 5.71997 6.55499L3.85999 7.24498C3.70033 7.29494 3.55238 7.37657 3.42497 7.48499C3.30819 7.60326 3.21187 7.74011 3.13997 7.88997C3.03454 8.18071 3.03454 8.49924 3.13997 8.78998L3.965 10.59C4.13313 10.9624 4.22006 11.3663 4.22006 11.775C4.22006 12.1836 4.13313 12.5875 3.965 12.96L3.13997 14.76C3.08342 14.8989 3.04801 15.0455 3.03496 15.195C3.03456 15.3495 3.0652 15.5025 3.125 15.645C3.18691 15.7842 3.27325 15.9112 3.37997 16.02C3.49481 16.1224 3.62686 16.2036 3.76999 16.26L5.62997 16.965C6.01364 17.1016 6.36207 17.3219 6.65005 17.6099C6.93804 17.8979 7.15837 18.2463 7.295 18.63L7.98498 20.49C8.10824 20.7753 8.33259 21.0051 8.61496 21.135C8.75506 21.1829 8.90191 21.2082 9.04997 21.21C9.20937 21.2108 9.36737 21.1802 9.51497 21.12L11.315 20.295C11.6874 20.1269 12.0914 20.0399 12.5 20.0399C12.9086 20.0399 13.3125 20.1269 13.685 20.295L15.485 21.12C15.7757 21.2254 16.0943 21.2254 16.385 21.12C16.668 20.9883 16.8886 20.7516 17 20.46L17.705 18.615C17.8398 18.2304 18.0604 17.8816 18.35 17.595C18.6327 17.3005 18.9828 17.0792 19.37 16.95L21.125 16.275C21.2681 16.2186 21.4001 16.1374 21.515 16.035C21.6217 15.9262 21.7081 15.7992 21.77 15.66C21.8298 15.5175 21.8604 15.3645 21.86 15.21C21.8469 15.0605 21.8115 14.9139 21.755 14.775Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Discounts</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.0349 18.3V20.145C18.0369 20.2625 18.0154 20.3791 17.9719 20.4883C17.9283 20.5974 17.8634 20.6967 17.781 20.7805C17.6986 20.8643 17.6004 20.9308 17.4921 20.9762C17.3837 21.0216 17.2674 21.045 17.1499 21.045C16.9112 21.045 16.6823 20.9501 16.5135 20.7814C16.3447 20.6126 16.2499 20.3837 16.2499 20.145V18.3C16.2499 17.5521 15.9528 16.8348 15.4239 16.3059C14.8951 15.7771 14.1778 15.48 13.4299 15.48H6.00487C5.25956 15.4839 4.54617 15.7828 4.02055 16.3112C3.49494 16.8396 3.19986 17.5546 3.19987 18.3V20.145C3.19987 20.3837 3.10508 20.6126 2.93629 20.7814C2.76751 20.9501 2.53856 21.045 2.29987 21.045C2.06117 21.045 1.83227 20.9501 1.66348 20.7814C1.4947 20.6126 1.3999 20.3837 1.3999 20.145V18.3C1.3999 17.0786 1.88505 15.9074 2.74866 15.0438C3.61226 14.1802 4.78355 13.695 6.00487 13.695H13.4299C14.0352 13.693 14.6349 13.8108 15.1945 14.0415C15.7541 14.2722 16.2625 14.6113 16.6905 15.0393C17.1185 15.4673 17.4576 15.9758 17.6884 16.5354C17.9191 17.095 18.0369 17.6947 18.0349 18.3Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.67988 2.54999C8.7691 2.54999 7.87877 2.82008 7.12149 3.32608C6.3642 3.83208 5.77397 4.55129 5.42543 5.39275C5.07688 6.2342 4.98567 7.16008 5.16336 8.05336C5.34104 8.94664 5.77965 9.76719 6.42367 10.4112C7.06769 11.0552 7.88819 11.4938 8.78147 11.6715C9.67476 11.8492 10.6007 11.758 11.4421 11.4095C12.2836 11.0609 13.0028 10.4707 13.5088 9.71339C14.0148 8.95611 14.2849 8.06578 14.2849 7.155C14.2809 5.93489 13.7945 4.76589 12.9317 3.90314C12.069 3.04039 10.9 2.55394 9.67988 2.54999ZM9.67988 9.97501C9.12214 9.97501 8.57693 9.80962 8.11318 9.49976C7.64944 9.18989 7.28796 8.74946 7.07452 8.23418C6.86108 7.71889 6.80526 7.15188 6.91407 6.60486C7.02288 6.05783 7.29148 5.55532 7.68586 5.16093C8.08025 4.76655 8.58271 4.498 9.12974 4.38919C9.67677 4.28038 10.2438 4.3362 10.7591 4.54964C11.2743 4.76308 11.7148 5.12456 12.0246 5.5883C12.3345 6.05205 12.4999 6.59726 12.4999 7.155C12.4999 7.90291 12.2028 8.62016 11.6739 9.14902C11.145 9.67787 10.4278 9.97501 9.67988 9.97501Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.5999 18.3V20.145C23.6019 20.2625 23.5805 20.3791 23.5369 20.4883C23.4933 20.5974 23.4284 20.6967 23.346 20.7805C23.2637 20.8643 23.1654 20.9308 23.0571 20.9762C22.9487 21.0216 22.8324 21.045 22.7149 21.045C22.4762 21.045 22.2473 20.9501 22.0785 20.7814C21.9097 20.6126 21.8149 20.3837 21.8149 20.145V18.3C21.8174 17.6742 21.6105 17.0656 21.2273 16.5709C20.844 16.0762 20.3064 15.7239 19.6999 15.57C19.4693 15.51 19.272 15.361 19.1511 15.1558C19.0302 14.9505 18.9956 14.7057 19.0549 14.475C19.0855 14.3616 19.1385 14.2555 19.2106 14.1627C19.2827 14.07 19.3725 13.9926 19.4749 13.935C19.6092 13.8501 19.7661 13.8082 19.9249 13.815C19.9991 13.8004 20.0756 13.8004 20.1499 13.815C21.1433 14.0697 22.0229 14.6497 22.6482 15.4626C23.2735 16.2755 23.6085 17.2744 23.5999 18.3Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.8949 7.16999C19.9034 8.19944 19.5668 9.20205 18.9387 10.0177C18.3106 10.8334 17.4273 11.4152 16.4299 11.67C16.317 11.7003 16.1992 11.708 16.0834 11.6925C15.9675 11.6771 15.8558 11.6388 15.7549 11.58C15.5529 11.4546 15.4076 11.2555 15.3499 11.025C15.3196 10.9121 15.3119 10.7943 15.3273 10.6785C15.3428 10.5626 15.381 10.451 15.4399 10.35C15.5664 10.1491 15.7649 10.0042 15.9949 9.94496C16.5998 9.78835 17.1356 9.43525 17.5181 8.94113C17.9006 8.447 18.1081 7.83986 18.1081 7.21499C18.1081 6.59012 17.9006 5.98294 17.5181 5.48881C17.1356 4.99468 16.5998 4.64159 15.9949 4.48498C15.7638 4.41933 15.5658 4.26948 15.4399 4.06498C15.3802 3.9643 15.3415 3.85261 15.3261 3.73663C15.3106 3.62065 15.3187 3.50275 15.3499 3.38996C15.3779 3.27639 15.4282 3.16951 15.4978 3.07548C15.5674 2.98145 15.6549 2.90218 15.7553 2.8422C15.8557 2.78222 15.9671 2.74271 16.0829 2.72602C16.1987 2.70934 16.3166 2.71579 16.4299 2.74497C17.4149 2.99662 18.2889 3.56713 18.9157 4.36756C19.5425 5.168 19.8868 6.15339 19.8949 7.16999Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Audience</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      d="M6.35007 12.7067C7.26134 12.7067 8.00007 11.9679 8.00007 11.0567C8.00007 10.1454 7.26134 9.40668 6.35007 9.40668C5.4388 9.40668 4.70007 10.1454 4.70007 11.0567C4.70007 11.9679 5.4388 12.7067 6.35007 12.7067Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M11.3 6.55668C11.3 7.46795 10.5613 8.20668 9.65 8.20668C8.73873 8.20668 8 7.46795 8 6.55668C8 5.64541 8.73873 4.90668 9.65 4.90668C10.5613 4.90668 11.3 5.64541 11.3 6.55668Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M15.3501 8.20668C16.2613 8.20668 17.0001 7.46795 17.0001 6.55668C17.0001 5.64541 16.2613 4.90668 15.3501 4.90668C14.4388 4.90668 13.7001 5.64541 13.7001 6.55668C13.7001 7.46795 14.4388 8.20668 15.3501 8.20668Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M20.3 11.0567C20.3 11.9679 19.5613 12.7067 18.65 12.7067C17.7387 12.7067 17 11.9679 17 11.0567C17 10.1454 17.7387 9.40668 18.65 9.40668C19.5613 9.40668 20.3 10.1454 20.3 11.0567Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.5 23.25C6.35 23.25 1.25 18.15 1.25 12C1.25 5.85 6.35 0.75 12.5 0.75C18.65 0.75 23.75 5.25 23.75 10.8C23.75 14.4 20.75 17.4 17.15 17.4H15.05C14.6 17.4 14.15 17.85 14.15 18.3C14.15 18.6 14.3 18.75 14.45 18.9C14.9 19.35 15.05 19.95 15.05 20.55C15.05 22.05 13.85 23.25 12.5 23.25ZM12.5 2.4C7.25 2.4 2.9 6.75 2.9 12C2.9 17.25 7.25 21.6 12.5 21.6C12.95 21.6 13.4 21.15 13.4 20.7C13.4 20.4 13.25 20.25 13.1 20.1C12.65 19.65 12.5 19.05 12.5 18.45C12.5 17.1 13.7 15.9 15.05 15.9H17.15C19.85 15.9 22.1 13.65 22.1 10.95C22.1 6.15 17.75 2.4 12.5 2.4Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Appearance</span>
            </div>
          </li>
          <li className="p-1 ml-1 rounded cursor-pointer opacity-80 hover:bg-credit">
            <div className="inline-flex items-center space-x-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.07 8.9C22.92 8.6 22.61 8.4 22.27 8.4H13.81L14.74 0.98C14.79 0.6 14.58 0.22 14.22 0.07C14.11 0.02 13.99 0 13.88 0C13.62 0 13.37 0.11 13.2 0.31L2.69996 12.91C2.47996 13.17 2.43996 13.54 2.57996 13.84C2.71996 14.15 3.03996 14.35 3.36996 14.35H11.83L10.9 21.76C10.86 22.15 11.07 22.52 11.42 22.68C11.78 22.83 12.2 22.73 12.45 22.43L22.95 9.83C23.16 9.57 23.21 9.21 23.07 8.9ZM13.01 19.02L13.69 13.58C13.72 13.33 13.64 13.08 13.48 12.89C13.31 12.71 13.07 12.6 12.82 12.6H5.23996L12.63 3.73L11.95 9.16C11.92 9.41 12 9.66 12.17 9.85C12.33 10.04 12.57 10.15 12.82 10.15H20.4L13.01 19.02Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
              <span>Plugins</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="rounded p-2 sticky -bottom-0">
        <div className="flex space-x-7 items-center mb-4 p-2 px-6 bg-credit rounded-md">
          <div className="p-2 bg-selected opacity-100 rounded-md ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.99995 3.79745C2.42319 3.79745 1.79995 4.35545 1.79995 5.24745V18.7474C1.79995 19.6394 2.42319 20.1974 2.99995 20.1974H21C21.5767 20.1974 22.2 19.6394 22.2 18.7474V15.8475H17C14.8737 15.8475 13.15 14.1237 13.15 11.9975C13.15 9.87116 14.8737 8.14745 17 8.14745H22.2V5.24745C22.2 4.35545 21.5767 3.79745 21 3.79745H2.99995ZM23.7999 8.14745V5.24745C23.7999 3.65417 22.6323 2.19745 21 2.19745H2.99995C1.36758 2.19745 0.199951 3.65417 0.199951 5.24745V18.7474C0.199951 20.3407 1.36758 21.7974 2.99995 21.7974H21C22.6323 21.7974 23.7999 20.3407 23.7999 18.7474V15.8475H23.85V8.14745H23.7999ZM16 11.9475C16 11.478 16.3806 11.0975 16.85 11.0975H18.15C18.6194 11.0975 19 11.478 19 11.9475C19 12.4169 18.6194 12.7975 18.15 12.7975H16.85C16.3806 12.7975 16 12.4169 16 11.9475ZM14.85 11.9975C14.85 10.81 15.8126 9.84745 17 9.84745H22.15V14.1475H17C15.8126 14.1475 14.85 13.1849 14.85 11.9975Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-thin opacity-50 text-xs line mb-1">
              Available Credits
            </h1>
            <p className=" text-[15px] font-thin">222.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarMenu;
