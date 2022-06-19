import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => (
  <section>
    <div className='article-subheader'>About Us</div>
    <p className='my-4'>
      <span className='mr-2'>
        <strong>Hotbit’s Official Website:</strong>
      </span>
      <a href='https://www.hotbit.io/ '>https://www.hotbit.io/</a>
    </p>
    <p className='my-4'>
      <span className='mr-2'>
        <strong>Telegram :</strong>
      </span>
      <a href='https://t.me/Hotbit_English '>https://t.me/Hotbit_English</a>
    </p>
    <p className='my-4'>
      <span className='mr-2'>
        <strong>Telegram Announcements:</strong>
      </span>
      <a href='https://t.me/Hotbit_announcements '>https://t.me/Hotbit_announcements</a>
    </p>
    <p className='my-4'>
      <span className='mr-2'>
        <strong>Twitter:</strong>
      </span>
      <a href='https://twitter.com/Hotbit_news'>https://twitter.com/Hotbit_news</a>
    </p>
    <p className='my-4'>
      <span className='mr-2'>
        <strong>Facebook:</strong>
      </span>
      <a href='https://www.facebook.com/hotbitexchange/'>
        https://www.facebook.com/hotbitexchange/
      </a>
    </p>
    <p className='my-4'>
      <span className='mr-2'>
        <strong>Medium:</strong>
      </span>
      <a href='https://medium.com/@hotbit'>https://medium.com/@hotbit</a>
    </p>
    <p className='my-4'>
      <span className='mr-2'>
        <strong>Instagram:</strong>
      </span>
      <a href='https://www.instagram.com/hotbit_official/'>
        https://www.instagram.com/hotbit_official/
      </a>
    </p>

    <div className='flex flex-start mt-4'>
      <a href='/'>
        <FacebookIcon sx={{ fontSize: 40, color: '#363636' }} />
      </a>
      <a href='/'>
        <TwitterIcon sx={{ fontSize: 40, color: '#363636' }} />
      </a>
      <a href='/'>
        <LinkedInIcon sx={{ fontSize: 40, color: '#363636' }} />
      </a>
    </div>
  </section>
);

export default AboutUs;
