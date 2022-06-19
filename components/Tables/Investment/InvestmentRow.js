import { memo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const InvestmentRow = memo(({ item }) => (
  <tr>
    <td className='responsive-hide'>#{item.status}</td>
    <td className='responsive-hide'>{item.apy}</td>
    <td>{item.d_apr}</td>
    <td className='nowrap'>{item.r_method}</td>
    <td className='nowrap'>
      <strong>{item.min_purchase}</strong>
    </td>
    <td>
      <div className='box-button box-vertical-padding box-horizontal-padding'>
        <Link href='/exchange' className='button button-green button-medium button-block'>
          Missed
        </Link>
      </div>
    </td>
  </tr>
));

InvestmentRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default InvestmentRow;
