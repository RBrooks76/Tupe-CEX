import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const EventDetailScreen = () => {
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
    <MainLayout>
      <div className='content eventDetail'>
        <Header />
        <div
          data-v-01944206=''
          className='dynmt-page'
          style={{ background: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0));' }}
        >
          <div>
            <div data-v-01944206 className='banner-wrap'>
              <img
                data-v-01944206
                src='https://upload-hotbit-io.oss-accelerate.aliyuncs.com/files/0214HD-VGM-pc-en.png'
                alt='banner'
                className='banner'
                data-xblocker='passed'
                style={{ visibility: 'visible' }}
              />
            </div>
            <div data-v-01944206 className='content'>
              <div
                data-v-01944206
                className='item'
                style={{ backgroundColor: 'rgb(25, 25, 27)', borderColor: 'rgb(61, 61, 69)' }}
              >
                <div data-v-01944206 className='l'>
                  <div data-v-01944206 className='trading-box'>
                    <div data-v-01944206 className='title'>
                      Trading Competition
                    </div>
                    <p data-v-01944206 className='txt1'>
                      Volume
                    </p>
                    <p data-v-01944206 className='amount'>
                      --
                    </p>
                    <button type='button' data-v-01944206 className='trans-btn'>
                      Go Trading
                    </button>
                  </div>
                  <div
                    data-v-01944206
                    className='bg-txt2'
                    style={{ backgroundColor: 'rgb(32, 32, 37)' }}
                  >
                    <p data-v-01944206 className='txt2'>
                      During the event, Hotbit will rank all users based on their VGM trading volumes
                      (buy + sell volumes); all participants may share 500,000,000 VGM as rewards
                    </p>
                    <p data-v-01944206 className='txt2'>
                      Rules And Regulations：The users who are ranked No.1-No.10 will share
                      140,000,000 VGM as rewards based on their ranking positions; all qualified
                      participants ranked No.11 and below will share 360,000,000 VGM as rewards based
                      on the proportion between their own
                      <span data-v-01944206>VGM</span>
                      trading volumes accumulated during the event and the total
                      <span data-v-01944206>VGM</span>
                      trading volumes accumulated by all Hotbit users during the event.
                    </p>
                    <p data-v-01944206 className='txt3'>
                      Note：In order to be qualified for participating in the event, during the event,
                      each participant is required to accumulate no less than 2,000,000 VGM (buy +
                      sell volumes) as his / her trading volume. During the event, the withdrawal
                      function of VGM will be temporarily unavailable.
                    </p>
                  </div>
                  <div data-v-01944206>
                    <table
                      data-v-01944206
                      className='tb1'
                      style={{ backgroundColor: 'rgb(32, 32, 37)' }}
                    >
                      <tbody>
                        <tr data-v-01944206>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            Ranking Position(s)
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            1
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            2
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            3
                          </td>
                        </tr>
                        <tr data-v-01944206>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            Reward(s)
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            40,000,000 VGM
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            30,000,000 VGM
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            20,000,000 VGM
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      data-v-01944206
                      className='tb1'
                      style={{ backgroundColor: 'rgb(32, 32, 37)' }}
                    >
                      <tbody>
                        <tr data-v-01944206>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            Ranking Position(s)
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            4-6
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            7-10
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            Other Qualified Users
                          </td>
                        </tr>
                        <tr data-v-01944206>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            Reward(s)
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            10,000,000 VGM
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            5,000,000 VGM
                          </td>
                          <td data-v-01944206 style={{ border: '1px solid rgb(49, 49, 59)' }}>
                            Share 360,000,000 VGM
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div data-v-01944206 className='r'>
                  <table data-v-01944206 className='tb2'>
                    <tbody>
                      <tr data-v-01944206 style={{ backgroundColor: 'rgb(32, 32, 37)' }}>
                        <th data-v-01944206>Ranking Position(s)</th>
                        <th data-v-01944206>User</th>
                        <th data-v-01944206>Volume</th>
                      </tr>
                      <tr data-v-01944206>
                        <td data-v-01944206 style={{ borderBottom: '1px dashed rgb(66, 66, 79)' }}>
                          1
                        </td>
                        <td data-v-01944206 style={{ borderBottom: '1px dashed rgb(66, 66, 79)' }}>
                          4***28
                        </td>
                        <td data-v-01944206 style={{ borderBottom: '1px dashed rgb(66, 66, 79)' }}>
                          467699000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                data-v-01944206
                className='item2'
                style={{ backgroundColor: 'rgb(25, 25, 27)', borderColor: 'rgb(61, 61, 69)' }}
              >
                <div data-v-01944206 className='title'>
                  Note
                </div>
                <p data-v-01944206>
                  1. The ranking chart of the event will be published within 10 business days after
                  the event terminates.
                  <br data-v-01944206 />
                  2. All rewards of the event will be distributed within 10 business days after the
                  event terminates.
                  <br data-v-01944206 />
                  3. Hotbit reserves the final rights on the explanations and interpretations of all
                  rules and regulations of the event. If Hotbit detects any
                  <span data-v-01944206 className='light-span'>
                    cheating, click farming
                  </span>
                  or{ }
                  <span data-v-01944206 className='light-span'>
                    matched trading activities
                  </span>
                  , Hotbit is entitled to disqualify all users involved in such activities from
                  claiming their rewards.
                  <br data-v-01944206 />
                  4. Risk warning: Cryptocurrency assets are known as an innovative type of investment
                  products that involve relatively huge fluctuations in their prices. Please do judge
                  your own investment capabilities rationally and make your investment decisions
                  cautiously.
                  <br data-v-01944206 />
                  We hope you enjoy trading on Hotbit!
                  <br data-v-01944206 />
                  <span data-v-01944206>Hotbit Team</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default EventDetailScreen;
