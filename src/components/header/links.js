import React from "react"

import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillEdit,
  AiFillBook,
  AiOutlineGroup,
  AiOutlineUnorderedList,
  AiFillPayCircle,
  AiOutlineSchedule,
} from "react-icons/ai";

export default [
    {
      url: "/dashboard",
      exact: true,
      title: "Dashboard",
      icon: <AiOutlineHome />,
    },
    {
      url: "/admission",
      exact: true,
      title: "Admission",
      icon: <AiFillEdit />,
    },
    {
      url: "/subject",
      exact: true,
      title: "Subjects",
      icon: <AiFillBook />,
    },
    {
      url: "/instructors",
      exact: true,
      title: "Instructors",
      icon: <AiOutlineGroup />,
    },
    {
      url: "/group",
      exact: true,
      title: "Groups",
      icon: <AiOutlineGroup />,
    },
    {
      url: "/student",
      exact: true,
      title: "Students",
      icon: <AiOutlineUser />,
    },
    {
      url: "/schedule",
      exact: true,
      title: "Schedule",
      icon: <AiOutlineSchedule />,
    },
    {
      url: "/expence",
      exact: true,
      title: "Expence",
      icon: <AiOutlineUnorderedList />,
    },
    {
      url: "/payment",
      exact: true,
      title: "Payments",
      icon: <AiFillPayCircle />,
    },
  ]