import { useState, useEffect } from 'react'

import SigninScreen from '../members/signout';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PolarisDetailScreen = () => {
  const [loggedinEmail, setEmail] = useState('');

  useEffect(() => {
    var local_email = localStorage.getItem('local_email');
    setEmail(local_email);
  }, []);

  if (loggedinEmail) {
    return (
      <MainLayout>
      <div className='content'>
        <Header />
        <div className='raise-detail-page to-top'>
          <div className='raise-detail-container'>
            <div className='raise-detail-container-left'>
              <div className='raise-detail-header'>
                <p className='raise-detail-header-label'>HOTBIT POLARIS</p>
                <p className='raise-detail-header-label' />
                <div className='dropdown-wrapper raise-dropdown'>
                  <button type='button' className='dropdownButton'>
                    <span>MOMAT/USDT</span>
                    <i className='fa fa-caret-down' />
                  </button>
                  <ul className='dropdown_ul' style={{ display: 'none' }}>
                    <li className='active-li'>MOMAT/USDT</li>
                    <li className>OM/USDT</li>
                    <li className>ANY/USDT</li>
                    <li className>CLX/USDT</li>
                    <li className>FIL/USDX</li>
                    <li className>FIL/HTB</li>
                    <li className>NU/USDT</li>
                    <li className>NU/HTB</li>
                    <li className>TUBER/USDT</li>
                    <li className>TUBER/HTB</li>
                    <li className>GRAM/USDT</li>
                    <li className>GRAM/HTB</li>
                    <li className>GRAM/USDT</li>
                    <li className>GRAM/HTB</li>
                    <li className>ZORO/USDT</li>
                    <li className>VGO/USDT</li>
                    <li className>QOB/HTB</li>
                    <li className>QOB/USDT</li>
                    <li className>BST/HTB</li>
                    <li className>BST/USDT</li>
                    <li className>HNB/HTB</li>
                    <li className>HNB/USDT</li>
                    <li className>IOG/HTB</li>
                    <li className>IOG/USDT</li>
                  </ul>
                </div>
                <p />
                <p className='raise-detail-header-label'>total：138888 MOMAT</p>
                <p className='raise-detail-header-label'>1MOMAT = 0.36 USDT </p>
              </div>
              <div className='raise-detail-goods'>
                <div className='raise-detail-goods-left'>
                  <img
                    src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/MOMAT-USDT-l.png'
                    alt='detail-main.png'
                    className='raise-detail-goods-img'
                    data-xblocker='passed'
                    style={{ visibility: 'visible' }}
                  />
                  <div className='raise-detail-goods-state state-end'>Ended</div>
                </div>
                <div className='raise-detail-goods-right'>
                  <ul className='raise-detail-time bargain-show'>
                    <li>
                      <span className='raise-detail-time-circle sale-time' />
                      <div>
                        <p>Sale Starts at</p>
                        <p>2021-07-06 14:00:00</p>
                      </div>
                    </li>
                    <li>
                      <span className='raise-detail-time-circle end-time' />
                      <div>
                        <p>Sale Ends at</p>
                        <p>2021-07-06 15:00:00</p>
                      </div>
                    </li>
                    <li>
                      <span className='raise-detail-time-circle trans-stime' />
                      <div>
                        <p>Trade time at</p>
                        <p>2021-07-06 17:00:00</p>
                      </div>
                    </li>
                  </ul>
                  <a href='#polarisIntro' className='to-item-introduce'>
                    Read Project Introduction
                  </a>
                  <div className='polaris-step' />
                  <div className='raise-detail-support'>
                    <span className='popover-selfmake support'>
                      Countries and Regions Supported
                      <span className='popover-content top'>
                        Countries Not Supported：United States of America (USA)
                      </span>
                    </span>
                    <p className='support'>
                      <a
                        href='https://www.hotbit.io/support?page=serviceTerm'
                        target='_blank'
                        rel='noreferrer'
                      >
                        User Terms and Policies &gt;&gt;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div id='polarisIntro' className='raise-detail-introduce'>
                <img
                  src='https://upload-hotbit-io.oss-accelerate.aliyuncs.com/files/30-1-MOMAT-us.png?t=22'
                  alt='introduce.png'
                />
              </div>
            </div>
            <div className='raise-detail-container-right'>
              <div className='polaris-purchase-amount'>
                <div className='cur-amount'>
                  <div className='cur-amount-item'>
                    <span>The tokens available for purchase in this session</span>
                    <span>
                      49999
                      <span className='gray'>USDT</span>
                    </span>
                  </div>
                  <div className='cur-amount-item'>
                    <span>Value of tokens already applied</span>
                    <span>
                      113121.34297800
                      <span className='gray'>USDT</span>
                    </span>
                  </div>
                </div>
                <div className='mine-container'>
                  <div className='mine-box'>
                    <div className='mine'>
                      <p> My Value of Contribution</p>
                      <p className='mt15'>
                        0.00000000 <span className='gray'>USDT</span>
                      </p>
                    </div>
                    <button type='button' className='history-btn'>
                      History
                    </button>
                  </div>
                  <ul className='mine-intro'>
                    <li>
                      <div>
                        <span>Allocation Ratio</span>
                      </div>
                      <span>44.2000 %</span>
                    </li>
                    <li>
                      <div>
                        <span>My Allocated Value of Tokens</span>
                      </div>
                      <span>0.00 USDT</span>
                    </li>
                    <li>
                      <div>
                        <span>My Allocated Volume of Tokens</span>
                      </div>
                      <span>0.00 MOMAT</span>
                    </li>
                    <li>
                      <div>
                        <span>The Volume of Your Extra Bonus</span>
                      </div>
                      <span>0.00 MOMAT</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='raise-detail-order polaris-purchase'>
                <div className='raise-detail-account-top'>
                  <div className='asset-box'>
                    <div className='flex-sb'>
                      Account Balance
                      <div className='deposit'>
                        <i>
                          <img
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAMAAAD6gTxzAAAAV1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////+ORg7oAAAAHHRSTlMApeECncIQ99LNs6eUdW1iCgXJu5iXjoNaFhUMAvF7pwAAAGVJREFUGNPdyMcRgDAQQ1HZ2OScg/qvkyUsAy3wL9I83DVZsuBTkJHx+hHDKGIcvsQxN3ZmEr5kgLGo2Ko5Ohwk5rdTepGLUNLXMjldoCTW1RhpRJRQMIUVUTotRQMoPf2CJq9vBwmBBDOmD2AgAAAAAElFTkSuQmCC'
                            alt='arrow.png'
                          />
                        </i>
                        <span>Deposit</span>
                      </div>
                    </div>
                    <p className='asset'>
                      <span>0.00000000</span>
                      USDT
                    </p>
                  </div>
                </div>
                <div className='polaris-purchase'>
                  <div className='order-list'>
                    <span className='order-list-left'>Price of Purchase Session:</span>
                    <span className='order-list-right'>1 MOMAT = 0.36 USDT</span>
                  </div>
                  <div className='order-list'>
                    <span className='order-list-left'>Value of Tokens Applied:</span>
                    <div className='order-list-right'>
                      <div className='limitPart_inputBox'>
                        <input type='text' />
                        <span className='coin'>USDT</span>
                      </div>
                      <div className='limitPart_percent'>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                  <div className='order-list'>
                    <span className='order-list-left'>The Total Value of Tokens Applied:</span>
                    <span className='order-list-right'>-- USDT</span>
                  </div>
                  <div className='submit_remind text-center' />
                  <button
                    data-style='slide-down'
                    className='ladda-button btn btn-primary submit-btn'
                    type='button'
                    style={{ backgroundColor: 'rgb(130, 123, 124)' }}
                  >
                    <span className='ladda-label'>
                      <span>Ended</span>
                    </span>
                    <span className='ladda-spinner' />
                  </button>
                  <div id='user_alertOverPrice' className='user_alerts' style={{ display: 'none' }}>
                    <div className='pwdChange_alert text-left deleteAll_alert deleteS_alert pwdChange_alert2'>
                      <div className='exclamation' />
                      <div id='ieoCapthcha' className='nc-container' />
                      <div className='alert_choose'>
                        <div className='btn_box'>
                          <button type='button' className='btn1 OverPrice_cancel OverPrice_close'>
                            Cancel
                          </button>
                        </div>
                      </div>
                      <div className='user_alertDeleteAll_close OverPrice_close'>
                        <i className='fa fa-close' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='polaris-rules'>
                <h1>Detailed Rules and Regulations of the Purchase Application</h1>
                <ul>
                  <li>
                    1.Duration for the Purchase Application: 19:00, July 06th, 2021 – 20:00, July
                    06th, 2021 (GMT+8)
                  </li>
                  <li>
                    2.The total amount of tokens available for the purchase application will be
                    138,888 MOMAT.
                  </li>
                  <li>
                    This round of token sale allows each user to purchase a maximum of 1000 USDT worth
                    of tokens.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
    );
  } else {
    return (
      <SigninScreen />
    );
  }

}

export default PolarisDetailScreen;
