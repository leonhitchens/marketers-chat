import React, { Component } from 'react';

import {
  Container,
  Avatar,
  Paragraph,
  SocialList
} from './styled'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


class About extends Component {
  render() {
    return (
     <Container>
       <Avatar src="../leon.jpg" alt="Picture of the great, amazing, Leon Hitchens" />
       <SocialList>
         <li>
           <a href="https://twitter.com/leonhitchens">
              <FontAwesomeIcon icon={faTwitter} /> 
            </a>
         </li>
         <li>
           <a href="https://www.facebook.com/leonhitchens/">
              <FontAwesomeIcon icon={faFacebook} /> 
            </a>
         </li>
         <li>
           <a href="https://www.instagram.com/leonhitchens/">
              <FontAwesomeIcon icon={faInstagram} /> 
            </a>
         </li>
         <li>
           <a href="https://www.leonhitchens.com">
              <FontAwesomeIcon icon={faGlobe} /> 
            </a>
         </li>
       </SocialList>
       <Paragraph>
        Hi 👋 My name is Leon Hitchens. I am a digital marketer with experience with search engine optimization, Google Ads, Facebook Ads, content marketing, and WordPress.
        <br/><br/>
        During my day job ☀️ - I work with small business and startups to form a marketing strategy to grow their businesses. On the side, I co-founded IronMic - a startup developing automated websites for podcasts. I lead up the marketing effort for the service from customer out reach to demand generation.
        <br/><br/>
        I am always connecting with indie marketers who want to not only network but talk shop with like minded folks. They always mention how they hate the growth hacker or the slimy used car sale-man types. The type of marketers who follow 200,000 people on Twitter are people we are trying to avoid.
       </Paragraph>
     </Container>
    );
  }
}

export default About;
