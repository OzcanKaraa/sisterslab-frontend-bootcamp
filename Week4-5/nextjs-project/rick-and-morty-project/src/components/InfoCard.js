import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const InfoCard = ({
  character, //karakter geldiginde verileri gosterir.
  handleFavoriteToggle,
  isFavorite,
  handleClick,
  loading,
}) => {
  return (
    <Card key={character.id} sx={{ width: "150px" }}>
      {loading ? (
        // true ?
        <Skeleton
          variant="rectangular"
          animation="wawe"
          width={300}
          height={150}
        />
      ) : (
        //skeleton calismasi icin true olmasi gerekiyor.
        <CardMedia //false oldugunda render olur.
          component="img"
          alt="character"
          height="140"
          image={character.image}
        />
      )}

      <CardContent>
        {loading ? (
          //true?
          <Skeleton width="80%" />
        ) : (
          <Typography variant="h5" component="div">
            {character.name}
          </Typography>
        )}

        {loading ? (
          //true ?
          <Skeleton width="60%" /> //true ise
        ) : (
          <Typography variant="body2" color="text.secondary">
            {character.gender} {character.status}
          </Typography>
        )}
      </CardContent>

      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handleFavoriteToggle(character.id)}
        >
          {loading ? (
            <Skeleton varıant="circular" />
          ) : (
            <FavoriteIcon
              color={isFavorite(character.id) ? "error" : "disabled"}
            />
          )}
        </IconButton>

        <Button
          size="small"
          variant="text"
          onClick={() => handleClick(character.id)}
        >
          {loading ? (
            //  true?
            <Skeleton width="100px" />
          ) : (
            "Learn More"
          )}
        </Button>
      </CardActions>
    </Card>
  );
};

InfoCard.propTypes = {
  character: PropTypes.object.isRequired,
  handleFavoriteToggle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.func.isRequired,
  loading: PropTypes.bool, //true - false
};

InfoCard.defaultProps = {
  character: {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
};

export default InfoCard;
