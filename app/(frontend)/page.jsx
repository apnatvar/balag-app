import React from 'react';
import SideMenu from '@/components/sideMenu';
import IndexOverlay from '@/components/indexOverlay';
import IndexWorkSummarySection from '@/components/indexWorkSummary';
import IndexStatsSection from '@/components/indexStats';
import IndexMapSection from '@/components/indexMapSection';
import '@/app/styles/global.css';
import '@/app/styles/index.css';

export default function App(){
  return (
    <html lang="en">  
      <body>
      {/* Right Side Expandable Menu */}

      <SideMenu />
          <IndexOverlay />
          <IndexStatsSection />
          <IndexWorkSummarySection />
          <IndexMapSection />

          <section id="footer" className="footer">
            <div className="footer-content">
              <input type="image" id="hiddenImageInput" />
              <p>© 2023 Balag. All rights reserved.</p>
              <p>Made with ❤️ by <a href="https://example.com">Your Name</a></p>
            </div>
          </section>
        </body>
        </html>
  );
}

