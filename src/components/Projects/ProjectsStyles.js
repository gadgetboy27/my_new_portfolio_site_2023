import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #3944BC;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`

export const SecondaryBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 9px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 10px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  color: #fff;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`
