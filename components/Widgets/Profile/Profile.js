import { memo } from 'react';
import Link from 'next/link';

import Box from '../../Common/Box';

const Profile = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Profile</p>

        <button type='button'>
          <i className='material-icons'>edit</i>
          Edit
        </button>
      </div>
    </div>
    <div className='widget-profile box-content box-content-height-nobutton'>
      <div className='center'>
        <form className='upload no-select' noValidate>
          <input type='file' name='file' id='file' accept='.jpg, .jpeg' />
          <label htmlFor='file'>
            <div
              className='icon cover pointer'
              // style={{
              //   backgroundImage: `url('me.png')`,
              // }}
            />
            <div className='edit pointer'>
              <i className='material-icons'>edit</i>
            </div>
          </label>
        </form>
      </div>
      <div className='box-horizontal-padding'>
        <div className='center'>
          {/* <h3>IceFrogMate</h3> */}
          <h3>Mark James</h3>
          {/* <strong>Level 1</strong> */}
          <a
            target='_blank'
            href='https://www.linkedin.com/in/mark-james-43082420a/'
            rel='noreferrer'
          >
            LinkedIn
          </a>
          <br/>
          {/* <p>You have to upgrade to Level 2 to increase limit</p> */}
          <a target='_blank' href='https://github.com/markjames12210' rel="noreferrer">
            Ghithub
          </a>
          <br/>
          <a
            target='_blank'
            href='https://www.facebook.com/profile.php?id=100079244832865'
            rel='noreferrer'
          >
            FaceBook
          </a>
          <br/>
          <a
            target='_blank'
            href='https://t.me/markjames1221'
            rel='noreferrer'
          >
            Telegram
          </a>
          <br/>
          <Link href='/members/application'>Upgrade to Level 2</Link>
        </div>
      </div>
    </div>
  </Box>
));

export default Profile;
