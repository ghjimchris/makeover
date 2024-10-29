import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const environmentalData = [
  { month: 'Jan', emissions: 240, waste: 150, energy: 180 },
  { month: 'Feb', emissions: 220, waste: 145, energy: 170 },
  { month: 'Mar', emissions: 210, waste: 140, energy: 165 },
  { month: 'Apr', emissions: 190, waste: 135, energy: 160 },
  { month: 'May', emissions: 180, waste: 130, energy: 155 },
  { month: 'Jun', emissions: 170, waste: 125, energy: 150 },
];

const socialData = [
  { category: 'Employee Training', hours: 2500 },
  { category: 'Community Service', hours: 1800 },
  { category: 'Health & Safety', hours: 2100 },
  { category: 'Diversity Programs', hours: 1500 },
];

const governanceData = [
  { name: 'Board Diversity', value: 75 },
  { name: 'Policy Compliance', value: 90 },
  { name: 'Risk Management', value: 85 },
  { name: 'Transparency', value: 95 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const facilityLocations = [
  { name: 'Main Factory', position: [51.505, -0.09], emissions: '125 tons CO2e' },
  { name: 'Distribution Center', position: [51.51, -0.1], emissions: '85 tons CO2e' },
  { name: 'Research Center', position: [51.515, -0.09], emissions: '45 tons CO2e' },
];

function Dashboard() {
  const { user } = useAuth();
  const [scrapingUrl, setScrapingUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScrape = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.get(scrapingUrl);
      const $ = cheerio.load(response.data);
      const title = $('title').text();
      const content = $('body').text().substring(0, 500); // First 500 characters

      const stmt = db.prepare(
        'INSERT INTO library_items (title, content, source_url, category, user_id) VALUES (?, ?, ?, ?, ?)'
      );
      
      stmt.run(title, content, scrapingUrl, 'general', user.id);

      setScrapingUrl('');
      alert('Content successfully scraped and saved to library!');
    } catch (err) {
      setError('Failed to scrape content. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Welcome, {user?.username}!</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Web Scraping Tool</h2>
          <form onSubmit={handleScrape}>
            <div className="mb-4">
              <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                URL to Scrape
              </label>
              <input
                type="url"
                id="url"
                value={scrapingUrl}
                onChange={(e) => setScrapingUrl(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                placeholder="https://example.com"
                required
              />
            </div>
            {error && (
              <div className="mb-4 text-sm text-red-600">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {isLoading ? 'Scraping...' : 'Scrape Content'}
            </button>
          </form>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className="text-sm font-medium text-gray-500">Environmental Score</h3>
              <p className="mt-1 text-2xl font-semibold text-primary">85%</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className="text-sm font-medium text-gray-500">Social Score</h3>
              <p className="mt-1 text-2xl font-semibold text-secondary">78%</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className="text-sm font-medium text-gray-500">Governance Score</h3>
              <p className="mt-1 text-2xl font-semibold text-accent">92%</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className="text-sm font-medium text-gray-500">Overall Rating</h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900">A+</p>
            </div>
          </div>
        </div>
      </div>
      


          {/* Environmental Metrics */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Environmental Performance</h2>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={environmentalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="emissions" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="waste" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="energy" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Social Metrics */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Social Impact</h2>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={socialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#1e40af" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Governance Metrics */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Governance Scores</h2>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={governanceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
              >
                {governanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {governanceData.map((entry, index) => (
              <div key={entry.name} className="flex items-center">
                <div
                  className="w-4 h-4 mr-2 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span>{entry.name}: {entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facility Map */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Facility Locations & Emissions</h2>
        <div className="p-6 bg-white rounded-lg shadow-lg" style={{ height: '400px' }}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {facilityLocations.map((facility) => (
              <Marker key={facility.name} position={facility.position}>
                <Popup>
                  <b>{facility.name}</b><br />
                  Emissions: {facility.emissions}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* ESG Metrics Table */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Key ESG Metrics</h2>
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Metric</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Current</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Target</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Carbon Emissions</td>
                <td className="px-6 py-4 whitespace-nowrap">170 tons CO2e</td>
                <td className="px-6 py-4 whitespace-nowrap">150 tons CO2e</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-yellow-800 bg-yellow-100 rounded-full">
                    In Progress
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Employee Training</td>
                <td className="px-6 py-4 whitespace-nowrap">2,500 hours</td>
                <td className="px-6 py-4 whitespace-nowrap">2,000 hours</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Achieved
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Board Diversity</td>
                <td className="px-6 py-4 whitespace-nowrap">75%</td>
                <td className="px-6 py-4 whitespace-nowrap">80%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-yellow-800 bg-yellow-100 rounded-full">
                    In Progress
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  

    
  );
}

export default Dashboard;