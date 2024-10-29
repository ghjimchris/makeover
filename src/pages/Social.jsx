import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const employeeData = [
  { category: 'Training', hours: 2500 },
  { category: 'Development', hours: 1800 },
  { category: 'Wellness', hours: 1200 },
  { category: 'Community', hours: 900 },
];

const diversityData = [
  { name: 'Women', value: 45 },
  { name: 'Men', value: 55 },
  { name: 'Underrepresented', value: 30 },
  { name: 'Veterans', value: 15 },
];

const satisfactionTrend = [
  { month: 'Jan', score: 7.5 },
  { month: 'Feb', score: 7.8 },
  { month: 'Mar', score: 8.0 },
  { month: 'Apr', score: 8.2 },
  { month: 'May', score: 8.4 },
  { month: 'Jun', score: 8.5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Social() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Social Impact Metrics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Employee Satisfaction</h3>
          <p className="text-3xl font-bold text-primary">8.5/10</p>
          <p className="text-sm text-green-600 mt-2">↑ 0.1 from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Training Hours</h3>
          <p className="text-3xl font-bold text-primary">6,400</p>
          <p className="text-sm text-green-600 mt-2">↑ 200 from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Investment</h3>
          <p className="text-3xl font-bold text-primary">$1.2M</p>
          <p className="text-sm text-green-600 mt-2">↑ 15% from last quarter</p>
        </div>
      </div>

      {/* Employee Development */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Employee Development Hours</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={employeeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="hours" fill="#1e40af" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Workforce Diversity */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Workforce Diversity</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={diversityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {diversityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Employee Satisfaction Trend */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Employee Satisfaction Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={satisfactionTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="score" stroke="#1e40af" name="Satisfaction Score" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Social;