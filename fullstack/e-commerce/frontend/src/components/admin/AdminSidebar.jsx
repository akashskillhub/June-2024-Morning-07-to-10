import React from 'react'
import { Link } from 'react-router-dom'
import { GiLoincloth } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
const AdminSidebar = () => {
    const LINKS = [
        { label: "dashboard", to: "/admin", icon: <MdOutlineDashboard /> },
        { label: "products", to: "/admin/products", icon: <GiLoincloth /> },
        { label: "users", to: "/admin/users", icon: <FaRegUser /> },
        { label: "orders", to: "/admin/orders", icon: <TbInvoice /> },
    ]
    return <>
        <div
            className='bg-dark text-light'
            style={{
                width: "200px",
                height: "100vh",
                position: "fixed",
                top: "0",
                left: "0"
            }}>
            <div
                style={{ height: "55px" }}
                className='bg-primary d-flex justify-content-center align-items-center fs-4'>Flipkart-Lite</div>

            {LINKS.map(item => <div style={{ height: "55px" }}
                className='bg-light d-flex  align-items-center px-3'>
                <span className='text-dark me-2'>{item.icon}</span>
                <Link
                    className='text-decoration-none text-dark text-uppercase'
                    to={item.to}>
                    {item.label}
                </Link>
            </div>)}
        </div>
    </>
}

export default AdminSidebar