import React from 'react';
import SideMenu from '@/components/sideMenu';
import IndexOverlay from '@/components/indexOverlay';
import IndexWorkSummarySection from '@/components/indexWorkSummary';
import IndexStatsSection from '@/components/indexStats';
import IndexMapSection from '@/components/indexMapSection';
import Footer from '@/components/footer';

import { getPayload } from "payload";
import config from "@/payload.config";
import { NotFound } from "payload";

import '@/app/styles/global.css';
import '@/app/styles/index.css';

export default async function IndexPage(){
  const payload = await getPayload({ config });
  const content = await payload.findGlobal({ slug: 'index' });
  if (!content) {
    return <NotFound />;
  }
  return (
    <html lang="en">  
      <body>
      {/* Right Side Expandable Menu */}

      <SideMenu />
          <IndexOverlay />
          <IndexStatsSection />
          <IndexWorkSummarySection />
          <IndexMapSection />
          <Footer />
        </body>
        </html>
  );
}

