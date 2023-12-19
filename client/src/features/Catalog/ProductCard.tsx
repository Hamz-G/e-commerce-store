import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

interface Props {
    product: Product;

}


export default function ProductCard ({product}: Props) { 
    const [Loading, setLoading] = useState(false);

    function handleAddItem(productId: number) {
      setLoading (true);
      agent.Basket.addItem(productId)
          .catch(error=> console.log(error))
          .finally(()=> setLoading(false));
    }

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
        ₺{(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton 
                   loading={Loading} 
                   onClick={()=>handleAddItem(product.id)}                      
                   size="small">Sepete ekle
         </LoadingButton>

        <Button component={Link} to={`/Ürünler/${product.id}`} 
        size="small"> Ürünü Görüntüle
        </Button>

      </CardActions>
    </Card>
    )
}