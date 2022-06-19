import SiteLayout from '../../layouts/SiteLayout';
import Announcements from '../../components/Widgets/Announcements/Announcements';

const OninoLaunch = () => {
  const announcement = {
    title: 'Tupe will launch ONI(ONINO) on March 1st, 2022',
    author: {
      name: 'Tupe',
      thumbnail: '/images/articles/photo_2018-01-15_11-10-26.jpg',
    },
    timestamp: '3 hours ago -  Updated',
    news: {
      headline: 'Tupe is scheduled to list ONI(ONINO) on Global Section.',
      time: {
        deposit: '2022.03.01 08:00 AM UTC',
        trading: '2022.03.01 10:00 AM UTC',
        withdrawal: '2022.03.01 10:00 AM UTC',
      },
      tradingPairs: 'ONI/USDT, ONI/ETH',
    },
  };

  return (
    <SiteLayout>
      <Announcements announcement={announcement}>
        <section>
          <p className='indented'>
            <i>
              <strong>
                Tupe users exclusively enjoy “Minus Maker Means Minus Transaction Fee” mechanism.
                placing and settling any maker order, the user will enjoy 0 transaction fee and an
                an extra 0.30% of the trading volume of his/her maker order as reward on Global
                Section!
              </strong>
            </i>
          </p>
        </section>

        <section>
          <p className='my-4'>
            <strong>Project Name: </strong>
            <span>ONINO</span>
          </p>
          <p className='my-4'>
            <strong>Abbreviation: </strong>
            <span>ONI</span>
          </p>
          <p className='my-4'>
            <strong>Project Introduction </strong>
          </p>
          <p className='my-4'>What Is ONINO?</p>
          <p className='mt-4'>
            ONINO is a layer-1 data storage solution that enables users to verify and store their
            real-world identity data securely on-chain, and to connect it to their assets scattered
            across different networks using the cross-chain ONINO wallet. The layer-1 solution also
            provides the base technology for a vibrant ecosystem of virtually limitless
            identity-based C2C, B2C, and B2B use cases with real utility, built by both, ONINO as
            well as dApp developers from every network.
          </p>
          <p>
            More details about ONINO’s mission can be found in the
            [Litepaper](https://www.onino.io/documents/Onino_Litepaper.pdf)
          </p>
          <p>What Is The ONI Token?</p>
          <p>
            ONI will be the native utility token of ONINO. It will be used to fuel the data reading
            and writing transactions within the ONINO ecosystem and to run the Proof-of-Stake
            protocol. ONI is initially launched as a BSC token for community building during the
            development phase and will be migrated to the native layer-1 token as soon as
            development is completed. The native ONI token’s transaction fees will fuel the staking
            rewards fund, the liquidity mining fund, and the innovation fund, which will sponsor
            innovative layer-2 projects.
          </p>
          <p>What Are ONINO’s Core Products?</p>
          <p>
            For Users: The ONINO Wallet, a lucid cross-chain wallet help users keep an overview of
            their web3 assets across different networks and link them to their real-world identity
          </p>
          <p>
            For Developers: The ONINO Dual-Chain, a layer-1 core technology that enables dApp
            developers to create identity-based layer-2 applications either on the ONINO network or
            on any other network via API
          </p>
          <p>What Are ONINO’s Future Use Cases?</p>
          <p>Selected Examples:</p>
          <p>Identity verification in the Web3, for example for age verification or KYC</p>
          <p>One-click generation of comprehensive crypto tax documents</p>
          <p>
            Digital Twin NFTs of real-world assets connected to your identity, preventing
            counterfeiting and theft
          </p>
          <p>
            On-chain document storage and verification, for example for contracts, certificates, or
            employer references
          </p>
          <p>Decentralized insurance systems</p>
          <p>How Many ONI Tokens Are There In Circulation?</p>
          <p>
            In total there are 100,000,000 ONI tokens. Currently, about 81%, including all team,
            advisor, and developer tokens, are locked with UniCrypt. 13% of all tokens were
            distributed in pre-launch rounds and 2% of all tokens were provided as initial liquidity
            for the launch on PancakeSwap. In addition, 14% and 15% of all tokens are reserved
            respectively for staking rewards and liquidity mining rewards to fuel the ONINO Farm.
            More information can be found in the [Tokenomics](https://www.onino.io/#tokenomics).
          </p>
          <p>Where Can I Stake and Farm The ONI Token?</p>
          <p className='mb-4'>
            The ONI token can be used for Yield Farming in the [ONINO Farm](https://farm.onino.io/)
          </p>
          <p className='my-4'>
            <strong>Token type: </strong>
            <span>BEP-20</span>
          </p>
          <p className='my-4'>
            <strong>Total supply: </strong>
            <span>100,000,000 ONI</span>
          </p>
          <p className='my-4'>
            <strong>Official Website: </strong>
            <span>
              <a href='https://www.onino.io/'>https://www.onino.io/</a>
            </span>
          </p>
          <p className='my-4'>
            <strong>Explorer: </strong>
            <span>
              <a href='https://bscscan.com/token/0xea89199344a492853502a7a699cc4230854451b8'>
                https://bscscan.com/token/0xea89199344a492853502a7a699cc4230854451b8
              </a>
            </span>
          </p>
        </section>
      </Announcements>
    </SiteLayout>
  );
};

export default OninoLaunch;
