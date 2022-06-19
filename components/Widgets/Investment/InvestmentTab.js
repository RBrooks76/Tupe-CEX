import { useState, useEffect } from 'react';
import Link from 'next/link';

import Investment from './ExchangePanel';
import CoinVertical from '../Coin/CoinVertical';

const InvestmentTab = () => {
  const [coinInfo, setCoinInfo] = useState();
  const coinData = {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    change: '-%3.28',
    currency: 'TRY',
    exchange: 'BTC/TRY',
    weight: '104k',
    financialRate: '-0.0252%/hr',
    icon: 'https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png',
    amount: '18.783,33',
    description: `Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group using the name Satoshi Nakamoto. Released as an open source software in 2009`,
  };
  useEffect(() => {
    setCoinInfo(coinData);
  }, []);

  return (
    <div className='Investment'>
      <div className='flex'>
        <div className='flex-1'>
          <div className='box box-content box-vertical-padding box-horizontal-padding '>
            <div className='flex flex-space-around flex-wrap investItemheader'>
              <div className='flex'>
                <div className='flex flex-v-center flex-h-center'>Type:</div>
                <div className='button flex flex-v-center flex-h-center active'>
                  All <span>(549)</span>
                </div>
                <div className='button flex flex-v-center flex-h-center'>
                  Lending <span>(5)</span>
                </div>
                <div className='button flex flex-v-center flex-h-center'>
                  DeFi <span>(399)</span>
                </div>
                <div className='button flex flex-v-center flex-h-center'>
                  Quantitative <span>(57)</span>
                </div>
                <div className='button flex flex-v-center flex-h-center'>
                  Incentive Plans <span>(14)</span>
                </div>
                <div className='button flex flex-v-center flex-h-center'>
                  POS <span>(48)</span>
                </div>
                <div className='button flex flex-v-center flex-h-center'>
                  Rebase <span>(26)</span>
                </div>
              </div>
              <div className='flex'>
                <div className='headercheckbox flex flex-v-center flex-h-center mr-2'>
                  <input id='checkbox' type='checkbox' value='true' />
                  <label>Display available products only</label>
                </div>
                <div className='no-select flex flex-v-center flex-h-center'>
                  <form onSubmit='' noValidate className='flex flex-v-center'>
                    <input
                      type='text'
                      name='keyword'
                      id='keyword'
                      placeholder='Search'
                      autoComplete='off'
                      onChange=''
                      value=''
                    />
                    <button type='button' className='pointer'>
                      <i className='material-icons'>search</i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-destroy'>
        <div className='content-30 box-right-padding'>
          <Investment />

          {coinInfo && <CoinVertical item={coinInfo} />}
        </div>
        <div className='content-70 flex-1'>
          <div className='box box-content box-vertical-padding box-horizontal-padding '>
            <div className='flex flex-space-between investItem'>
              <div className='flex widget-coin-horizontal flex-v-center'>
                <div
                  className='icon cover'
                  style={{ backgroundImage: `url('${coinData.icon}')` }}
                />
                <p>USDT &nbsp;&nbsp;</p>
                <p>Tether USD</p>
              </div>
              <div className='flex'>
                <Link href='/wallet?tab=deposit'>
                  <div className='button flex flex-v-center flex-h-center'>Deposit</div>
                </Link>
                <Link href='/exchange?symbol=BTC_USDT'>
                  <div className='button flex flex-v-center flex-h-center'>Trade</div>
                </Link>
              </div>
            </div>
            <div className='flex investData flex-space-between flex-v-center'>
              <div className='title'>USDT 90-Day Lockup</div>
              <div className='data'>
                APY<p>11.20%</p>
              </div>
              <div className='data'>
                Daily APR<p>0.029%</p>
              </div>
              <div className='data'>
                Redemption Method<div>Redemption on maturity</div>
              </div>
              <div className='data'>
                Min Purchase<div>10 USDT</div>
              </div>
              <Link href='/investDetail' className='button flex flex-v-center flex-h-center'>
                Detail
              </Link>
            </div>
            <div className='flex investData flex-space-between flex-v-center'>
              <div className='title'>USDT 90-Day Lockup</div>
              <div className='data'>
                APY<p>11.20%</p>
              </div>
              <div className='data'>
                Daily APR<p>0.029%</p>
              </div>
              <div className='data'>
                Redemption Method<div>Redemption on maturity</div>
              </div>
              <div className='data'>
                Min Purchase<div>10 USDT</div>
              </div>
              <Link href='/investDetail' className='button flex flex-v-center flex-h-center'>
                Detail
              </Link>
            </div>
            <div className='flex investData flex-space-between flex-v-center'>
              <div className='title'>USDT 90-Day Lockup</div>
              <div className='data'>
                APY<p>11.20%</p>
              </div>
              <div className='data'>
                Daily APR<p>0.029%</p>
              </div>
              <div className='data'>
                Redemption Method<div>Redemption on maturity</div>
              </div>
              <div className='data'>
                Min Purchase<div>10 USDT</div>
              </div>
              <Link href='/investDetail' className='button flex flex-v-center flex-h-center'>
                Detail
              </Link>
            </div>
            <div className='flex investData flex-space-between flex-v-center'>
              <div className='title'>USDT 90-Day Lockup</div>
              <div className='data'>
                APY<p>11.20%</p>
              </div>
              <div className='data'>
                Daily APR<p>0.029%</p>
              </div>
              <div className='data'>
                Redemption Method<div>Redemption on maturity</div>
              </div>
              <div className='data'>
                Min Purchase<div>10 USDT</div>
              </div>
              <Link href='/investDetail' className='button flex flex-v-center flex-h-center'>
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTab;
