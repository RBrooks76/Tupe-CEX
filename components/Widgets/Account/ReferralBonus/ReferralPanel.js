import MainLayout from '../../../../layouts/MainLayout';
import Footer from '../../../Footer/Footer';

const ReferralPanel = () => (
  <MainLayout>
    <div className='common-width usercenter-content'>
      <div className='invit'>
        <div className='invitation-page'>
          <img
            src='https://upload-hotbit-io.oss-accelerate.aliyuncs.com/resource/static/img/invite-banber-en-US.c362923.jpg'
            alt=''
            className='invite-img'
            data-nsfw-filter-status='sfw'
            style={{ visibility: 'visible' }}
          />
          <div className='section-1'>
            <div className='row1'>
              <div className='item'>
                Total directly invited
                <br />
                <span className='str' data-nsfw-filter-status='swf'>
                  0
                </span>
              </div>
              <div className='item'>
                Total indirectly invited
                <br />
                <span className='str' data-nsfw-filter-status='swf'>
                  0
                </span>
              </div>
              <div className='item'>
                Cumulative rebates
                <br />
                <span className='str' data-nsfw-filter-status='swf'>
                  0 BTC
                </span>
                $0
              </div>
              <div className='item'>
                <span className='desh' data-nsfw-filter-status='swf'>
                  Yesterday‘s rebate
                  <div className='tip-box'>
                    The rebate in the past 24h will be released at 11:00 am (UTC+8) every day
                  </div>
                </span>
                <br />
                <span className='str' data-nsfw-filter-status='swf'>
                  0 BTC
                </span>
                $0
              </div>
            </div>
            <div className='row1 i1'>
              <div className='item'>
                <span className='title' data-nsfw-filter-status='swf'>
                  Default referral link &nbsp;&nbsp;
                  <i className='fa fa-copy' />
                </span>
                <span className='txt2' data-nsfw-filter-status='swf'>
                  https://www.hotbit.io/register?ref=4288358 &nbsp;
                  <button type='button' className='pointer white no-select'>
                    <i className='material-icons'>content_copy</i>
                  </button>
                </span>
              </div>
            </div>
            <div className='row2-1'>
              <div className='section-1-l'>
                <p className='section-l-title' data-nsfw-filter-status='swf'>
                  <span className='l' data-nsfw-filter-status='swf'>
                    Invite friends. Earn bonus
                  </span>
                  <a
                    href='https://hotbit.zendesk.com/hc/en-us/articles/360051828853-'
                    className='r'
                    data-nsfw-filter-status='swf'
                  >
                    Detailed Rules
                  </a>
                </p>
                <div className='row2'>
                  <div className='item-box'>
                    <div className='item'>
                      <span className='title' data-nsfw-filter-status='swf'>
                        Default referral ID&nbsp;&nbsp;
                        <i className='fa fa-copy' />
                      </span>
                      <span className='txt2' data-nsfw-filter-status='swf'>
                        4288358
                      </span>
                    </div>
                  </div>
                  <div className='item-box'>
                    <div className='item'>
                      <span className='title desh' data-nsfw-filter-status='swf'>
                        Spot rebate ratio
                        <div className='tip-box'>
                          Tier 1 rebate ratio / Tier 2 rebate ratio / Tier 1 rebate ratio of invitee
                        </div>
                      </span>
                      <span className='txt2' data-nsfw-filter-status='swf'>
                        20% / 0% / 0%
                      </span>
                    </div>
                    <div className='item'>
                      <span className='title desh' data-nsfw-filter-status='swf'>
                        ETF rebate ratio
                        <div className='tip-box'>
                          Tier 1 rebate ratio / Tier 2 rebate ratio / Tier 1 rebate ratio of invitee
                        </div>
                      </span>
                      <span className='txt2' data-nsfw-filter-status='swf'>
                        20% / 0% / 0%
                      </span>
                    </div>
                  </div>
                </div>
                <button className='invi-btn' type='button'>
                  Invite now
                </button>
              </div>
              <div className='section-1-r'>
                <div className='tab-box'>
                  <div className='tab active'>Spot rebate ratio table</div>
                  <div className='tab'>ETF rebate ratio table</div>
                </div>
                <table className='htb-tb'>
                  <tr>
                    <th>HTB balance</th>
                    <th>
                      <span className='desh' data-nsfw-filter-status='swf'>
                        Total tier 1 rebate ratio
                        <div className='tip-box' style={{ left: '-60px' }}>
                          Under the corresponding HTB balance, when you add a new link, the ratio
                          allocated to tier 1 invitees from the total tier 1 rebate ratio
                        </div>
                      </span>
                    </th>
                    <th>Tier 2 rebate ratio</th>
                  </tr>
                  <tr className='active'>
                    <td>&lt; 5,000</td>
                    <td>20%</td>
                    <td>0%</td>
                  </tr>
                  <tr className=''>
                    <td>≥ 5,000</td>
                    <td>20%</td>
                    <td>5%</td>
                  </tr>
                  <tr className=''>
                    <td>≥ 50,000</td>
                    <td>30%</td>
                    <td>7.5%</td>
                  </tr>
                  <tr className=''>
                    <td>≥ 500,000</td>
                    <td>40%</td>
                    <td>10%</td>
                  </tr>
                </table>
                <button className='invi-btn' type='button'>
                  Upgrade HTB balance
                </button>
              </div>
            </div>
          </div>
          <div className='section-2'>
            <div className='option-box'>
              <div className='menu'>
                <span className='item active' data-nsfw-filter-status='swf'>
                  Referral Links
                </span>
                <span className='item' data-nsfw-filter-status='swf'>
                  Referral Record
                </span>
              </div>
              <button className='add-new-link' type='button'>
                Add new link
              </button>
            </div>
            <div>
              <table className='invi-table'>
                <tr>
                  <th>Referral ID</th>
                  <th>Label</th>
                  <th>Spot rebate ratio</th>
                  <th>ETF rebate ratio</th>
                  <th>Directly invited</th>
                  <th>Indirectly invited</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>
                    <span className='desh' data-nsfw-filter-status='swf'>
                      4288358
                      <div className='tip-box'>https://www.hotbit.io/register?ref=4288358</div>
                    </span>
                  </td>
                  <td />
                  <td>20% / 0% / 0%</td>
                  <td>20% / 0% / 0%</td>
                  <td />
                  <td />
                  <td>
                    <button type='button'>Invite</button>
                    <button type='button'>Edit</button>
                    <button type='button'>Copy </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className='section-3'>
            <div className='option-box'>
              <div className='menu'>
                <span
                  className='item active'
                  style={{ marginRight: '10px' }}
                  data-nsfw-filter-status='swf'
                >
                  Rebate Record
                </span>
                <span data-nsfw-filter-status='swf'>
                  (Display records within 30 days by default)
                </span>
              </div>
              <div className='screen-box'>
                <div className='date-picker-box' />
                <div className='dropdown-wrapper type'>
                  <button className='dropdownButton' type='button'>
                    <span data-nsfw-filter-status='swf'>All</span>
                    <i className='fa fa-caret-down' />
                  </button>
                  <ul className='dropdown_ul' style={{ display: 'none' }}>
                    <li className='active-li'>All</li>
                    <li className=''>Spot</li>
                    <li className=''>ETF</li>
                  </ul>
                </div>
                <button className='seach' type='button'>
                  Search
                </button>
                <button className='reset' type='button'>
                  Reset
                </button>
              </div>
            </div>
            <table className='invi-table'>
              <tr>
                <th>Release date</th>
                <th>Type</th>
                <th>Yesterday‘s rebate</th>
              </tr>
            </table>
            <div data-v-1c9b28b8='' className='no-data'>
              <img
                data-v-1c9b28b8=''
                alt=''
                src='https://upload-hotbit-io.oss-accelerate.aliyuncs.com/files/no-found.png'
                data-nsfw-filter-status='sfw'
                style={{ visibility: 'visible' }}
              />
              <p data-v-1c9b28b8='' data-nsfw-filter-status='swf'>
                No data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </MainLayout>
);

export default ReferralPanel;
