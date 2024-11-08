import ConnectMongo from '@/components/ConnectMongo';
import Model from '@/components/Model';
import Navbar from '@/components/Navbar';
import TodoList from '@/components/TodoList';
import TodosRoute from '@/components/TodosRoute';
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-1 h-screen overflow-auto border-2 border-black flex-col no-scrollbar scroll-behavior ">
      <Navbar />
      {/* structure/Path */}
      <div id="structure" className="pl-4 py-4 border-2 border-black">
        {" "}
        <div className="font-bold">todo-list-api/</div>{" "}
        <div className="ml-4">
          {" "}
          <div className="font-bold ml-8">|-app/</div>{" "}
          <div className="ml-4">
            {" "}
            <div className="font-bold ml-8">|-api/</div>{" "}
            <div className="ml-12">
              {" "}
              <div className="font-bold">|-todos/</div>{" "}
              <div className="ml-8 text-blue-500">|--route.js</div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="">
            {" "}
            <div className="font-bold ml-8">|-lib/</div>{" "}
            <div className="ml-12 text-blue-500">|--mongodb.js</div>{" "}
          </div>{" "}
          <div className=" text-blue-500 ml-8">|-page.js</div>{" "}
          <div className="">
            {" "}
            <div className="font-bold ml-8">|-components/</div>{" "}
            <div className="ml-20 text-blue-500">|--TodoList.js</div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="ml-4">
          {" "}
          <div className="font-bold ">
            |-models/ <span className="font-thin">{"( save in root )"}</span>
          </div>{" "}
          <div className="ml-8 text-blue-500">|--Todo.js</div>{" "}
        </div>{" "}
        <div className="ml-4 font-bold">
          |-.env <span className="font-thin">{"( save in root )"}</span>
        </div>{" "}
      </div>
      {/* main */}
      <div id="connectDB">
        <ConnectMongo />
      </div>
      <div id="model">
        <Model />
      </div>
      <div id="route">
        <TodosRoute />
      </div>
      <div id="component">
        <TodoList />
      </div>
    </div>
  );
}

export default page
