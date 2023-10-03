import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  adres: '',
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('verplicht'),
  lastName: yup.string().required('verplicht'),
  email: yup.string().email('Geen geldige email').required('verplicht'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Telefoonnummer is niet geldig')
    .required('verplicht'),
  adres1: yup.string().required('verplicht'),
  adres2: yup.string().required('verplicht'),
});

const Form = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const HandleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header
        title="NIEUWE GEBRUIKER"
        subtitle="Maak een nieuwe gebruiker aan."
      />
      <Formik
        onSubmit={HandleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Voornaam"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="achternaam"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact nummer"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Adres"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adres1}
                name="adres1"
                error={!!touched.adres1 && !!errors.adres1}
                helperText={touched.adres1 && errors.adres1}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Gebruiker aanmaken
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
