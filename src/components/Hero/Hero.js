import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import  cooldaddy  from '../../../public/gadgetboy_label.jpeg';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>

      <SectionTitle main center>
        <Link legacyBehavior href='/'>
          <a style={{ display: 'flex', alignItems: 'left', color: 'grey', size: '3rem'  }}>
          <Image src={ cooldaddy } size='1.5rem' style={{ backgroundBlend: 'lighten', alignItems: 'left', color: 'grey', size: '3rem'  }} alt='cooldaddy logo'/> 
          </a>
        </Link>
      </SectionTitle>

          <SectionText>
            I thought instead of your usual personal portfolio 
            site i'd make this a site to showcase my work
            and what I can do for you. Hope you like it.
          </SectionText>
        <Button onClick={() => window.location ='https://gmail.com'}><a style={{ display: 'flex', alignItems: 'left', color: 'grey[200]', size: '3rem'  }}> Contact Me </a></Button>
    </LeftSection>
  </Section>
);

export default Hero;