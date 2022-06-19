import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import SiteLayout from '../../layouts/SiteLayout';
import Box from '../../components/Common/Box';
import BankProcess from '../../components/Widgets/BankProcess/BankProcess';
import OneClickDeposit from '../../components/Widgets/Wallet/Deposit/OneClickDeposit';
import RecentActivity from '../../components/Widgets/RecentActivity/RecentActivity';
import Footer from '../../components/Footer/Footer';

const DashboardScreen = () => {
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

  return (
    <>
      <SiteLayout>
        <div className='flex flex-destroy flex-space-between'>
          <div className='flex-1 box-right-padding'>
            <BankProcess />
          </div>
          <div className='flex-1 box-right-padding'>
            <OneClickDeposit />
          </div>
          <div className='flex-1'>
            <Box>
              <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
                <div className='flex flex-center flex-space-between'>
                  <p>Important</p>
                </div>
              </div>
              <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
                <p>
                  &bull; Crypto Exchange must be written in the recipient/beneficiary part of EFT
                  transfers.
                </p>
                <p>
                  &bull; You can perform Wire Transfer/EFT transactions to the listed accounts. owned
                  by different person Submissions from accounts will not be accepted.
                </p>
                <p>
                  &bull; Transfers using ATM (with/without card), sender information It will not be
                  accepted as it is not possible to confirm.
                </p>
                <p>
                  &bull; The amount you send is automatically checked by the system after the
                  contr.ols ols. It will be credited to your account, you do not need to make a
                  separate notification.
                </p>
                <p>
                  &bull; Fixed deposit in the description for completing your identity verification
                  process You do not need to enter the code.
                </p>
              </div>
            </Box>
          </div>
        </div>
        <div className='flex flex-destroy flex-space-between'>
          <div className='flex-1 box-right-padding'>
            <RecentActivity />
          </div>
          <div className='flex-1'>
            <Box>
              <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
                <div className='flex flex-center flex-space-between'>
                  <p>Important</p>
                </div>
              </div>
              <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
                <p>
                  &bull; Withdrawals to all your bank accounts (individual, current, TL) opened in .
                  your name You can do. Your transfer to a different person will not take place.
                </p>
                <p>&bull; Minimum withdrawal amount is 10 TL&apos;dir.</p>
                <p>&bull; A transaction fee of 3 TL is charged during the withdrawal process.</p>
                <p>
                  &bull; When you place a withdrawal order, this amount is deducted from your
                  available balance. will fall.
                </p>
                <p>
                  &bull; You can cancel orders that have not yet been fulfilled. In this case the
                  instruction amount is transferred to your reusable balance.
                </p>
                <p>
                  &bull; Withdrawal orders given outside the working hours of the banks, processed at
                  the start.
                </p>
              </div>
            </Box>
          </div>
        </div>
      </SiteLayout>
      <Footer />
    </>
  );
};

export default DashboardScreen;
