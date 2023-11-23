import { Card,Grid } from '@mui/material';
import { axios } from 'axios';
import { useEffect,useState } from 'react';


const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log("error :>> ", error));
  }, []);

  return;

  <Grid container spacing={2}>
    {books.map((book) => (
      <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWith: 345 }}>
        <CardActionArea companent='img' height='140' image={book.imageUrl ?? ''}
        </Card>
      </Grid>
      //  <Link href= {`/books`}>
      //Grid ile sayfa size gore response olarak gosterme  xs={12} sm={6} md={4} lg={3} Grid 12 xs=1 sm 2 md 3 lg 4 tane kart gosterir.
    ))}
  </Grid>;
};
export default Home;


{/* <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea> */}