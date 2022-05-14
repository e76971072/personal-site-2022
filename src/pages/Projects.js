import React from 'react';
import { Link } from 'react-router-dom';
// import { fadeIn } from 'react-animations';
import Main from '../layouts/Main';
// import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import ActiveCard from '../ActiveCard';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Michael D'Angelo's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      <div style={{ width: '100%', margin: '0 auto', justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
        {data.map((project) => (
          // <Cell
          //   data={project}
          //   key={project.title}
          // >
		  <ul className='project-list'><li><ActiveCard className="box" data={project}> {project.title}</ActiveCard></li></ul>

          // </Cell>
        ))}
      </div>
    </article>
  </Main>
);

export default Projects;
