import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SiteLayout from '../../layouts/SiteLayout';
import History from '../../components/Widgets/OrderHistory/History';
import Orders from '../../components/Widgets/OrderHistory/Orders';
import Footer from '../../components/Footer/Footer';

const OrderHistoryScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('history');
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }
  }, []);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = () => {
    //
  };

  const getTabClass = (tab) => (activeTab === tab ? 'active' : '');

  return (
    <>
      <SiteLayout>
        <div className='orderHistory'>
          <section className='hero'>
            <div className='hero-tabs mt-50'>
              <div
                role='button'
                className={`${getTabClass('history')} hero-tab mx-2`}
                tabIndex={0}
                onClick={() => changeTab('history')}
                onKeyDown={() => handleKeyDown}
              >
                Order History
              </div>
              <div
                role='button'
                className={`${getTabClass('orders')} hero-tab mx-2`}
                tabIndex={0}
                onClick={() => changeTab('orders')}
                onKeyDown={() => handleKeyDown}
              >
                Orders
              </div>
            </div>
          </section>
          <div className='hero-tabContents p-2 mt-4'>
            {activeTab === 'history' && (
              <div className={`${getTabClass('history')} hero-tabContent`}>
                <History />
              </div>
            )}
            {activeTab === 'orders' && (
              <div className={`${getTabClass('orders')} hero-tabContent`}>
                <Orders />
              </div>
            )}
          </div>
        </div>
      </SiteLayout>
      <Footer />
    </>
  );
};

export default OrderHistoryScreen;
