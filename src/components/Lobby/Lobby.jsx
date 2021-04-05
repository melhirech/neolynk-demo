import React, { useState } from 'react';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import {
  IconButton, List, Divider, CircularProgress,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import Message from 'components/Message';
import Preferences from 'components/Preferences';

const LobbyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Messages = styled(List)`
  width: 100%;
`;

const Lobby = ({ messages }) => {
  const [isOpen, openPreferences] = useState(false);

  return (
    <LobbyWrapper>
      <Header>
        <Title>Messages:</Title>
        <IconButton
          color="primary"
          component="span"
          onClick={() => openPreferences(true)}
        >
          Settings
          <SettingsIcon />
        </IconButton>
      </Header>
      <Preferences open={isOpen} handleClose={() => openPreferences(false)} />
      <MessagesWrapper>
        {
        messages.fetchingMessages && <CircularProgress />
      }
        {!messages.fetchingMessages && (
        <Messages>
          {messages.map((messageData) => (
            <div key={messageData.id}>
              <Message message={messageData} />
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </Messages>
        )}
      </MessagesWrapper>
    </LobbyWrapper>
  );
};

Lobby.propTypes = {
  messages: arrayOf(shape({})).isRequired,
};

export default Lobby;
