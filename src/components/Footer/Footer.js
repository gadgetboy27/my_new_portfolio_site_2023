import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:6421853579'>64-21853579</LinkItem>
            </LinkColumn>
              <LinkColumn>
              <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:cooldaddydesign@gmail.com'>cooldaddydesign@gmail.com</LinkItem>
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
              <SocialIcons href='https://instagram.com'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
