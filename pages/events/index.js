import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SiteLayout from '../../layouts/SiteLayout';

import CoinItem from '../../components/Widgets/CoinItem/CoinItem';
import CoinItemEnded from '../../components/Widgets/CoinItem/CoinItemEnded';
import Footer from '../../components/Footer/Footer';

const EventsScreen = () => {
  const router = useRouter();
  const [primaryTab, setPrimaryTab] = useState(0);
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

  const handlePrimaryTab = (tabNum) => {
    setPrimaryTab(tabNum);
  };

  return (
    <>
      <SiteLayout>
        <div className='flex flex-destroy'>
          <div className='content-70 flex-1'>
            <div className='activity-section'>
              <section className='section hero'>
                <div className='hero-inner'>
                  <p>
                    <h1>Activity Center</h1> <br /> Rich Blockchain Activity
                  </p>
                </div>
              </section>
            </div>
            <div className='Header-items flex flex-space-around center'>
              <button
                type='button'
                className={primaryTab === 0 ? 'active' : 'passive'}
                onClick={() => handlePrimaryTab(0)}
              >
                IN PROGRESS
              </button>
              <button
                type='button'
                className={primaryTab === 1 ? 'active' : 'passive'}
                onClick={() => handlePrimaryTab(1)}
              >
                UPCOMING
              </button>
              <button
                type='button'
                className={primaryTab === 2 ? 'active' : 'passive'}
                onClick={() => handlePrimaryTab(2)}
              >
                ENDED
              </button>
            </div>
            <div className='flex flex-space-around center'>
              {primaryTab === 0 && (
                <div className='flex flex-destroy flex-space-between center'>
                  <div className='flex-1 box-right-padding'>
                    <CoinItem />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <CoinItem />
                  </div>
                </div>
              )}

              {primaryTab === 1 && (
                <div className='flex flex-destroy flex-space-between center'>
                  <div className='flex-1 box-right-padding'>
                    <CoinItemEnded />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <CoinItemEnded />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <CoinItemEnded />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <CoinItemEnded />
                  </div>
                </div>
              )}

              {primaryTab === 2 && (
                <div className='flex flex-destroy flex-space-between center'>
                  <div className='flex-1 box-right-padding'>
                    <CoinItemEnded />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <CoinItemEnded />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <CoinItemEnded />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </SiteLayout>
      <Footer />
    </>
  );
};

export default EventsScreen;
