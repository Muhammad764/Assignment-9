import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart,ResponsiveContainer,Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
    ]
    
    
    return (
        <div className='flex place-content-around'>
            <div className="mt-10">
        <LineChart width={500} height={300} data={data}>
            <Line type="monotone" dataKey={"sell"} stroke="#8884d8"></Line>
            <Line type="monotone" dataKey={"investment"} stroke="#8884d8"></Line>
            <Line type="monotone" dataKey={"revenue"} stroke="#8884d8"></Line>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='mt-8'>
                <ResponsiveContainer width={600} height={400} data={data}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"sell"} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={"month"} stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey={"investment"} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey={"revenue"} stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
            </div>
            
       
       </div>
    );
};

export default Dashboard;