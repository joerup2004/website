import React from 'react';
import Download from 'src/components/download';
import CTA from 'src/components/cta';

export default function Landing_Planetaria({ link }) {
  return (
    <div className="min-h-screen bg-black text-white">

      <section className="relative z-10 flex flex-col items-center justify-center text-center py-5 px-6 pt-10">
        <img src="/images/planetaria/symbol.png" alt="Planetaria" className="max-w-[60px] xl:max-w-[100px] mx-auto mb-8" />
        <p className="text-xl md:text-2xl max-w-3xl mb-4 font-bold">
          Explore the celestial worlds of the Solar System.
        </p>
        <p className="text-sm md:text-lg max-w-xl mb-8 font-bold text-gray-300">
          Now available for iPhone, iPad, and Apple Vision Pro.
        </p>
        <Download href={link}/>
      </section>

      <img
        src="/images/planetaria/header.png"
        alt="Solar System Orbit"
        className="hidden md:block w-full relative -mt-[24%] z-0"
      />
      <img
        src="/images/planetaria/headercompact.png"
        alt="Solar System Orbit"
        className="md:hidden w-full relative -mt-[55%] z-0"
      />

      <section className="mx-auto">
        <Feature
          title="Experience Full Immersion"
          description="Become surrounded by the Solar System on Apple Vision Pro. And use AR on iPhone and iPad to bring the Solar System to you."
          image="preview1.png"
        />
        <Feature
          title="Track Orbits in Real-Time"
          description="The Solar System is constantly in motion. Each object is shown at its live position in its orbit, and it moves at its actual rate."
          image="preview2.png"
        />
        <Feature
          title="Visit Planets and Moons"
          description="Visit the Sun, the 8 planets, 5 dwarf planets, and over 20 moons. All objects are represented by beautiful and detailed 3D models."
          image="preview3.png"
        />
        <Feature
          title="Learn About Other Worlds"
          description="You'll find fascinating stories and interesting stats about each celestial object that reveal what makes each one unique."
          image="preview4.png"
        />
        <Feature
          title="Fast-Forward and Rewind Time"
          description="Jump to any point in the past or future to see what the Solar System looks like. Watch the intricate dance of the planets over time."
          image="preview5.png"
        />
      </section>

      <div
        className="relative items-center justify-center bg-cover bg-top -mt-[80px] lg:-mt-[180px]"
        style={{ backgroundImage: 'url(/images/planetaria/preview6.png)' }}
      >
        <img src="/images/planetaria/symbol.png" alt="Planetaria" className="max-w-[80px] xl:max-w-[150px] mx-auto" />
        <CTA
          href={link}
          text="The heavens await your arrival."
          subtext="Download Planetaria now for iPhone, iPad, and Apple Vision Pro."
          footnote="Photos and 3D models provided by NASA/JPL."
        />
      </div>
    </div>
  );
}

function Feature({ title, description, image }) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <h3 className="text-xl md:text-3xl font-bold mb-4 mx-4">{title}</h3>
      <p className="max-w-2xl text-md md:text-xl font-semibold text-gray-300 mb-8 mx-4">{description}</p>
      <img
        src={`/images/planetaria/${image}`}
        alt={title}
        className="w-full mb-12"
      />
    </div>
  );
}
