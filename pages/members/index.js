import SiteLayout from '../../layouts/SiteLayout';

import Limits from '../../components/Widgets/Limits/Limits';
import Profile from '../../components/Widgets/Profile/Profile';
import MyAssets from '../../components/Widgets/MyAssets/MyAssets';
import RecentActivity from '../../components/Widgets/RecentActivity/RecentActivity';
import Footer from '../../components/Footer/Footer';

const ProfileScreen = () => (
  <>
    <SiteLayout>
      <div className='profileScreen'>
        <div className='flex-sm flex-lg-wrap'>
          <div className='content-md-30 box-right-padding'>
            <Profile />
          </div>
          <div className='content-md-70 flex-1'>
            <MyAssets />
          </div>
        </div>

        <div className='flex-sm flex-space-between flex-lg-wrap'>
          <div className='flex-1 box-right-padding'>
            <RecentActivity />
          </div>
          <div className='flex-1'>
            <Limits />
          </div>
        </div>
      </div>
    </SiteLayout>
    <Footer />
  </>
);

export default ProfileScreen;
