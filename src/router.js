import React from "react";
import { createBrowserRouter, createRoutesFromElements, BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import StartApp from "./pages/StartApp"
import login from "./pages/login";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<StartApp/>} />
      </Route>

  
    </>
  )
);
