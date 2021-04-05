import React, { useState } from 'react';
import {
  DialogTitle, InputLabel,
  Select, Button,
  Dialog, DialogActions,
  DialogContent, MenuItem,
} from '@material-ui/core';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const Visibility = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const Options = styled(Select)`
    margin: 8px 32px;
`;

const Preferences = ({ open, handleClose }) => {
  const [filter, setFilter] = useState('all');
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose(filter)}
        keepMounted
        fullWidth
      >
        <DialogTitle>Preferences</DialogTitle>
        <DialogContent>
          <Visibility>
            <InputLabel id="label">Visibility</InputLabel>
            <Options
              labelId="label"
              id="select"
              value={filter}
              variant="outlined"
              onChange={(event) => setFilter(event.target.value)}
              fullWidth
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="public">Public</MenuItem>
              <MenuItem value="private">Private</MenuItem>
            </Options>
          </Visibility>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(filter)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Preferences.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
};

export default Preferences;
