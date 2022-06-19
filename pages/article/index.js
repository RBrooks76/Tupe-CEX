import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ArticleScreen = () => {
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
  }, []);

  return (
    <MainLayout>
      <div className='content'>
        <Header />
        <div className='articleScreen'>
          <div className='container'>
            {/* <nav className='sub-nav'>
            <form
              role='search'
              className='search'
              data-search=''
              action='/hc/en-us/search'
              acceptCharset='UTF-8'
              method='get'
            >
              <input name='utf8' type='hidden' value='✓' />
              <input type='hidden' name='category' id='category' value='1500000356221' />
              <input
                type='search'
                name='query'
                id='query'
                placeholder='Search'
                aria-label='Search'
              />
            </form>
          </nav> */}
            <div className='article-container' id='article-container'>
              <section className='article-sidebar'>
                <section className='section-articles collapsible-sidebar'>
                  <h3 className='collapsible-sidebar-title sidenav-title'>
                    Articles in this section
                  </h3>
                  <ul>
                    <li>
                      <a
                        href='/hc/en-us/articles/4420755176087-Hotbit-officially-launched-KYC-function'
                        className='sidenav-item current-article'
                        data-nsfw-filter-status='swf'
                      >
                        Hotbit officially launched KYC function
                      </a>
                    </li>
                    <li>
                      <a
                        href='/hc/en-us/articles/4419589904407-Announcement-on-POKT-token-handling-and-condemnation-of-the-POKT-team'
                        className='sidenav-item'
                        data-nsfw-filter-status='swf'
                      >
                        Announcement on POKT token handling and condemnation of the POKT team
                      </a>
                    </li>
                    <li>
                      <a
                        href='/hc/en-us/articles/ 4415275775639-Hotbit-will-Launch-Leveraged-Index-Products-on-December-8th-2021'
                        className='sidenav-item'
                        data-nsfw-filter-status='swf'
                      >
                        Hotbit will Launch Leveraged Index Products on December 8th, 2021
                      </a>
                    </li>
                    <li>
                      <a
                        href='/hc/en-us/articles/4412886988439-Hotbit-s-Announcement-Regarding-Adjustment-on-the-Distribution-of-MTFIL-Incomes-on-November-11th-2021'
                        className='sidenav-item'
                        data-nsfw-filter-status='swf'
                      >
                        Hotbits Announcement Regarding Adjustment on the Distribution
                      </a>
                    </li>
                  </ul>
                  <a
                    href='/hc/en-us/sections/1500001610821-News-and-Announcements'
                    className='article-sidebar-item'
                    data-nsfw-filter-status='swf'
                  >
                    See more
                  </a>
                </section>
              </section>
              <article className='article'>
                <header className='article-header'>
                  <h1 title='Hotbit officially launched KYC function' className='article-title'>
                    Hotbit officially launched KYC function
                  </h1>
                  <div className='article-author'>
                    <div className='avatar article-avatar'>
                      <span className='icon-agent' data-nsfw-filter-status='swf' />
                      <img
                        src='https://hotbit.zendesk.com/system/photos/360154576533/微信图片_20180629092802. jpg'
                        alt='Avatar'
                        className='user-avatar'
                      />
                    </div>
                    <div className='article-meta'>
                      <a
                        href='/hc/en-us/profiles/361001260873-Hotbit-CS'
                        data-nsfw-filter-status='swf'
                      >
                        Hotbit-CS
                      </a>
                      <ul className='meta-group'>
                        <li className='meta-data'>
                          <time
                            dateTime='2022-02-18T09:47:09Z'
                            title='2022-02-18 19:47'
                            data-datetime='relative'
                          >
                            3 hours ago
                          </time>
                        </li>
                        <li className='meta-data'>Updated</li>
                      </ul>
                    </div>
                  </div>
                  <a
                    className='article-subscribe'
                    title='Opens a sign-in dialog'
                    rel='nofollow'
                    role='button'
                    data-auth-action='signin'
                    ariaSelected='false'
                    href='/hc/en-us/articles/4420755176087-Hotbit-officially-launched-KYC-function/subscription.html'
                  >
                    Follow
                  </a>
                </header>
                <section className='article-info'>
                  <div className='article-content'>
                    <div className='article-body'>
                      <p data-nsfw-filter-status='swf'>
                        <strong>Dear Hotbit users,</strong>
                        <br />
                        &nbsp; &nbsp; &nbsp; Hotbit is scheduled to launch KYC
                        (identityauthentication) function at 09:00 AM UTC on January 29th, 2022 UTC.
                        Starting from February 1st, 2022 UTC, all newly registered users on Hotbit who
                        have not made KYC authentication will be limited to 10BTC daily Withdrawal
                        amount.
                      </p>
                      <p data-nsfw-filter-status='swf'>
                        &nbsp; &nbsp; &nbsp; &nbsp;Users who have completed KYC will have no daily
                        withdrawal amount limit when making withdrawals.
                      </p>
                      <p data-nsfw-filter-status='swf'>
                        &nbsp; &nbsp; &nbsp; &nbsp;Note: Users who registered before February 1st,
                        2022 UTC+8 will not be affected by the withdrawal of KYC rules at present
                      </p>
                      <p data-nsfw-filter-status='swf'>
                        &nbsp; &nbsp; &nbsp; &nbsp;If you have any problem, please send us the
                        <a href='/hc/en-us/requests/new' target='_self' data-nsfw-filter-status='swf'>
                          support ticket
                        </a>
                        .
                      </p>
                      <p data-nsfw-filter-status='swf'>&nbsp;</p>
                      <p data-nsfw-filter-status='swf'>Hotbit Team</p>
                      <p data-nsfw-filter-status='swf'>January 29th, 2022</p>
                    </div>
                  </div>
                </section>
                <footer>
                  <div className='article-footer'>
                    <div className='article-share'>
                      <ul className='share'>
                        <li>
                          <a
                            href='https://www.facebook.com/share.php?title=Hotbit+officially+launched+KYC+function&amp;u=https%3A%2F%2Fhotbit.zendesk.com%2Fhc%2Fen-us%2Farticles%2F4420755176087-Hotbit-officially-launched-KYC-function'
                            className='share-facebook'
                            data-nsfw-filter-status='swf'
                          >
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://twitter.com/share?lang=en&amp;text=Hotbit+officially+launched+KYC+function&amp;url=https%3A%2F%2Fhotbit.zendesk.com%2Fhc%2Fen-us%2Farticles%2F4420755176087-Hotbit-officially-launched-KYC-function'
                            className='share-twitter'
                            data-nsfw-filter-status='swf'
                          >
                            Twitter
                          </a>
                          <a
                            href='https://www.linkedin.com/shareArticle?mini=true&amp;source=HOTBIT+TRADE&amp;title=Hotbit+officially+launched+KYC+function&amp;url=https%3A%2F%2Fhotbit.zendesk.com%2Fhc%2Fen-us%2Farticles%2F4420755176087-Hotbit-officially-launched-KYC-function'
                            className='share-linkedin'
                            data-nsfw-filter-status='swf'
                          >
                            LinkedIn
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='article-votes'>
                    <span className='article-votes-question' data-nsfw-filter-status='swf'>
                      Was this article helpful?
                    </span>
                    {/* <div className='article-votes-controls' role='radiogroup'>
                    <a
                      className='button article-vote article-vote-up'
                      aria-selected='false'
                      role='radio'
                      rel='nofollow'
                      title='Yes' href='#'
                      data-nsfw-filter-status='swf'></a>
                    <a
                      className='button article-vote article-vote-down'
                      aria-selected='false'
                      role='radio'
                      rel='nofollow'
                      title='No'
                      href='#'
                      data-nsfw-filter-status='swf'></a>
                  </div> */}
                    <small className='article-votes-count'>
                      <span className='article-vote-label' data-nsfw-filter-status='swf'>
                        218 out of 252 found this helpful
                      </span>
                    </small>
                  </div>
                  <div className='article-more-questions'>
                    Have more questions?
                    <a href='/hc/en-us/requests/new' data-nsfw-filter-status='swf'>
                      Submit a request
                    </a>
                  </div>
                  <div className='article-return-to-top'>
                    <a href='#article-container' data-nsfw-filter-status='swf'>
                      Return to top
                      <span className='icon-arrow-up' data-nsfw-filter-status='swf' />
                    </a>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default ArticleScreen;
