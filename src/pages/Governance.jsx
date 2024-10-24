import { BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const complianceData = [
  { category: 'Data Privacy', score: 95 },
  { category: 'Anti-Corruption', score: 88 },
  { category: 'Ethics', score: 92 },
  { category: 'Risk Management', score: 85 },
  { category: 'Board Diversity', score: 78 },
];

const riskData = [
  { subject: 'Operational', A: 90, B: 75 },
  { subject: 'Financial', A: 85, B: 80 },
  { subject: 'Strategic', A: 75, B: 70 },
  { subject: 'Compliance', A: 88, B: 82 },
  { subject: 'Reputational', A: 92, B: 85 },
];

const auditData = [
  { month: 'Jan', findings: 12, resolved: 10 },
  { month: 'Feb', findings: 15, resolved: 13 },
  { month: 'Mar', findings: 10, resolved: 9 },
  { month: 'Apr', findings: 8, resolved: 8 },
  { month: 'May', findings: 11, resolved: 10 },
  { month: 'Jun', findings: 9, resolved: 8 },
];

function Governance() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Governance Framework</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Compliance Scores */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Compliance Scores</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={complianceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#1e40af" name="Compliance Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Assessment */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Risk Assessment Matrix</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Current Period" dataKey="A" stroke="#1e40af" fill="#1e40af" fillOpacity={0.6} />
              <Radar name="Previous Period" dataKey="B" stroke="#059669" fill="#059669" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Audit Findings Tracker */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Audit Findings Tracker</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={auditData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="findings" stroke="#1e40af" name="Total Findings" />
            <Line type="monotone" dataKey="resolved" stroke="#059669" name="Resolved" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Board Independence</h3>
          <p className="mt-1 text-2xl font-semibold text-primary">85%</p>
          <p className="text-sm text-gray-600">Independent Directors</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Policy Compliance</h3>
          <p className="mt-1 text-2xl font-semibold text-secondary">96%</p>
          <p className="text-sm text-gray-600">Adherence Rate</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Risk Incidents</h3>
          <p className="mt-1 text-2xl font-semibold text-accent">-20%</p>
          <p className="text-sm text-gray-600">vs. Last Quarter</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Audit Actions</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">89%</p>
          <p className="text-sm text-gray-600">Completion Rate</p>
        </div>
      </div>
    </div>
  );
}

export default Governance;