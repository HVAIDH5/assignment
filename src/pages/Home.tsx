import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Home as HomeIcon, User, Settings, LogOut } from 'lucide-react';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <HomeIcon className="w-6 h-6 mr-2" />
            <span className="text-xl font-bold">LeadMint</span>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center">
              <User className="w-5 h-5 mr-1" />
              Profile
            </button>
            <button className="flex items-center">
              <Settings className="w-5 h-5 mr-1" />
              Settings
            </button>
            <button className="flex items-center">
              <LogOut className="w-5 h-5 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Active Projects</h3>
            <p className="text-3xl font-bold">42</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold">$98,765</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Performance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="space-y-2">
              <li>User John Doe completed Project A</li>
              <li>New user Jane Smith registered</li>
              <li>Project B reached 50% completion</li>
              <li>Revenue increased by 15% this month</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Top Performing Projects</h3>
            <ul className="space-y-2">
              <li>1. Project X - 98% success rate</li>
              <li>2. Project Y - 95% success rate</li>
              <li>3. Project Z - 92% success rate</li>
              <li>4. Project W - 90% success rate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;