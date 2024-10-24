import { Link } from 'react-router-dom';

function LandingPage() {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'CEO', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Michael Chen', role: 'CTO', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Emma Davis', role: 'ESG Analyst', image: 'https://i.pravatar.cc/150?img=3' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustainable Future Through Data
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Leverage AI and Data Analytics for Better ESG Decision Making
            </p>
            <Link
              to="/register"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Our Platform</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
              <p className="text-gray-600">
                Track and analyze environmental metrics to make informed decisions about sustainability initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Social Responsibility</h3>
              <p className="text-gray-600">
                Monitor social impact metrics and ensure compliance with ethical business practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Governance Excellence</h3>
              <p className="text-gray-600">
                Implement robust governance frameworks and maintain transparency in operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ESG Dashboard</h3>
              <p className="text-gray-400">
                Making sustainability measurable and actionable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-white">Register</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@esgdashboard.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;