import { memo } from 'react';
import Link from 'next/link';

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

const titleStyle = {
  fontSize: '20px',
  color: '#000',
  fontWeight: '600',
  marginBottom: '0.2rem',
};

const imgStyle = {
  padding: '10 10 10 10',
  marginTop: '1.275rem',
  marginBottom: '1.275rem',
};
const btnGreen = {
  color: '#5cb85c',
  padding: '0.5rem 1rem',
  textDecoration: 'underline',
};

const SlotItem = memo(() => (
  <div className='' style={{ width: '80%' }}>
    <div className='card' style={card}>
      <div className='card-body' style={cardBody}>
        <div className='new-arrival-product'>
          <div className='new-arrivals-img-contnent' style={imgStyle}>
            <img
              className='img-fluid'
              src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/slotauction-KSX.png'
              alt=''
            />
          </div>
          <div className='' style={titleStyle}>
            My Lockup
          </div>
          <div className=''>
            <br />
            <p>KSM Lockup Volume</p>
            <br />
            <p>
              <span style={{ fontSize: '24px' }}>0</span> KSM
            </p>
            <br />
            <p>Balance: --KSM</p>
            <br />
          </div>
          <div className='box-button box-vertical-padding box-horizontal-padding'>
            <span style={btnGreen}>
              <Link href='/' className='button button-green button-medium button-block'>
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default SlotItem;
