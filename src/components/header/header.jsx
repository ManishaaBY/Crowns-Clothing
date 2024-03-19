import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import MenuListComposition from '../cart-items';

export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <AppBar position="static" style={{ backgroundColor: "white", color: "black" }}>
            <Toolbar>
                <img src="favicon.ico" alt="Logo" style={{ marginRight: '10px' }} />
                <div style={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="div" textAlign="center" fontFamily="Lucida Handwriting, cursive">
                        CROWN'S CLOTHING
                    </Typography>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
                        <IconButton color="inherit" onClick={() => navigate('/shop')}>
                            <Typography variant="h6" component="div" textAlign="center" fontFamily="Lucida Handwriting, cursive">
                                SHOP
                            </Typography>
                        </IconButton>
                        <IconButton color="inherit" onClick={() => navigate('/contact')}>
                            <Typography variant="h6" component="div" textAlign="center" fontFamily="Lucida Handwriting, cursive">
                                CONTACT
                            </Typography>
                        </IconButton>
                        <IconButton color="#000000" onClick={() => navigate('/sign_up')}>
                            <Typography variant="h6" component="div" textAlign="center" fontFamily="Lucida Handwriting, cursive" color="black">
                                SIGN IN
                            </Typography>
                        </IconButton>
                        <MenuListComposition />
                    </Grid>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
