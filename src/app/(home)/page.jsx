"use client"
import HomePage from '@/components/home-page'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
    });
  }, []);
  return (
    <div>
      <img className="fixed bottom-0 left-0 object-cover w-full h-full z-0 pointer-events-none" src="/assets/images/willy-pump-background.jpg"></img>
      <HomePage />
    </div>
  )
}

export default Page