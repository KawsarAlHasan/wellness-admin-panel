import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Statistics from "../pages/statistics/Statistics";
import Dashboard from "../pages/dashboard/Dashboard";
import EventCalendar from "../pages/event-calendar/EventCalendar";
import MyParticipants from "../pages/my-participants/MyParticipants";
import Marketing from "../pages/marketing/Marketing";
import NotFound from "../components/NotFound";
import Settings from "../pages/settings/Settings";
import Login from "../pages/authentication/Login";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/event-calendar",
        element: <EventCalendar />,
      },
      {
        path: "/my-participants",
        element: <MyParticipants />,
      },
      {
        path: "/marketing",
        element: <Marketing />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
