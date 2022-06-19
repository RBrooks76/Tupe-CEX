import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';

const SiteLayout = memo(({ children }) => {
  useEffect(() => {
    document.body.setAttribute('style', 'min-width: 1280px;');
  }, []);

  return (
    <div className='siteLayout kks_min_width kks_max_width'>
      <Header />
      <div className='flex'>
        <div className='navbar h-full'>
          <Navbar />
        </div>
        <div className='h-full flex-1 p-2' style={{ overflowY: 'auto' }}>
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
});

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
