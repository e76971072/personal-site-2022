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
import SendIcon from '@mui/icons-material/Send';

export default function MediaCard({ data, disabled }) {
		if (disabled == false) {
			return (<Fade big>
				<Card className="box" sx={{ width:  400, height: 500, borderRadius: '15px', padding: 0, background:'rbg(255,255,255)' }}>
				  <CardMedia
					component="img"
					height="400"
					image={data.image}
					alt="green iguana"
				  />
				  <CardContent sx={{ width: 'auto', margin: 2 }}>
					<Typography gutterBottom variant="h5" component="div">
					  {data.title}
					</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ width: 'auto', height: 'auto' }} >
					  {data.desc}<br/>

					</Typography>
					<Typography gutterBottom variant="h2" component="div">
					<Button variant="outlined" style= {{ borderRadius: "5px", height: "auto"}} href={data.link} endIcon={<SendIcon />} target="_blank">
        				Learn More 🔗
      				</Button>
					</Typography>

				  </CardContent>

				</Card>
			  </Fade>
			  );
		}
		else {
			return (
			<Fade big>
				<Card className="box" sx={{ width:  400, height:'auto', borderRadius: '15px', padding: 0 }}>
				  <CardMedia
					component="img"
					height="400"
					image={data.image}
					alt="green iguana"
				  />
				   </Card>
			  </Fade>)
		}
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