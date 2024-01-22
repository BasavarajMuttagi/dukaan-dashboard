import Badge from "./Badge";
import Table from "./Table";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
function Transactions() {
  return (
    <div className="p-4 space-y-8">
      <div>
        <h1 className="font-bold text-black text-xl">
          Transaction | This Month
        </h1>
      </div>
      <div className="flex space-x-5">
        <Badge
          text={"Payout (22)"}
          color="text-black text-opacity-70 bg-outlineGrey"
        />
        <Badge text={"Refunds (8)"} color="bg-currentCard" />
      </div>
      <div className="space-y-4 bg-white p-4 drop-shadow-xl rounded-lg">
        <div className="flex justify-between ">
          <div className="relative">
            <input
              type="text"
              placeholder="Order ID or transaction ID"
              className="  p-2 rounded-sm w-[160%] pl-8 outline outline-2 outline-outlineGrey max-w-sm"
            />
            <MagnifyingGlassIcon className="absolute top-3 left-3 scale-[150%] text-[#808080]" />
          </div>
          <div className="flex space-x-5 opacity-80">
            <div className="outline outline-2 outline-outlineGrey w-fit flex p-2 rounded-sm space-x-2">
              <span>Sort</span>
              <span>
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
                    d="M21.8968 8.97813C21.5858 9.28909 21.0816 9.2891 20.7707 8.97813L17.9796 6.18712L17.9796 19.7353C17.9796 20.175 17.6231 20.5315 17.1834 20.5315C16.7436 20.5315 16.3871 20.175 16.3871 19.7353L16.3871 6.18717L13.2743 9.29991C12.9634 9.61088 12.4592 9.61088 12.1482 9.29991C11.8373 8.98895 11.8373 8.48478 12.1482 8.17381L16.6203 3.70173C16.9313 3.39077 17.4355 3.39076 17.7464 3.70173L21.8968 7.85203C22.2077 8.16299 22.2077 8.66716 21.8968 8.97813ZM2.10316 14.5721C2.41412 14.2611 2.91829 14.2611 3.22926 14.5721L6.02031 17.3631L6.02031 4.26478C6.02031 3.82501 6.37681 3.46851 6.81658 3.46851C7.25635 3.46851 7.61286 3.82501 7.61286 4.26478L7.61285 17.363L10.7256 14.2503C11.0366 13.9393 11.5407 13.9393 11.8517 14.2503C12.1627 14.5612 12.1627 15.0654 11.8517 15.3764L7.37961 19.8485C7.06865 20.1594 6.56448 20.1594 6.25351 19.8485L2.10316 15.6982C1.7922 15.3872 1.7922 14.883 2.10316 14.5721Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </span>
            </div>
            <div className="outline outline-2 outline-outlineGrey w-fit flex p-2 rounded-sm">
              <span>
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
                    d="M11.6651 15.8086C11.7682 15.8514 11.8814 15.875 12 15.875C12.1186 15.875 12.2318 15.8514 12.3349 15.8086C12.4381 15.7659 12.5348 15.7026 12.6187 15.6187L17.6187 10.6187C17.9604 10.277 17.9604 9.72299 17.6187 9.38128C17.277 9.03957 16.723 9.03957 16.3813 9.38128L12.875 12.8876L12.875 3C12.875 2.51675 12.4833 2.125 12 2.125C11.5168 2.125 11.125 2.51675 11.125 3L11.125 12.8876L7.61872 9.38128C7.27701 9.03957 6.72299 9.03957 6.38128 9.38128C6.03957 9.72299 6.03957 10.277 6.38128 10.6187L11.3809 15.6183M11.3831 15.6206C11.4666 15.7035 11.5626 15.7662 11.6651 15.8086L11.3831 15.6206ZM3 16.125C3.48325 16.125 3.875 16.5168 3.875 17V19C3.875 19.2984 3.99353 19.5845 4.2045 19.7955C4.41548 20.0065 4.70163 20.125 5 20.125H19C19.2984 20.125 19.5845 20.0065 19.7955 19.7955C20.0065 19.5845 20.125 19.2984 20.125 19V17C20.125 16.5168 20.5168 16.125 21 16.125C21.4832 16.125 21.875 16.5168 21.875 17V19C21.875 19.7625 21.5721 20.4938 21.0329 21.0329C20.4938 21.5721 19.7625 21.875 19 21.875H5C4.2375 21.875 3.50623 21.5721 2.96707 21.0329C2.4279 20.4938 2.125 19.7625 2.125 19V17C2.125 16.5168 2.51675 16.125 3 16.125Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-auto">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
