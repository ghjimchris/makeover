import React from 'react';
import { Link } from 'react-router-dom';
import TeamSection from '../components/TeamSection';

function LandingPage() {
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="py-20 text-white bg-gradient-to-r from-primary to-secondary">
         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
           <div className="text-center">
             <h1 className="mb-6 text-4xl font-bold md:text-6xl">
               Sustainable Future Through Data
             </h1>
             <p className="mb-8 text-xl md:text-2xl">
               Leverage AI and Data Analytics for Better ESG Decision Making
             </p>
             <Link
               to="/register"
               className="px-8 py-3 font-semibold transition duration-300 bg-white rounded-lg text-primary hover:bg-gray-100"
             >
               Get Started
             </Link>
           </div>
         </div>
       </section>

       {/* About Section */}
       <section id="about" className="py-20 text-white bg-gray-800">
         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
           <h2 className="mb-12 text-3xl font-bold text-center">About Us</h2>
           <div className="grid gap-8 md:grid-cols-3">
             <div>
               <h3 className="mb-4 text-2xl font-semibold">Our Purpose</h3>
               <p>
                 Our goal at Opretholde is to enable people and groups to embrace sustainable behaviors that improve the environment. Small adjustments can have big effects, in our opinion, and we are here to encourage and assist you on your path to sustainability.
               </p>
             </div>
             <div>
               <h3 className="mb-4 text-2xl font-semibold">Who We Are</h3>
               <p>
                 We are a group of enthusiastic educators, developers, and environmentalists committed to ensuring that everyone can access sustainable practices. Our shared objective of promoting a more sustainable future binds us together despite our varied backgrounds.
               </p>
             </div>
             <div>
               <h3 className="mb-4 text-2xl font-semibold">What We Do</h3>
               <p>
                 Opretholde offers a sustainability platform, tools, and resources to assist users in:
               </p>
               <ul className="mt-2 list-disc list-inside">
                 <li>Track Sustainability Goals: Establish and keep track of your individual and collective sustainability goals.</li>
               </ul>
             </div>
           </div>
         </div>
       </section>

       {/* Team Section */}
       <section id="team" className="py-20">
         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
           <TeamSection />
         </div>
       </section>

       {/* Footer */}
       <footer className="py-12 text-white bg-gray-800">
         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
           <div className="grid gap-8 md:grid-cols-3">
             <div>
               <h3 className="mb-4 text-xl font-semibold">ESG Dashboard</h3>
               <p className="text-gray-400">
                 Making sustainability measurable and actionable.
               </p>
             </div>
             <div>
               <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
               <ul className="space-y-2">
                 <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
                 <li><Link to="/register" className="text-gray-400 hover:text-white">Register</Link></li>
               </ul>
             </div>
             <div>
               <h3 className="mb-4 text-xl font-semibold">Contact</h3>
               <p className="text-gray-400">
                 Email: info@admin.com<br />
                 Phone: (233) 123-4567
               </p>
             </div>
           </div>
         </div>
       </footer>
    </div>
  );
}

export default LandingPage;
