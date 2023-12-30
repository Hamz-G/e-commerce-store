
import { useAppSelector } from '../../app/store/configureStore';
import { Typography, Grid } from '@mui/material';
import BasketTable from '../Basket/BasketTable';
import BasketSummary from '../Basket/BasketSummary';

export default function Review() {
  const { basket } = useAppSelector(state => state.basket);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Sipariş Özeti
      </Typography>
      {basket &&
        <BasketTable items={basket.items} isBasket={false} />}
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
        </Grid>
      </Grid>
    </>
  );
}