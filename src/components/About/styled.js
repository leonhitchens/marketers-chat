import styled from 'styled-components';
import { mediumBp } from '../../utils/breakpoints';

export const Container = styled.div`
  margin: 60px auto;
  max-width: 600px;
  padding: 0 16px;
  width: 100%;

  @media (min-width: ${mediumBp}px){
    margin: 100px auto;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75) inset;
  display: block;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  margin-top: 24px;
  font-size: 16px;
  line-height: 24px;
`;

export const SocialList = styled.ul`
  display: block;
  list-style: none;
  margin: 20px auto;
  padding-left: 0;
  width: 82px;
  
  li {
    display: inline;
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    color: black;
  }
`;