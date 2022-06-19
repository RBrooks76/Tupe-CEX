import { memo } from 'react';

const coopPartners = memo(() => (
  <div className='coopPartners'>
    <h2 className='coopPartnerHeader'>Cooperative Partners</h2>
    <div className='partnerBoard'>
      <div className='partnerBox'>
        <a
          href='https://www.coingecko.com/zh/exchanges/hotbit'
          className='partner'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/coopPartners/coingecko.png' alt='' />
        </a>
      </div>
      <div className='partnerBox'>
        <a
          href='https://coinmarketcap.com/zh/exchanges/hotbit/'
          className='partner'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/coopPartners/coinmarketcap.png' alt='' />
        </a>
      </div>
      <div className='partnerBox'>
        <a
          href='https://www.stakingrewards.com/'
          className='partner'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/coopPartners/staking-rewards.png' alt='' />
        </a>
      </div>
      {/* <div className='partnerBox'>
        <a href='https://ledgercap.co/' className='partner' target='_blank' rel='noreferrer'>
          <img src='/coopPartners/ledger-capital.png' alt='' />
        </a>
      </div> */}
      <div className='partnerBox'>
        <a href='https://www.oklink.com/' className='partner' target='_blank' rel='noreferrer'>
          <img src='/coopPartners/OKLink.png' alt='' />
        </a>
      </div>
      <div className='partnerBox'>
        <a href='https://www.stcoins.com/' className='partner' target='_blank' rel='noreferrer'>
          <img src='/coopPartners/HUSD.png' alt='' />
        </a>
      </div>
      <div className='partnerBox'>
        <a href='https://www.paxos.com/busd/' className='partner' target='_blank' rel='noreferrer'>
          <img src='/coopPartners/BUSD.png' alt='' />
        </a>
      </div>
      {/* <div className='partnerBox'>
        <a href='https://www.coinplay.shop/' className='partner' target='_blank' rel='noreferrer'>
          <img src='/coopPartners/coinplay.png' alt='' />
        </a>
      </div> */}
      <div className='partnerBox'>
        <a href='https://cryptorank.io/' className='partner' target='_blank' rel='noreferrer'>
          <img src='/coopPartners/cryptorank.png' alt='' />
        </a>
      </div>
      <div className='partnerBox'>
        <a href='https://daomaker.com/' className='partner' target='_blank' rel='noreferrer'>
          <img src='/coopPartners/daomaker.png' alt='' />
        </a>
      </div>
      <div className='partnerBox'>
        <a href='https://duckdao.io/' className='partner' target='_blank' rel='noreferrer'>
          <img src='/coopPartners/duckdao.png' alt='' />
        </a>
      </div>
    </div>
  </div>
));

export default coopPartners;
