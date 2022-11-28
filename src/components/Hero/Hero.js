import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import  cooldaddy  from '../../../public/cooldaddy pixelated.png';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>

      <Link legacyBehavior href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', size: '3rem'  }}>
        <Image src={cooldaddy} size='1rem' /> 
        </a>
      </Link>
        
        </SectionTitle>
          <SectionText>
            I thought instead of your usual personal portfolio 
            site i'd make this a site to showcase my work
            and what I can do for you. Hope you like it.
          </SectionText>
        <Button onClick={() => window.location ='https://google.com'}>Let's Get Started </Button>
    </LeftSection>
  </Section>
);

export default Hero;