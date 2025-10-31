import { Button, Select } from "antd";
import React from "react";
import Chart from "./Chart";
import DemographicOverview from "./DemographicOverview";
import EventList from "./EventList";

function Statistics() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="bg-white p-4 mb-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Statistics</h1>
          <div>
            <Select
              placeholder="This week (3 Aug- 9 Aug)"
              optionFilterProp="label"
              className="w-48 !h-10 !mr-4"
              onChange={onChange}
              options={[
                {
                  value: "This week (3 Aug- 9 Aug)",
                  label: "This week (3 Aug- 9 Aug)",
                },
                {
                  value: "Last week (26 Jul- 2 Aug)",
                  label: "Last week (26 Jul- 2 Aug)",
                },
              ]}
            />

            <Button
              color="default"
              className="bg-white !px-4 !py-5 !rounded-full"
            >
              Export Data as PDF
            </Button>
          </div>
        </div>
        <Chart />
      </div>

      <DemographicOverview />

      <EventList />
    </div>
  );
}

export default Statistics;
