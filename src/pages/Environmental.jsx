import React from 'react';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const emissionsData = [
  { month: 'Jan', direct: 120, indirect: 80, total: 200 },
  { month: 'Feb', direct: 110, indirect: 75, total: 185 },
  { month: 'Mar', direct: 105, indirect: 70, total: 175 },
  { month: 'Apr', direct: 95, indirect: 65, total: 160 },
  { month: 'May', direct: 90, indirect: 60, total: 150 },
  { month: 'Jun', direct: 85, indirect: 55, total: 140 },
];

const wasteData = [
  { month: 'Jan', recycled: 45, landfill: 55 },
  { month: 'Feb', recycled: 48, landfill: 52 },
  { month: 'Mar', recycled: 52, landfill: 48 },
  { month: 'Apr', recycled: 55, landfill: 45 },
  { month: 'May', recycled: 58, landfill: 42 },
  { month: 'Jun', recycled: 60, landfill: 40 },
];

const energyData = [
  { month: 'Jan', renewable: 30, nonRenewable: 70 },
  { month: 'Feb', renewable: 35, nonRenewable: 65 },
  { month: 'Mar', renewable: 40, nonRenewable: 60 },
  { month: 'Apr', renewable: 45, nonRenewable: 55 },
  { month: 'May', renewable: 50, nonRenewable: 50 },
  { month: 'Jun', renewable: 55, nonRenewable: 45 },
];

function Environmental() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Environmental Metrics</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Carbon Footprint</h3>
          <p className="text-3xl font-bold text-primary">140 tCO2e</p>
          <p className="text-sm text-green-600 mt-2">↓ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Waste Recycled</h3>
          <p className="text-3xl font-bold text-primary">60%</p>
          <p className="text-sm text-green-600 mt-2">↑ 5% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Renewable Energy</h3>
          <p className="text-3xl font-bold text-primary">55%</p>
          <p className="text-sm text-green-600 mt-2">↑ 5% from last month</p>
        </div>
      </div>

      {/* Emissions Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Carbon Emissions Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={emissionsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="direct" stackId="1" stroke="#8884d8" fill="#8884d8" name="Direct Emissions" />
            <Area type="monotone" dataKey="indirect" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Indirect Emissions" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Waste Management */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Waste Management</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={wasteData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="recycled" fill="#82ca9d" name="Recycled Waste %" />
            <Bar dataKey="landfill" fill="#8884d8" name="Landfill Waste %" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Energy Usage */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Energy Consumption</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="renewable" stroke="#82ca9d" name="Renewable Energy %" />
            <Line type="monotone" dataKey="nonRenewable" stroke="#8884d8" name="Non-Renewable Energy %" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Environmental;