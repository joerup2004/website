import React from 'react';
import Download from '/src/components/download';
import CTA from 'src/components/cta';

export default function Landing_Omega({ link }) {
  return (
    <div className="min-h-screen w-full bg-[#a7c2fa] bg-opacity-85">

      <section className="py-12 px-4 w-screen">
        <div className="relative flex flex-col md:flex-row items-center z-10 px-6 md:py-8 md:w-full md:max-w-6xl md:mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-8">
              A beautiful and intuitive calculator for your iPhone and iPad.
            </h2>
            <Download href={link} className="mt-6 inline-block" />
          </div>
          <div className="flex justify-center mt-8 md:mt-0 w-full">
            <img src="/images/omega/heading.png" alt="Omega Calculator Promo" className="max-w-full" />
          </div>
        </div>
      </section>

      <Feature
        title="Simple and powerful."
        description="All the capabilities you'll ever need, from trivial computations to advanced mathematical functions."
        image="/images/omega/feature1.png"
        reverse
      />
      <Feature
        title="Accessible from everywhere."
        description="All calculations are saved to a history tape for future use, and synced across all your iCloud devices."
        image="/images/omega/feature2.png"
      />
      <Feature
        title="Quick and natural input."
        description="Enter lengthy and complex expressions with ease. The input line is given high-quality mathematical typesetting."
        image="/images/omega/feature3.png"
        reverse
      />
      <Feature
        title="Always secure and ad-free."
        description="We're committed to providing an ad-free experience for everyone. We also don't collect any data from users."
        image="/images/omega/feature4.png"
      />

      <section className="bg-gradient-to-b from-green-300 to-green-200 bg-opacity-50 pt-12 px-4 w-screen">
        <div className="relative flex flex-col items-center z-10 px-6 md:pt-4 md:max-w-6xl md:mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-center uppercase" style={{ fontFamily: 'SF Pro Rounded, system-ui, sans-serif' }}>
              Omega Pro
            </h2>
            <p className="text-lg mb-4 max-w-2xl">
              Advanced features like variables and graphing. Extra productivity features like saving and exporting calculations. Easier editing with inline text pointer. And so much more.
            </p>
            <p className="text-sm mb-8 text-gray-700">
              Available as a one-time in-app purchase.
            </p>
          </div>
          <div className="flex justify-center md:mt-0">
            <img src="/images/omega/pro.png" alt="Omega Pro" className="max-w-full" />
          </div>
        </div>
      </section>

      <div className="bg-[#2f44bc] bg-opacity-60">
        <CTA
          href={link}
          text="It's time to get the best calculator experience."
          subtext="Download Omega Calculator for free today."
        />
      </div>

    </div>
  );
}

function Feature({ title, description, image, reverse }) {
  return (
    <section className={`${reverse ? "bg-[#2f44bc] bg-opacity-50" : ""} py-12 md:py-0`}>
      <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 ${image ? 'md:grid-cols-2' : 'md:grid-cols-1'} items-center`}>
        <div className={`text-center md:py-16 ${image ? (reverse ? 'order-1 md:order-2' : 'order-2 md:order-1') : ''}`}>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-md lg:text-lg mb-12 md:mb-5">{description}</p>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            className={`w-full h-auto ${reverse ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}
          />
        )}
      </div>
    </section>
  );
}

const OmegaScroll = () => {
  const count = 40;

  const photos = Array.from({ length: count }, (_, i) => `omega${i + 1}.png`);

  const photos1 = photos.slice(0, count / 2).concat(photos.slice(0, count / 2));
  const photos2 = photos.slice(count / 2, count).concat(photos.slice(count / 2, count));

  return (
    <div className="overflow-hidden">
      <div className="flex gap-2.5 animate-scroll1 mt-4 mb-12">
        {photos1.map((photo, index) => (
          <img
            key={index}
            className="rounded-[20px] shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            src={`/images/omega/icons/${photo}`}
            alt=""
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto my-16">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Customizable themes.</h2>
        <p className="text-lg">
          With so many themes to choose from, you can customize the look and feel of the calculator to suit your style. Plus, the app icon changes to match it!
        </p>
      </div>

      <div className="flex gap-2.5 animate-scroll2 mt-16 mb-8">
        {photos2.map((photo, index) => (
          <img
            key={index}
            className="rounded-[20px] shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            src={`/images/omega/icons/${photo}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
