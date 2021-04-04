import React from 'react';
import Lobby from 'components/Lobby';
import MessageInput from 'components/MessageInput';
import styled from 'styled-components';

import data from 'mocks/data.json';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const InnerWrapper = styled.div`
    width: 664px;
    // height: 100vh;
    // overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Messages = () => (
  <Wrapper>
    <InnerWrapper>
      <Lobby messages={data} />
      <MessageInput />
    </InnerWrapper>
  </Wrapper>
);

export default Messages;
