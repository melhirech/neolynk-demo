import React from 'react';
import { shape, string } from 'prop-types'; import {
  ListItem, ListItemAvatar, Avatar, ListItemText,
} from '@material-ui/core';
import styled from 'styled-components';
import moment from 'moment';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Time = styled.span`
  color: grey;
  font-size: 0.8em;
`;

const Message = ({ message }) => {
  const {
    content, name, picture, timestamp,
  } = message;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Avatar" src={picture} />
      </ListItemAvatar>
      <ListItemText
        primary={(
          <Header>
            <p>{name}</p>
            <Time>{moment(timestamp).fromNow()}</Time>
          </Header>
        )}
        secondary={content}
      />
    </ListItem>
  );
};

Message.propTypes = {
  message: shape({
    content: string,
  }).isRequired,
};

export default Message;
