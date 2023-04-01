import React from 'react';
import { Link } from 'react-router-dom';
// import { fadeIn } from 'react-animations';
import Main from '../layouts/Main';
// import Cell from '../components/Projects/Cell';
import data from '../data/fun';
import ActiveCard from '../ActiveCard';

const DownloadResume = () => (
	<Main
    	title="Projects"
    	description="Learn about Michael D'Angelo's projects."
  	>
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/downloadresume">PDF Version</Link></h2>
        </div>
      </header>
      <div style={{ width: '100%', margin: '0 auto', justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
	  <a href="https://drive.google.com/file/d/1v9n9tysqjWtQeWs_isY6WzTcKBY9nKGR/view?usp=share_link"  target="_blank"
	  		style={{ color: "blue", fontFamily: "sans-serif", fontWeight: "600"}} >
				📎 Download Resume
		</a>

      </div>
    </article>
  </Main>

)

export default DownloadResume;