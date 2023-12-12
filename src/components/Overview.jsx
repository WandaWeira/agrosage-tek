import React, { useState } from "react";

const Overview = () => {
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

  const handleToggleOverview = () => {
    setIsOverviewExpanded(!isOverviewExpanded);
  };

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

  const shortOverview = overviewContent.slice(0, 200) + "...";

  return (
    <div className="container mx-auto px-2 py-8 my-10">
      <div className="flex flex-wrap justify-between -mx-2">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-3">Overview</h2>
          <p>{isOverviewExpanded ? overviewContent : shortOverview}</p>
          <button onClick={handleToggleOverview} className="text-blue-500">
            {isOverviewExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-3">Vision</h2>
          <p>
            To empower underprivileged farmers in Uganda to earn decent returns
            on investment to enable them to eradicate poverty and improve their
            living standards through postharvest loss reduction and
            transformation of the agricultural supply chain in Uganda.
          </p>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-3">Mission</h2>
          <p>
            Agrosage is committed to preserving the freshness of agricultural
            produce, adding value to it, and delivering it to final consumers
            efficiently and affordably through innovative technology and
            sustainable practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
