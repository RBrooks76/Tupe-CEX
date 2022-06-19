import { memo } from 'react';
import Link from 'next/link';

const card = {
  marginBottom: '1.875rem',
  backgroundColor: '#fff',
  transition: 'all .5s ease-in-ou',
  position: 'relative',
  border: '0px solid transparent',
  borderRadius: '0.75rem',
  boxShadow: '0px 12px 33px 0px rgb(62 73 84 / 8%)',
  height: 'calc(100% - 30px)',
};

const cardBody = {
  padding: '0.8rem',
  flex: '1 1 auto',
  minHeight: '1px',
};

const imgWidth = {
  width: '100%',
  marginBottom: '0.8rem',
};

const textStyle = {
  fontSize: '24px',
  color: '#000',
  fontWeight: '600',
};

const contentStyle = {
  color: '#b7b7b7',
  fontSize: '14px',
  lineHeight: '22px',
  marginTop: '5px',
  overflow: 'hidden',
  paddingBottom: '10px',
};

const CoinItem = memo(() => (
  <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
    <div className='card' style={card}>
      <div className='card-body' style={cardBody}>
        <div className='new-arrival-product'>
          <div className='new-arrivals-img-contnent'>
            <img
              className='img-fluid'
              src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NU-USDT-s.png'
              alt=''
              style={imgWidth}
            />
          </div>
          <div className='new-arrival-content text-center mt-3'>
            <h4>
              <Link href='/eventDetail' className='text-black' style={textStyle}>
                【Event】Trade FCF And Share 53,000,000 FCF As Rewards!
              </Link>
            </h4>
            <span className='' style={contentStyle}>
              Duration：08:00, February 18th, 2022 ~ <br /> 08:00, February 25th, 2022 (UTC)
            </span>
            <hr />
            <div className='flex flex-space-between'>
              <span className='price' style={{ color: '#05a2ee' }}>
                Details
              </span>
              <i className='material-icons' style={{ color: '#05a2ee' }}>
                arrow_right_alt
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default CoinItem;
