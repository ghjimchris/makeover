import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const complianceData = [
  { category: 'Policy Compliance', score: 95 },
  { category: 'Risk Management', score: 88 },
  { category: 'Board Independence', score: 92 },
  { category: 'Shareholder Rights', score: 90 },
  { category: 'Business Ethics', score: 94 },
];

const boardCompositionTrend = [
  { year: '2019', independent: 70, diverse: 30 },
  { year: '2020', independent: 75, diverse: 35 },
  { year: '2021', independent: 80, diverse: 40 },
  { year: '2022', independent: 85, diverse: 45 },
  { year: '2023', independent: 90, diverse: 50 },
];

const riskMetrics = [
  { name: 'Cybersecurity', value: 85 },
  { name: 'Regulatory', value: 90 },
  { name: 'Financial', value: 88 },
  { name: 'Operational', value: 82 },
  { name: 'Reputational', value: 87 },
];

function Governance() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Governance Metrics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Board Independence</h3>
          <p className="text-3xl font-bold text-primary">90%</p>
          <p className="text-sm text-green-600 mt-2">↑ 5% from last year</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Policy Compliance</h3>
          <p className="text-3xl font-bold text-primary">95%</p>
          <p className="text-sm text-green-600 mt-2">↑ 2% from last quarter</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Risk Management Score</h3>
          <p className="text-3xl font-bold text-primary">88/100</p>
          <p className="text-sm text-green-600 mt-2">↑ 3 points from last assessment</p>
        </div>
      </div>

      {/* Compliance Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Compliance Metrics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={complianceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#1e40af" name="Score %" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Board Composition Trend */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Board Composition Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={boardCompositionTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="independent" stroke="#1e40af" name="Independent Directors %" />
            <Line type="monotone" dataKey="diverse" stroke="#059669" name="Diverse Directors %" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Risk Assessment */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Risk Assessment</h2>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskMetrics}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis domain={[0, 100]} />
            <Radar name="Risk Score" dataKey="value" stroke="#1e40af" fill="#1e40af" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Governance;