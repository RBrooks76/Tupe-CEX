import { memo } from 'react';

const TopBarExchange = memo(() => (
  <div className='top-buttons flex flex-destroy flex-center flex-space-between'>
    <div>
      <button type='button' className='button button-white button-small'>
        AUD/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        AUD/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        NZ/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        NZ/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        LKR/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        LKR/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        INR/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        INR/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        TUPE/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        TUPE/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        AUDP/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        AUDP/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        BTC/ETH
      </button>
      <button type='button' className='button button-white button-small'>
        BTC/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        ETH/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        ETH/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        BNB/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        BNB/ETH
      </button>
      <button type='button' className='button button-white button-small'>
        USDT/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        USDT/BNB
      </button>
      <button type='button' className='button button-white button-small'>
        SHIBU/BTC
      </button>
      <button type='button' className='button button-white button-small'>
        SHIBU/BNB
      </button>
      {/* <button type='button' className='button button-purple button-large'>
        <i className='material-icons button-icon-left'>download</i>
        CSV Download
      </button> */}
    </div>
  </div>
));

export default TopBarExchange;
