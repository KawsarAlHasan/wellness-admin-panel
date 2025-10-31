import React from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import MemberList from "./MemberList";

function MyParticipants() {
  return (
    <div>
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold mb-4">Weekly Stats</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="border border-gray-200 p-4">
            <div className="flex">
              <h1 className="text-3xl font-bold">19</h1>
              <h1 className="text-xl font-semibold !mt-1 ml-3">
                Avg. Attendance
              </h1>
            </div>

            <div
              className={`flex !mt-[-15px] mb-2 items-center text-green-500"`}
            >
              <FiArrowUpRight className="text-green-500 mr-1" />
              <span className={`text-sm`}>64% from last week</span>
            </div>
          </div>

          <div className="border border-gray-200 p-4">
            <div className="flex">
              <h1 className="text-3xl font-bold">19</h1>
              <h1 className="text-xl font-semibold !mt-1 ml-3">
                Today’s Bookings
              </h1>
            </div>

            <div className={`flex !mt-[-15px] mb-2 items-center text-red-500`}>
              <FiArrowDownRight className="text-red-500 mr-1" />
              <span className={`text-sm`}>12% from last week</span>
            </div>
          </div>

          <div className="border border-gray-200 p-4">
            <div className="flex">
              <h1 className="text-3xl font-bold">2%</h1>
              <h1 className="text-xl font-semibold !mt-1 ml-3">
                Cancellation rate
              </h1>
            </div>

            <div
              className={`flex !mt-[-15px] mb-2 items-center text-green-500"`}
            >
              <FiArrowUpRight className="text-green-500 mr-1" />
              <span className={`text-sm`}>64% from last week</span>
            </div>
          </div>
        </div>
      </div>


      <MemberList />
    </div>
  );
}

export default MyParticipants;
