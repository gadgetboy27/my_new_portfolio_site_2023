import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:iamgadgetboy@gmail.com'>iamgadgetboy@gmail.com</LinkItem>
            </LinkColumn>
              <LinkColumn>
              <LinkTitle></LinkTitle>
            <LinkItem href=''></LinkItem>
          </LinkColumn>
        </LinkList>
      <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>I Can't Wait To See What I can Do For You!</Slogan>
        </CompanyContainer>
          <SocialContainer>
          <SocialIcons href='https://github.com/gadgetboy27'>
            <AiFillGithub size='3rem' />
             </SocialIcons>
              <SocialIcons href='https://www.linkedin.com/in/henry-peti-b57363102/'>
              <AiFillLinkedin size='3rem' />
              </SocialIcons>
              <SocialIcons href='https://www.instagram.com/iamgadgetboy/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
