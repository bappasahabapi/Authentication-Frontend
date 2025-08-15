
"use client";

import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const Navbar = () => {
  const dispatch = useAppDispatch();




  const handleLogout = () => {
    dispatch(logout());
    toast.success("User Logout Successfully", {
      richColors: true,

      position: "top-center",
      duration: 1000,
    });

  };

  const token = useSelector((state: any) => state?.auth?.token);
  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#FE5F0F]">Chaudri CPA</h1>
            <div className="hidden md:block ml-10">
              <ul className="flex space-x-4">
                <li>
                  <a href="#home" className="hover:text-[#FE5F0F]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#FE5F0F]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FE5F0F]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FE5F0F]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <button
                onClick={handleLogout}
                className="bg-white px-6 py-2 text-[#FE5F0F] rounded-full border-2 border-[#FE5F0F] hover:bg-[#FE5F0F] hover:text-white "

              >
                {token ? "Logout" : "Login"}
              </button>
            </Link>
            <button className="bg-[#FE5F0F] text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#FE5F0F]">
              Make a Payment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
