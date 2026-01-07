import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import { AuthContext } from "../context/authContext";

// Data
import {
  balances,
  goals,
  expensesStatistics,
  bills,
  transactions,
  expensesBreakdowns,
} from "../data";

// Fragments
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";

const DashboardPage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // 🔐 PROTEKSI HALAMAN (POIN E)
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <MainLayout title="Overview">
      <div className="grid sm:grid-cols-12 gap-6 h-full font-poppins">
        {/* BARIS ATAS */}
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>

        <div className="sm:col-span-4">
          <CardGoal data={goals} />
        </div>

        <div className="sm:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>

        {/* BARIS TENGAH & BAWAH */}
        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>

        <div className="sm:col-span-8">
          <CardStatistic data={expensesStatistics} />
        </div>

        <div className="sm:col-span-8">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
