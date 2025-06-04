import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';

function App() {
  const [leases, setLeases] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/leases', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Box display={'flex'} flexDirection={'column'} flex={1}>
      <TextField placeholder={'Search Leases'} sx={{ width: '450px' }} />
    </Box>
  );
}

export default App;
