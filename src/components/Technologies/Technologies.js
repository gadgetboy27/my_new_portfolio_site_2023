import React from 'react';
import { SiBitcoin, SiFigma, SiFlutter, SiEthereum } from "react-icons/si";
import { DiCss3Full, DiFirebase, DiHtml5, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <br />
      <SectionDivider/>
      <br />
        <SectionTitle>Technologies</SectionTitle>
          <SectionText>
            I've worked with a range of technologies in the web develpment 
            world. From Front-End to Back-End and everything in between.
          </SectionText>
          <List>
            <ListItem>
              <DiReact size='4rem' />
              <ListContainer>
                <ListContainer>
                  <ListTitle>Front-End</ListTitle>
                  <ListParagraph>
                    Experienced in <br />
                    React.js, Next.js
                  </ListParagraph>
                </ListContainer>
              </ListContainer>
            </ListItem>
            <ListItem>
              <DiFirebase size='4rem' />
              <ListContainer>
                <ListContainer>
                  <ListTitle>Back-End</ListTitle>
                  <ListParagraph>
                    Experienced in <br />
                    Node.js + Databases
                  </ListParagraph>
                </ListContainer>
              </ListContainer>
            </ListItem>
            <ListItem>
              <SiFigma size='4rem' />
              <ListContainer>
                <ListContainer>
                  <ListTitle>UI/UX</ListTitle>
                  <ListParagraph>
                    Experienced in <br />
                    tools like Figma
                  </ListParagraph>
                </ListContainer>
              </ListContainer>
            </ListItem>
            <ListItem>
              <SiEthereum size='4rem' />
              <ListContainer>
                <ListContainer>
                  <ListTitle>Web3</ListTitle>
                  <ListParagraph>
                    Experienced in <br />
                    Smart Contracts
                  </ListParagraph>
                </ListContainer>
              </ListContainer>
            </ListItem>
            <ListItem>
              <SiBitcoin size='4rem' />
              <ListContainer>
                <ListContainer>
                  <ListTitle>Crypto</ListTitle>
                  <ListParagraph>
                    Experienced in <br />
                    Web3 tools + Blockchain
                  </ListParagraph>
                </ListContainer>
              </ListContainer>
            </ListItem>
            <ListItem>
              <SiFlutter size='4rem' />
              <ListContainer>
                <ListContainer>
                  <ListTitle>Mobile</ListTitle>
                  <ListParagraph>
                    Experienced in <br />
                    tools like Flutter for Mobile
                  </ListParagraph>
                </ListContainer>
              </ListContainer>
            </ListItem>
          </List>
        </Section>
);

export default Technologies;
