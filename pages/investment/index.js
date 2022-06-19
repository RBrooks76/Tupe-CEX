import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SiteLayout from '../../layouts/SiteLayout';
import InvestmentTab from '../../components/Widgets/Investment/InvestmentTab';
import AssetsTab from '../../components/Widgets/Investment/AssetsTab';
import Footer from '../../components/Footer/Footer';

const InvestmentScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('investment');
  const [token, setToken] = useState('');

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = () => {
    //
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }
  }, []);

  const getTabClass = (tabId) => (activeTab === tabId ? 'active' : '');

  return (
    <>
      <SiteLayout>
        <div className='investmentScreen'>
          <section className='section hero'>
            <div className=''>
              <p className='title'>
                <span className='imgLogo'>
                  <img
                    src='data:image/png;base64,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'
                    alt=''
                  />
                </span>
                Grand Launch of Exclusive Services For VIP Users
              </p>
              <p className='text text2'>
                <i className='material-icons mr-2'>pan_tool_alt</i>
                <span>Learn More</span>
              </p>
            </div>
            <div className='hero-tabs'>
              <div
                role='button'
                className={`${getTabClass('investment')} hero-tab`}
                tabIndex={0}
                onClick={() => changeTab('investment')}
                onKeyDown={() => handleKeyDown}
              >
                Products
              </div>
              <div
                role='button'
                className={`${getTabClass('assets')} hero-tab`}
                tabIndex={0}
                onClick={() => changeTab('assets')}
                onKeyDown={() => handleKeyDown}
              >
                Assets
              </div>
            </div>
          </section>
          <div className='tab-content'>
            {activeTab === 'investment' && (
              <div className={`${getTabClass('investment') ? 'active' : ''}`}>
                <InvestmentTab />
              </div>
            )}
            {activeTab === 'assets' && (
              <div className={`${getTabClass('assets') ? 'active' : ''}`}>
                <AssetsTab />
              </div>
            )}
          </div>
        </div>
      </SiteLayout>
      <Footer />
    </>
  );
};

export default InvestmentScreen;
