import * as yup from 'yup';
console.log(yup);
const validations = yup.object().shape({
  email: yup.string().email().required('required'),
  password : yup.string().min(6).required('required'),
  passwordConfirm :yup.string().oneOf([yup.ref('password')]).required('required'),
});

export default validations