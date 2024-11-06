"use client";
import { BiExpand, BiCollapse } from "react-icons/bi";
import { FcTodoList } from "react-icons/fc";
import Link from "next/link";
import React, { useState } from "react";
import { DiMongodb } from "react-icons/di";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname(); // usePathname adalah hook dari Next.js yang memberikan path URL semasa. Ia akan dikemaskini secara automatik apabila URL berubah.

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dataName = [
    {
      name: "TodoList Steps",
      icon: <DiMongodb className={"text-2xl"} />,
      link: "/todolist",
    },
    {
      name: "TodoList Apps",
      icon: <FcTodoList className={"text-2xl"} />,
      link: "/todolist_app",
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
              {/* (URL semasa) dengan item.link. Jika ia sama, kita tambah kelas "bg-blue-300" untuk menunjukkan item itu aktif. */}
              <div
                className={`${
                  pathname === item.link ? "bg-blue-300" : ""
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
