import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lobby from 'components/Lobby';
import MessageInput from 'components/MessageInput';
import styled from 'styled-components';

import { fetchMessages, addMessage } from 'store/actions/messages';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const InnerWrapper = styled.div`
    width: 664px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Messages = () => {
  const dispatch = useDispatch();
  const messagesStore = useSelector(({ messages }) => messages);

  useEffect(() => {
    fetchMessages()(dispatch);
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <Lobby messages={messagesStore.data} />
        <MessageInput
          dispatchAddMessage={(msg) => addMessage(msg)(dispatch)}
          loading={messagesStore.addingMessage}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Messages;
