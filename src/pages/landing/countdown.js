import React from 'react';
import Download from 'src/components/download';
import CTA from 'src/components/cta';

export default function Landing_Countdown({ link }) {
  return (
    <div className="min-h-screen w-full bg-[#ED2D39] bg-opacity-[20%]">
      <section className="relative flex flex-col md:flex-row items-center justify-center w-full w-screen">
        <div className="relative flex flex-col md:flex-row items-center z-10 px-6 md:py-8 max-w-6xl">
          <img
            src="/images/countdown/hero.png"
            alt="Countdown"
            className="flex-1 w-full h-auto md:max-w-[50%] mb-6 md:mb-0 md:mr-10"
          />
          <div className="text-center items-center md:text-left md:items-left max-w-full mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">Celebrate every moment.</h1>
            <p className="text-lg lg:text-xl mb-6">
              Create beautiful countdown widgets for every special occasion.
            </p>
            <Download href={link} />
          </div>
        </div>
      </section>

      <section>
        <FeatureRow
          title="Customize your countdown."
          description="Add photos, text styles, and colors to your countdowns. Search for high-quality photos via Unsplash or from your own photo library."
          imgSrc="/images/countdown/feature1.png"
          reverse
        />
        <FeatureRow
          title="Holidays built-in."
          description="Set up countdowns to holidays with one tap. Once the holiday passes, the countdown rolls over to the next year automatically."
          imgSrc="/images/countdown/feature2.png"
        />
        <FeatureRow
          title="Share with friends."
          description="Use the Messages app to send countdowns to friends. They'll be able to save and enjoy the same countdown on their device."
          imgSrc="/images/countdown/feature3.png"
          reverse
        />
        <FeatureRow
          title="Widgets at a glance."
          description="See your countdowns at a glance with widgets on the home screen, so you'll always be looking forward to your special day."
          imgSrc="/images/countdown/feature4.png"
        />
      </section>

      <section className="bg-[#ED2D39] bg-opacity-[30%]">
        <CTA
          href={link}
          text="It's time to start counting down."
          subtext="Download Countdown Creator for free today."
        />
      </section>
    </div>
  );
}

function FeatureRow({ title, description, imgSrc, reverse }) {
  return (
    <section className={`${reverse ? "bg-[#ED2D39] bg-opacity-[30%]" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`order-2 md:order-2' : 'order-2 md:order-2 text-center md:py-16`}>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-md lg:text-lg mb-12 md:mb-5">{description}</p>
        </div>
        <img
          src={imgSrc}
          alt={title}
          className={`w-full h-auto ${reverse ? 'order-1 md:order-2' : ''} pt-8 md:pt-0`}
        />
      </div>
    </section>
  );
}
