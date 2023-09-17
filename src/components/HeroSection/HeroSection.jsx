import React from 'react';
import {
  ContentFlex,
  HeroTitle,
  HeroText
} from './HeroSection.styled';

const HeroSection = () => {
  return (
    <ContentFlex>
      <HeroTitle>Rental cars</HeroTitle>
      <HeroText>
        We are a modern company that offers a wide range of cars for rent of any class and for every taste. Our goal is to provide our customers with convenience, comfort and reliability at every kilometer of your trip
      </HeroText>
    </ContentFlex>
  );
};

export default HeroSection;
