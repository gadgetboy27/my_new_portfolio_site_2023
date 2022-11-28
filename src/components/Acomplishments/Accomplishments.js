import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 20, text: 'Contacts Per Month'},
  { number: 100, text: 'GitHub Projects Built' },
  { number: 190, text: 'Github Followers', },
  { number: 1000, text: 'Ideas To Build Maybe Even Yours', }
];

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
