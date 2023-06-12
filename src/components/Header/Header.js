import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'grey', size: '4rem'  }}>
          <DiCssdeck size='4rem' color='grey'/> <Span> CoolDaddy Design</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href='#projects'>
          <NavLink size='4rem' color='grey'>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
    <SocialIcons href='https://github.com/gadgetboy27'>
      <AiFillGithub size='3rem' />
        </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/henry-peti-b57363102/'>
            <AiFillLinkedin size='3rem' />
            </SocialIcons>
          <SocialIcons href='https://www.instagram.com/iamgadgetboy/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
