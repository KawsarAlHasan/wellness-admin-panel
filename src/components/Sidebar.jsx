import { Menu } from "antd";
import { AppstoreOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAdminPanelSettings, MdOutlinePostAdd } from "react-icons/md";
import logo from "../assets/mainlogo.png";

import HouseLogo from "../assets/icon/House.png";
import GearSixLogo from "../assets/icon/GearSix.png";
import MegaphoneLogo from "../assets/icon/Megaphone.png";
import UsersThreeLogo from "../assets/icon/UsersThree.png";
import CalendarDotsLogo from "../assets/icon/CalendarDots.png";
import ChartPieSliceLogo from "../assets/icon/ChartPieSlice.png";
import LifebuoyLogo from "../assets/icon/Lifebuoy.png";
import GlobeSimpleLogo from "../assets/icon/GlobeSimple.png";

import { RiUserCommunityFill } from "react-icons/ri";

// import { signOutAdmin, useAdminDashboard } from "../api/api";

const { SubMenu } = Menu;

const Sidebar = ({ onClick }) => {
  const location = useLocation();

  // const { adminDashboard, isLoading, isError, error, refetch } =
  //   useAdminDashboard();

  const navigate = useNavigate();
  const handleSignOut = () => {
    // signOutAdmin();
    navigate("/login");
  };

  // Determine the selected key based on current route
  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === "/") return ["dashboard"];
    if (path === "/statistics") return ["statistics"];
    if (path === "/event-calendar") return ["event-calendar"];
    if (path === "/my-participants") return ["my-participants"];
    if (path === "/marketing") return ["marketing"];
    if (path === "/settings") return ["settings"];
    if (path === "/language") return ["language"];
    if (path === "/support") return ["support"];
    return ["dashboard"];
  };

  const sidebarItems = [
    {
      key: "dashboard",
      icon: <img src={HouseLogo} alt="Dashboard" className="w-5 h-5" />,
      label: <Link to="/">Dashboard</Link>,
    },

    {
      key: "statistics",
      icon: (
        <img src={ChartPieSliceLogo} alt="Statistics" className="w-5 h-5" />
      ),
      label: <Link to="/statistics">Statistics</Link>,
    },
    {
      key: "event-calendar",
      icon: (
        <img src={CalendarDotsLogo} alt="Event Calendar" className="w-5 h-5" />
      ),
      label: <Link to="/event-calendar">Event Calendar</Link>,
    },

    {
      key: "my-participants",
      icon: (
        <img src={UsersThreeLogo} alt="My Participants" className="w-5 h-5" />
      ),
      label: <Link to="/my-participants">My Participants</Link>,
    },

    {
      key: "marketing",
      icon: <img src={MegaphoneLogo} alt="Marketing" className="w-5 h-5" />,
      label: <Link to="/marketing">Marketing</Link>,
    },

    {
      key: "settings",
      icon: <img src={GearSixLogo} alt="Settings" className="w-5 h-5" />,
      label: <Link to="/settings">Settings</Link>,
    },

    // Add logout as a menu item at the bottom
    {
      key: "language",
      icon: <img src={GlobeSimpleLogo} alt="Language" className="w-5 h-5" />,
      label: <Link to="/language">Language</Link>,
      className: "bottom-12",
      style: {
        position: "absolute",
        width: "100%",
      },
    },
    {
      key: "support",
      icon: <img src={LifebuoyLogo} alt="Support" className="w-5 h-5" />,
      label: <Link to="/support">Support</Link>,
      className: "bottom-2",
      style: {
        position: "absolute",
        width: "100%",
      },
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <div className="flex flex-col ml-6">
        <img src={logo} alt="Logo" className="w-12 h-12 my-2 hidden lg:block" />
      </div>

      <Menu
        mode="inline"
        selectedKeys={getSelectedKey()}
        items={sidebarItems}
        onClick={onClick}
        style={{
          height: "calc(100% - 64px)",
          backgroundColor: "#ffffff",
          color: "#002436",
        }}
      />
    </div>
  );
};

export default Sidebar;
