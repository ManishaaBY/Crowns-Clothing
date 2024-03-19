import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import hatsImage from '../../asserts/images/hats.png';
import jacketsImage from '../../asserts/images/jackets.png';
import sneakersImage from '../../asserts/images/sneakers.png';
import womenImage from '../../asserts/images/womens.png';
import menImage from '../../asserts/images/men.png';
import { GridItem } from './gridItem';


export const Home = () => {

    return (
        <Box alignContent={'center'} sx={{ border: '2px solid grey' }}>
            <div className="first_row" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" marginTop={'20px'} marginBottom={'20px'}>
                    <GridItem image={hatsImage} alt="hatImage" title="HATS" link="/hats" size={4} />
                    <GridItem image={jacketsImage} alt="jacketsImage" title="JACKETS" link="/jackets" size={4} />
                    <GridItem image={sneakersImage} alt="sneakerImage" title="SNEAKERS" link="/sneakers" size={4} />
                </Grid>
            </div>
            <div className="second_row" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" marginTop={'20px'} marginBottom={'20px'}>
                    <GridItem image={womenImage} alt="womenImage" title="WOMEN" link="/women" size={6} />
                    <GridItem image={menImage} alt="menImage" title="MEN" link="/mens" size={6} />
                </Grid>
            </div>
        </Box>
    );
}

export default Home;
