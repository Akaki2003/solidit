import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

const TransactionCard = ({
  Id,
  Title,
  Author,
  Description,
  Price,
  timestamp,
}) => {
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
  2xl:min-w-[450px]
  2xl:max-w-[500px]
  sm:min-w-[270px]
  sm:max-w-[300px]
  flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2">
          <p className="text-white text-base">
            Title:{Title} Author:{Author} Description:{Description} Price:
            {Price}
          </p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2x1:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3x1 text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3x1 text-center my-2">
            Connect your account to see the latest changes
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Transactions;
