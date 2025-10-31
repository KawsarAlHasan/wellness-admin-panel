import React, { useState } from "react";
import {
  LeftOutlined,
  RightOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

// === SAMPLE EVENT DATA ===
const eventData = [
  {
    id: 1,
    title: "Breath of Balance",
    clubName: "Yoga club",
    time: "01:00-02:30 AM",
    location: "San Francisco, California",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    date: "2024-12-01",
  },
  {
    id: 2,
    title: "Mindful Morning",
    clubName: "Yoga club",
    time: "03:00-04:30 AM",
    location: "San Francisco, California",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
    date: "2024-12-01",
  },
  {
    id: 3,
    title: "Sunset Flow",
    clubName: "Yoga club",
    time: "05:00-06:00 PM",
    location: "San Francisco, California",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop",
    date: "2024-12-02",
  },
  {
    id: 4,
    title: "Evening Calm",
    clubName: "Yoga club",
    time: "07:00-08:00 PM",
    location: "San Francisco, California",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop",
    date: "2024-12-02",
  },
];

// === MINI COLOR EVENT DATA ===
const eventsData = [
  { date: "2024-12-01", title: "Breath of Balance", color: "#5B8FA3" },
  { date: "2024-12-02", title: "Mindful Morning", color: "#9B8FA3" },
  { date: "2024-12-11", title: "Evening Calm", color: "#5B8FA3" },
  { date: "2024-12-12", title: "Sunset Flow", color: "#9B8FA3" },
  { date: "2024-12-18", title: "Balance Flow", color: "#5B8FA3" },
  { date: "2024-12-29", title: "Breath Session", color: "#5B8FA3" },
];

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11, 1)); // December 2024

  // === DATE UTILITIES ===
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const { daysInMonth, startingDayOfWeek, year, month } =
    getDaysInMonth(currentMonth);

  const monthName = currentMonth.toLocaleString("default", { month: "long" });

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const getEventsForDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return eventsData.filter((event) => event.date === dateStr);
  };

  const hasEventsForDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return eventsData.some((event) => event.date === dateStr);
  };

  // === UPCOMING EVENTS GROUPING ===
  const groupEventsByDate = (events) => {
    return events.reduce((acc, event) => {
      const date = new Date(event.date).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      if (!acc[date]) acc[date] = [];
      acc[date].push(event);
      return acc;
    }, {});
  };

  const groupedEvents = groupEventsByDate(eventData);

  // === CALENDAR RENDER ===
  const renderCalendar = () => {
    const days = [];
    const prevMonthDays = new Date(year, month, 0).getDate();

    // Previous month days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className="relative bg-white border border-gray-200 min-h-[120px] p-2"
        >
          <div className="text-sm text-gray-300 font-medium mb-1">
            {prevMonthDays - i}
          </div>
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDate(day);
      const hasEvents = hasEventsForDate(day);
      const isToday =
        new Date().getFullYear() === year &&
        new Date().getMonth() === month &&
        new Date().getDate() === day;

      days.push(
        <div
          key={day}
          className={`relative border border-gray-200 min-h-[120px] p-2 transition-colors ${
            isToday ? "bg-black text-white" : "bg-white hover:bg-gray-50"
          }`}
        >
          <div
            className={`text-sm font-medium mb-1 ${
              isToday ? "text-white" : "text-gray-700"
            }`}
          >
            {day}
          </div>

          {/* Event dots */}
          {hasEvents && !isToday && (
            <div className="flex justify-center mb-2">
              <div className="flex gap-1">
                {events.slice(0, 3).map((event, idx) => (
                  <div
                    key={idx}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: event.color }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Event labels */}
          <div className="space-y-1">
            {events.slice(0, 2).map((event, idx) => (
              <div
                key={idx}
                className="text-xs text-white px-1.5 py-1 rounded truncate"
                style={{ backgroundColor: event.color }}
              >
                {event.title}
              </div>
            ))}
          </div>

          {/* More indicator */}
          {events.length > 2 && (
            <div className="absolute bottom-2 left-2 bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
              +{events.length - 2}
            </div>
          )}
        </div>
      );
    }

    // Fill next month days to make 6 weeks (42 cells)
    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className="relative bg-white border border-gray-200 min-h-[120px] p-2"
        >
          <div className="text-sm text-gray-300 font-medium mb-1">{day}</div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* === LEFT: CALENDAR === */}
      <div className="col-span-7 bg-white p-6 rounded-xl shadow">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LeftOutlined className="text-lg" />
          </button>
          <h2 className="text-2xl font-semibold">{monthName} {year}</h2>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <RightOutlined className="text-lg" />
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 border border-gray-200">
          {daysOfWeek.map((day, idx) => (
            <div
              key={idx}
              className="text-center text-sm font-semibold text-gray-600 py-3 bg-gray-50 border-b border-gray-200"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">{renderCalendar()}</div>
      </div>

      {/* === RIGHT: UPCOMING EVENTS === */}
      <div className="col-span-5 bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-semibold mb-6">Upcoming Events</h1>
        <div className="space-y-8">
          {Object.entries(groupedEvents).map(([date, events]) => (
            <div key={date}>
              <h3 className="text-lg font-semibold mb-4">
                {date}
              </h3>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {event.clubName}
                      </p>
                      <div className="space-y-1 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ClockCircleOutlined />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <EnvironmentOutlined />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <button className="w-full py-2 px-4 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                        Manage
                      </button>
                    </div>
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;
