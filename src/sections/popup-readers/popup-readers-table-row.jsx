import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import ReactionCell from './reaction-cell';

// ----------------------------------------------------------------------

export default function PopupReadersTableRow({ viewed_date, employee_name, reaction_type }) {
  return (
    <TableRow hover tabIndex={-1} role="checkbox">
      <TableCell component="th" scope="row" padding="none">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="subtitle2" noWrap>
            {viewed_date}
          </Typography>
        </Stack>
      </TableCell>

      <TableCell size="large">{employee_name}</TableCell>

      <ReactionCell reactionType={reaction_type} />
    </TableRow>
  );
}

PopupReadersTableRow.propTypes = {
  employee_name: PropTypes.any,
  viewed_date: PropTypes.any,
  reaction_type: PropTypes.string,
};
