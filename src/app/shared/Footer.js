import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CacheCodeLogo from "../../assets/images/CacheCode_Logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const [showFooter, setShowFooter] = useState(true);

  // useEffect(() => {
  //   let userData = JSON.parse(localStorage.getItem("cacheCode_UserData"));

  //   if (!userData) {
  //     console.log("here");
  //     navigate("/login");
  //   }
  // }, [navigate]);
  let location = useLocation();

  useEffect(() => {
    let route = location.pathname.split("/")[1];
    let route2 = location.pathname.split("/")[2];
    if (route === "login") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return (
    <footer className="footer" style={{ display: showFooter ? "block" : "none" }}>
      <div className="d-sm-flex justify-content-center justify-content-sm-between align-items-center py-2">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright ©{" "}
          <a href="https://www.cachecode.in/" target="_blank" rel="noopener noreferrer">
            cachecode.in{" "}
          </a>
          2023
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          <img src={CacheCodeLogo} alt="cachecode logo" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
