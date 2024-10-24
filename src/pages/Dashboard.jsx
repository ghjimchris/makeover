import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import cheerio from 'cheerio';
import db from '../db/setup';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome, {user.username}!</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Web Scraping Tool</h2>
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                placeholder="https://example.com"
                required
              />
            </div>
            {error && (
              <div className="mb-4 text-red-600 text-sm">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {isLoading ? 'Scraping...' : 'Scrape Content'}
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Environmental Score</h3>
              <p className="mt-1 text-2xl font-semibold text-primary">85%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Social Score</h3>
              <p className="mt-1 text-2xl font-semibold text-secondary">78%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Governance Score</h3>
              <p className="mt-1 text-2xl font-semibold text-accent">92%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Overall Rating</h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900">A+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;