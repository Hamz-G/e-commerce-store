import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";


const midLinks=[
    {title:'Ürünler', path:'/Ürünler'},
    {title:'Hakkımızda', path:'/Hakkımızda'},
    {title:'İletişim', path:'/İletişim'},
]

const rightLinks=[
    {title:'Giriş', path:'/login'},
    {title:'Kayıt', path:'/register' },

]

const navStyles={
    color:'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover':{
        color: 'secondary.main'
    },
    '&.active':{
        color:'text.secondary'
    }
  }

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({handleThemeChange, darkMode}: Props) {
    const {basket} = useAppSelector(state => state.basket);
    const {user} = useAppSelector(state => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)
    return(
        <AppBar position = 'static' /*header ile ürünler arası boşluk -> */ sx={{mb:4}}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between',AlignItems: 'center'/*headerdaki sayfaların hizalanması */ }}> 

            <Box display='flex'alignItems='center'>
            <Typography variant='h6' component={NavLink} 
                to='/'
                sx={navStyles}

                >

                BagStash

                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} /*Karanlık mod*/ />
            </Box>

               
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path})=>(
                        <ListItem
                          component={NavLink}
                          to={path}
                          key={path}
                          sx={navStyles}      
                        >   
                           {title.toUpperCase()}

                        </ListItem>

                    ))}
                </List>

             <Box display='flex'alignItems='center'>   
                 <IconButton component={Link} to='/basket'  size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                        <Badge badgeContent={itemCount} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                        {user ? (
                            <SignedInMenu/>
                        ) : (
                            <List sx={{display: 'flex'}}>
                            {rightLinks.map(({title, path})=>(
                                <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}      
                                >   
                                {title.toUpperCase()}

                                </ListItem>

                            ))}
                        </List>
                    )}
                    </Box>       
            </Toolbar>
        </AppBar>
    )
}