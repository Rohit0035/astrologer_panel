import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "Component",
  },

  {
    id: "requestuser",
    title: "Request User List",
    type: "item",
    icon: <Icon.Users size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/userrequest/userrequestlist",
  },

  {
    id: "callhistory",
    title: "Call History",
    type: "item",
    icon: <Icon.Phone size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/historycall/callhistory",
  },

  {
    id: "chatlist",
    title: "Chat List",
    type: "item",
    icon: <Icon.MessageCircle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/chat/userchatlist",
  },

  {
    id: "products",
    title: "Product",
    type: "collapse",
    icon: <Icon.Box size={20} />,
    children: [
      {
        id: "productlist",
        title: "Product List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/products/productlist",
      },
    ],
  },

  {
    id: "orderhistory",
    title: "Order History",
    type: "item",
    icon: <Icon.Box size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/orderhistory/orderhisList",
  },

  {
    id: "prediction",
    title: "Prediction",
    type: "item",
    icon: <Icon.BarChart2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/prediction/predictionlist",
  },

  {
    id: "poojapackage",
    title: "Pooja Package",
    type: "item",
    icon: <Icon.Package size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/poojapackage/packagelist",
  },

  {
    id: "reportstatus",
    title: "Report",
    type: "collapse",
    icon: <Icon.File size={20} />,
    children: [
      {
        id: "earning",
        title: "Earning",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/report/earningreport",
      },
      {
        id: "callreport",
        title: "Call Report",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/report/callreport",
      },
      {
        id: "payout",
        title: "Payout",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/report/payoutreport",
      },
    ],
  },

  {
    id: "withdrawalRequests",
    title: "Withdrawal Requests",
    type: "item",
    icon: <Icon.RefreshCcw size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/driver/withdrawalRequests",
  },

  {
    id: "transactionHistory",
    title: "Transaction History",
    type: "item",
    icon: <Icon.DollarSign size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/transaction/transactionHistory",
  },

  {
    id: "faquserlist",
    title: "User FAQ",
    type: "item",
    icon: <Icon.HelpCircle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/user/faquserlist",
  },

  // {
  //   id: "user",
  //   title: "User Management ",
  //   type: "collapse",
  //   icon: <Icon.Users size={20} />,
  //   children: [
  //     {
  //       id: "userList",
  //       title: "Customer",
  //       type: "item",
  //       icon: <Icon.Users size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/user/userList",
  //     },
  //     {
  //       id: "astrologerList",
  //       title: "Astrologer",
  //       type: "item",
  //       icon: <Icon.User size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/astrology/astrologerList",
  //     }

  //     // {
  //     //   id: "driverRatings",
  //     //   title: "Driver Ratings",
  //     //   type: "item",
  //     //   icon: <Icon.Circle size={12} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/driver/driverRatings",
  //     // },

  //     // {
  //     //   id: "withdrawalRequests",
  //     //   title: "Withdrawal Requests",
  //     //   type: "item",
  //     //   icon: <Icon.Circle size={12} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/driver/withdrawalRequests",
  //     // },
  //   ],
  // },

  // {
  //   id: "callstatus",
  //   title: "Call Management ",
  //   type: "collapse",
  //   icon: <Icon.PhoneCall size={20} />,
  //   children: [
  //     {
  //       id: "callComplete",
  //       title: "Complete Call",
  //       type: "item",
  //       icon: <Icon.PhoneIncoming size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/callmanagement/callhistory",
  //     },
  //     {
  //       id: "callreject",
  //       title: "Reject Call",
  //       type: "item",
  //       icon: <Icon.PhoneMissed size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/callmanagement/callgreject",
  //     },

  //   ],
  // },

  // {
  //   id: "rechargepackage",
  //   title: "Recharge Package",
  //   type: "collapse",
  //   icon: <Icon.Package size={20} />,
  //   children: [
  //     {
  //       id: "allpackage",
  //       title: "All Package",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/packagemanager/allPackage",
  //     },
  //     {
  //       id: "userrecharge",
  //       title: "User Recharge",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/packagemanager/userrecharge",
  //     },
  //     {
  //       id: "packageoffer",
  //       title: "Package Offer",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/packagemanager/packageoffer",
  //     },

  //   ],
  // },

  // {
  //   id: "commissionet",
  //   title: "Comission Set ",
  //   type: "item",
  //   icon: <Icon.Compass size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/packagemanager/commission",
  // },

  // {
  //   id: "reportstatus",
  //   title: "Report",
  //   type: "collapse",
  //   icon: <Icon.BarChart2 size={20} />,
  //   children: [
  //     {
  //       id: "adminearning",
  //       title: "Admin Recharge",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/statusList",
  //     },
  //     {
  //       id: "astroearning",
  //       title: "Astrologer Earning",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/daily",
  //     },

  //   ],
  // },

  // {
  //   id: "withdrawrequest",
  //   title: "Withdraw Request ",
  //   type: "item",
  //   icon: <Icon.DollarSign size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/report/rechargeReport",
  // },

  // {
  //   id: "payouts",
  //   title: "Payouts ",
  //   type: "item",
  //   icon: <Icon.DollarSign size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/report/rechargeReport",
  // },

  // {
  //   id: "pagesetup",
  //   title: "Page Setup ",
  //   type: "collapse",
  //   icon: <Icon.Settings size={20} />,
  //   children: [

  //     {
  //       id: "notificationList",
  //       title: "Notification",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/notification/notificationList",
  //     },
  //     {
  //       id: "contactus",
  //       title: "Contact Us",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/notification/notificationList",
  //     },
  //     {
  //       id: "aboutus",
  //       title: "About Us",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/about/AllaboutUs",
  //     },
  //     {
  //       id: "termsandcondition",
  //       title: "Terms And Conditions",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/termscondition/TermConditionList",
  //     },
  //     {
  //       id: "privacypolicy",
  //       title: "Privacy Policy",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/notification/notificationList",
  //     },
  //     {
  //       id: "helpus",
  //       title: "Help Us",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/helpUs/HelpUs",
  //     },

  //   ],
  // },

  // {
  //   id: "commissionet",
  //   title: "Comission Set ",
  //   type: "item",
  //   icon: <Icon.Compass size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/report/rechargeReport",
  // },
  // {
  //   id: "status",
  //   title: "Status ",
  //   type: "collapse",
  //   icon: <Icon.Users size={20} />,
  //   children: [
  //     {
  //       id: "statusList",
  //       title: "Status List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/statusList",
  //     },
  //     {
  //       id: "daily",
  //       title: "Daily",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/daily",
  //     },
  //     {
  //       id: "weekly",
  //       title: "Weekly",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/weekly",
  //     },

  //     {
  //       id: "monthly",
  //       title: "Monthly",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/monthly",
  //     },
  //     {
  //       id: "yearly",
  //       title: "Yearly",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/yearly",
  //     },
  //   ],
  // },
  // {
  //   id: "report ",
  //   title: "Report ",
  //   type: "collapse",
  //   icon: <Icon.User size={20} />,
  //   children: [
  //     {
  //       id: "callDetails ",
  //       title: "Call Details",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/report/callDetails",
  //     },
  //     // {
  //     //   id: "rechargeReport  ",
  //     //   title: "Recharge Report ",
  //     //   type: "item",
  //     //   icon: <Icon.Circle size={12} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/report/rechargeReport",
  //     // },
  //   ],
  // },
  // {
  //   id: "rechargeReport  ",
  //   title: "Recharge Report ",
  //   type: "item",
  //   icon: <Icon.User size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/report/rechargeReport",
  // },

  // {
  //   id: "walletManagement ",
  //   title: "Wallet management ",
  //   type: "item",
  //   icon: <Icon.User size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/wallet/walletManagement",
  // },

  // {
  //   id: "notificationList",
  //   title: "Notification",
  //   type: "item",
  //   icon: <Icon.User size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/notification/notificationList",
  // },

  // {
  //   id: "membership",
  //   title: "Membership",
  //   type: "collapse",
  //   icon: <Icon.User size={20} />,
  //   children: [
  //     {
  //       id: "membershipList",
  //       title: "Membership plan list",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/membership/membershipList",
  //     },
  //   ],
  // },
  // {
  //   id: "aboutus",
  //   title: "About Us ",
  //   type: "item",
  //   icon: <Icon.User size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/about/AllaboutUs",
  // },
  // {
  //   id: "helpUs",
  //   title: "Help Us",
  //   type: "item",
  //   icon: <Icon.User size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/helpUs/HelpUs",
  // },

  // {
  //   id: "TermConditionList",
  //   title: "Term And Condition ",
  //   type: "item",
  //   icon: <Icon.User size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/termscondition/TermConditionList",
  // },
];
export default navigationConfig;
