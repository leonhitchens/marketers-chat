import React, { Component } from 'react';
import styled from 'styled-components';
import { white, gray, blue } from '../utils/colors';

const CreatedByContainer = styled.div`
  background-color: ${white};
  border-top: 2px solid #eee;
  border-left: 2px solid #eee;
  border-top-left-radius: 8px;
  bottom: 0;
  position: fixed;
  padding: 16px 24px;
  right: 0;

  a {
    color: black;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

class CreatedBy extends Component {
  render() {
    return (
      <CreatedByContainer>
        Created by <a href="https://twitter.com/leonhitchens" target="_blank" rel="noopener noreferrer">@leonhitchens</a>
      </CreatedByContainer>
    );
  }
}

export default CreatedBy;
