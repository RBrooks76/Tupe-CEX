import { AdvancedChart } from 'react-tradingview-embed';

const TradingViewTv = () => {
  const tradingViewTvProps = {
    symbol: 'BITSTAMP:BTCUSD',
    interval: 'D',
    theme: 'light',
    width: '100%',
    height: '420',
  };

  const currentCoin = 'BTC';

  const markets = [
    {
      name: 'TUPE',
      active: true,
    },
    {
      name: 'AUD',
      active: false,
    },
    {
      name: 'NZD',
      active: false,
    },
    {
      name: 'LKR',
      active: false,
    },
    {
      name: 'INR',
      active: false,
    },
    {
      name: 'BTC',
      active: false,
    },
    {
      name: 'ETH',
      active: false,
    },
    {
      name: 'BNB',
      active: false,
    },
    {
      name: 'TAUD',
      active: false,
    },
    {
      name: 'SHIBU',
      active: false,
    },
  ];

  return (
    <div className='tradingTv flex flex-column'>
      <div className='markets flex-grow-0'>
        {markets &&
          markets.map((market) => {
            let marketClass = 'market px-3 py-2 pointer';

            if (market.active) {
              marketClass += ' active';
            }

            return (
              <div className={marketClass}>
                {currentCoin}/ {market.name}
              </div>
            );
          })}
      </div>
      <div
        className='marketDetail flex flex-v-center p-2'
        style={{ fontSize: '0.75rem', minHeight: '3rem' }}
      >
        <div className='coinValue mr-2 fs-5'>26548.15</div>
        <div className='mr-2 px-2'> ≈ $3252.21</div>
        <div className='mr-2 px-2'>
          <div className='detailTitle'>24H Change</div>
          <div>-3.026%</div>
        </div>
        <div className='mr-2 px-2'>
          <div className='detailTitle'>24H High</div>
          <div>2905.32</div>
        </div>
        <div className='mr-2 px-2'>
          <div className='detailTitle'>24H Low</div>
          <div>2330.52</div>
        </div>
        <div className='mr-2 px-2'>
          <div className='detailTitle'>24H Volume</div>
          <div>2362.326 BTC</div>
        </div>
      </div>
      <div className='flex-grow-2'>
        <AdvancedChart widgetProps={tradingViewTvProps} />
      </div>
    </div>
  );
};

export default TradingViewTv;
