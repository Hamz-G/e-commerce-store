import { Typography, Grid } from "@mui/material";
import { useFormContext } from 'react-hook-form';
import AppTextInput from '../../app/components/AppTextInput';
import AppCheckbox from '../../app/components/AppCheckBox';

export default function AddressForm() {
    const { control, formState } = useFormContext();
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Teslimat Adresi
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <AppTextInput control={control} name='fullName' label='Ad-Soyad' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput control={control} name='address1' label='1. Adres' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput control={control} name='address2' label='2. Adres' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='city' label='Sehir' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='state' label='Ilce' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='zip' label='Posta Kodu' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='country' label='Ulke' />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <AppCheckbox 
                    disabled={!formState.isDirty}
                    name='saveAddress' 
                    label='Adresi Kaydet' 
                    control={control} 
                />
            </Grid>
        </>
    );
}