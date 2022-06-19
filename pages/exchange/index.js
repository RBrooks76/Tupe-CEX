import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SiteLayout from '../../layouts/SiteLayout';

import Exchange from '../../components/Widgets/Exchange/Exchange';
import TradingViewTv from '../../components/Widgets/Exchange/TradingViewTv';
import OrderBook from '../../components/Widgets/Exchange/OrderBook';
import BuySellPanel from '../../components/Widgets/BuySell/BuySellPanel';
import OrderPanel from '../../components/Widgets/OrderPanel/OrderPanel';
import TradeHistory from '../../components/Widgets/TradeHistory/TradeHistory';
import Footer from '../../components/Footer/Footer';

const ExchangeScreen = () => {
  const router = useRouter();
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

  // if (token && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() !== 'production') {
    return (
      <>
        <SiteLayout>
          <div className='flex'>
            <div className=''>
              <Exchange />
            </div>
            <div className='flex flex-wrap flex-row'>
              <TradingViewTv />
              <BuySellPanel />
              <TradeHistory />
              <OrderPanel />
              <OrderBook />
            </div>
          </div>
        </SiteLayout>
        <Footer />
      </>
    );
  // }

  // return <span>Redirecting to home page</span>;
};

export default ExchangeScreen;
