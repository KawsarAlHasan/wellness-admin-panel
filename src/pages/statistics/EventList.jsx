import React, { useState } from 'react';
import { ClockCircleOutlined, EnvironmentOutlined, MoreOutlined } from '@ant-design/icons';
import { Select } from 'antd';

const eventData = [
  {
    id: 1,
    title: "Breath of Balance",
    clubName: "Yoga club",
    time: "01:00-02:30 AM",
    location: "San Francisco, California",
    participants: 190,
    totalClicks: 4000,
    bookingRatio: "60%",
  },
  {
    id: 2,
    title: "Breath of Balance",
    clubName: "Yoga club",
    time: "01:00-02:30 AM",
    location: "San Francisco, California",
    participants: 190,
    totalClicks: 4000,
    bookingRatio: "60%",
  },
  {
    id: 3,
    title: "Breath of Balance",
    clubName: "Yoga club",
    time: "01:00-02:30 AM",
    location: "San Francisco, California",
    participants: 190,
    totalClicks: 4000,
    bookingRatio: "60%",
  },
];

function EventList() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="bg-white p-6 mt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Your event list</h1>
        <Select
          value={selectedFilter}
          onChange={setSelectedFilter}
          style={{ width: 150 }}
          options={[
            { value: 'all', label: 'All event' },
            { value: 'upcoming', label: 'Upcoming' },
            { value: 'past', label: 'Past' },
            { value: 'cancelled', label: 'Cancelled' },
          ]}
        />
      </div>

      {/* Event List */}
      <div className="space-y-4">
        {eventData.map((event, index) => (
          <div
            key={event.id}
            className="flex items-center gap-6 py-6 border-b border-gray-100 last:border-0"
          >
            {/* Event Number */}
            <div className="text-2xl font-semibold text-gray-900 w-12">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Event Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.clubName}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <ClockCircleOutlined />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <EnvironmentOutlined />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex gap-4">
              {/* Participants */}
              <div className="bg-gray-50 rounded-lg px-6 py-4 min-w-[160px] border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Participants</p>
                <p className="text-base font-semibold">{event.participants} participants</p>
              </div>

              {/* Total Click Insight */}
              <div className="bg-gray-50 rounded-lg px-6 py-4 min-w-[160px] border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Total Click insight</p>
                <p className="text-base font-semibold">{event.totalClicks.toLocaleString()}</p>
              </div>

              {/* View to Booking Ratio */}
              <div className="bg-gray-50 rounded-lg px-6 py-4 min-w-[160px] border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">View to Booking ratio</p>
                <p className="text-base font-semibold">{event.bookingRatio}</p>
              </div>
            </div>

            {/* More Options */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreOutlined className="text-xl text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;