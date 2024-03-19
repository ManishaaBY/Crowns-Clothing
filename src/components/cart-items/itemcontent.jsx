import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
// Styled components
export const ItemContent = styled('div')({
    display: 'flex',
    justifyItems: 'justify',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '8px',
});

export const ItemDetails = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

export const ItemButton = styled('div')({
    display: 'flex',
    marginLeft: '5px',
});

export const ItemImage = styled('img')({
    height: '50px',
    width: '50px',
    marginRight: '16px',
});

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '320px', 
    maxHeight: '300px', //scrolling
    overflowY: 'auto', 
}));
