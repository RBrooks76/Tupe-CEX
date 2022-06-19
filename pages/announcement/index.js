import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AnnouncementScreen = () => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }
    document.body.setAttribute('style', 'min-width: 1280px;');
  }, []);

  return (
    <MainLayout>
      <div className=''>
        <Header />
        <div className='announcementScreen'>
          <section className='section hero'>
            <div className='hero-inner'>
              <form
                role='search'
                className='search search-full'
                data-search=''
                data-instant='true'
                autoComplete='off'
                action='/hc/en-us/search'
                acceptCharset='UTF-8'
                method='get'
              >
                <input name='utf8' type='hidden' defaultValue='✓' />
                <input
                  type='search'
                  name='query'
                  id='query'
                  placeholder='Search'
                  autoComplete='off'
                  aria-label='Search'
                />
              </form>
            </div>
          </section>
          <div className=''>
            <section className='section knowledge-base'>
              <section className='categories blocks'>
                <ul className='blocks-list'>
                  <li className='blocks-item'>
                    <a
                      href='/hc/en-us/categories/1500000356221-Important-Announcements'
                      className='blocks-item-link'
                    >
                      <h4 className='blocks-item-title'>Important Announcements</h4>
                      <p className='blocks-item-description' />
                    </a>
                  </li>
                  <li className='blocks-item'>
                    <a
                      href='/hc/en-us/categories/115000355733-HotBit-Technical-Support'
                      className='blocks-item-link'
                    >
                      <h4 className='blocks-item-title'>HotBit Technical Support</h4>
                      <p className='blocks-item-description' />
                    </a>
                  </li>
                </ul>
              </section>
              <div className='section-tree'>
                <section className='section'>
                  <h3>Promoted articles</h3>
                  <ul className='article-list'>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a href='/article' className='article-list-link'>
                        Hotbit officially launched KYC function
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a href='/article' className='article-list-link'>
                        Announcement on POKT token handling and condemnation of the POKT team
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4415275775639-Hotbit-will-Launch-Leveraged-Index-Products-on-December-8th-2021'
                        className='article-list-link'
                      >
                        Hotbit will Launch Leveraged Index Products on December 8th, 2021
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4414826082327-Official-Statement-Notice-of-illegal-criminals-impersonating-Hotbit-s-official-team-on-Telegram-Twitter-Facebook-and-Email'
                        className='article-list-link'
                      >
                        Official Statement: Notice of illegal criminals impersonating Hotbit &apos;s
                        official team on Telegram, Twitter, Facebook and Email
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4413632603543-Hotbit-Investment-Hotbank-Introduces-It-s-Featured-VIP-FOF-Products-up-to-60-APY-'
                        className='article-list-link'
                      >
                        Hotbit Investment - Hotbank Introduces It’s Featured VIP FOF Products, up to
                        60% APY !
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4412886988439-Hotbit-s-Announcement-Regarding-Adjustment-on-the-Distribution-of-MTFIL-Incomes-on-November-11th-2021'
                        className='article-list-link'
                      >
                        Hotbit&apos;s Announcement Regarding Adjustment on the Distribution of MTFIL
                        Incomes on November 11th, 2021
                      </a>
                    </li>
                  </ul>
                </section>
                <section className='section'>
                  <ul className='article-list'>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4415295674391-Hotbit-Leveraged-Index-Product-DEFI-Index'
                        className='article-list-link'
                      >
                        Hotbit Leveraged Index Product: DEFI Index
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/360049365513-Lecture-6-Suitable-Scenarios-for-Leveraged-ETF'
                        className='article-list-link'
                      >
                        Lecture 6: Suitable Scenarios for Leveraged ETF
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/360049365473-Lecture-5-Trading-Fee-of-Leveraged-ETF'
                        className='article-list-link'
                      >
                        Lecture 5: Trading Fee of Leveraged ETF
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/360048611634-Lecture-4-Rebalance-Mechanism-of-Leveraged-ETF'
                        className='article-list-link'
                      >
                        Lecture 4: Rebalance Mechanism of Leveraged ETF
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/360049365353-Lecture-3-Price-Mechanism-of-Leveraged-ETF'
                        className='article-list-link'
                      >
                        Lecture 3: Price Mechanism of Leveraged ETF
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/360049365293-Lecture-2-Advantages-of-leveraged-ETF'
                        className='article-list-link'
                      >
                        Lecture 2: Advantages of leveraged ETF
                      </a>
                    </li>
                  </ul>
                </section>
                <section className='section'>
                  <ul className='article-list'>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/115004859413-About-Us'
                        className='article-list-link'
                      >
                        About Us
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/4413616325143-Apply-to-List'
                        className='article-list-link'
                      >
                        Apply to List
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/360051828853-Invite-Your-Friends-To-Register-Hotbit-Accounts-And-Receive-Commissions-As-Reward-Latest-Update-On-Rules-and-Regulations-'
                        className='article-list-link'
                      >
                        Invite Your Friends To Register Hotbit Accounts And Receive Commissions As
                        Reward! Latest Update On Rules and Regulations!
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/115005036834-Hotbit-s-Privacy-Policy-and-Statement'
                        className='article-list-link'
                      >
                        Hotbit’s Privacy Policy and Statement
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/115005055013-Terms-of-Service'
                        className='article-list-link'
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </section>
                <section className='section'>
                  <ul className='article-list'>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4404679644439-New-User-Guide-on-the-Web'
                        className='article-list-link'
                      >
                        New User Guide on the Web
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/360047522974-New-User-Guide-on-the-APP'
                        className='article-list-link'
                      >
                        New User Guide on the APP
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/360021312314-Q-A-on-Deposit-and-Withdrawal'
                        className='article-list-link'
                      >
                        Q&amp;A on Deposit and Withdrawal
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/4417602826263-What-is-a-Token-Contract-Address-'
                        className='article-list-link'
                      >
                        What is a Token Contract Address?
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/4416607400343-Can-t-Receive-SMS-Verification-Code-'
                        className='article-list-link'
                      >
                        Can&apos;t Receive SMS Verification Code?
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/4416622805655-Can-t-Receive-Email-Verification-Code-'
                        className='article-list-link'
                      >
                        Can&apos;t Receive Email Verification Code?
                      </a>
                    </li>
                  </ul>
                </section>
                <section className='section'>
                  <ul className='article-list'>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4409675555095-Hotbit-s-Announcement-Regarding-the-Update-in-the-Investment-Area-on-September-29th-2021'
                        className='article-list-link'
                      >
                        Hotbit&apos;s Announcement Regarding the Update in the Investment Area on
                        September 29th, 2021
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4404830981399-Q-A-on-Investment-Product'
                        className='article-list-link'
                      >
                        Q&amp;A on Investment Product
                      </a>
                    </li>
                    <li className='article-list-item article-promoted'>
                      <span data-title='Promoted article' className='icon-star' />
                      <a
                        href='/hc/en-us/articles/4404774596247-Hotbit-Investment-Guide-'
                        className='article-list-link'
                      >
                        Hotbit Investment Guide
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/4438733876119-Hotbit-s-Announcement-Regarding-the-Launch-of-VGM-Staking-Investment-Product-on-February-17th-2022-UTC'
                        className='article-list-link'
                      >
                        Hotbit’s Announcement Regarding the Launch of VGM Staking Investment Product
                        on February 17th, 2022 UTC
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/4438357055895-Hotbit-s-Announcement-Regarding-the-Launch-of-ACH-Staking-Investment-Product-on-February-17th-2022-UTC'
                        className='article-list-link'
                      >
                        Hotbit’s Announcement Regarding the Launch of ACH Staking Investment Product
                        on February 17th, 2022 UTC
                      </a>
                    </li>
                    <li className='article-list-item'>
                      <a
                        href='/hc/en-us/articles/4424707788439-Hotbit-s-Announcement-Regarding-the-Adjustment-on-the-Annual-Interest-Rate-of-some-Investment-Products-on-February-14th-2022-UTC'
                        className='article-list-link'
                      >
                        Hotbit’s Announcement Regarding the Adjustment on the Annual Interest Rate
                        of some Investment Products on February 14th, 2022 UTC
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default AnnouncementScreen;
