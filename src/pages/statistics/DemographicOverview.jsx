import React from "react";

const genderData = [
  { label: "Female", percentage: 80, color: "#E8E8B8" },
  { label: "Female", percentage: 80, color: "#D8B8E8" },
  { label: "Other", percentage: 180, color: "#000000" },
];

const ageGroupData = [
  { label: "15-20", percentage: 80, color: "#E8E8B8" },
  { label: "21-25", percentage: 80, color: "#F5D5C8" },
  { label: "26-29", percentage: 80, color: "#B8E1E8" },
  { label: "30-40", percentage: 80, color: "#D8B8E8" },
  { label: "41+", percentage: 180, color: "#000000" },
];

const overviewStats = [
  { label: "Total Event", value: "5" },
  { label: "Total Event", value: "5" },
  { label: "Total membership", value: "631" },
  { label: "Most absentees day", value: "Saturday" },
  { label: "Online event grew", value: "3%" },
  { label: "Peak Booking Hours", value: "15:30 (evenings)" },
];

function DemographicOverview() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Overview */}
      <div className="bg-white lg:col-span-5 col-span-12 p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-6">Overview</h2>
        
        <div className="space-y-4">
          {overviewStats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="text-gray-700 text-base">{stat.label}</span>
              <span className="text-gray-500 text-base">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Demographic */}
      <div className="bg-white lg:col-span-7 col-span-12 p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-6">Audience Demographic</h2>
        
        {/* Gender Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-medium">Gender</h3>
            <span className="text-sm text-gray-400">Event name title</span>
          </div>
          
          {/* Gender Bar */}
          <div className="flex h-8 rounded-full overflow-hidden mb-4">
            {genderData.map((item, index) => (
              <div
                key={index}
                style={{
                  width: `${item.percentage / genderData.length}%`,
                  backgroundColor: item.color,
                }}
                className="transition-all duration-300 hover:opacity-80"
              ></div>
            ))}
          </div>
          
          {/* Gender Legend */}
          <div className="flex flex-wrap gap-6">
            {genderData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-700">
                  {item.label} <span className="text-gray-500">{item.percentage}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Age Group Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-medium">Age Group</h3>
            <span className="text-sm text-gray-400">Event name title</span>
          </div>
          
          {/* Age Group Bar */}
          <div className="flex h-8 rounded-full overflow-hidden mb-4">
            {ageGroupData.map((item, index) => (
              <div
                key={index}
                style={{
                  width: `${item.percentage / ageGroupData.length}%`,
                  backgroundColor: item.color,
                }}
                className="transition-all duration-300 hover:opacity-80"
              ></div>
            ))}
          </div>
          
          {/* Age Group Legend */}
          <div className="flex flex-wrap gap-6">
            {ageGroupData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-700">
                  {item.label} <span className="text-gray-500">{item.percentage}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemographicOverview;