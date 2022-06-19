import { memo } from 'react';

const ExchangeFilter = memo(() => (
  <div className='top-buttons flex flex-destroy flex-center flex-space-between'>
    <div>
      <button type='button' className='button button-white button-small'>
        FUND
      </button>
      <button type='button' className='button button-white button-small'>
        Golbal Select
      </button>
      <button type='button' className='button button-white button-small'>
        Global
      </button>
      <button type='button' className='button button-white button-small'>
        Growing
      </button>
      <button type='button' className='button button-white button-small'>
        ETF
      </button>
      <button type='button' className='button button-white button-small'>
        Sections
      </button>
      {/* <button type='button' className='button button-purple button-large'>
        <i className='material-icons button-icon-left'>download</i>
        CSV Download
      </button> */}
    </div>
  </div>
));

export default ExchangeFilter;
