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
