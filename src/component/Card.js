import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({img, name, gitLink, siteLink, tools}) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, marginTop: 3 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <span className="font-bold text-black">Tools  Used: </span>
          {tools}
        </Typography>
      </CardContent>
      <CardActions>
      <a href={gitLink}><Button size="small">GitHub</Button></a>
      <a href={siteLink}><Button size="small">Live Link</Button></a>

      </CardActions>
    </Card>
  );
}
