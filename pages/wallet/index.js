import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SiteLayout from '../../layouts/SiteLayout';

import TransactionRow from '../../components/Tables/Transactions/TransactionRow';
import Box from '../../components/Common/Box';
import Deposit from '../../components/Widgets/Wallet/Deposit/Deposit';
import Fund from '../../components/Widgets/Wallet/Fund/Fund';
import Withdraw from '../../components/Widgets/Withdraw/WithdrawSection';
import Footer from '../../components/Footer/Footer';

const WalletScreen = () => {
  const router = useRouter();
  const tabOverride = router.query.tab;
  const tabList = ['fund', 'deposit', 'withdraw', 'transaction'];

  let activePrimaryTab = 0;

  if (tabList.includes(tabOverride)) {
    activePrimaryTab = tabList.indexOf(tabOverride);
  }

  const [primaryTab, setPrimaryTab] = useState(activePrimaryTab);
  const [secondaryTab, setSecondaryTab] = useState(0);
  const [data, setData] = useState([]);
  const [tertiaryTab, setTertiaryTab] = useState(0);
  const [token, setToken] = useState('');

  const handlePrimaryTab = (tabNum) => {
    setPrimaryTab(tabNum);
    setSecondaryTab(0);
    setTertiaryTab(0);
  };

  const handleSecondaryTab = (tabNum) => {
    setSecondaryTab(tabNum);
  };

  const handleTertiaryTab = (tabNum) => {
    setTertiaryTab(tabNum);
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }

    const dataArray = [
      {
        id: 1,
        type: 2,
        network: 'BEP2',
        date: '2/5/2020 06:24:45',
        from: 'Tarık',
        to: 'Cenk',
        toPicture: 'me.png',
        coin: 'Bitcoin',
        icon: 'https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png',
        fee: '0.00000000',
        amount: '5.553',
        status: 1,
      },
      {
        id: 2,
        type: 2,
        network: 'BEP2',
        date: '3/5/2020 18:35:12',
        from: 'Tarık',
        to: 'Cenk',
        toPicture: 'me.png',
        coin: 'Ethereum',
        icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
        fee: '0.00300000',
        amount: '3.000',
        status: 2,
      },
      {
        id: 3,
        type: 1,
        network: '',
        date: '4/5/2020 13:42:01',
        from: 'Cenk',
        to: 'Tarık',
        toPicture: '',
        coin: 'Tether',
        icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
        fee: '10.00000000',
        amount: '158',
        status: 3,
      },
    ];

    setData(dataArray);
  }, []);

  return (
    <>
      <SiteLayout>
        <div className='transaction-section'>
          <section className='hero mb-2'>
            <div className='hero-inner h-full'>
              <div className='hero-tabs h-full'>
                <div
                  role='button'
                  tabIndex={0}
                  className={`${primaryTab === 0 ? 'active' : 'passive'} hero-tab`}
                  onClick={() => handlePrimaryTab(0)}
                  onKeyDown={() => handlePrimaryTab(0)}
                >
                  Fund
                </div>
                <div
                  role='button'
                  tabIndex={0}
                  className={`${primaryTab === 1 ? 'active' : 'passive'} hero-tab`}
                  onClick={() => handlePrimaryTab(1)}
                  onKeyDown={() => handlePrimaryTab(1)}
                >
                  Deposit
                </div>
                <div
                  role='button'
                  tabIndex={0}
                  className={`${primaryTab === 2 ? 'active' : 'passive'} hero-tab`}
                  onClick={() => handlePrimaryTab(2)}
                  onKeyDown={() => handlePrimaryTab(2)}
                >
                  Withdraw
                </div>
                <div
                  role='button'
                  tabIndex={0}
                  className={`${primaryTab === 3 ? 'active' : 'passive'} hero-tab`}
                  onClick={() => handlePrimaryTab(3)}
                  onKeyDown={() => handlePrimaryTab(3)}
                >
                  Transaction History
                </div>
              </div>
            </div>
          </section>
          <Box>
            {primaryTab === 0 && (
              <div className='center'>
                <Fund />
              </div>
            )}
            {primaryTab === 1 && (
              <div className='center'>
                <Deposit />
              </div>
            )}
            {primaryTab === 2 && (
              <div>
                <Withdraw />
              </div>
            )}
            {primaryTab === 3 && (
              <>
                <div className='transHeaders flex flex-center flex-space-between'>
                  <ul>
                    <li>
                      <button
                        type='button'
                        className={secondaryTab === 0 ? 'active' : 'passive'}
                        onClick={() => handleSecondaryTab(0)}
                      >
                        Recent History
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        className={secondaryTab === 1 ? 'active' : 'passive'}
                        onClick={() => handleSecondaryTab(1)}
                      >
                        Deposits History
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        className={secondaryTab === 2 ? 'active' : 'passive'}
                        onClick={() => handleSecondaryTab(2)}
                      >
                        Withdrawals History
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        className={secondaryTab === 3 ? 'active' : 'passive'}
                        onClick={() => handleSecondaryTab(3)}
                      >
                        Investment Records
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        className={secondaryTab === 4 ? 'active' : 'passive'}
                        onClick={() => handleSecondaryTab(4)}
                      >
                        Event History
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        className={secondaryTab === 5 ? 'active' : 'passive'}
                        onClick={() => handleSecondaryTab(5)}
                      >
                        Order History
                      </button>
                    </li>
                  </ul>
                </div>
                {secondaryTab === 0 && (
                  <>
                    <div>&nbsp;</div>
                    {data && data.length > 0 && (
                      <table className='data-table'>
                        <thead>
                          <tr>
                            <th className='left responsive-hide'>Date</th>
                            <th className='left responsive-hide'>Type</th>
                            <th className='left'>Coin</th>
                            <th className='left'>Network</th>
                            <th className='center'>Amount</th>
                            <th className='center'>Fee</th>
                            <th className='center'>Status</th>
                            <th className='left responsive-hide sectionWithdrawTable-actionColumn'>
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item) => (
                            <TransactionRow key={item.id.toString()} item={item} />
                          ))}
                        </tbody>
                      </table>
                    )}
                  </>
                )}
                {secondaryTab === 1 && (
                  <>
                    <div className='box-title box-title-height box-vertical-padding box-horizontal-padding'>
                      <div className='flex flex-center flex-space-between no-select'>
                        <div>
                          <p>&nbsp;&nbsp;</p>
                        </div>
                        <ul>
                          <li>
                            <button
                              type='button'
                              className={tertiaryTab === 0 ? 'active' : 'passive'}
                              onClick={() => handleTertiaryTab(0)}
                            >
                              Crypto
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              className={tertiaryTab === 1 ? 'active' : 'passive'}
                              onClick={() => handleTertiaryTab(1)}
                            >
                              Fiat
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {tertiaryTab === 1 && (
                      <table className='data-table'>
                        <thead>
                          <tr>
                            <th className='left responsive-hide'>Created (Date)</th>
                            <th className='left responsive-hide'>Deposit Type</th>
                            <th className='left'>Reference</th>
                            <th className='center'>Amount</th>
                            <th className='center'>Status</th>
                          </tr>
                        </thead>
                      </table>
                    )}
                    {tertiaryTab === 0 && (
                      <div className='container'>
                        {data && data.length > 0 && (
                          <table className='data-table'>
                            <thead>
                              <tr>
                                <th className='left responsive-hide'>Date</th>
                                <th className='left'>Coin</th>
                                <th className='left'>Network</th>
                                <th className='center'>Amount</th>
                                <th className='center'>Fee</th>
                                <th className='center'>Status</th>
                                <th className='center'>Action</th>
                              </tr>
                            </thead>
                          </table>
                        )}
                      </div>
                    )}
                  </>
                )}
                {secondaryTab === 2 && (
                  <>
                    <div className='box-title box-title-height box-vertical-padding box-horizontal-padding'>
                      <div className='flex flex-center flex-space-between no-select'>
                        <div>
                          <p>Recent Withdrawals</p>
                        </div>
                        <ul>
                          <li>
                            <button
                              type='button'
                              className={tertiaryTab === 0 ? 'active' : 'passive'}
                              onClick={() => handleTertiaryTab(0)}
                            >
                              Crypto
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              className={tertiaryTab === 1 ? 'active' : 'passive'}
                              onClick={() => handleTertiaryTab(1)}
                            >
                              Fiat
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {tertiaryTab === 0 && (
                      <div>
                        {data && data.length > 0 && (
                          <table className='data-table'>
                            <thead>
                              <tr>
                                <th className='left'>Date</th>
                                <th className='left responsive-hide'>Coin</th>
                                <th className='left responsive-hide'>Network</th>
                                <th className='left'>Amount</th>
                                <th className='left'>Fee</th>
                                <th className='left'>Status</th>
                                <th className='center'>Action</th>
                              </tr>
                            </thead>
                          </table>
                        )}
                      </div>
                    )}
                    {tertiaryTab === 1 && (
                      <div>
                        {data && data.length > 0 && (
                          <table className='data-table'>
                            <thead>
                              <tr>
                                <th className='left'>&nbsp;</th>
                                <th className='left responsive-hide'>Created</th>
                                <th className='left responsive-hide'>Amount</th>
                                <th className='left'>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>&nbsp;</td>
                                <td>2/5/2020 06:24:45</td>
                                <td>35.00</td>
                                <td>Completed</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>2/7/2020 09:11:45</td>
                                <td>200.00</td>
                                <td>Completed</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>2/14/2020 10:04:20</td>
                                <td>1023.00</td>
                                <td>Closed</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>2/25/2022 10:04:20</td>
                                <td>500.00</td>
                                <td>In Process</td>
                              </tr>
                            </tbody>
                          </table>
                        )}
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            {secondaryTab === 3 && (
              <table className='data-table'>
                <thead>
                  <tr>
                    <th className='left'>Time of Transfer</th>
                    <th className='left responsive-hide'>Time of Settlememt</th>
                    <th className='left responsive-hide'>Type</th>
                    <th className='left responsive-hide'>Coin</th>
                    <th className='left responsive-hide'>Amount</th>
                    <th className='left responsive-hide'>Interest</th>
                    <th className='left responsive-hide'>Interest Paid</th>
                    <th className='left responsive-hide'>View Details</th>
                  </tr>
                </thead>
              </table>
            )}
            {secondaryTab === 4 && (
              <table className='data-table'>
                <thead>
                  <tr>
                    <th className='left'>Start Date</th>
                    <th className='left responsive-hide'>End Date</th>
                    <th className='center'>My Rank</th>
                    <th className='center'>Coin</th>
                    <th className='left responsive-hide'>Purchased Amount</th>
                    <th className='left responsive-hide'>Reward Received</th>
                    <th className='center'>Status</th>
                  </tr>
                </thead>
              </table>
            )}
            {secondaryTab === 5 && (
              <table className='data-table'>
                <thead>
                  <tr>
                    <th className='left'>Date</th>
                    <th className='left responsive-hide'>Coin</th>
                    <th className='center'>Type</th>
                    <th className='center'>Amount</th>
                  </tr>
                </thead>
              </table>
            )}
          </Box>
        </div>
      </SiteLayout>
      <Footer />
    </>
  );
};

export default WalletScreen;
