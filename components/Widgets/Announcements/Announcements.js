import CoreNews from './CoreNews';
import RiskWarning from './RiskWarning';
import AboutUs from './AboutUs';

const Announcements = ({ announcement, children }) => (
  <div className='article'>
    <div className='article-docHeader'>
      <div className='article-docHeaderTitle'>{announcement.title}</div>
      <div className='article-docHeaderMeta'>
        <div className='article-author'>
          <div className='article-authorThumbnail'>
            <img src={announcement.author.thumbnail} alt='' />
          </div>
          <div>
            <div className='article-authorName'>{announcement.author.name}</div>
            <div className='article-timestamp mt-3'>{announcement.timestamp}</div>
          </div>
        </div>
        <div>
          <button type='button' className='article-followAuthorBtn'>
            Follow
          </button>
        </div>
      </div>
    </div>
    <div className='article-container'>
      <CoreNews news={announcement.news} />
      {children}
      <RiskWarning />
      <AboutUs />
    </div>
  </div>
);

export default Announcements;
