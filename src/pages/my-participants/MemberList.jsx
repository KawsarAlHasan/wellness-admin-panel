import React, { useState } from 'react';
import { Table, Select, Tag, Button, Avatar } from 'antd';
import { ClockCircleOutlined, MessageOutlined, CheckOutlined } from '@ant-design/icons';

const { Option } = Select;

function MemberList() {
  const [selectedEvent, setSelectedEvent] = useState('All event');

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar src={record.avatar} size={40} />
          <span className="font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: 'Event joined',
      dataIndex: 'eventJoined',
      key: 'eventJoined',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Confirmed', value: 'Confirmed' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => (
        <Tag color="success" className="rounded-full">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {status}
          </span>
        </Tag>
      ),
    },
    {
      title: 'Checked In',
      dataIndex: 'checkedIn',
      key: 'checkedIn',
      sorter: (a, b) => a.checkedIn.localeCompare(b.checkedIn),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div className="flex items-center gap-2">
          <Button
            type="text"
            icon={<ClockCircleOutlined />}
            className="hover:bg-gray-100"
          />
          <Button
            type="text"
            icon={<MessageOutlined />}
            className="hover:bg-gray-100"
          />
          <Button
            type="primary"
            icon={<CheckOutlined />}
            className="bg-black hover:bg-gray-800"
          />
        </div>
      ),
    },
  ];

  const data = Array.from({ length: 8 }, (_, i) => ({
    key: i,
    name: 'Andrew Chapman',
    avatar: 'https://i.pravatar.cc/150?img=' + (i + 1),
    eventJoined: 'Flow to Calm',
    date: 'July 21',
    status: 'Confirmed',
    checkedIn: 'Yes',
  }));

  return (
    <div className="p-6 bg-white  mt-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Member list</h1>
        <Select
          value={selectedEvent}
          onChange={setSelectedEvent}
          className="w-48"
          suffixIcon={<span>▼</span>}
        >
          <Option value="All event">All event</Option>
          <Option value="Flow to Calm">Flow to Calm</Option>
        </Select>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="member-list-table"
      />

      <style jsx>{`
        :global(.member-list-table .ant-table-thead > tr > th) {
          background-color: white;
          font-weight: 500;
          color: #666;
          border-bottom: 1px solid #f0f0f0;
        }
        :global(.member-list-table .ant-table-tbody > tr:hover) {
          background-color: #fafafa;
        }
        :global(.ant-tag) {
          border: none;
        }
      `}</style>
    </div>
  );
}

export default MemberList;