import PayoutCard from "./PayoutCard";

function OverView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-baseline">
        <h1 className="font-bold text-black text-xl">Overview</h1>
        <div>
          <select className="p-1 rounded-sm  text-black opacity-80  outline outline-2 outline-outlineGrey bg-white mr-3">
            <option value="">This Month</option>
            <option value="">Last Month</option>
            <option value="">Last 6 Months</option>
            <option value="">Last 12 Months</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-6">
        <PayoutCard
          nextPayout={true}
          amount={"2,312.23"}
          time={"Today, 04:00PM"}
          orders={23}
        />
        <PayoutCard
          amountPending={true}
          amount={"2,312.23"}
          time={"Today, 04:00PM"}
          orders={13}
        />
        <PayoutCard
          amountProcessed={true}
          amount={"2,312.23"}
          time={"Today, 04:00PM"}
          orders={0}
        />
      </div>
    </div>
  );
}

export default OverView;
