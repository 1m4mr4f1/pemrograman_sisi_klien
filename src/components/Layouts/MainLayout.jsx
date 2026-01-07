import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoDashboard from "../Elements/LogoDashboard";
import Icon from "../Elements/Icon";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";

const MainLayout = ({ children, title }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🔐 Jika user logout / token hilang → redirect ke login
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

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
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`flex min-h-screen font-poppins ${theme.name}`}>
      {/* SIDEBAR */}
      <aside className="w-64 bg-defaultBlack text-special-bg2 fixed h-screen flex flex-col justify-between">
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
                      ? "text-white font-bold"
                      : "hover:bg-special-bg3 hover:text-white"
                  }`
                }
              >
                <div className="mr-4">{item.icon}</div>
                <span className="text-sm">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* FOOTER */}
        <div className="px-4 py-8 border-t border-gray-800/50">
          <div className="mb-6 px-4">
            <p className="text-xs text-gray-500 mb-3 uppercase font-bold">
              Themes
            </p>
            <div className="flex gap-3">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer transition hover:scale-110`}
                  onClick={() => setTheme(t)}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-special-bg2 hover:text-white transition-colors"
          >
            <div className="mr-4" style={{ color: theme.color }}>
              <Icon.Logout />
            </div>
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="flex-1 ml-64 flex flex-col">
        <header className="bg-white px-8 py-5 flex justify-between items-center border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {title || "Overview"}
            </h2>
            <p className="text-sm text-gray-500">May 19, 2023</p>
          </div>

          <NotificationsIcon
            className="cursor-pointer transition-colors"
            style={{ color: theme.color }}
          />
        </header>

        <main className="p-8 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
