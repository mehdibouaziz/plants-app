import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App';
import recipes from "../data/plantsList.json";

import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';


import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import DiningIcon from '@mui/icons-material/Dining';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const Plant = (props) => {
  const { setDisplayRecipe } = useContext(AppContext);

  const recipeCatalog = JSON.parse(JSON.stringify(recipes))[props.name]

  const handleClose = () => {
    setDisplayRecipe(false)
    return
  }

  const denseListStyle = {'& .MuiListItem-dense': {
      paddingTop: '2px',
      paddingBottom: {xs: '5px', sm:'8px'}
      },
      '& .MuiListItemText-dense': {
      marginTop: '0px',
      marginBottom: '0px',
      }
    }
  const sectionNameStyle = {
    fontSize: {xs: '1.3em', sm:'1.7em'},
    textAlign: 'left',
    fontFamily: "'Patrick Hand', cursive",
    marginTop: '10px',
    marginBottom: '0px',
  }

  return (
    
      <Box id='recipeDisplay'
        sx={{
        // position: 'fixed',
        // top: 0,
        // left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'flex-row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'background.default',
      }}>
        <IconButton onClick={handleClose} sx={{
          position: 'fixed',
          top: {xs: '60px', sm:'85px'},
          right: {xs: '5px', sm:'5vw'},
        }}>
          <CloseIcon />
        </IconButton>

        <Grid container spacing={1} sx={{
          marginTop: {xs: '70px', sm:'85px'},
          marginBottom: {xs: '70px', sm:'85px'},
          width: {xs: '90%', sm:'80%', md: '70%', lg: '40%'}
        }}>

          <Grid item xs={12}>
            <Typography gutterBottom variant="h2" component="div" sx={{
              fontSize: {xs: '1.5em', sm:'2.5em'},
              textAlign: 'center',
              margin: 0,
              fontFamily: "'Patrick Hand', cursive",
            }}>
              {recipeCatalog.name}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom variant="body" component="div" sx={{
              fontSize: {xs: '0.9em', sm:'1em'},
              padding: 0,
              margin: 0,
              textAlign: 'center',
              fontFamily: "'Roboto', cursive",
              fontStyle: 'italic'
            }}>
              {recipeCatalog.sci_name} <Link href={recipeCatalog.url} target='_blank'><OpenInNewIcon sx={{ fontSize: 18 }} /></Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{marginBottom: {xs:'10px', sm:'20px'}}}>
            <Stack direction="row" spacing={0} justifyContent='center'>
              <img src={recipeCatalog.img} alt={"cooked " + recipeCatalog.name} style={{maxHeight: '350px', maxWidth: '100%'}}></img>
              </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography gutterBottom variant="h3" component="div" sx={sectionNameStyle}>
              Recap
              </Typography>
                <List dense={true}  sx={denseListStyle}>
                  {}
                </List>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography gutterBottom variant="h3" component="div" sx={sectionNameStyle}>
              Watering
            </Typography>
            <List dense={true} sx={denseListStyle}>
              {recipeCatalog.watering}
            </List>
            <Typography gutterBottom variant="h3" component="div" sx={sectionNameStyle}>
              Light
            </Typography>
            <List dense={true} sx={denseListStyle}>
              {recipeCatalog.light}
            </List>
          </Grid>
          
          
        </Grid>

      </Box>
    
  )
}

export default Plant