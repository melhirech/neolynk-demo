import React from 'react';
import {
  TextField, Button, FormControlLabel, Switch,
} from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Controls = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 16px 8px;
`;

const MessageInput = () => (
  <Wrapper>
    <TextField
      label="Message"
      placeholder="Add new message..."
      variant="outlined"
      rows={5}
      multiline
      fullWidth
    />
    <Controls>
      <FormControlLabel
        control={(
          <Switch
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        )}
        label="Public"
      />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </Controls>
  </Wrapper>
);

export default MessageInput;
