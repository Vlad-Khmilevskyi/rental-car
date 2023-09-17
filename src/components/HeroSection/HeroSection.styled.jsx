import styled from '@emotion/styled';

export const ContentFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;

  gap: 20px;
  height: 100%;

  @media (min-width: 768px) {
    gap: 30px;
    width: 620px;
  }

  @media (min-width: 1440px) {
    width: 800px;
  }
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #5c5757;

  @media (min-width: 768px) {
    font-size: 58px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 86px;
    line-height: 1.2;
    font-weight: 900;
  }
`;

export const HeroText = styled.h2`
  color: #b0bbd6;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: black;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 1.6;
  }
`;