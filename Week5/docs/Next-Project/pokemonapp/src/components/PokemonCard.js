import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Skeleton } from "@mui/material";
import { useRouter } from "next/router";

export default function PokemonCard({
  imgSrc,
  name,
  stats,
  id,
  isClickable = true,
  isLoading = false,
}) {
  const router = useRouter();
  console.log(router);

  const handleOnClick = () => {
    if (isClickable) {
      window.open(`/characters/${id}`);
    }
  };

  return (
    <Card key={id} onClick={handleOnClick} sx={{ maxWidth: 345 }}>
      {isLoading ? ( // Yüklenirken iskelet görüntüsü
        <>
          <Skeleton animation="wave" variant="rectangular" height={140} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="p">
              <Skeleton animation="wave" height={20} width="80%" />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Skeleton animation="wave" height={15} width="60%" />
            </Typography>
          </CardContent>
        </>
      ) : (
        <>
          {isClickable ? (
            <CardActionArea>
              <CardMedia component="img" height="140" image={imgSrc} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="p">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stats}
                </Typography>
              </CardContent>
            </CardActionArea>
          ) : (
            <>
              <CardMedia component="img" height="140" image={imgSrc} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="p">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stats}
                </Typography>
              </CardContent>
            </>
          )}
        </>
      )}
    </Card>
  );
}
