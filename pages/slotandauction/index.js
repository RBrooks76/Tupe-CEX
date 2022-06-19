import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Accordion from 'react-bootstrap/Accordion';
import MainLayout from '../../layouts/MainLayout';

// import SlotandAuction from '../../components/Widgets/SlotandAuction/SlotandAuction';
// import CoinVertical from '../../components/Widgets/Coin/CoinVertical';
import CoinHorizontal from '../../components/Widgets/Coin/CoinHorizontal';
import SlotItem from '../../components/Widgets/SlotItem/SlotItem';
import SlotItemInprogress from '../../components/Widgets/SlotItemInprogress/SlotItem';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const SlotandAuctionScreen = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [coinInfo, setCoinInfo] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }

    const coinData = {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      change: '-%3.28',
      currency: 'TRY',
      exchange: 'BTC/TRY',
      weight: '104k',
      financialRate: '-0.0252%/hr',
      icon: 'https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png',
      amount: '18.783,33',
      description: `Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group using the name Satoshi Nakamoto. Released as an open source software in 2009`,
    };

    setCoinInfo(coinData);
  }, []);

  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <MainLayout>
        <div className='slotAndAuctionScreen'>
          <section className='section hero'>
            <div className='hero-inner'>
              <p>Tupe Slot Auction</p>
            </div>
          </section>
          <div className='flex flex-destroy'>
            <div className='content-70 flex-1'>
              <div className='container'>
                {coinInfo && (
                  <CoinHorizontal
                    item={coinInfo}
                    searchValue={keyword}
                    searchOnChange={handleSearchValue}
                    searchSubmit={handleSearchSubmit}
                  />
                )}
                <div className='row'>
                  <p className='text-center pt-5 pb-5 fs-4'>Tupe Slot Auction</p>
                </div>
                <div>
                  <p className='text-left pt-3 pb-2 fs-6'>In Progress(8)</p>
                </div>
                <div className='flex flex-destroy flex-space-between center'>
                  <div className='flex-1 box-right-padding'>
                    <SlotItemInprogress />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <SlotItem />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <SlotItem />
                  </div>
                  <div className='flex-1'>
                    <SlotItem />
                  </div>
                </div>
                <div className='flex flex-destroy flex-space-between center top-padding'>
                  <div className='flex-1 box-right-padding'>
                    <SlotItem />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <SlotItem />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <SlotItem />
                  </div>
                  <div className='flex-1'>
                    <SlotItem />
                  </div>
                </div>
              </div>
              <section className='reg-banner bg-gray-200 text-black text-start'>
                <p className='text-center mt-5 mb-1 pt-5 fs-4'>Slot Auction Process</p>
                <div className='container'>
                  <ul className='process-ul'>
                    <li>
                      <h2>Voting For Auction</h2>
                      <p>
                        Tuple will vote for projects on the Kusama chain on behalf of the users who
                        staked KSM , and users will get extra rewards offered by Tuple.
                      </p>
                      <img src='images/arrow-right.png' alt='arrow-right' />
                    </li>
                    <li>
                      <h2>Getting the Results</h2>
                      <p>
                        Tuple will vote for projects on the Kusama chain on behalf of the users who
                        staked KSM , and users will get extra rewards offered by Tuplet.
                      </p>
                      <img src='images/arrow-right.png' alt='arrow-right' />
                    </li>
                    <li>
                      <h2>Earning the rewards</h2>
                      <p>
                        Tuple will vote for projects on the Kusama chain on behalf of the users who
                        staked KSM , and users will get extra rewards offered by Hotbit.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <section className='bg-white text-black faqSection'>
                <p className='text-center mt-5 mb-5 fs-4'>FAQ</p>
                <Accordion>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      What is slot auction ?<span className='material-icons'>chevron_right</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Polkadot is composed of a relay chain and many parachains. A slot will be
                      required for the connection between the relay chain and a parachain. With this
                      connection, a parachain can share security with the Polkadot main chain and
                      interact with other parachains. However, there will be a finite number of
                      parachain slots. To ensure fairness in allocating parachain slots, we decided
                      to use auctions. Anyone can participate. This process is called slot auction.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                      How do I participate in slot auction through Hotbit?
                      <span className='material-icons'>chevron_right</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Hotbit provides users with access to participate in the slot auction. Users
                      vote for the project at Hotbit, then Hotbit votes on the chain on behalf of
                      users. If the project gains a slot, Hotbit will receive the rewards and
                      distribute them to users. If the project does not gain any slot at auction,
                      Hotbit will retrieve assets from the chain for users.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                      What is Polkadot? <span className='material-icons'>chevron_right</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Polkadot is the third-generation permissionless blockchain launched by the
                      core developer of Ethereum, Dr. Gavin Wood. The core concept of this design is
                      instant scalability and extensibility. It aims to connect the current
                      independent blockchains to achieve communication and data transfer across
                      different blockchains.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                      What is Kusama? <span className='material-icons'>chevron_right</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      As the testnet of Polkadot mainnet, Kusama has entire functions of the
                      Polkadot mainnet and acts as a temporary preparation ground for deployment on
                      Polkadot. Risky functions will run on the Kusama network first.
                      Correspondingly, possible problems will be eliminated in advance to ensure a
                      smooth launch on the mainnet. Therefore, the slot auction will also be
                      launched on the Kusama network first, and the auction rules will be consistent
                      with those of the Polkadot mainnet.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>
                      Disclaimer <span className='material-icons'>chevron_right</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Hotbit will try its best to ensure the smooth progress of voting. Hotbit only
                      assists users to vote on the chain, but does not guarantee that the bid will
                      be successful. Hotbit is not responsible for any assets loss caused by
                      potential risks such as suspension/termination of business, bankruptcy,
                      abnormal suspension or cessation of transactions by any third-party platform
                      or project team. Please read the project introduction and voting rules
                      carefully in advance.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </section>
            </div>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default SlotandAuctionScreen;
