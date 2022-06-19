import { memo } from 'react';

const card = {
  marginBottom: '1.875rem',
  marginTop: '1.875rem',
  backgroundColor: '#fff',
  transition: 'all .5s ease-in-ou',
  position: 'relative',
  border: '0px solid transparent',
  borderRadius: '0.75rem',
  boxShadow: '0px 12px 33px 0px rgb(62 73 84 / 8%)',
  height: 'calc(100% - 30px)',
};

const cardBody = {
  padding: '1.875rem',
  flex: '1 1 auto',
  minHeight: '1px',
};

const imgStyle = {
  padding: '10 10 10 10',
  marginTop: '1.275rem',
  marginBottom: '1.275rem',
};

const SlotItem = memo(() => (
  <div className='' style={{ width: '80%' }}>
    <div className='card' style={card}>
      <div className='card-body' style={cardBody}>
        <div className='new-arrival-product'>
          <div className='new-arrivals-img-contnent' style={imgStyle}>
            <img className='img-fluid' src='../images/gift_icon_172437.png' alt='' />
          </div>
          <div className=''>
            <br />
            <p>Released</p>
            <br />
            <p>--</p>
            <br />
            <p>To be released</p>
            <br />
            <p>--</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default SlotItem;
