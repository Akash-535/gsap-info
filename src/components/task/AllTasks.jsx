"use client";
import React from "react";
import AllWeekOneTasks from "./week-1/AllWeekOneTasks";
import AllWeekTwoTasks from "./week-2/AllWeekTwoTasks";
import NotFound from "../common/NotFound";
import { useParams } from "next/navigation";

const AllTasks = () => {
  const { slug } = useParams();

  const taskList = [
    { component: <AllWeekOneTasks key="week-1" />, slug: "week-1" },
    { component: <AllWeekTwoTasks key="week-2" />, slug: "week-2" },
  ];
  return taskList.map((obj, index) => obj.slug === slug && obj.component);
};

export default AllTasks;
