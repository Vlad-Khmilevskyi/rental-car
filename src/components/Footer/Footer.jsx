import React from 'react'
import Container from 'components/Container/Container'
import {
  FooterSection, ContactsUs, ContactWrapper, ContactsText, TelIcon, EmailIcon
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
          <ContactWrapper>
            <ContactsUs>Contact Us</ContactsUs>
            <ContactsText><TelIcon/> +38 (022) 332 22 23</ContactsText>
            <ContactsText><EmailIcon/> RentalCars@gmail.com</ContactsText>
          </ContactWrapper>
      </Container>
    </FooterSection>
  )
}

export default Footer
