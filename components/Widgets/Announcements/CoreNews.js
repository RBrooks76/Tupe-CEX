const RiskWarning = ({ news }) => (
  <section>
    <p className='my-3'>
      <strong>Dear Respected Users,</strong>
    </p>
    <p className='my-3'>{news.headline}</p>

    {news.time.deposit && <p className='my-3'>Deposit function launches at: {news.time.deposit}</p>}

    {news.time.trading && <p className='my-3'>Trading function launches at: {news.time.trading}</p>}

    {news.time.withdrawal && (
      <p className='my-3'>Withdrawal function launches at: {news.time.withdrawal}</p>
    )}
    <p className='my-3'>Trading Pairs: {news.tradingPairs}</p>
  </section>
);

export default RiskWarning;
