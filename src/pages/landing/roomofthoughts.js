import React from 'react';

export default function Landing_RoomOfThoughts({ link }) {
  return (
    <div className="min-h-screen w-screen bg-[#E5CFE5] overflow-x-hidden">

      <div className="max-w-3xl mx-auto">
        <section className="relative z-10 flex flex-col items-center justify-center text-center py-5 px-6 pt-10 w-full">
          <img
            src="/images/roomofthoughts/logo.svg"
            alt="Room of Thoughts Logo"
            className="max-w-[600px] w-full h-auto mb-6 p-10"
          />
          <p className="text-xl md:text-2xl mb-4 font-bold">
            A spatial AI assistant.
          </p>
          <p className="text-sm md:text-lg mb-8 font-bold text-gray-600">
            Coming soon to Apple Vision Pro.
          </p>
        </section>
      </div>
    </div>
  );
}
