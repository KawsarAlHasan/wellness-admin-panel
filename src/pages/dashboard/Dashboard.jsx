import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { LuMoveDownLeft } from "react-icons/lu";
import UpComingEvent from "./UpComingEvent";

const resentActivityFeedUrl = [
  {
    id: 1,
    user_name: "Emma Johnson",
    user_image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 2,
    user_name: "Smriti Mandhana",
    user_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qi8ikek8cNQw2jpnm18HomCIDOn7_akviA&s",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 3,
    user_name: "Asifa Khan",
    user_image:
      "https://media.licdn.com/dms/image/v2/D5603AQFhoHcZy24fhQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726601238966?e=2147483647&v=beta&t=YD8rAQ4xvlhdHfeouuC99WEcAejgf4x_qirim95bhaU",
    status: "Active",
    last_time: "5 hours ago",
  },
  {
    id: 1,
    user_name: "Emma Johnson",
    user_image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 2,
    user_name: "Smriti Mandhana",
    user_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qi8ikek8cNQw2jpnm18HomCIDOn7_akviA&s",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 3,
    user_name: "Asifa Khan",
    user_image:
      "https://media.licdn.com/dms/image/v2/D5603AQFhoHcZy24fhQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726601238966?e=2147483647&v=beta&t=YD8rAQ4xvlhdHfeouuC99WEcAejgf4x_qirim95bhaU",
    status: "Active",
    last_time: "5 hours ago",
  },
  {
    id: 1,
    user_name: "Emma Johnson",
    user_image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 2,
    user_name: "Smriti Mandhana",
    user_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qi8ikek8cNQw2jpnm18HomCIDOn7_akviA&s",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 3,
    user_name: "Asifa Khan",
    user_image:
      "https://media.licdn.com/dms/image/v2/D5603AQFhoHcZy24fhQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726601238966?e=2147483647&v=beta&t=YD8rAQ4xvlhdHfeouuC99WEcAejgf4x_qirim95bhaU",
    status: "Active",
    last_time: "5 hours ago",
  },
  {
    id: 1,
    user_name: "Emma Johnson",
    user_image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 2,
    user_name: "Smriti Mandhana",
    user_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qi8ikek8cNQw2jpnm18HomCIDOn7_akviA&s",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 3,
    user_name: "Asifa Khan",
    user_image:
      "https://media.licdn.com/dms/image/v2/D5603AQFhoHcZy24fhQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726601238966?e=2147483647&v=beta&t=YD8rAQ4xvlhdHfeouuC99WEcAejgf4x_qirim95bhaU",
    status: "Active",
    last_time: "5 hours ago",
  },
  {
    id: 1,
    user_name: "Emma Johnson",
    user_image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 2,
    user_name: "Smriti Mandhana",
    user_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qi8ikek8cNQw2jpnm18HomCIDOn7_akviA&s",
    status: "Blocked",
    last_time: "2 hours ago",
  },
  {
    id: 3,
    user_name: "Asifa Khan",
    user_image:
      "https://media.licdn.com/dms/image/v2/D5603AQFhoHcZy24fhQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726601238966?e=2147483647&v=beta&t=YD8rAQ4xvlhdHfeouuC99WEcAejgf4x_qirim95bhaU",
    status: "Active",
    last_time: "5 hours ago",
  },
];

const weeklyStats = [
  {
    id: 1,
    title: "Total Events",
    value: "5",
    label: null,
    labelValue: null,
  },
  {
    id: 2,
    title: "Total memberships",
    value: "631",
    label: null,
    labelValue: null,
  },
  {
    id: 3,
    title: "Avg. Attendance",
    value: "19",
    label: "up",
    labelValue: "64% from last week",
  },
  {
    id: 4,
    title: "Today’s Bookings",
    value: "18",
    label: "down",
    labelValue: "-12% from last week",
  },
  {
    id: 5,
    title: "Cancellation rate",
    value: "2%",
    label: "up",
    labelValue: "20% from last week",
  },
];

function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-7">
          <div className="">
            <h2 className="text-[24px] font-bold mb-4">
              Good morning, Coach Emma
            </h2>
            <p className="text-[32px] text-[#000000]">
              You have 3 Sessions Ongoing, 2 New Event Requests & 12 New
              Sign-ups Today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4">
              <h2 className="mb-10 !text-[24px]">Recent Activity Feed</h2>

              <div className="mt-6">
                {resentActivityFeedUrl.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex justify-between items-center mb-2 border-b border-gray-200"
                  >
                    <div className="flex items-center">
                      <img
                        src={activity.user_image}
                        alt={activity.user_name}
                        className="w-9 h-9 rounded-full mr-2"
                      />
                      <div>
                        <p className="font-semibold !mt-2">
                          {activity.user_name}{" "}
                          {activity.status === "Blocked" ? (
                            <span className="text-red-500">
                              ({activity.status})
                            </span>
                          ) : (
                            <span className="text-green-500">
                              ({activity.status})
                            </span>
                          )}
                        </p>
                        <p className="text-gray-600 !mt-[-7px]">Inner Pause</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{activity.last_time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="!text-[24px]">Weekly Stats</h2>
                <Link to="/see-all">See all</Link>
              </div>
              <div className="mt-6">
                {weeklyStats.map((stat) => (
                  <div key={stat.id} className="mb-2 border-b border-gray-200">
                    <p className="text-3xl text-gray-600">{stat.value}</p>
                    <p className="font-semibold text-2xl !mt-[-20px]">
                      {stat.title}
                    </p>

                    {stat.labelValue && (
                      <div
                        className={`flex !mt-[-15px] mb-2 items-center ${
                          stat.label === "up"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {stat.label === "up" && (
                          <FiArrowUpRight className="text-green-500 mr-1" />
                        )}
                        {stat.label === "down" && (
                          <FiArrowDownRight className="text-red-500 mr-1" />
                        )}
                        <span className={`text-sm`}>{stat.labelValue}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-white p-4">
          <h1 className="text-[24px] font-bold mb-4">Upcoming event</h1>
          <UpComingEvent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
