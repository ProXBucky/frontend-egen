import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ handleOpenModal }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        // Cập nhật class vào thẻ <html>
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        // Lưu theme vào localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="sticky bg-lightBgNav dark:bg-darkBgNav text-lightText dark:text-darkText flex h-[40px] items-end justify-between z-40">
            <div className="flex w-[calc(100%-60px)] justify-between items-center">
                <NavLink
                    to="/upload"
                    className={({ isActive }) =>
                        `flex-1 text-center h-[40px] no-underline p-2 rounded-br-lg rounded-bl-lg transition-all duration-300 text-lightText dark:text-darkText ${isActive ? "bg-emerald-600 text-white" : "hover:bg-emerald-600 hover:text-darkText dark:hover:bg-emerald-900"
                        }`
                    }
                >
                    Thêm tài liệu
                </NavLink>
                <NavLink
                    to="/search"
                    className={({ isActive }) =>
                        `flex-1 text-center h-[40px] no-underline p-2 rounded-br-lg rounded-bl-lg transition-all duration-300 text-lightText dark:text-darkText ${isActive ? "bg-emerald-600 text-white" : "hover:bg-emerald-600 hover:text-darkText dark:hover:bg-emerald-900"
                        }`
                    }
                >
                    Tìm thông tin
                </NavLink>
                <NavLink
                    to="/chatbot"
                    className={({ isActive }) =>
                        `flex-1 text-center h-[40px] no-underline p-2 rounded-br-lg rounded-bl-lg transition-all duration-300 text-lightText dark:text-darkText ${isActive ? "bg-emerald-600 text-white" : "hover:bg-emerald-600 hover:text-darkText dark:hover:bg-emerald-900"
                        }`
                    }
                >
                    Chatbot
                </NavLink>
                <NavLink
                    to="/report"
                    className={({ isActive }) =>
                        `flex-1 text-center h-[40px] no-underline p-2 rounded-br-lg rounded-bl-lg transition-all duration-300 text-lightText dark:text-darkText ${isActive ? "bg-emerald-600 text-white" : "hover:bg-emerald-600 hover:text-darkText dark:hover:bg-emerald-900"
                        }`
                    }
                >
                    Tạo báo cáo
                </NavLink>
            </div>
            {/* User Avatar */}
            <div
                className="relative w-[60px] h-[40px] flex justify-center items-center"
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
            >
                <img
                    src="QH19.jpg"
                    alt="User Avatar"
                    className="w-9 h-9 rounded-full  transition-all duration-300 cursor-pointer"
                />
                {showSubMenu && (
                    <div className="absolute top-8 right-0 bg-lightBgNav dark:bg-darkBg1 w-[250px] rounded-lg shadow-lg p-2">
                        <p
                            className="cursor-pointer mb-1 text-lightText dark:text-darkText px-4 py-2 font-semibold hover:bg-emerald-600 hover:text-darkText rounded transition"
                            onClick={handleOpenModal}
                        >
                            Hồ sơ
                        </p>
                        <p
                            className="cursor-pointer mb-1 text-lightText dark:text-darkText px-4 py-2 font-semibold hover:bg-emerald-600 hover:text-darkText rounded transition"
                            onClick={toggleTheme}
                        >
                            Đổi chủ đề {theme === 'light' ? ' tối' : ' sáng'}
                        </p>
                        <p
                            to="/logout"
                            className="cursor-pointer mb-1 text-lightText dark:text-darkText px-4 py-2 font-semibold hover:bg-emerald-600 hover:text-darkText rounded transition"
                        >
                            Đăng xuất
                        </p>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
