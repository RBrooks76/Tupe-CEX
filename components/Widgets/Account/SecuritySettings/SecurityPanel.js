import BadgeIcon from '@mui/icons-material/Badge';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import EmailIcon from '@mui/icons-material/Email';
import SecurityIcon from '@mui/icons-material/Security';
import MainLayout from '../../../../layouts/MainLayout';
import Footer from '../../../Footer/Footer';

const SecurityPanel = () => (
  <MainLayout>
    <div className='common-width usercenter-content'>
      <div className='user-set'>
        <section className='user-remind'>
          <i className='glyphicon glyphicon-exclamation-sign' />
          Please do not disclose the password of your account, SMS and Google Authentication codesto
          anyone, including our staff. Beware of online fraud. Hotbit staff will not ask for your
          account information or password in any means.
        </section>
        <dl className='security user-section'>
          <dt className='user-section-title'>Security Settings</dt>
          <dd className='dd-first'>
            <BadgeIcon />
            <div className='content'>
              <p className='text1' data-nsfw-filter-status='swf'>
                ID Verification
              </p>
              <p className='text2' data-nsfw-filter-status='swf'>
                You can complete identity authentication to improve account security. The accounts
                that haven‘t completed certification will be limited to withdraw less than 10 BTC a
                day.
              </p>
            </div>
            <div className='btnChange'>
              <input type='button' value='Go to verify' />
            </div>
          </dd>
          <dd className='dd-first'>
            <LockIcon />
            <div className='content'>
              <p className='text1' data-nsfw-filter-status='swf'>
                Login Password
              </p>
              <p className='text2' data-nsfw-filter-status='swf'>
                Users are required to use the login password to login our platform and conduct
                withdrawal transactions. Please do not disclose the login password to anyone for the
                prevention of the loss of your account assets.
              </p>
            </div>
            <div className='btnChange'>
              <input type='button' value='Modify' />
            </div>
          </dd>
          <dd>
            <GoogleIcon />
            <div className='content'>
              <p className='text1' data-nsfw-filter-status='swf'>
                Google authentication
              </p>
              <p className='text2' data-nsfw-filter-status='swf'>
                Google authentication is required during login, withdrawals, password
                modificationand API management. The binding of Google Authenticator can greatly
                enhance your account security. Please do not disclose your Google Authentication
                code to anyone for the prevention of the loss of your account assets.
              </p>
            </div>
            <div className='btnChange'>
              <input
                type='button'
                value='Enable'
                data-container='body'
                data-toggle='focus'
                data-placement='left'
              />
            </div>
          </dd>
          <dd>
            <TabletMacIcon />
            <div className='content'>
              <p className='text1' data-nsfw-filter-status='swf'>
                Two-Factor Google authentication with SMS Verification
              </p>
              <p className='text2' data-nsfw-filter-status='swf'>
                Users are required to use SMS verification during login, withdrawals, password
                modification and API management. The binding of SMS verification process can greatly
                enhance your account security. If you choose to bind both Google Authenticator and
                Verification, during the verification process, our system will choose Google
                Authenticator as prioritized verification process.
              </p>
            </div>
            <div className='btnChange'>
              <input
                type='button'
                value='Enable'
                id='smsvalue'
                data-container='body'
                data-toggle='focus'
                data-placement='left'
              />
            </div>
          </dd>
          <dd>
            <EmailIcon />
            <div className='content'>
              <p className='text1' data-nsfw-filter-status='swf'>
                Email Google authentication
              </p>
              <p className='text2' data-nsfw-filter-status='swf'>
                The users are required to use this method for signing in, withdrawal, retrieving
                passwords, modifying their security settings and managing their API.
              </p>
              <p className='text3' data-nsfw-filter-status='swf'>
                The email address(es) that has (have) already been bound.
                <span className='text3_phoneNum' data-nsfw-filter-status='swf'>
                  ali*********@gmail.com
                </span>
              </p>
            </div>
            <div className='btnChange'>
              <input
                type='button'
                value='Disable'
                data-container='body'
                data-toggle='focus'
                data-placement='left'
                className='disabled'
              />
            </div>
          </dd>
          <dd>
            <SecurityIcon />
            <div className='content'>
              <p className='text1' data-nsfw-filter-status='swf'>
                Anti-Phishing Code
              </p>
              <p className='text2' data-nsfw-filter-status='swf'>
                By setting your anti-phishing code, you will be able to confirm whether the emails
                have received are sent from Hotbit or not.
              </p>
            </div>
            <div className='btnChange'>
              <input
                type='button'
                value='Enable'
                id='smsvalue'
                data-container='body'
                data-toggle='focus'
                data-placement='left'
              />
            </div>
          </dd>
        </dl>
        <div className='part-2'>
          <section className='login-history user-section'>
            <p className='user-section-title' data-nsfw-filter-status='swf'>
              Login History
            </p>
            <div className='user-table-wrap'>
              <table border='0'>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>IP Address</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2022-02-17 18:17:25</td>
                    <td>188.43.136.33</td>
                    <td>Russian Federation</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>2022-02-14 03:41:04</td>
                    <td>188.43.136.33</td>
                    <td>Russian Federation</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>2022-02-13 22:26:10</td>
                    <td>188.43.136.33</td>
                    <td>Russian Federation</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>2022-02-13 14:48:05</td>
                    <td>188.43.136.33</td>
                    <td>Russian Federation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className='bulletin-center user-section'>
            <p className='user-section-title' data-nsfw-filter-status='swf'>
              Bulletin center
            </p>
            <div className='user-table-wrap'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/4443909195543-Hotbit-will-launch-BBS-BBS-Network-on-February-18th-2022'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Hotbit will launch BBS(BBS Network) on February 18th, 2022
                      </a>
                    </td>
                    <td>02-18</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/ 4443763518615-Announcement-on-the-Reopening-of-the-SGB-Deposit-and-Withdrawal-Functions-on-February-18th-2022'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Announcement on the Reopening of the SGB Deposit and Withdrawal Functions
                        February 18th, 2022
                      </a>
                    </td>
                    <td>02-18</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/ 4443758772119-Announcement-on-the-Reopening-of-Deposit-and-withdrawal-Functions-of-all-tokens-on-ONE-Chain-on-February-18th-2022-2022'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Announcement on the Reopening of Deposit and withdrawal Functions of all
                        tokens on ONE Chain on February 18th, 2022, 2022
                      </a>
                    </td>
                    <td>02-18</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/4439802600855-Hotbit-s-Notice-Regarding-PAPA-Isuue'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Hotbits Notice Regarding PAPA Isuue
                      </a>
                    </td>
                    <td>02-18</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/4439209423127-Hotbit-s-Announcement-Regarding-The-Suspension-On-The-Withdrawal-Function-Of-All-Tokens-Based-On-AURORAS-Mainnet-Starting-From-February-19th-2022'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Hotbit’s Announcement Regarding The Suspension On The Withdrawal Function Of
                        All Tokens Based On AURORAS Mainnet Starting From February 19th, 2022
                      </a>
                    </td>
                    <td>02-18</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/4438990696471-Announcement-on-the-Reopening-of-the-LAT-Deposit-and-Withdrawal-Functions-on-February-17th-2022'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Announcement on the Reopening of the LAT Deposit and Withdrawal Functions on
                        February 17th, 2022
                      </a>
                    </td>
                    <td>02-18</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/ 4438434593559-Hotbit-will-launch-ADG-ADGAME-on-February-18th-2022'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Hotbit will launch ADG(ADGAME) on February 18th, 2022
                      </a>
                    </td>
                    <td>02-17</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/4438410535447-Hotbit-s-Announcement-Regarding-the-Reopening-of-the-Trading-Function-of-DBT-and-Transfer-of-DBT-Disco-Burn-Token-from-Global-Zone-to-Growing-Zone'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Hotbits Announcement Regarding the Reopening of the Trading Function of DB
                        Transfer of DBT(Disco Burn Token) from Global Zone to Growing Zone
                      </a>
                    </td>
                    <td>02-17</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/4438253512855-Hotbit-will-launch-CPRO-CryptoPro-on-February-18th-2022'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Hotbit will launch CPRO(CryptoPro) on February 18th, 2022
                      </a>
                    </td>
                    <td>02-17</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='https://hotbit.zendesk.com/hc/en-us/articles/4438229368599-Announcement-on-the-Suspension-of-the-KDA-Deposit-and-Withdrawal-Functions-on-February-17th-2022'
                        target=''
                        data-nsfw-filter-status='swf'
                      >
                        Announcement on the Suspension of the KDA Deposit and Withdrawal Functions
                        February 17th, 2022
                      </a>
                    </td>
                    <td>02-17</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='notice-more'>
              <a
                href='https://hotbit.zendesk.com/hc/en-us/sections/115001049054-News-and-Announcements'
                data-nsfw-filter-status='swf'
              >
                More
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </MainLayout>
);

export default SecurityPanel;
