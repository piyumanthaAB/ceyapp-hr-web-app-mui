import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@mui/material/TableCell';

import Iconify from 'src/components/iconify';

const ReactionCell = ({ reactionType }) => {
  const renderIcon = () => {
    switch (reactionType) {
      case 'like':
        return (
          <Iconify icon="eva:thumbs-up-fill" width={24} height={24} style={{ color: 'yellow' }} />
        );
      case 'heart':
        return <Iconify icon="eva:heart-fill" width={24} height={24} style={{ color: 'red' }} />;
      case 'dislike':
        return (
          <Iconify icon="eva:thumbs-down-fill" width={24} height={24} style={{ color: 'yellow' }} />
        );
      default:
        return null;
    }
  };

  return <TableCell>{renderIcon()}</TableCell>;
};

ReactionCell.propTypes = {
  reactionType: PropTypes.string.isRequired,
};

export default ReactionCell;
