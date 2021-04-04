import React, { useState } from 'react';
import {
  TextField, Button, FormControlLabel, Switch,
} from '@material-ui/core';
import styled from 'styled-components';
import { func } from 'prop-types';

const MessageForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Controls = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 16px 8px;
`;

const MessageInput = ({ dispatchAddMessage }) => {
  const [content, setContent] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const submitMessage = (event) => {
    event.preventDefault();

    const newMessage = { content, isPublic };
    dispatchAddMessage(newMessage);
  };
  return (
    <MessageForm onSubmit={submitMessage}>
      <TextField
        label="Message"
        placeholder="Add new message..."
        variant="outlined"
        onChange={(event) => setContent(event.target.value)}
        value={content}
        rows={5}
        multiline
        fullWidth
      />
      <Controls>
        <FormControlLabel
          control={(
            <Switch
              checked={isPublic}
              onChange={() => setIsPublic(!isPublic)}
              name="visibility"
              color="primary"
            />
        )}
          label="Public"
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </Controls>
    </MessageForm>
  );
};

MessageInput.propTypes = {
  dispatchAddMessage: func.isRequired,
};

export default MessageInput;
