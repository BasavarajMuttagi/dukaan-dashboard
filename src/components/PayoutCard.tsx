import {
  ChevronRightIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";

import { twMerge } from "tailwind-merge";
function PayoutCard({
  nextPayout = false,
  amountPending = false,
  amountProcessed = false,
  amount = 0,
  time = "-, -:-- --",
  orders = 0,
}: any) {
  return (
    <>
      <div
        className={twMerge(
          `w-full bg-currentCard  text-white  space-y-4 rounded-md max-w-[400px] drop-shadow-md h-fit`,
          amountPending || amountProcessed ? "bg-white text-black" : ""
        )}
      >
        <div className="space-y-3 p-3">
          <div
            className={twMerge(
              "flex items-center space-x-3",
              amountPending || amountProcessed ? "opacity-80" : ""
            )}
          >
            <div className="text-lg font-thin">
              {(nextPayout && "Next Payout") ||
                (amountPending && "Amount Pending") ||
                (amountProcessed && "Amount Processed")}
            </div>
            <QuestionMarkCircledIcon className="scale-[115%] inline-flex" />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-[1000]">₹{amount}</div>
            <div>
              <div
                className={
                  amountPending || amountProcessed ? "text-currentCard" : ""
                }
              >
                <span
                  className={twMerge(
                    "underline font-medium",
                    amountProcessed ? "invisible" : ""
                  )}
                >
                  {orders} orders
                </span>{" "}
                <ChevronRightIcon
                  className={twMerge(
                    "scale-[150%] inline-flex",
                    amountProcessed ? "invisible" : ""
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${
            nextPayout
              ? "visible bg-currentCardNextPayout flex items-center justify-between p-3 w-full rounded-md"
              : "invisible h-0 w-0"
          }`}
        >
          <span>Next Payout Date : </span>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
}

export default PayoutCard;
