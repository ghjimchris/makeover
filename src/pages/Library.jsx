import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import db from '../db/setup';

function Library() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const stmt = db.prepare(
      'SELECT * FROM library_items WHERE user_id = ? ORDER BY created_at DESC'
    );
    const results = stmt.all(user.id);
    setItems(results);
  }, [user.id]);

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Content Library</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="all">All Categories</option>
          <option value="environmental">Environmental</option>
          <option value="social">Social</option>
          <option value="governance">Governance</option>
          <option value="general">General</option>
        </select>
      </div>

      <div className="grid gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <span className="px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
                {item.category}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{item.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <a
                href={item.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark"
              >
                Source URL
              </a>
              <span>
                Added on {new Date(item.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in the library.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Library;