"use client";
import { BiExpand, BiCollapse } from "react-icons/bi";
import Link from "next/link";
import React, { useState } from "react";
import { DiMongodb } from "react-icons/di";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleClick = (newIndex) => {
    setActive(newIndex);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dataName = [
    {
      name: "TodoList Steps",
      icon: <DiMongodb className={"text-2xl"} />,
      link: "/todolist",
    },
  ];

  return (
    <div
      className={`overflow-auto  flex flex-col border border-black h-screen scrollbar-hide ${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-width duration-300 ease-in-out`}
    >
      <button
        className="py-2 text-white bg-gray-800 hidden sm:block "
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <BiCollapse className="m-auto text-2xl" />
        ) : (
          <BiExpand className="m-auto text-2xl " />
        )}
      </button>

      <div className="text-center ">
        {/* Your sidebar items go here */}
        {dataName.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <div
                onClick={() => handleClick(index)}
                className={`${
                  active === index ? "bg-blue-300" : ""
                } hover:bg-blue-300 cursor-pointer py-3 flex justify-center items-center `}
              >
                {isSidebarOpen ? item.name : item.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;