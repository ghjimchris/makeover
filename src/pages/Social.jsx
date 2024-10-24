import { PieChart, Pie, Cell, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const diversityData = [
  { name: 'Female', value: 45 },
  { name: 'Male', value: 55 },
  { name: 'Non-Binary', value: 5 },
];

const trainingData = [
  { month: 'Jan', hours: 120 },
  { month: 'Feb', hours: 140 },
  { month: 'Mar', hours: 160 },
  { month: 'Apr', hours: 180 },
  { month: 'May', hours: 200 },
  { month: 'Jun', hours: 220 },
];

const communityData = [
  { month: 'Jan', investment: 50000, impact: 2500 },
  { month: 'Feb', investment: 55000, impact: 2800 },
  { month: 'Mar', investment: 60000, impact: 3200 },
  { month: 'Apr', investment: 65000, impact: 3500 },
  { month: 'May', investment: 70000, impact: 3800 },
  { month: 'Jun', investment: 75000, impact: 4000 },
];

const COLORS = ['#1e40af', '#059669', '#7c3aed'];

function Social() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Social Impact Metrics</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Workforce Diversity */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Workforce Diversity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={diversityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
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

        {/* Employee Training */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Employee Training Hours</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trainingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="hours" stroke="#1e40af" fill="#1e40af" name="Training Hours" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Community Investment Impact */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Community Investment Impact</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={communityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="investment" stroke="#1e40af" name="Investment ($)" />
            <Line yAxisId="right" type="monotone" dataKey="impact" stroke="#059669" name="People Impacted" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Employee Satisfaction</h3>
          <p className="mt-1 text-2xl font-semibold text-primary">4.5/5</p>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Training Completion</h3>
          <p className="mt-1 text-2xl font-semibold text-secondary">92%</p>
          <p className="text-sm text-gray-600">Completion Rate</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Community Projects</h3>
          <p className="mt-1 text-2xl font-semibold text-accent">24</p>
          <p className="text-sm text-gray-600">Active Projects</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Volunteer Hours</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">1.2K</p>
          <p className="text-sm text-gray-600">This Quarter</p>
        </div>
      </div>
    </div>
  );
}

export default Social;