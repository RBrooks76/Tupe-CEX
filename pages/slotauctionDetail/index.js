import * as React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import MainLayout from '../../layouts/MainLayout';
import SlotItemDetail from '../../components/Widgets/SlotItemDetail/SlotItem';
import SlotItemgift from '../../components/Widgets/SlotItemDetail/SlotItemgift';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SlotandAuctionDetail = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }
  }, []);

  return (
    <MainLayout>
      <Header />
      <div className='slotAndAuctionDetail'>
        <section className='section hero'>
          <div className='h-full flex flex-column flex-space-between'>
            <div className='hero-inner'>
              <div className='hero-title'>
                <p>Tupe</p>
              </div>
              <div className='hero-description'>
                <p>
                  As the TestNet of Tupe mainnet, Tupe has entire functions of the Tupe mainnet and
                  acts as a temporary preparation ground for deployment on TupeEDX Risky functions
                  will run on the Tupe network first. Correspondingly, possible problems will be
                  eliminated in advance to ensure a smooth launch on the mainnet.
                </p>
              </div>
            </div>
            <div className='flex flex-center p-4'>
              <ul className='flex gap-2'>
                <li className='flex flex-v-center mx-4'>
                  <div className='icon-bg bg-green mr-2'>
                    <LanguageIcon />
                  </div>
                  <a target='_blank' href='https://chainx.org/zh/' rel='noreferrer'>
                    Website
                  </a>
                </li>
                <li className='flex flex-v-center mx-4'>
                  <div className='icon-bg bg-green mr-2'>
                    <CollectionsBookmarkIcon />
                  </div>
                  <a
                    target='_blank'
                    href='https://chainx.org/static/ChainX-6688d0709ad59b9a892b276bc52d482f.pdf'
                    rel='noreferrer'
                  >
                    Whitepaper
                  </a>
                </li>
                <li className='flex flex-v-center mx-4'>
                  <div className='icon-bg bg-green mr-2'>
                    <ArticleIcon />
                  </div>
                  <button type='button' id='btnRulesModal' onClick={handleOpen}>
                    Rules And Regulations
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='slotDetail-detailRow flex flex-center'>
          <div className='slotDetail-container flex flex-column'>
            <div className='slotDetail-title center'>Lockup Symbol</div>
            <div className='slotDetail-value center'>TUPE</div>
          </div>
          <div className='slotDetail-container flex flex-column'>
            <div className='slotDetail-title center'>Lockup Period</div>
            <div className='slotDetail-value center'>
              268 <span className='slotDetail-valueUnit'>day(s)</span>
            </div>
          </div>
          <div className='slotDetail-container flex flex-column'>
            <div className='slotDetail-title center'>Rewards Distributed IN</div>
            <div className='slotDetail-value center'>TUPE</div>
          </div>
          <div className='slotDetail-container flex flex-column'>
            <div className='slotDetail-title center'>Volume of TUPE</div>
            <div className='slotDetail-value center'>
              125 <span className='slotDetail-valueUnit'> TUPE</span>
            </div>
          </div>
        </section>

        <div className='flex flex-destroy'>
          <div className='content-70 flex-1'>
            <div className='container'>
              <div className='flex flex-destroy flex-space-between center top-padding'>
                <div className='flex-1'>
                  <SlotItemDetail />
                </div>
                <div className='flex-1'>
                  <SlotItemgift />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Reward rules
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              1. Users will be rewarded with 10 KSX at least for every 1 KSM locked;
              <br />
              2. Additional bonuses according to the amount of locked KSM : 1-50, 20% Bonus; 51-100,
              40% Bonus; 101-200, 60% Bonus; 201-300, 90% Bonus; 301-500, 120% Bonus;
            </Typography>
          </Box>
        </Modal>
      </div>

      <Footer />
    </MainLayout>
  );
};

export default SlotandAuctionDetail;
