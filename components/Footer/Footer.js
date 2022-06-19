import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyles';
import axios from 'axios';
import {isNil} from 'lodash';

const trading_list = ['TUPE', 'AUD', 'NZD', 'LKR', 'INR', 'BTC', 'ETH', 'BNB', 'TAUD', 'USDT', 'SHIB'];
const Footer = ({ responsive, coins }) => {
  const [trading_value, setTradingValue] = useState([]);
  const toggleAccordion = (elementId) => {
    const accordionContainer = document.getElementById('footerAccordion');
    const accordions = accordionContainer.querySelectorAll(':scope > .accordion');

    const currentAccordion = document.getElementById(elementId);
    const isActive = currentAccordion.classList.contains('active');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < accordions.length; i++) {
      accordions.item(i).classList.remove('active');
    }

    if (!isActive) {
      currentAccordion.classList.add('active');
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      toggleAccordion();
    }
  };

  const [coinNames, setCoinNames] = useState('');
  const [tradeTotalVolumn, setTradeTotalVolumn] = useState([]);

  var coin_name_list = [];
  // var tradeTypeTotalVolumn = [];

  const tradeTypes = ['TUPE', 'AUD', 'NZD', 'LKR', 'INR', 'BTC', 'ETH', 'BNB', 'TAUD', 'USDT', 'SHIB'];
  useEffect(() => {
    getCoinsString();
  }, []);
  const getCoinsString = async () => {
    let tradeTypeTotalVolumn = [];
    var coinsString = '';
    let response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=215&page=1&sparkline=false");

    if(response != null){
      response.data.map((item, index) => {
        coinsString += item.id + ',';
        coin_name_list.push(item);

      });
    }

    response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false");
    if(response != null){
      response.data.map(item => {
        coinsString +=  item.id + ',';
        coin_name_list.push(item);
      })
    }

    await tradeTypes.map(async type =>  {
      var vtype = '';
      if(type == "TUPE" || type == "USDT" || type == "TAUD" || type == "SHIB") vtype = 'usd';
      else vtype = type;
      var temp = [];
      await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=" + coinsString + "&vs_currencies=" + vtype.toLowerCase() + "&include_24hr_vol=true")
      .then(res => { 
        var number = 0;
        var name_24h_vol = '';
        name_24h_vol = vtype.toLowerCase() + '_24h_vol';
        coin_name_list.map(name => {
          number += parseFloat(res.data[name.id][name_24h_vol]) / 1000000;
        })
        tradeTypeTotalVolumn[type] = number;
        setTradeTotalVolumn([...tradeTotalVolumn, tradeTypeTotalVolumn])
      })
    });
    // setTradeTotalVolumn(tradeTypeTotalVolumn);
  }


  useEffect(() => {

    
    const url = 'wss://stream.binance.com:9443/stream?streams=!ticker@arr@3000ms';
    const isBrowser = typeof window !== "undefined";
    const ws = isBrowser ? new WebSocket(url) : null;
    if (!isNil(ws)) {
      ws.onopen = (event) => {
      };
      ws.onclose = function (eventclose) {
      };

      ws.onmessage = function (event) {
        const json = JSON.parse(event.data);
        try {
          if (json.data !== undefined) {
            const json_data = json.data;
            window.sessionStorage.setItem("market_websocket", JSON.stringify(json_data));
          }
        } catch (err) {
          console.log(err);
        }
      };
    }

  },[tradeTotalVolumn]);

  // useEffect(() => {
  //   getCoinsString();
  // }, [tradeTotalVolumn]);

  function gotoPage (type) {
    window.sessionStorage.setItem('market_type', type);
    window.location = '/market';
  }

  return (
    <Box>
      <div className={responsive ? 'footerDesktop' : ''}>
        <Container>
          <Row>
            <Column>
              <Heading className='mb-4'>Trading Pairs</Heading>
              <FooterLink onClick={()=>gotoPage('TUPE')}>TUPE</FooterLink>
              <FooterLink onClick={()=>gotoPage('AUD')}>AUD</FooterLink>
              <FooterLink onClick={()=>gotoPage('NZD')}>NZD</FooterLink>
              <FooterLink onClick={()=>gotoPage('LKR')}>LKR</FooterLink>
              <FooterLink onClick={()=>gotoPage('INR')}>INR</FooterLink>
              <FooterLink onClick={()=>gotoPage('BTC')}>BTC</FooterLink>
              <FooterLink onClick={()=>gotoPage('ETH')}>ETH</FooterLink>
              <FooterLink onClick={()=>gotoPage('BNB')}>BNB</FooterLink>
              <FooterLink onClick={()=>gotoPage('TAUD')}>TAUD</FooterLink>
              <FooterLink onClick={()=>gotoPage('USDT')}>USDT</FooterLink>
              <FooterLink onClick={()=>gotoPage('SHIBU')}>SHIB</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>About Us</Heading>
              <FooterLink href='#'>Security Settings</FooterLink>
              <FooterLink href='#'>AML</FooterLink>
              <FooterLink href='#'>About Us</FooterLink>
              <FooterLink href='#'>Join Us</FooterLink>
              <FooterLink href='#'>Referral Bouns</FooterLink>
              <FooterLink href='#'>Privacy Policy</FooterLink>
              <FooterLink href='#'>Terms of Service</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Data & Cooperation</Heading>
              <FooterLink>Apply to be VIP</FooterLink>
              <FooterLink>Fees</FooterLink>
              <FooterLink>Apply To List</FooterLink>
              <FooterLink>IEO Listing</FooterLink>
              <FooterLink>Market Cooperation</FooterLink>
              <FooterLink>Events</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Reference</Heading>
              <FooterLink>Quick Start</FooterLink>
              <FooterLink>API</FooterLink>
              <FooterLink>FAQ</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Support</Heading>
              <FooterLink href='#'>Contact Us</FooterLink>
              <FooterLink href='#'>Submit Your Request</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Account Recovery</Heading>
              <FooterLink>Change mail Address</FooterLink>
              <FooterLink>Change Mobile Number</FooterLink>
              <FooterLink>I have lost my 2FA code</FooterLink>
              <FooterLink>Unlock my Account</FooterLink>
              <FooterLink>Forgot my password</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>24h Total Trading Volume</Heading>
              <FooterLink href='#'>TUPE: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].TUPE) : ""}M</FooterLink>
              <FooterLink href='#'>AUD: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].AUD) : ""}M</FooterLink>
              <FooterLink href='#'>NZD: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].NZD) : ""}M</FooterLink>
              <FooterLink href='#'>LKR: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].LKR) : ""}M</FooterLink>
              <FooterLink href='#'>INR: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].INR) : ""}M</FooterLink>
              <FooterLink href='#'>BTC: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].BTC) : ""}M</FooterLink>
              <FooterLink href='#'>ETH: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].ETH) : ""}M</FooterLink>
              <FooterLink href='#'>BNB: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].BNB) : ""}M</FooterLink>
              <FooterLink href='#'>TAUD: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].TAUD) : ""}M</FooterLink>
              <FooterLink href='#'>USDT: {tradeTotalVolumn.length != 0 ? Math.round(tradeTotalVolumn[0].USDT) : ""}M</FooterLink>
              {/* <FooterLink href='#'>SHIB: {Math.round(tradeTotalVolumn.SHIB)}M</FooterLink> */}
            </Column>
            <Column>
              <Heading className='mb-4'>Communities</Heading>
              <FooterLink href='#'>
                <i className='fab fa-facebook-f'>
                  <span style={{ marginLeft: '10px' }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-instagram'>
                  <span style={{ marginLeft: '10px' }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-twitter'>
                  <span style={{ marginLeft: '10px' }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-youtube'>
                  <span style={{ marginLeft: '10px' }}>Youtube</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-youtube'>
                  <span style={{ marginLeft: '10px' }}>Medium</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-youtube'>
                  <span style={{ marginLeft: '10px' }}>GitHub</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
        <h1 style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>
          2017-2022&copy;Copyright tupetrading.io All Rights Reserved.
        </h1>
      </div>
      {responsive && (
        <div className='footerMobile'>
          <div className='accordion-container' id='footerAccordion'>
            <div className='accordion' id='accordionAbout'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionAbout')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>About</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink href='#'>About Us</FooterLink>
                <FooterLink href='#'>Security Settings</FooterLink>
                <FooterLink href='#'>AML</FooterLink>
                <FooterLink href='#'>Join Us</FooterLink>
                <FooterLink href='#'>Referral Bouns</FooterLink>
                <FooterLink href='#'>Privacy Policy</FooterLink>
                <FooterLink href='#'>Terms of Service</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionTradingPairs'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionTradingPairs')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Trading Pairs</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink href='#'>TUPE</FooterLink>
                <FooterLink href='#'>AUD</FooterLink>
                <FooterLink href='#'>NZD</FooterLink>
                <FooterLink href='#'>LKR</FooterLink>
                <FooterLink href='#'>INR</FooterLink>
                <FooterLink href='#'>BTC</FooterLink>
                <FooterLink href='#'>ETH</FooterLink>
                <FooterLink href='#'>BNB</FooterLink>
                <FooterLink href='#'>TAUD</FooterLink>
                <FooterLink href='#'>USDT</FooterLink>
                <FooterLink href='#'>SHIB</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionData'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionData')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Data & Cooperation</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink>Apply to be VIP</FooterLink>
                <FooterLink>Fees</FooterLink>
                <FooterLink>Apply To List</FooterLink>
                <FooterLink>IEO Listing</FooterLink>
                <FooterLink>Market Cooperation</FooterLink>
                <FooterLink>Events</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionReference'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionReference')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Reference</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink>Quick Start</FooterLink>
                <FooterLink>API</FooterLink>
                <FooterLink>FAQ</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionSupport'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionSupport')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Support</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink href='#'>Contact Us</FooterLink>
                <FooterLink href='#'>Submit Your Request</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionTradingvolume'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionTradingvolume')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>24h Total Trading Volume</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                {/* <FooterLink href='#'>TUPE: {tradeTotalVolumn[TUPE]}</FooterLink>
                <FooterLink href='#'>AUD: {tradeTotalVolumn[]}</FooterLink>
                <FooterLink href='#'>NZD: {tradeTotalVolumn[nzd]}</FooterLink>
                <FooterLink href='#'>LKR: {tradeTotalVolumn[]}</FooterLink>
                <FooterLink href='#'>INR: {tradeTotalVolumn[]}</FooterLink>
                <FooterLink href='#'>ETH: {tradeTotalVolumn[]}</FooterLink>
                <FooterLink href='#'>BNB: {tradeTotalVolumn[]}</FooterLink>
                <FooterLink href='#'>TAUD: {tradeTotalVolumn[]}</FooterLink>
                <FooterLink href='#'>USDT: {tradeTotalVolumn[]}</FooterLink>
                <FooterLink href='#'>SHIB: {tradeTotalVolumn[]}</FooterLink> */}
              </div>
            </div>

            <div className='accordion' id='accordionRecovery'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionRecovery')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Account Recovery</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink>Change mail Address</FooterLink>
                <FooterLink>Change Mobile Number</FooterLink>
                <FooterLink>I have lost my 2FA code</FooterLink>
                <FooterLink>Unlock my Account</FooterLink>
                <FooterLink>Forgot my password</FooterLink>
              </div>
            </div>
          </div>
          <div className='socials'>
            <FacebookIcon sx={{ fontSize: 32, color: 'white' }} />
            <InstagramIcon sx={{ fontSize: 32, color: 'white' }} />
            <TwitterIcon sx={{ fontSize: 32, color: 'white' }} />
            <YouTubeIcon sx={{ fontSize: 32, color: 'white' }} />
            <GitHubIcon sx={{ fontSize: 32, color: 'white' }} />
            <img src='/images/medium_icon.png' alt='' className='medium-icon' />
          </div>
          <div className='copyright'>
            <span className='nowrap'>2017-2022&copy;Copyright tupetrading.io</span>
            <br />
            <span className='nowrap'>All Rights Reserved.</span>
          </div>
        </div>
      )}
    </Box>
  );
};

Footer.defaultProps = {
  responsive: false,
};

Footer.propTypes = {
  responsive: PropTypes.bool,
};

export default Footer;
