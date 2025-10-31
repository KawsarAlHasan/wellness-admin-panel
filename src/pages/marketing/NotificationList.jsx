import React, { useState } from 'react';
import { Table, Select, Tag, Button, Avatar, Tooltip } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

function NotificationList() {
  const [selectedFilter, setSelectedFilter] = useState('Sent to');

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      width: 100,
    },
    {
      title: 'Notification Title',
      dataIndex: 'notificationTitle',
      key: 'notificationTitle',
      width: 150,
    },
    {
      title: 'Send to',
      dataIndex: 'sendTo',
      key: 'sendTo',
      sorter: true,
      render: (sendTo) => (
        <div className="flex items-center gap-2">
          {sendTo.type === 'multiple' ? (
            <>
              <Avatar.Group maxCount={3} size={32}>
                {sendTo.avatars.map((avatar, idx) => (
                  <Avatar key={idx} src={avatar} />
                ))}
              </Avatar.Group>
              <span className="ml-2">{sendTo.text}</span>
            </>
          ) : sendTo.type === 'group' ? (
            <>
              <Avatar src={sendTo.avatar} size={32} shape="square" />
              <span className="ml-2">{sendTo.text}</span>
            </>
          ) : (
            <>
              <Avatar.Group maxCount={2} size={32}>
                {sendTo.avatars.map((avatar, idx) => (
                  <Avatar key={idx} src={avatar} />
                ))}
              </Avatar.Group>
              <span className="ml-2">{sendTo.text}</span>
            </>
          )}
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: true,
      width: 120,
      render: (status) => (
        <Tag color={status === 'Sent' ? 'success' : 'error'} className="rounded-full border-0">
          <span className="inline-flex items-center gap-1">
            <span className={`w-2 h-2 ${status === 'Sent' ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></span>
            {status}
          </span>
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: 150,
      render: () => (
        <div className="flex items-center gap-2">
          <Tooltip title="Edit">
            <Button
              type="text"
              icon={<EditOutlined />}
              className="hover:bg-gray-100"
            />
          </Tooltip>
          <Tooltip title="View">
            <Button
              type="text"
              icon={<EyeOutlined />}
              className="hover:bg-gray-100"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              type="text"
              icon={<DeleteOutlined />}
              className="text-white bg-red-500 hover:bg-red-600"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'multiple',
        avatars: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=3'],
        text: 'Andrew, Jennifer, Scarlett, and 8 others',
      },
      status: 'Sent',
    },
    {
      key: 2,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'group',
        avatar: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=100&h=100&fit=crop',
        text: 'Breath of Balance',
      },
      status: 'Sent',
    },
    {
      key: 3,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'group',
        avatar: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=100&fit=crop',
        text: 'Breath of Balance',
      },
      status: 'Sent',
    },
    {
      key: 4,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'multiple',
        avatars: ['https://i.pravatar.cc/150?img=4', 'https://i.pravatar.cc/150?img=5', 'https://i.pravatar.cc/150?img=6'],
        text: 'Andrew, Jennifer, Scarlett, and 8 others',
      },
      status: 'Pending',
    },
    {
      key: 5,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'group',
        avatar: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop',
        text: 'Breath of Balance',
      },
      status: 'Sent',
    },
    {
      key: 6,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'multiple',
        avatars: ['https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=8', 'https://i.pravatar.cc/150?img=9'],
        text: 'Andrew, Jennifer, Scarlett, and 8 others',
      },
      status: 'Sent',
    },
    {
      key: 7,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'group',
        avatar: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=100&fit=crop',
        text: 'Breath of Balance',
      },
      status: 'Pending',
    },
    {
      key: 8,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'couple',
        avatars: ['https://i.pravatar.cc/150?img=10', 'https://i.pravatar.cc/150?img=11'],
        text: 'Andrew & Jennifer',
      },
      status: 'Sent',
    },
    {
      key: 9,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'group',
        avatar: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=100&h=100&fit=crop',
        text: 'Breath of Balance',
      },
      status: 'Sent',
    },
    {
      key: 10,
      date: 'July 21',
      notificationTitle: 'Flow to Calm',
      sendTo: {
        type: 'multiple',
        avatars: ['https://i.pravatar.cc/150?img=12', 'https://i.pravatar.cc/150?img=13', 'https://i.pravatar.cc/150?img=14'],
        text: 'Andrew, Jennifer, Scarlett, and 8 others',
      },
      status: 'Pending',
    },
  ];

  return (
    <div className="p-6 bg-white mt-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Notification list</h1>
        <Select
          value={selectedFilter}
          onChange={setSelectedFilter}
          className="w-48"
          suffixIcon={<span>▼</span>}
        >
          <Option value="Sent to">Sent to</Option>
          <Option value="All">All</Option>
          <Option value="Sent">Sent</Option>
          <Option value="Pending">Pending</Option>
        </Select>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="notification-list-table"
      />

      <style jsx>{`
        :global(.notification-list-table .ant-table-thead > tr > th) {
          background-color: white;
          font-weight: 500;
          color: #666;
          border-bottom: 1px solid #f0f0f0;
        }
        :global(.notification-list-table .ant-table-tbody > tr:hover) {
          background-color: #fafafa;
        }
        :global(.ant-tag) {
          border: none;
        }
        :global(.ant-avatar-group .ant-avatar) {
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
}

export default NotificationList;