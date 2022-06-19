import { memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NavbarButton = memo(({ url, icon, title }) => {
  const router = useRouter();

  return (
    <Link href={url}>
      <span
        className={router.pathname.toLowerCase().includes(url) ? 'active nowrap' : 'passive nowrap'}
      >
        <i className='material-icons'>{icon}</i>
        <span>{title}</span>
      </span>
    </Link>
  );
});

NavbarButton.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavbarButton;
