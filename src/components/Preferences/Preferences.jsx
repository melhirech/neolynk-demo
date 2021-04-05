import React from 'react';
import {
  DialogTitle, InputLabel,
  Select, Button,
  Dialog, DialogActions,
  DialogContent, MenuItem, Slide,
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

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const Preferences = ({ open, handleClose }) => (
  <div>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
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
            value="all"
            variant="outlined"
            fullWidth
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="public">Public</MenuItem>
            <MenuItem value="private">Private</MenuItem>
          </Options>
        </Visibility>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

Preferences.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
};

export default Preferences;
