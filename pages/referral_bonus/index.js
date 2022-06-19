import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../../layouts/MainLayout';
import ReferralPanel from '../../components/Widgets/Account/ReferralBonus/ReferralPanel';
import AddressPanel from '../../components/Widgets/Account/AddressManagement/AddressPanel';
import SecurityPanel from '../../components/Widgets/Account/SecuritySettings/SecurityPanel';
import Header from '../../components/Header/Header';

const ReferralBonusScreen = () => {
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

  const profile = {
    uid: '23623623',
    email: 'exa********@example.com',
    status: 'Unverified',
  };
  const referralLink = 'https://www.hotbit.io/register?ref=4356126';

  const [activeTab, setActiveTab] = useState('referral');

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = () => {
    //
  };

  const getTabClass = (tab) => (activeTab === tab ? 'active' : '');

  return (
    <MainLayout>
      <Header />
      <div>
        <div className='referralHeader mb-3'>
          <div className='common-width h-full flex flex-column'>
            <div className='flex flex-v-center flex-space-around flex-grow-2'>
              <div className='profile'>
                <div className='profilePicture'>
                  <img
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTMzMEY0NEM1OURCMTFFQUE3NjE4NjU5QkM4Qzg4QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTMzMEY0NEQ1OURCMTFFQUE3NjE4NjU5QkM4Qzg4QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzMwRjQ0QTU5REIxMUVBQTc2MTg2NTlCQzhDODhBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzMwRjQ0QjU5REIxMUVBQTc2MTg2NTlCQzhDODhBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PttQYWoAABHWSURBVHja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'
                    alt=''
                  />
                </div>
                <div className='profileDetails'>
                  <div className='profileDetails-email'>Hi, {profile.email}</div>
                  <div className='flex flex-v-center'>
                    <div className='profileDetails-uid'>UID: {profile.uid}</div>
                    <div className='profileDetails-status'>{profile.status} &gt;</div>
                  </div>
                </div>
              </div>
              <div className='referralLink-container'>
                <span className='mr-4'>Referral Links: {referralLink}</span>
                <span>
                  <i className='material-icons'>content_copy</i>
                </span>
              </div>
            </div>
            <div className='hero-tabs flex-grow-0'>
              <div
                role='button'
                className={`${getTabClass('security')} hero-tab`}
                tabIndex={0}
                onClick={() => changeTab('security')}
                onKeyDown={() => handleKeyDown}
              >
                Security Settings
              </div>
              <div
                role='button'
                className={`${getTabClass('referral')} hero-tab`}
                tabIndex={0}
                onClick={() => changeTab('referral')}
                onKeyDown={() => handleKeyDown}
              >
                Referral Bonus
              </div>
              <div
                role='button'
                className={`${getTabClass('address')} hero-tab`}
                tabIndex={0}
                onClick={() => changeTab('address')}
                onKeyDown={() => handleKeyDown}
              >
                Address Management
              </div>
            </div>
          </div>
          <div className='tab-content mt-4'>
            {activeTab === 'security' && (
              <div className={`${getTabClass('security') ? 'active' : ''}`}>
                <SecurityPanel />
              </div>
            )}
            {activeTab === 'referral' && (
              <div className={`${getTabClass('referral') ? 'active' : ''}`}>
                <ReferralPanel />
              </div>
            )}
            {activeTab === 'address' && (
              <div className={`${getTabClass('address') ? 'active' : ''}`}>
                <AddressPanel />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer/> ga overlap */}
    </MainLayout>
  );
};

export default ReferralBonusScreen;
