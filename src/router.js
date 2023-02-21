import React from "react";
import { createBrowserRouter, createRoutesFromElements, BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import StartApp from "./pages/StartApp"
import Home from "./pages/Home";
import Card from "./components/Card";
import Orden from "./pages/Orden"
import Profile from "./pages/Profile";
import CardRest from "./components/CardRest"
import Busqueda from "./pages/Busqueda";




export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<StartApp/>} />
        <Route path="/LoginButton" element={<LoginButton/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/Orden" element={<Orden/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/CardRest" element={<CardRest/>}/>
        <Route path="/Busqueda" element={<Busqueda/>}/>

      </Route>

  
    </>
  )
);
