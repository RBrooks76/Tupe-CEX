import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FormInput from '../../components/Forms/FormInput';

const InvestDetailScreen = () => {
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
      <div className='content investDetail'>
        <Header />
        <div className='content'>
          <div className='flex flex-space-between'>
            <Link href='/Investment' className='button'>
              &lt;Product Page
            </Link>
            <div className='button'>Check My Investments</div>
          </div>
          <div className='box box-content box-vertical-padding box-horizontal-padding detailBox'>
            <div className='earnings-chart-container col-lg-4'>
              <div className='chart-header'>
                <button className='chart-title' type='button'>
                  Annual earnings charts
                </button>
                <div className='space-line' />
                <div className='chart-type-btn flex'>
                  <button className='button button-white button-small btn-active' type='button'>
                    7 Days
                  </button>
                  <button className='button button-white button-small' type='button'>
                    1 Month
                  </button>
                </div>
              </div>
              <div className='chart-box'>
                <div className='line-chart responsive-hide'>
                  <svg viewBox='0 0 150 50' preserveAspectRatio='none'>
                    <g>
                      <circle
                        cx={2}
                        cy={48}
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='10.588235294117647'
                        cy='42.25'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='19.176470588235293'
                        cy={48}
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='27.764705882352942'
                        cy='30.749999999999996'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='36.35294117647059'
                        cy='44.55'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='44.94117647058823'
                        cy='36.5'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='53.529411764705884'
                        cy='28.45'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='62.11764705882353'
                        cy='44.55'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='70.70588235294117'
                        cy='39.949999999999996'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='79.29411764705883'
                        cy='44.55'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='87.88235294117646'
                        cy='16.95'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='96.47058823529412'
                        cy='35.349999999999994'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='105.05882352941177'
                        cy='20.4'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='113.6470588235294'
                        cy='30.749999999999996'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='122.23529411764706'
                        cy='35.349999999999994'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='130.8235294117647'
                        cy='19.25'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx='139.41176470588235'
                        cy='5.449999999999999'
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <circle
                        cx={148}
                        cy={2}
                        r={2}
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <polyline
                        points='2 48 10.588235294117647 42.25 19.176470588235293 48 27.764705882352942 30.749999999999996 36.35294117647059 44.55 44.94117647058823 36.5 53.529411764705884 28.45 62.11764705882353 44.55 70.70588235294117 39.949999999999996 79.29411764705883 44.55 87.88235294117646 16.95 96.47058823529412 35.349999999999994 105.05882352941177 20.4 113.6470588235294 30.749999999999996 122.23529411764706 35.349999999999994 130.8235294117647 19.25 139.41176470588235 5.449999999999999 148 2 148 48 2 48 2 48'
                        style={{
                          stroke: 'none',
                          strokeWidth: 0,
                          fillOpacity: '0.1',
                          fill: 'green',
                          pointerEvents: 'auto',
                        }}
                      />
                      <polyline
                        points='2 48 10.588235294117647 42.25 19.176470588235293 48 27.764705882352942 30.749999999999996 36.35294117647059 44.55 44.94117647058823 36.5 53.529411764705884 28.45 62.11764705882353 44.55 70.70588235294117 39.949999999999996 79.29411764705883 44.55 87.88235294117646 16.95 96.47058823529412 35.349999999999994 105.05882352941177 20.4 113.6470588235294 30.749999999999996 122.23529411764706 35.349999999999994 130.8235294117647 19.25 139.41176470588235 5.449999999999999 148 2'
                        style={{
                          stroke: 'green',
                          strokeWidth: 4,
                          strokeLinejoin: 'round',
                          strokeLinecap: 'round',
                          fill: 'none',
                        }}
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className='symbol-info-container'>
              <div className='flex flex-space-between flex-v-center'>
                <div className='flex flex-v-center '>
                  <div
                    className='icon cover'
                    style={{
                      backgroundImage: `url(https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png)`,
                    }}
                  />
                  <p className='token'>USDT</p>
                  <div className='desc-box'>
                    <p className='symbol-name'>USDT 90-DAY Lockup</p>
                    <div className='flex'>
                      <span className='symbol-type'>Steady</span>
                      <span className='type-lable safe'>Low Risk</span>
                      <span className='type-lable quantization'>Quantitative</span>
                    </div>
                  </div>
                </div>
                <div className='button flex flex-v-center flex-h-center'>Asset Transfer</div>
              </div>
              <div className='flex flex-v-center flex-space-between symbol-content-cell'>
                <div className='symbol-content-title'>
                  <div className='flex flex-v-center flex-space-between item'>
                    <p className='item-left'>Daily APR:</p>
                    <p className='item-right'>0.029%</p>
                  </div>
                  <div className='flex flex-v-center flex-space-between item'>
                    <p className='item-left'>APY:</p>
                    <p className='item-right'>11.20%</p>
                  </div>
                </div>
                <div className='symbol-content-text'>
                  <p>Redemption on maturity</p>
                  <p>Redemption Method</p>
                </div>
                <div className='symbol-content-text'>0.00000000 USDT</div>
              </div>
              <div className='flex flex-v-center flex-space-between symbol-content-column'>
                <div className='symbol-content-title'>
                  <div className='flex flex-v-center flex-space-between'>
                    <p>Updated:</p>
                    <p>1 hours ago</p>
                  </div>
                  <div className='flex flex-v-center flex-space-between'>
                    <p>Available:</p>
                    <p>4968031</p>
                  </div>
                  <div className='flex flex-v-center flex-space-between'>
                    <p>Validity Period：</p>
                    <p>90 Day</p>
                  </div>
                </div>
                <div className='right'>
                  <FormInput type='text' name='name' placeholder='Min Purchase 10 USDT' />
                  <div className='button flex flex-v-center flex-h-center'>Purchase Now</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-space-between list-box'>
            <div className='item'>
              <div className='flex flex-v-center'>
                <div
                  className='icon cover'
                  style={{
                    backgroundImage: `url(https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png)`,
                  }}
                />
                <p>USDT T+1 DeFi Farm</p>
              </div>
              <div className='flex flex-v-center flex-space-between'>
                <p>APY</p>
                <p>11.2%</p>
              </div>
            </div>
            <div className='item'>
              <div className='flex flex-v-center'>
                <div
                  className='icon cover'
                  style={{
                    backgroundImage: `url(https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png)`,
                  }}
                />
                <p>USDT T+1 DeFi Farm</p>
              </div>
              <div className='flex flex-v-center flex-space-between'>
                <p>APY</p>
                <p>11.2%</p>
              </div>
            </div>
            <div className='item'>
              <div className='flex flex-v-center'>
                <div
                  className='icon cover'
                  style={{
                    backgroundImage: `url(https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png)`,
                  }}
                />
                <p>USDT T+1 DeFi Farm</p>
              </div>
              <div className='flex flex-v-center flex-space-between'>
                <p>APY</p>
                <p>11.2%</p>
              </div>
            </div>
            <div className='item'>
              <div className='flex flex-v-center'>
                <div
                  className='icon cover'
                  style={{
                    backgroundImage: `url(https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png)`,
                  }}
                />
                <p>USDT T+1 DeFi Farm</p>
              </div>
              <div className='flex flex-v-center flex-space-between'>
                <p>APY</p>
                <p>11.2%</p>
              </div>
            </div>
          </div>
          <div className='box invest-product-detail'>
            <div className='title'>Product highlights</div>
            <div className='rules'>
              <div className='rules-list flex flex-v-center'>
                <div className='rules-list-label rules-list-label-img'>
                  <img
                    src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/Investment003.png'
                    alt=''
                  />
                </div>
                <div className='rules-list-value'>
                  <p>Risk Free</p>
                  <p>
                    Deposit investment products with bank-level security guaranteed by official.
                  </p>
                </div>
              </div>
            </div>
            <div className='title'>Product Details</div>
            <div className='rules'>
              <div className='rules-list'>
                <div className='rules-list-label'>Product Name</div>
                <div className='rules-list-value'>
                  <span>USDT 90-Day Lockup</span>
                </div>
              </div>
              <div className='rules-list'>
                <div className='rules-list-label'>Expected Income of the Product</div>
                <div className='rules-list-value'>
                  <span>Dynamically</span>
                </div>
              </div>
              <div className='rules-list'>
                <div className='rules-list-label'>Service Charge of the Product</div>
                <div className='rules-list-value'>
                  <span>0</span>
                </div>
              </div>
              <div className='rules-list'>
                <div className='rules-list-label'>Product Type</div>
                <div className='rules-list-value'>
                  <span>Quantitative Hedging</span>
                </div>
              </div>
              <div className='rules-list'>
                <div className='rules-list-label'>Trustee</div>
                <div className='rules-list-value'>
                  <span>HotBank（Department of Asset Management of Hotbit）</span>
                </div>
              </div>
              <div className='rules-list'>
                <div className='rules-list-label'>Income Description</div>
                <div className='rules-list-value'>
                  <span>
                    The quantitative hedging fund focuses on the cross-exchange hedging arbitrage.
                    The fund obtains its incomes through the monitoring of subtle periodic
                    fluctuations in certain token prices of various exchanges with its
                    millisecond-level trading capabilities. What&apos;s more, the fund also adopts
                    7x24 hour risk control system, which ensures the security of all assets in all
                    relevant accounts. The team members of the fund are graduated from world
                    renowned universities such as Technische Universität Berlin, Fudan University
                    and Huazhong University of Science and Technology, with more than 10 years of
                    rich working experiences in Morgan Stanley, Binance and traditional futures
                    industry. Considering the fact that all team members have witnessed various
                    skyrocket, bullish and plummeting, bearish market trends of cryptocurrency
                    industry, all members have obtained sufficient industrial experience and
                    professional capabilities to gain stable incomes for our investors.
                  </span>
                </div>
              </div>
              <div className='rules-list'>
                <div className='rules-list-label'>Risk Statement</div>
                <div className='rules-list-value'>
                  <span>
                    1. The purchaser of the product shall undertake the possible losses caused by
                    various types of force majeure such as government surveillance or that the
                    exchange(s) who operate(s) the strategies (Binance, Huobi, Bitmex) is (are) under
                    hack attack.
                    <br />
                    2. The fund conducts quantitative hedging based on USDT standard, the purchaser of
                    the product shall undertake the losses generated from the drastic decline of USDT
                    based on USD standard.
                  </span>
                </div>
              </div>
            </div>
            <div className='title'>Risk Description</div>
            <div className='rules'>
              <div className='rules-list'>
                <div className='rules-list-label'>Calculation on Investment Income</div>
                <div className='rules-list-value'>
                  <span>
                    <p>
                      Hotbit calculates income based on the amount of investment principal held by
                      users, the actual number of days of each investment principal, and the actual
                      annualized rate of return at the time of subscription. User income = investment
                      principal × actual annualized rate of return at the time of subscription ×
                      product maturity days ÷ 365 For Example Suppose that the user invests 10 USDT,
                      the validity period of the product is 7 days, and the fixed annualized rate of
                      return at the time of subscription is 5%, then the investment income due for the
                      user by the maturity date will be: Investment Income： 10 × 5 % × 7 ÷ 365 ≈
                      0.0095 USDT, the income that the user actually obtains will be 0.0095 USDT. The
                      user&apos;s daily income is calculated based on the product interest rate at the
                      time of purchase, and subsequent income does not change due to product interest
                      rate adjustments.
                    </p>
                  </span>
                </div>
              </div>
              <div className='rules-list'>
                <div className='rules-list-label'>Rules and Regulations for Redemption</div>
                <div className='rules-list-value'>
                  <span>
                    <p>
                      The product is designed a 90 day fixed term investment product. which does not
                      support redemption after the purchase is conducted successfully. All captial +
                      income will be transferred into relevant user&apos;s investment accounts on
                      Hotbit platform before 24:00 on the next day of the maturity date.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h1 className='title' style={{ marginBottom: '20px' }}>
            You may be Interested in the following product(s)
          </h1>
          <div className='flex flex-space-around list-box'>
            <div className='item'>
              <div className='flex flex-v-center'>
                <div
                  className='icon cover'
                  style={{
                    backgroundImage: `url(https://icons-for-free.com/download-icon-cryptocurrency+icons+++color+atom-1324448942364267788_512.png)`,
                  }}
                />
                <p>
                  ATOM ()
                  <br />
                  <span style={{ color: '#23aa82' }}>Permanent</span>
                </p>
              </div>
              <div className='flex flex-v-center flex-space-between'>
                <div className='row'>
                  <p>APY</p>
                  <p>Min Purchase</p>
                </div>
                <div className='row'>
                  <p>8.06%</p>
                  <p>3 ATOM</p>
                </div>
              </div>
              <div className='center'>
                <div className='button btnDetails flex flex-v-center flex-h-center'>DETAILS</div>
              </div>
            </div>
            <div className='item'>
              <div className='flex flex-v-center'>
                <div
                  className='icon cover'
                  style={{
                    backgroundImage: `url(https://assets.coingecko.com/coins/images/9133/large/chainx.png?1572094352)`,
                  }}
                />
                <p>
                  PCX ()
                  <br />
                  <span style={{ color: '#23aa82' }}>Permanent</span>
                </p>
              </div>
              <div className='flex flex-v-center flex-space-between'>
                <div className='row'>
                  <p>APY</p>
                  <p>Min Purchase</p>
                </div>
                <div className='row'>
                  <p>40.29%</p>
                  <p>5 PCX</p>
                </div>
              </div>
              <div className='center'>
                <div className='button btnDetails flex flex-v-center flex-h-center'>DETAILS</div>
              </div>
            </div>
            <div className='item'>
              <div className='flex flex-v-center'>
                <div
                  className='icon cover'
                  style={{
                    backgroundImage: `url(https://icons-for-free.com/download-icon-cryptocurrency+icons+++color+fsn-1324449034830244448_512.png)`,
                  }}
                />
                <p>
                  FSN ()
                  <br />
                  <span style={{ color: '#23aa82' }}>Permanent</span>
                </p>
              </div>
              <div className='flex flex-v-center flex-space-between'>
                <div className='row'>
                  <p>APY</p>
                  <p>Min Purchase</p>
                </div>
                <div className='row'>
                  <p>12.92%</p>
                  <p>30 FSN</p>
                </div>
              </div>
              <div className='center'>
                <div className='button btnDetails flex flex-v-center flex-h-center'>DETAILS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default InvestDetailScreen;
