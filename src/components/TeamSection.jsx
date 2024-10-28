import React from 'react';
import EvaImage from '../assets/img/eva.png';
import CalvinImage from '../assets/img/calvin.png';
import AmaImage from '../assets/img/ama.png';
import KingImage from '../assets/img/king.png';

const teamMembers = [
  {
    name: 'Eva Xorlali Mensah',
    image: EvaImage,
    role: ''
  },
  {
    name: 'Calvin Opoku',
    image: CalvinImage,
    role: ''
  },
  {
    name: 'Ama Serwa Markin',
    image: AmaImage,
    role: ''
  },
  {
    name: 'Kingsley Agyekum',
    image: KingImage,
    role: ''
  }
];

function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
