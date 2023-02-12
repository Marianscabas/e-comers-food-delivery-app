import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  return (
    <div className="bg-slate-100  relative ml-12 h-screen  max-w-xs rounded shadow-lg flex justify-center  ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
