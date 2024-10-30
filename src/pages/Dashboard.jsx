import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useAuth } from '../context/AuthContext';
import {
  HomeIcon,
  BookOpenIcon,
  ChartBarIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import 'leaflet/dist/leaflet.css';

function Dashboard() {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
    { name: 'Library', icon: BookOpenIcon, path: '/library' },
    { name: 'Analytics', icon: ChartBarIcon, path: '/analytics' },
    { name: 'Reports', icon: DocumentTextIcon, path: '/reports' },
    { name: 'Tools', icon: WrenchScrewdriverIcon, path: '/tools' },
    { name: 'User Management', icon: UsersIcon, path: '/users' },
    { name: 'Collaborate', icon: UserGroupIcon, path: '/collaborate' },
    { name: 'Activity Log', icon: ClockIcon, path: '/activity' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Aside Menu */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors ${
                  location.pathname === item.path ? 'bg-primary/10 text-primary border-r-4 border-primary' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.username || 'Guest'}</h1>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-sm text-gray-500">Last updated:</span>
              <span className="ml-2 text-sm font-medium text-gray-900">{new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Projects</h3>
              <p className="text-3xl font-bold text-primary">24</p>
              <p className="text-sm text-green-600 mt-2">↑ 3 new this month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Users</h3>
              <p className="text-3xl font-bold text-primary">156</p>
              <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Reports Generated</h3>
              <p className="text-3xl font-bold text-primary">89</p>
              <p className="text-sm text-green-600 mt-2">↑ 8% this week</p>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Activity Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={[
                { date: '2024-01', users: 100, reports: 65, projects: 24 },
                { date: '2024-02', users: 120, reports: 75, projects: 28 },
                { date: '2024-03', users: 156, reports: 89, projects: 32 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="users" stroke="#1e40af" fill="#1e40af" fillOpacity={0.2} name="Active Users" />
                <Area type="monotone" dataKey="reports" stroke="#059669" fill="#059669" fillOpacity={0.2} name="Reports" />
                <Area type="monotone" dataKey="projects" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.2} name="Projects" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;