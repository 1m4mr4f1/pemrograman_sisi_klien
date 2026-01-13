import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CircularProgress from "@mui/material/CircularProgress";
import CardExpense from "../components/Fragments/CardExpense";

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        const dataDummy = [
          {
            id: 1,
            category: "Housing",
            total: 250,
            percentage: 15,
            status: "up",
            breakdown: [
              { name: "House Rent", amount: 230, date: "17 May 2023" },
              { name: "Parking", amount: 20, date: "17 May 2023" },
            ],
          },
          {
            id: 2,
            category: "Food",
            total: 350,
            percentage: 8,
            status: "down",
            breakdown: [
              { name: "Grocery", amount: 230, date: "17 May 2023" },
              { name: "Restaurant Bill", amount: 120, date: "17 May 2023" },
            ],
          },
          {
            id: 3,
            category: "Transportation",
            total: 50,
            percentage: 12,
            status: "down",
            breakdown: [
              { name: "Taxi Fare", amount: 30, date: "17 May 2023" },
              { name: "Metro Card Bill", amount: 20, date: "17 May 2023" },
            ],
          },
          {
            id: 4,
            category: "Entertainment",
            total: 80,
            percentage: 15,
            status: "down",
            breakdown: [
              { name: "Movie Ticket", amount: 30, date: "17 May 2023" },
              { name: "iTunes", amount: 50, date: "17 May 2023" },
            ],
          },
          {
            id: 5,
            category: "Shopping",
            total: 420,
            percentage: 25,
            status: "up",
            breakdown: [
              { name: "Shirt", amount: 230, date: "17 May 2023" },
              { name: "Jeans", amount: 190, date: "17 May 2023" },
            ],
          },
          {
            id: 6,
            category: "Others",
            total: 50,
            percentage: 23,
            status: "up",
            breakdown: [
              { name: "Donation", amount: 30, date: "17 May 2023" },
              { name: "Gift", amount: 20, date: "17 May 2023" },
            ],
          },
        ];

        setExpenses(dataDummy);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <MainLayout title="Expenses">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">Expenses Comparison</h1>
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-[50vh]">
          <CircularProgress sx={{ color: "#299D91" }} />
          <p className="mt-4 text-[#299D91] font-medium text-sm">Loading Data...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expenses.map((expense) => (
            <CardExpense key={expense.id} data={expense} />
          ))}
        </div>
      )}
    </MainLayout>
  );
};

export default ExpensePage;