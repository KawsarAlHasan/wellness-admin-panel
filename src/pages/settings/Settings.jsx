import React, { useState } from "react";
import {
  Tabs,
  Table,
  Input,
  Select,
  Button,
  Avatar,
  Tag,
  Switch,
  Upload,
} from "antd";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const { Option } = Select;

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [googleEnabled, setGoogleEnabled] = useState(true);
  const [facebookEnabled, setFacebookEnabled] = useState(false);
  const [appleEnabled, setAppleEnabled] = useState(false);

  // Users table columns
  const userColumns = [
    {
      title: "Member",
      dataIndex: "member",
      key: "member",
      sorter: true,
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar src={record.avatar} size={40} />
          <span className="font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: true,
    },
    {
      title: "Created from",
      dataIndex: "createdFrom",
      key: "createdFrom",
      sorter: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: true,
      render: (role) => (
        <Tag
          color={role === "Admin" ? "purple" : "orange"}
          className="rounded px-3 py-1 border-0"
        >
          {role}
        </Tag>
      ),
    },
    {
      title: "",
      key: "action",
      width: 50,
      render: () => (
        <Button
          type="text"
          icon={<EditOutlined />}
          className="hover:bg-gray-100"
        />
      ),
    },
  ];

  const userData = [
    {
      key: 1,
      member: "Andrew Chapman",
      avatar: "https://i.pravatar.cc/150?img=1",
      email: "andrewchapman@mail.com",
      createdFrom: "3 Years ago",
      role: "Admin",
    },
    {
      key: 2,
      member: "Andrew Chapman",
      avatar: "https://i.pravatar.cc/150?img=2",
      email: "andrewchapman@mail.com",
      createdFrom: "3 Years ago",
      role: "Admin",
    },
    {
      key: 3,
      member: "Andrew Chapman",
      avatar: "https://i.pravatar.cc/150?img=3",
      email: "andrewchapman@mail.com",
      createdFrom: "3 Years ago",
      role: "Member",
    },
    {
      key: 4,
      member: "Andrew Chapman",
      avatar: "https://i.pravatar.cc/150?img=4",
      email: "andrewchapman@mail.com",
      createdFrom: "3 Years ago",
      role: "Member",
    },
    {
      key: 5,
      member: "Andrew Chapman",
      avatar: "https://i.pravatar.cc/150?img=5",
      email: "andrewchapman@mail.com",
      createdFrom: "3 Years ago",
      role: "Member",
    },
  ];

  const tabItems = [
    {
      key: "profile",
      label: "Profile & Account",
      children: (
        <div className="flex justify-center">
          <div className="w-1/2 bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Business info</h2>

            {/* Profile Picture */}
            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-4">
                <Avatar src="https://i.pravatar.cc/150?img=8" size={80} />
                <div>
                  <div className="font-medium mb-1">Profile Picture</div>
                  <div className="flex gap-3">
                    <Button type="link" className="p-0 h-auto text-blue-600">
                      Change
                    </Button>
                    <Button type="link" className="p-0 h-auto !text-red-500">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Name */}
            <div className="mb-4">
              <label className="block text-sm mb-2">Business Name</label>
              <Input defaultValue="Eleana Movement" className="rounded-lg" />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm mb-2">Email address</label>
              <Input
                defaultValue="eleanasimoni@mail.com"
                className="rounded-lg"
              />
            </div>

            {/* Language */}
            <div className="mb-8">
              <label className="block text-sm mb-2">Language Preferences</label>
              <Select
                defaultValue="English"
                className="w-full"
                suffixIcon={<span>▼</span>}
              >
                <Option value="English">English</Option>
                <Option value="Spanish">Spanish</Option>
                <Option value="French">French</Option>
              </Select>
            </div>

            {/* Account Management */}
            <h3 className="text-lg font-semibold mb-4">Account management</h3>

            <Button
              className="w-full !rounded-full !mb-4 border-gray-300"
              size="large"
            >
              Change password
            </Button>

            {/* Two-factor */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-medium">Two-factor authentication</span>
              <Switch
                checked={twoFactorEnabled}
                onChange={setTwoFactorEnabled}
              />
            </div>

            {/* Login Methods */}
            <h3 className="text-base font-semibold mb-4">Login Methods</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <Button className="!p-1.5">
                    <FaFacebook className="w-5 h-5 text-blue-600" />
                  </Button>
                  <span>Facebook</span>
                </div>
                <Switch
                  checked={facebookEnabled}
                  onChange={setFacebookEnabled}
                />
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Button className="!p-1.5">
                    <FcGoogle className="w-5 h-5" />
                  </Button>
                  <div>
                    <div>Google</div>
                    <div className="text-xs text-gray-500">
                      amysimon@mail.com
                    </div>
                  </div>
                </div>
                <Switch checked={googleEnabled} onChange={setGoogleEnabled} />
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Button className="!p-1.5">
                    <FaApple className="w-5 h-5" />
                  </Button>
                  <span>Apple</span>
                </div>
                <Switch checked={appleEnabled} onChange={setAppleEnabled} />
              </div>
            </div>

            {/* Sign out */}
            <Link to="/login">
              <Button danger className="w-full !rounded-full" size="large">
                Sign out
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      key: "users",
      label: "Users",
      children: (
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined className="text-gray-400" />}
              className="w-64 rounded-lg"
            />
            <div className="flex gap-3">
              <Select
                defaultValue="Role"
                className="w-32"
                suffixIcon={<span>▼</span>}
              >
                <Option value="Role">Role</Option>
                <Option value="Admin">Admin</Option>
                <Option value="Member">Member</Option>
              </Select>
              <Button
                type="primary"
                className="bg-black hover:bg-gray-800 rounded-full px-6"
              >
                Add User
              </Button>
            </div>
          </div>

          <Table
            columns={userColumns}
            dataSource={userData}
            pagination={false}
            className="users-table"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={tabItems}
        className="settings-tabs"
      />

      <style jsx>{`
        :global(.settings-tabs .ant-tabs-nav) {
          margin-bottom: 24px;
        }
        :global(.settings-tabs .ant-tabs-tab) {
          padding: 12px 0;
          margin-right: 32px;
          font-size: 16px;
        }
        :global(.settings-tabs .ant-tabs-tab-active) {
          font-weight: 500;
        }
        :global(.settings-tabs .ant-tabs-ink-bar) {
          background: black;
          height: 2px;
        }
        :global(.users-table .ant-table-thead > tr > th) {
          background-color: white;
          font-weight: 500;
          color: #666;
          border-bottom: 1px solid #f0f0f0;
        }
        :global(.users-table .ant-table-tbody > tr:hover) {
          background-color: #fafafa;
        }
        :global(.ant-tag) {
          border: none;
        }
        :global(.ant-switch-checked) {
          background-color: #000;
        }
      `}</style>
    </div>
  );
}

export default Settings;
