import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {

  return (
    <div className=""> 

    <RouterProvider router={router} />
    

   </div>
  )
}

export default App;