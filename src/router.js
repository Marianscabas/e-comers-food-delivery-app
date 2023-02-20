import React from "react";
import { createBrowserRouter, createRoutesFromElements, BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import StartApp from "./pages/StartApp"
import Home from "./pages/Home";




export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<StartApp/>} />
        <Route path="/LoginButton" element={<LoginButton/>} />
        <Route path="/Home" element={<Home/>}/>
      </Route>

  
    </>
  )
);
