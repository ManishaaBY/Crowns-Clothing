import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import './index.css';

export const GridItem = ({ image, alt, title, link, size }) => {
    const navigate = useNavigate()
    return (
        <Grid item xs={12} sm={6} lg={size}>
            <div className="container" onClick={() => navigate(link)}>
                <img src={image} alt={alt} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className={`text-block text-block-${title.toLowerCase()}`}>
                    <h3 style={{ fontFamily: 'Bigelow Rules' }}>{title.toUpperCase()}</h3>
                    <p>SHOP NOW</p>
                </div>
            </div>
        </Grid>
    );
}