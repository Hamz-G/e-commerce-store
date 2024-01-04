import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { LoadingButton } from "@mui/lab";
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../Basket/basketSlice";

interface Props {
    product: Product;

}


export default function ProductCard ({product}: Props) { 
    const {status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
    

    return (
<Card>
        <CardHeader 

            avatar={
                <Avatar sx={{bgcolor: 'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            titleTypographyProps={{
                sx:{fontWeight:'bold', color: 'primary.main'}

            }}
        />
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}} //resimlerin boyutu
        image={product.pictureUrl}
        title={product.name}

      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
        {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton 
                   loading={status === 'pendingAddItem' + product.id} 
                   onClick={()=>dispatch(addBasketItemAsync({productId: product.id}))}               
                   size="small">Sepete ekle
         </LoadingButton>

        <Button component={Link} to={`/Ürünler/${product.id}`} 
        size="small"> Ürünü Görüntüle
        </Button>

      </CardActions>
    </Card>
    )
}