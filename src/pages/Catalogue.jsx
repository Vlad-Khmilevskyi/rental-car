import React from 'react';
import Container from 'components/Container/Container';
import { FilterSection } from 'components/FilterSection/FilterSection';

const Catalogue = ({ data }) => {
  return (
    <>
      <Container>
        <FilterSection data={data} />
      </Container>
    </>
  );
};

export default Catalogue;
