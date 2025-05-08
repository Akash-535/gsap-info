"use client";
import React from "react";
import AllWeekOneTasks from "./week-1/AllWeekOneTasks";
import NotFound from "../common/NotFound";
import { useParams } from "next/navigation";

const AllTasks = () => {
  const { slug } = useParams();
  <AllWeekOneTasks />;
  const taskList = [{ component: <AllWeekOneTasks />, slug: "week-1" }];
  return taskList.map((obj) =>
    obj.slug === slug ? obj.component : <NotFound />
  );
};

export default AllTasks;
