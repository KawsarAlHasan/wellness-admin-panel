import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

const weeklyData = [
  { day: 'S', value: 10 },
  { day: 'M', value: 13 },
  { day: 'T', value: 11 },
  { day: 'W', value: 12 },
  { day: 'T', value: 13, isAvg: true },
  { day: 'F', value: 10 },
  { day: 'S', value: 11 },
];

const donutData = [
  { name: 'Event name title', value: 145, color: '#B8E1E8' },
  { name: 'Cancelled', value: 82, color: '#000000' },
  { name: 'Event name title', value: 324, color: '#E8D4B8' },
  { name: 'Event name title', value: 425, color: '#E8E8B8' },
  { name: 'Event name title', value: 215, color: '#D8B8E8' },
];

const CustomBarLabel = (props) => {
  const { x, y, width, value, isAvg } = props;
  if (!isAvg) return null;
  
  return (
    <g>
      <rect
        x={x + width / 2 - 20}
        y={y - 25}
        width={40}
        height={20}
        fill="#000000"
        rx={4}
      />
      <text
        x={x + width / 2}
        y={y - 12}
        fill="#ffffff"
        textAnchor="middle"
        fontSize={12}
        fontWeight="500"
      >
        Avg
      </text>
    </g>
  );
};

const CustomPieLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, value } = props;
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#1f2937"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={14}
      fontWeight="600"
    >
      {value}
    </text>
  );
};

function Chart() {
  return (
    <div className="flex gap-6 pt-2 bg-gray-50">
      {/* Left Card - Average Attendance */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="text-5xl font-semibold">190</h2>
            <span className="text-lg text-gray-600">Avg. Attendance</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <ArrowUpOutlined className="text-xs" />
            <span className="font-medium">64% from last week</span>
          </div>
        </div>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={weeklyData} margin={{ top: 30, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 14 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              domain={[0, 15]}
              ticks={[0, 10, 10, 10, 10, 10, 10]}
              tickFormatter={(value, index) => index === 0 ? '' : '10'}
            />
            <Bar 
              dataKey="value" 
              radius={[0, 0, 0, 0]}
              maxBarSize={50}
              label={<CustomBarLabel />}
            >
              {weeklyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.isAvg ? '#000000' : '#d1d5db'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Right Card - Total Bookings */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="text-5xl font-semibold">530</h2>
            <span className="text-lg text-gray-600">Total Bookings</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600 mb-4">
            <ArrowUpOutlined className="text-xs" />
            <span className="font-medium">64% from last week</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-base font-medium">2% Cancellation rate</span>
            <div className="flex items-center gap-1 text-sm text-red-500">
              <ArrowDownOutlined className="text-xs" />
              <span>12%</span>
            </div>
          </div>
        </div>

        {/* Donut Chart with Legend */}
        <div className="flex items-center gap-12">
          <ResponsiveContainer width={280} height={280}>
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
                label={CustomPieLabel}
                labelLine={false}
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <circle cx="50%" cy="50%" r="65" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            {donutData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;