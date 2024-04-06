import React from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			
			<header>
				<img src={logo} alt="Logo" style={{ width: '80px', marginTop: '20px', marginLeft:'10px' }} />
			</header>
      		

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Acciones</div>

			<li className="nav-item">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-home"></i>
					<span>Inicio</span></Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/product">
					<i className="fas fa-fw fa-table"></i>
					<span>Ingredientes</span></Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/user">
					<i className="fas fa-fw fa-table"></i>
					<span>Usuarios</span></Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}

export default SideBar