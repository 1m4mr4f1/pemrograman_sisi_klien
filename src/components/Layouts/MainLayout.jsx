import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoDashboard from "../Elements/LogoDashboard";
import Icon from "../Elements/Icon";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import { Backdrop, CircularProgress } from "@mui/material";

const MainLayout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [username, setUsername] = useState("John Doe");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          window
            .atob(base64)
            .split('')
            .map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
        
        const payload = JSON.parse(jsonPayload);
        setUsername(payload.name || "User");
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expenses" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  const handleLogout = () => {
    setOpenBackdrop(true);

    setTimeout(() => {
      logout();
      navigate("/login");
      setOpenBackdrop(false);
    }, 1500);
  };

  return (
    <div className={`flex min-h-screen font-poppins ${theme.name}`}>
      <aside className="w-64 bg-defaultBlack text-special-bg2 fixed h-screen flex flex-col justify-between overflow-y-auto z-20">
        <div>
          <div className="px-8 py-8">
            <LogoDashboard variant="secondary" />
          </div>

          <nav className="px-4 space-y-2">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                style={({ isActive }) =>
                  isActive ? { backgroundColor: theme.color } : {}
                }
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "text-white font-bold shadow-md"
                      : "hover:bg-special-bg3 hover:text-white"
                  }`
                }
              >
                <div className="mr-4 text-xl">{item.icon}</div>
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="px-4 py-8 border-t border-gray-800/50 bg-defaultBlack">
          <div className="mb-6 px-4">
            <p className="text-xs text-gray-500 mb-3 uppercase font-bold tracking-wider">
              Themes
            </p>
            <div className="flex gap-3 flex-wrap">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer transition transform hover:scale-110 border border-transparent hover:border-white`}
                  onClick={() => setTheme(t)}
                  title={t.name}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-special-bg2 hover:text-white transition-colors rounded-lg hover:bg-red-500/10 group"
          >
            <div
              className="mr-4 transition-colors group-hover:text-red-500"
              style={{ color: theme.color }}
            >
              <Icon.Logout />
            </div>
            <span className="text-sm font-medium group-hover:text-red-500">
              Logout
            </span>
          </button>
        </div>
      </aside>

      <div className="flex-1 ml-64 flex flex-col bg-gray-50/30">
        <header className="bg-white px-8 py-5 flex justify-between items-center border-b sticky top-0 z-10 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 capitalize">
              {username}
            </h2>
            <p className="text-sm text-gray-500">May 19, 2023</p>
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <NotificationsIcon
              className="cursor-pointer"
              style={{ color: theme.color }}
            />
          </div>
        </header>

        <main className="p-8 flex-1 overflow-x-hidden">{children}</main>
      </div>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={openBackdrop}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <CircularProgress color="inherit" />
          <span className="text-white font-semibold text-lg tracking-wide">
            Logging Out...
          </span>
        </div>
      </Backdrop>
    </div>
  );
};

export default MainLayout;