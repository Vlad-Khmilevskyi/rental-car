import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { AiOutlineCar } from 'react-icons/ai';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const NavList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavBlock = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 30px;
  }

  @media (min-width: 1440px) {
    gap: 30px;
  }
`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: flex;
  font-family: 'Montserrat', sans-serif;

  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  &.active,
  &:hover,
  &:focus {
    color: #dd2a2a;

    svg {
      fill: white;
      border: 3px solid #fff;
      box-shadow: rgb(188 221 244) 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const HomeIcon = styled(AiOutlineCar)`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 10px;

  fill: #e1dada;
  border-radius: 50%;
  border: 3px solid #cf5858;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
