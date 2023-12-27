import React, { useState } from "react";
import "./AdminHeader.css";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="admin-header">
      <Link to="/admin" className="title">
        Admin Panel
      </Link>
      <div
        onClick={() => {
          console.log("asasd");
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <FaBars size={"2rem"} color="#fff" />
      </div>
      <div
        className={
          isMenuOpen ? "show admin-header-links" : "admin-header-links"
        }
      >
        <ul className="links-list">
          <li>
            <NavLink to="/admin/photos">Photos</NavLink>
          </li>
          <li>
            <NavLink to="/admin/downloads">Downloads</NavLink>
          </li>
          <li>
            <NavLink to="/admin/settings">Settings</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminHeader;
