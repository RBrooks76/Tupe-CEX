import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import moment from 'moment';

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([moment().subtract(30, 'days'), moment()]);

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <DateRangePicker
        startText='Start'
        endText='End'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            {/* eslint-disable react/jsx-props-no-spreading */}
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
            {/* eslint-enable react/jsx-props-no-spreading */}
          </>
        )}
      />
    </LocalizationProvider>
  );
}
