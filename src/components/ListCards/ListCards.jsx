import React from 'react';
import Card from '../Card/Card';
import { SectionContainer, List, ListItem } from './ListCards.styled';

const CarList = ({ rentalCars }) => {
  return (
    <SectionContainer>
      <List>
        {rentalCars.map(rentalCar => (
          <ListItem key={rentalCar.id}>
            <Card
              model={rentalCar.model}
              make={rentalCar.make}
              year={rentalCar.year}
              rentalPrice={rentalCar.rentalPrice}
              isFavorite={rentalCar.isFavorite}
              address={rentalCar.address}
              rentalCompany={rentalCar.rentalCompany}
              functionalities={rentalCar.functionalities}
              id={rentalCar.id}
              type={rentalCar.type}
              img={rentalCar?.img}
              fuelConsumption={rentalCar.fuelConsumption}
              engineSize={rentalCar.engineSize}
              description={rentalCar.description}
              accessories={rentalCar.accessories}
              rentalConditions={rentalCar.rentalConditions}
              mileage={rentalCar.mileage}
            />
          </ListItem>
        ))}
      </List>
    </SectionContainer>
  );
};

export default CarList;
