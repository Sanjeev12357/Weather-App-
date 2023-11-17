import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./info.css";

export default function InfoBox({info}){

    

    return (
        <div className='info'>
        <div className='container'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Temperature={info.temp}&deg</p>
          <p>Humidity={info.humidity}</p>
          <p>Min temp={info.tempMin}</p>
          <p>Max temp={info.tempMax}</p>
          <p>The weather feels like {info.weather}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    )
}