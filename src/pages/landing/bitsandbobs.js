import React from 'react';
import Download from 'src/components/download';
import CTA from 'src/components/cta';

export default function Landing_BitsAndBobs({ link }) {
  return (
    <div className="min-h-screen bg-[#FFA41B] bg-opacity-[20%]">
      <section
        className="relative flex flex-col md:flex-row items-center justify-center p-10 w-screen text-center"
        style={{ paddingTop: '15vh', paddingBottom: '15vh' }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-40" />
        <div className="relative flex flex-col items-center z-10">
          <img
            src="/images/bitsandbobs/icon.png"
            alt="Bits & Bobs"
            className="w-16 h-16 rounded-xl mb-5"
          />
          <h1 className="text-3xl font-bold font-mono mb-10">
            Keep track of your <span className="text-transparent bg-clip-text bg-[#FFA41B]">bits & bobs</span>.
          </h1>
          <Download href={link} />
        </div>
      </section>

      <section>
        <FeatureRow
          title="Everything in one place."
          description="View all your collections at a glance, and on all your devices. Whatever you collect, Bits & Bobs can help keep track of it."
          imgSrc="/images/bitsandbobs/feature1.png"
        />
        <FeatureRow
          title="Check off your collectibles."
          description="Use a Checklist to see which items you have and which you're missing. Or use a Ranking to make a list of your favorites."
          imgSrc="/images/bitsandbobs/feature2.png"
          reverse
        />
        <FeatureRow
          title="Customize each entry."
          description="Add photos and descriptions to personalize your collections. Attach tags and set attributes for even more granularity."
          imgSrc="/images/bitsandbobs/feature3.png"
        />
        <FeatureRow
          title="Organize your items."
          description="Sort the items in your collection. Group them together by a common attribute. Or filter to only show certain values."
          imgSrc="/images/bitsandbobs/feature4.png"
          reverse
        />
      </section>

      <section className="bg-[#FFA41B] bg-opacity-[40%]">
        <CTA
          href={link}
          text="It's time to start tracking your collections."
          subtext="Download Bits & Bobs for free today."
          footnote="Quarter-dollar coin images from the United States Mint."
        />
      </section>
    </div>
  );
}

function FeatureRow({ title, description, imgSrc, reverse }) {
  return (
    <section className={`${reverse ? "" : "bg-[#FFA41B] bg-opacity-[40%]"}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 text-center md:py-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-md lg:text-lg mb-12 md:mb-5">{description}</p>
        </div>
        <img src={imgSrc} alt={title} className={`w-full h-auto ${reverse ? 'order-1 md:order-2' : ''} pt-8 md:pt-0`} />
      </div>
    </section>
  );
}
