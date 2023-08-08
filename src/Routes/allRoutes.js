import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import DashboardCrm from "../pages/DashboardCrm";
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import GridTables from '../pages/Tables/GridTables/GridTables';
import CustomerWarehouse from '../pages/Tables/CustomerWarehouse/CustomerWarehouse';
import CustomerTeam from '../pages/Tables/CustomerTeam/CustomerTeam';
import ManagerUser from "../pages/User/User/User";
import Project from "../pages/Setting/Project/Project";
import Unit from "../pages/Setting/Unit/Unit";
import Setting from "../pages/Setting/Setting/Setting";

const authProtectedRoutes = [
  { path: "/dashboard-crm", component: <DashboardCrm /> },

  //Tables
  { path: "/customer", component: <GridTables /> },
  { path: "/customer-warehouse", component: <CustomerWarehouse /> },
  { path: "/customer-team", component: <CustomerTeam /> },

  //User
  { path: "/manager-user", component: <ManagerUser /> },

  // Admin
  { path: "/customer-admin", component: <ManagerUser /> },
  { path: "/customer-warehouse-admin", component: <ManagerUser /> },

  // SETTING
  { path: "/project-admin", component: <Project /> },
  { path: "/unit-admin", component: <Unit /> },
  { path: "/setting-admin", component: <Setting /> },
  { path: "/role-admin", component: <ManagerUser /> },
  { path: "/function-admin", component: <ManagerUser /> },
  { path: "/menu-admin", component: <ManagerUser /> },
  { path: "/status-admin", component: <ManagerUser /> },
  { path: "/arise-admin", component: <ManagerUser /> },
  { path: "/position-admin", component: <ManagerUser /> },
  { path: "/plugin-mail-admin", component: <ManagerUser /> },
  { path: "/plugin-sms-admin", component: <ManagerUser /> },
  { path: "/area-admin", component: <ManagerUser /> },

  // Lịch sử
  { path: "/history-concat-admin", component: <ManagerUser /> },
  { path: "/history-mail-admin", component: <ManagerUser /> },
  { path: "/history-sms-admin", component: <ManagerUser /> },
  { path: "/history-transfer-admin", component: <ManagerUser /> },

  // Product
  { path: "/product-admin", component: <ManagerUser /> },
  { path: "/product-censorship-admin", component: <ManagerUser /> },

  // Team
  { path: "/team-admin", component: <ManagerUser /> },


  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard-crm" />,
  },
  { path: "*", component: <Navigate to="/dashboard-crm" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
];

export { authProtectedRoutes, publicRoutes };