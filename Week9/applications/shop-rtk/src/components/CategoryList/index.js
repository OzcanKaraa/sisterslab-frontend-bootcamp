import PropTypes from 'prop-types';

import {
  SelectMenu,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';

const CategoryList = ({ categories, handleCategoryClick }) => {
  return (
 
      <Stack direction="row" spacing={3}>
        <Stack
          direction="column"
        //{myComponentSyles}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Typography variant="h4" color="grey">
            Categories
          </Typography>
          <List component="nav">
            {categories.map((category) => (
              <ListItem key={category} disablePadding>
                <ListItemButton onClick={() => handleCategoryClick(category)}>
                  <ListItemText primary={category} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
 
  );
};

export default CategoryList;
