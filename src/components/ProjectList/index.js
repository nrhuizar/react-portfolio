import React, { useState } from 'react';
// import Portfolio from '../Portfolio';

const ProjectList = ({ category }) => {
  const [projects] = useState([
    {
      name: 'myCipe',
      category: "portfolio",
      link: 'https://mycipeteam.herokuapp.com/',
      repository: 'https://github.com/naomiilang/myCipe',
    },
    {
      name: 'The Dog Spot',
      category: "portfolio",
      link: 'https://nrhuizar.github.io/The-Pet-Rescuer/',
      repository: 'https://nrhuizar.github.io/The-Pet-Rescuer/',
    },
    {
      name: 'Forma Fortis',
      category: "portfolio",
      link: 'https://formafortis.com/',
      repository: '',
    },
    {
      name: 'First Portfolio',
      category: "portfolio",
      link: 'https://sleepy-depths-32930.herokuapp.com/',
      repository: 'https://github.com/nrhuizar/personal-portfolio',
    },
    {
      name: 'MyLitics',
      category: "portfolio",
      link: 'https://github.com/XXLZopes/Project-3',
      repository: 'https://github.com/XXLZopes/Project-3',
    },
    {
      name: 'Zoo Keepr',
      category: "portfolio",
      link: 'https://nrhuizar-zookeepr.herokuapp.com/',
      repository: 'https://github.com/nrhuizar/zookeepr',
    },
    {
      name: 'Resume Page 1',
      category: "resume",
      link: 'https://www.linkedin.com/in/nick-huizar',
      repository: '',
    },
    {
      name: 'Resume Page 2',
      category: "resume",
      link: '',
      repository: '',
    },
  ]);

  const currentProjects = projects.filter((project) => project.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
            link={image.link}
            repository={image.repository}
          />
          
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
