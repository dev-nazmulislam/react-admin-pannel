import { FaFileInvoiceDollar, FaUserCheck, FaElementor } from "react-icons/fa";
import {
  MdDashboard,
  MdCalendarToday,
  MdShop,
  MdOutlineMail,
  MdWifi,
} from "react-icons/md";
import {
  AiFillFileText,
  AiOutlineProject,
  AiFillEdit,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsChatDotsFill, BsXDiamondFill } from "react-icons/bs";

// SideBar Data
export const navRoutes = [
  {
    icon: <AiOutlineSearch />,
  },
  {
    path: "/country",
    icon: <MdDashboard />,
  },
  {
    path: "/notification",
    icon: <MdDashboard />,
  },
  {
    path: "/setting",
    icon: <MdDashboard />,
  },
  {
    path: "/profile",
    icon: <MdDashboard />,
  },
];
export const menuRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
    subRoutes: [
      {
        path: "/settings/ecommerce",
        name: "Ecommerce ",
      },
      {
        path: "/settings/sass",
        name: "Sass",
      },
      {
        path: "/settings/crypto",
        name: "Crypto",
      },
    ],
  },
];
export const applicationsRoute = [
  {
    path: "/calendar",
    name: "Calendar",
    icon: <MdCalendarToday />,
  },
  {
    path: "/chat",
    name: "Chat",
    icon: <BsChatDotsFill />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiFillFileText />,
  },
  {
    path: "/ecommerce",
    name: "Ecommerce",
    icon: <MdShop />,
    subRoutes: [
      {
        path: "/settings/ecommerce",
        name: "Ecommerce ",
      },
      {
        path: "/settings/sass",
        name: "Sass",
      },
      {
        path: "/settings/crypto",
        name: "Crypto",
      },
    ],
  },
  {
    path: "/email",
    name: "Email",
    icon: <MdOutlineMail />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
      },
      {
        path: "/settings/2fa",
        name: "2FA",
      },
      {
        path: "/settings/billing",
        name: "Billing",
      },
    ],
  },
  {
    path: "/invoice",
    name: "Invoice",
    icon: <FaFileInvoiceDollar />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
      },
      {
        path: "/settings/2fa",
        name: "2FA",
      },
      {
        path: "/settings/billing",
        name: "Billing",
      },
    ],
  },
  {
    path: "/projects",
    name: "Projets",
    icon: <AiOutlineProject />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
      },
      {
        path: "/settings/2fa",
        name: "2FA",
      },
      {
        path: "/settings/billing",
        name: "Billing",
      },
    ],
  },
  {
    path: "/contacts",
    name: "Contacts",
    icon: <MdWifi />,
  },
];
export const authenticationRoute = [
  {
    path: "/authentication",
    name: "Authentication",
    icon: <FaUserCheck />,
  },
  {
    path: "/utility",
    name: "Utility",
    icon: <BsXDiamondFill />,
    subRoutes: [
      {
        path: "/settings/ecommerce",
        name: "Ecommerce ",
      },
      {
        path: "/settings/sass",
        name: "Sass",
      },
      {
        path: "/settings/crypto",
        name: "Crypto",
      },
    ],
  },
];
export const componentsRoute = [
  {
    path: "/uiElement",
    name: "UI Elements",
    icon: <FaElementor />,
    subRoutes: [
      {
        path: "/settings/ecommerce",
        name: "Ecommerce ",
      },
      {
        path: "/settings/sass",
        name: "Sass",
      },
      {
        path: "/settings/crypto",
        name: "Crypto",
      },
    ],
  },
  {
    path: "/forms",
    name: "Forms",
    icon: <AiFillEdit />,
    subRoutes: [
      {
        path: "/settings/ecommerce",
        name: "Ecommerce ",
      },
      {
        path: "/settings/sass",
        name: "Sass",
      },
      {
        path: "/settings/crypto",
        name: "Crypto",
      },
    ],
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 97,
    value: "25,970",
    prograss: "+2.65%",
    series: [
      {
        name: "Revenue",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Orders",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    prograss: "-0.82%",
    series: [
      {
        name: "Seles",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    prograss: "-1.04%",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
