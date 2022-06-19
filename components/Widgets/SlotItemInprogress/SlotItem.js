import { memo } from 'react';
import CircleIcon from '@mui/icons-material/Circle';

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
  padding: '1.875rem',
  flex: '1 1 auto',
  minHeight: '1px',
};

const titleStyle = {
  fontSize: '20px',
  fontWeight: '600',
  marginBottom: '0.2rem',
  color: '#fff',
};

const imgStyle = {
  width: '32px',
  padding: '5px',
  marginTop: '1.275rem',
  marginBottom: '1.275rem',
};

const SlotItem = memo(() => (
  <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
    <div className='card-bg' style={card}>
      <div className='card-body' style={cardBody}>
        <div className='new-arrival-product'>
          <div className='' style={titleStyle}>
            <img
              data-v-5ad25092=''
              alt=''
              src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/KSM_1_LOGO.png'
              style={imgStyle}
            />
            <span>Tupe</span>
          </div>
          <br />
          <span>Parallel Chain Slot Auction</span>
          <p className='left'>
            <br />
            <CircleIcon />
            <br />
            <br />
            As the TestNet of Tupe mainnet, Tupe has entire functions of the Tupe mainnet and acts
            as a temporary preparation ground for deployment on TupeEDX Risky functions will run on
            the Tupe network first. Correspondingly, possible problems will be eliminated in advance
            to ensure a smooth launch on the mainnet.
          </p>
        </div>
      </div>
    </div>
  </div>
));

export default SlotItem;
