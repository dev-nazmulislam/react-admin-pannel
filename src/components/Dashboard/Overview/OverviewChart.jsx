import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  //   {
  //     name: "Jan",
  //     seles: 440,
  //     expensess: 220,
  //     icome: 220,
  //   },
  //   {
  //     name: "Feb",
  //     seles: 570,
  //     expensess: 420,
  //     icome: 150,
  //   },
  //   {
  //     name: "Mar",
  //     seles: 820,
  //     expensess: 520,
  //     icome: 300,
  //   },
  //   {
  //     name: "Apr",
  //     seles: 980,
  //     expensess: 600,
  //     icome: 380,
  //   },
  {
    name: "May",
    seles: 1020,
    expensess: 700,
    icome: 320,
  },
  {
    name: "Jun",
    seles: 1150,
    expensess: 720,
    icome: 430,
  },
  {
    name: "Jul",
    seles: 1000,
    expensess: 680,
    icome: 320,
  },
  {
    name: "Aug",
    seles: 1320,
    expensess: 970,
    icome: 350,
  },
  {
    name: "Sep",
    seles: 1580,
    expensess: 1050,
    icome: 530,
  },
  {
    name: "Oct",
    seles: 1600,
    expensess: 980,
    icome: 620,
  },
  {
    name: "Nov",
    seles: 1420,
    expensess: 980,
    icome: 400,
  },
  {
    name: "Dec",
    seles: 1620,
    expensess: 1420,
    icome: 200,
  },
];

const OverviewChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="seles" fill="#8884d8" /> */}
          <Bar dataKey="expensess" fill="#F47C7C" />
          <Bar dataKey="icome" fill="#80A6EC" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
