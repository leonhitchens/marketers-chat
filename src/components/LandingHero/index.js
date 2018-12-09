import React, { Component } from 'react';
import { TwitterFollowButton } from 'react-twitter-embed';
import Logo from '../Logo';
import CreatedBy from '../CreatedBy';
import axios from 'axios';



import {
  HeroContainer,
  HeroLeft,
  HeroRight,
  LogoContainer,
  ContentContainer,
  ContentTitle,
  ContentList,
  ContentListItem,
  Makerlog,
  FormLabel,
  FormInputGroup,
  FormStyle,
  ContentParagraph,
  TwitterContainer,
  LogoSubtitle
} from './styled'

import {
  FormField,
  FormButton
} from '../FormElements';

class LandingHero extends Component {

  state = {
    email: '',
    success: false
  }

  SLACK_TOKEN = 'xoxp-493115201875-492480151920-500432971399-71c082af0972a68572932685e09958d2';
  SLACK_INVITE_ENDPOINT = 'https://slack.com/api/users.admin.invite';

  inviteToSlack = (event) => {
    event.preventDefault();
    const params = `email=${this.state.email}&token=${this.SLACK_TOKEN}&set_active=true`;

    axios.get(`${this.SLACK_INVITE_ENDPOINT}?${params}`)
      .then(
        this.setState({
          success: true
        })
      )
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }


  render() {
    const { success } = this.state;
    return (
      <HeroContainer>
        <HeroLeft>
          <ContentContainer>
            <LogoContainer>
              <Logo white />
            </LogoContainer>
            <LogoSubtitle>
            Marketers Chat is for the indie marketer. No BS here!
            </LogoSubtitle>
            <ContentTitle>
              Who can join:
            </ContentTitle>
            <ContentList>
              <ContentListItem>
                Any marketer who is freelancing or working with a startup or small business.
              </ContentListItem>
              <ContentListItem>
                Any marketer who is not following 200,000 people on Twitter.
              </ContentListItem>
              <ContentListItem>
                Any marketer who wants to share ideas and learn from a group of like minded folks!
              </ContentListItem>
              <ContentListItem>
                Any marketer who needs help. We all have experience and can help you with a problem in realtime
              </ContentListItem>
            </ContentList>
          </ContentContainer>
        </HeroLeft>
        <HeroRight>
          <ContentContainer>
            {!success ? (
            <form onSubmit={this.inviteToSlack}>
              <FormField type="text" name="email" onChange={this.handleChange} placeholder="Email"/>
              <FormButton type="submit" value="Submit"/>
            </form>
            ) : ( 
              <div>
                <strong>Your email is on it's way!</strong>
              </div>
            )}
            <ContentParagraph>
              Enter your email and we'll instantly send you an invitation to the Marketers Chat Slack Group!
            </ContentParagraph>
          </ContentContainer>
        </HeroRight>
        <CreatedBy>
          Created by <a href="https://twitter.com/leonhitchens" target="_blank" rel="noopener noreferrer">@leonhitchens</a>
        </CreatedBy>
      </HeroContainer>
    );
  }
}

export default LandingHero;
