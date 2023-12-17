import React, { useState } from "react";

const Overview = () => {
  const overviewContent = `
    Agrosage Tek Uganda Limited (ATUL) is committed to addressing
    poverty among small-scale farmers in Uganda by significantly
    reducing postharvest losses from 53% to 13%. Our mission is achieved
    by establishing solar-powered communal cold storage facilities
    strategically located to enable farmers to preserve their produce
    for up to three months. Beyond our cold storage solutions, we
    provide comprehensive postharvest support services, including
    marketing and advertising, packaging and branding, and efficient
    last-mile delivery facilitated by electric bikes. In essence, we
    empower small-scale farmers economically, enabling them to sell
    their products directly to end consumers without the concerns of
    postharvest losses or exploitation from intermediaries. This enables
    them to earn at least 20% more income than conventional market
    systems. This empowerment is possible by harnessing green energy
    food preservation technology, utilizing e-commerce platforms, and
    facilitating last-mile delivery services using electric bikes.
  `;

  return (
    <div className="px-4 py-8 bg-gray-100">
      <div className="mx-4 md:mx-16 lg:mx-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Overview</h2>
        <p className="text-base md:text-lg my-4 leading-relaxed">
          {overviewContent}
        </p>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
            <h3 className="text-2xl font-bold mb-3">Vision</h3>
            <p className="leading-relaxed">
              To empower underprivileged farmers in Uganda to earn decent
              returns on investment...
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
            <h3 className="text-2xl font-bold mb-3">Mission</h3>
            <p className="leading-relaxed">
              Agrosage is committed to preserving the freshness of agricultural
              produce...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
