import AllAttendance from "../pages/AllAttendance";
import AllLeave from "../pages/AllLeave";
import AllOverTime from "../pages/AllOverTime";
import Contract from "../pages/Contract";
import Department from "../pages/Department";
import Employee from "../pages/Employee";
import Login from "../pages/Login";
import MyAttendance from "../pages/MyAttendance";
import MyLeave from "../pages/MyLeave";
import MyOverTime from "../pages/MyOverTime";

const router = [
  {
    path: "/login",
    component: <Login />,
    layout: false,
  },
  {
    path: "/employee/all",
    title: "Employee",
    component: <Employee />,
    layout: true,
    page: 1,
  },
  {
    path: "/employee/contract",
    title: "Contract",
    component: <Contract />,
    layout: true,
    page: 1,
  },
  {
    path: "/employee/dpartment",
    title: "Departmet",
    component: <Department />,
    layout: true,
    page: 1,
  },
  {
    path: "/attendance/all",
    title: "All Attendance",
    component: <AllAttendance />,
    layout: true,
    page: 2,
  },
  {
    to: "/my-attendance/",
    path: "/my-attendance/:code",
    title: "My Attendance",
    component: <MyAttendance />,
    layout: true,
    page: 2,
  },
  {
    path: "/overtime/all",
    title: "All Overtime",
    component: <AllOverTime />,
    layout: true,
    page: 3,
  },
  {
    to: "/my-overtime/",
    path: "/my-overtime/:code",
    title: "My Overtime",
    component: <MyOverTime />,
    layout: true,
    page: 3,
  },
  {
    path: "/leave/all",
    title: "All Leave",
    component: <AllLeave />,
    layout: true,
    page: 4,
  },
  {
    to: "/my-leave/",
    path: "/my-leave/:code",
    title: "My Leave",
    component: <MyLeave />,
    layout: true,
    page: 4,
  },
];

export default router;
