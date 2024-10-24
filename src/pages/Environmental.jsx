import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const carbonData = [
  { month: 'Jan', emissions: 240, reduction: 20 },
  { month: 'Feb', emissions: 220, reduction: 25 },
  { month: 'Mar', emissions: 210, reduction: 30 },
  { month: 'Apr', emissions: 190, reduction: 35 },
  { month: 'May', emissions: 180, reduction: 40 },
  { month: 'Jun', emissions: 170, reduction: 45 },
];

const resourceData = [
  { resource: 'Water', usage: 75, target: 100 },
  { resource: 'Energy', usage: 82, target: 100 },
  { resource: 'Waste', usage: 45, target: 100 },
  { resource: 'Recycling', usage: 90, target: 100 },
];

const locations = [
  { name: 'Solar Farm A', position: [51.505, -0.09], rating: 'A+' },
  { name: 'Wind Farm B', position: [51.51, -0.1], rating: 'A' },
  { name: 'Hydro Plant C', position: [51.515, -0.09], rating: 'B+' },
];

function Environmental() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Environmental Metrics</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Carbon Emissions Trend */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Carbon Emissions Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={carbonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="emissions" stroke="#1e40af" name="CO2 Emissions (tons)" />
              <Line type="monotone" dataKey="reduction" stroke="#059669" name="Reduction Target" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Resource Usage */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Resource Usage vs Target</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={resourceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="resource" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usage" fill="#1e40af" name="Current Usage" />
              <Bar dataKey="target" fill="#059669" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sustainability Map */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Sustainable Energy Locations</h2>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position}>
                <Popup>
                  <div className="font-semibold">{location.name}</div>
                  <div>Environmental Rating: {location.rating}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Carbon Footprint</h3>
          <p className="mt-1 text-2xl font-semibold text-primary">-15%</p>
          <p className="text-sm text-gray-600">vs. Last Year</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Renewable Energy</h3>
          <p className="mt-1 text-2xl font-semibold text-secondary">78%</p>
          <p className="text-sm text-gray-600">of Total Usage</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Waste Reduction</h3>
          <p className="mt-1 text-2xl font-semibold text-accent">92%</p>
          <p className="text-sm text-gray-600">Recycling Rate</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Water Conservation</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">25K</p>
          <p className="text-sm text-gray-600">Gallons Saved</p>
        </div>
      </div>
    </div>
  );
}

export default Environmental;