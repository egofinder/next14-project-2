"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    click: 4000,
    visit: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    click: 3000,
    visit: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    click: 2000,
    visit: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    click: 2780,
    visit: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    click: 1890,
    visit: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    click: 2390,
    visit: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    click: 3490,
    visit: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Chart title</h2>
      {/* height 를 90%로 설정해 놓으면 혹시 모를 overflow를 예방할 수 있다. */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          <XAxis dataKey="name" />
          <YAxis />
          {/* Tooltip의 개별 styling을 위한 옵션, global.css에 정의된 --bgSoft를 가져올 수 없어서 직접 색상을 지정해 줌. */}
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
