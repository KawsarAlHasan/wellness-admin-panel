import { Button } from "antd";
import React from "react";
import pushNotiLogo from "../../assets/icon/Notification.png";
import NotificationList from "./NotificationList";

function Marketing() {
  return (
    <div>
      <div className="bg-white p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="p-4 border border-gray-200">
            <img src={pushNotiLogo} alt="icon" />
          </div>
          <div>
            <h1 className="!mt-0 text-xl font-bold">Push Notification</h1>
            <p className="!mb-0">
              Create and send custom messages to your event participants or
              specific individuals.
            </p>
          </div>
        </div>

        <Button className="!bg-black !rounded-full !py-5 !px-8 !text-white">
          Create Notification
        </Button>
      </div>

      <NotificationList />
    </div>
  );
}

export default Marketing;
