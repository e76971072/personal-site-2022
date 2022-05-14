/* eslint-disable eol-last */
/* eslint-disable-line no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './static/css/ActiveBox.css';
import Fade from 'react-reveal/Fade';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MediaCard({ data }) {
  return (
    <Fade bottom>
      <Card className="box" sx={{ width:  400, height: 400, borderRadius: '15px', padding: 0 }}>
        <CardMedia
          component="img"
          height="400"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ width: 'auto', height: 100 }} >
            {data.desc}
			<a href={'https://github.com/e76971072'}>
          		<FontAwesomeIcon icon={faGithub} />
        	</a>
          </Typography>
        </CardContent>
      </Card>
    </Fade>

  );
}

MediaCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};