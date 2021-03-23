import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectList from '../ProjectList';

function Portfolio({ currentCategory }) {
  const { name } = currentCategory;
  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}

export default Portfolio;