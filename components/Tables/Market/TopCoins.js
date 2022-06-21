import { memo } from 'react';
import Link from 'next/link';

function round(x, fix = 8) {
  if (x == '') return'';
  const parsefloat = parseFloat(x).toFixed(fix);
  if (parsefloat == '') return'';
  const integer = parsefloat.split('.');
  return Number(integer[0]).toLocaleString() + '.' + integer[1];
}

const reduceDecimal = (item) => {
  let dnum = item < 0 ? item - Math.ceil(item) : item - Math.floor(item);
  let num = item - dnum;
  let str = dnum < 0 ? String(dnum).slice(3) : String(dnum).slice(2);
  let array = str.split('');
  let index = 0;
  let value = '';
  let result = 0;

  for(var i = 0 ; i < array.length; i++){
    if(array[i] == 0) index = i;
    else index = 0;
  }
  
  if(num <= 0){
    for (var j = index; j < index + 3; j++) {
      value += '' + (array[j] != null ? array[j] : '');
    }
    result = num + '.' + value;
    item = parseFloat(result);
  } else {
    for (var k = index; k < index + 2; k++) {
      value += '' + (array[k] != null ? array[k] : '');
    }
    result = num + '.' + value;
    item = parseFloat(result);
  }
  return item;
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
            {/* <p>{unit}{round(topcoin.btc[0]/multiple)}</p> */}
            <p>{unit}{reduceDecimal(topcoin.btc[0])}</p>
            <p className={topcoin.btc[1] > 0 ? 'green': 'red'}>{topcoin.btc[1] > 0 ? '+' : ''}{reduceDecimal(topcoin.btc[1])}%</p>
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
            <p>{unit}{reduceDecimal(topcoin.eth[0])}</p>
            <p className={topcoin.eth[1] > 0 ? 'green': 'red'}>{topcoin.eth[1] > 0 ? '+' : ''}{reduceDecimal(topcoin.eth[1])}%</p>
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
            <p>{unit}{reduceDecimal(topcoin.doge[0])}</p>
            <p className={topcoin.doge[1] > 0 ? 'green': 'red'}>{topcoin.doge[1] > 0 ? '+' : ''}{reduceDecimal(topcoin.doge[1])}%</p>
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
            <p>{unit}{reduceDecimal(topcoin.shib[0])}</p>
            <p className={topcoin.shib[1] > 0 ? 'green': 'red'}>{topcoin.shib[1] > 0 ? '+' : ''}{reduceDecimal(topcoin.shib[1])}%</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
));

export default TopCoins;
