import { memo } from 'react';
import Link from 'next/link';

function round(x, fix = 8) {
  if (x == '') return'';
  const parsefloat = parseFloat(x).toFixed(fix);
  if (parsefloat == '') return'';
  const integer = parsefloat.split('.');
  return Number(integer[0]).toLocaleString() + '.' + integer[1];
}


const TopCoins = memo(({topcoin, unit, multiple}) => (
  <div className='topcoins'>
    <div className='flex flex-space-between list-box'>
      <Link href='/exchange'>
        <div className='item'>
          <div className='flex flex-v-center'>
            <div
              className='icon cover'
              style={{
                backgroundImage: `url(https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png)`,
              }}
            />
            <p style={{marginLeft: 5}}>BTC</p>
          </div>
          <div className='flex flex-v-center flex-space-between'>
            <p>{unit}{round(topcoin.btc[0]/multiple)}</p>
            <p className={topcoin.btc[1] > 0 ? 'green': 'red'}>{topcoin.btc[1] > 0 ? '+' : ''}{round(topcoin.btc[1], 8)}%</p>
          </div>
        </div>
      </Link>
      <Link href='/exchange'>
        <div className='item'>
          <div className='flex flex-v-center'>
            <div
              className='icon cover'
              style={{
                backgroundImage: `url(https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/ETH_1_LOGO.png)`,
              }}
            />
            <p>ETH</p>
          </div>
          <div className='flex flex-v-center flex-space-between'>
            <p>{unit}{round(topcoin.eth[0])}</p>
            <p className={topcoin.eth[1] > 0 ? 'green': 'red'}>{topcoin.eth[1] > 0 ? '+' : ''}{round(topcoin.eth[1],8)}%</p>
          </div>
        </div>
      </Link>
      <Link href='/exchange'>
        <div className='item'>
          <div className='flex flex-v-center'>
            <div
              className='icon cover'
              style={{
                backgroundImage: `url(https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/asset_logos/DOGE_LOGO.png)`,
              }}
            />
            <p style={{marginLeft: 5}}>DOGE</p>
          </div>
          <div className='flex flex-v-center flex-space-between'>
            <p>{unit}{round(topcoin.doge[0])}</p>
            <p className={topcoin.doge[1] > 0 ? 'green': 'red'}>{topcoin.doge[1] > 0 ? '+' : ''}{round(topcoin.doge[1],8)}%</p>
          </div>
        </div>
      </Link>
      <Link href='/exchange'>
        <div className='item'>
          <div className='flex flex-v-center'>
            <div
              className='icon cover'
              style={{
                backgroundImage: `url(https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/SHIB_LOGO.png)`,
              }}
            />
            <p style={{marginLeft: 5}}>SHIB</p>
          </div>
          <div className='flex flex-v-center flex-space-between'>
            <p>{unit}{round(topcoin.shib[0])}</p>
            <p className={topcoin.shib[1] > 0 ? 'green': 'red'}>{topcoin.shib[1] > 0 ? '+' : ''}{round(topcoin.shib[1])}%</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
));

export default TopCoins;
