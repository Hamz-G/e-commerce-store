import { useFormContext } from 'react-hook-form';
import AppTextInput from '../../app/components/AppTextInput';
import { Typography, Grid, TextField, FormControlLabel, Checkbox } from '@mui/material';

export default function PaymentForm() {
  const {control} = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AppTextInput 
            name='nameOnCard'
            label='Karttaki adınız'
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            // required
            id="cardNumber"
            label="Kart Numaranız"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            // required
            id="expDate"
            label="Son Kullanma Tarihi"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            // required
            id="cvv"
            label="CVV"
            helperText="Arka Yüzdeki 3 numara"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Kartı Kaydet"
          />
        </Grid>
      </Grid>
    </>
  );
}