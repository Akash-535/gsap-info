import Task1 from "../week-2/Task1";
import Task2 from "../week-2/Task2";
import Task3 from "../week-2/Task3";
import Week2Main from "../week-2/Week2Main";
import RandomTask from "../week-2/RandomTask";

const AllWeekTwoTasks = () => {
  return (
    <div className="overflow-clip">
      <Week2Main />
      <Task1 />
      <div className="border border-solid border-white p-3 flex flex-col bg-slate-950 relative z-50">
        <Task2 title="custom component" />
        <Task2 title="animation with  same  component" />
      </div>
      <Task3 />
      <RandomTask />
    </div>
  );
};

export default AllWeekTwoTasks;
