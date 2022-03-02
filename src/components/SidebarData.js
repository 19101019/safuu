import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <FiIcons.FiLayers />,
    cName: "nav-text",
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: <FaIcons.FaUserCircle />,
    cName: "nav-text",
  },
  {
    title: "Calculator",
    path: "/calculator",
    icon: <AiIcons.AiOutlineCalculator />,
    cName: "nav-text",
  },
  {
    title: "Swap",
    path: "/swap",
    icon: <AiIcons.AiOutlineThunderbolt />,
    cName: "nav-text",
  },
  {
    title: "Docs",
    path: "/docs",
    icon: <HiIcons.HiOutlineDocumentText />,
    cName: "nav-text",
  },
];
