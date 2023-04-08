export default function login_validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6 || values.password.length > 20) {
    errors.password = 'Password must be between 6 and 20 characters';
  } else if (values.password.includes(' ')){
    errors.password = 'Password must not contain spaces';
  }

  return errors;
}

export function registerValidate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.includes(' ')) {
    errors.username = 'Username must not contain spaces';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6 || values.password.length > 20) {
    errors.password = 'Password must be between 6 and 20 characters';
  } else if (values.password.includes(' ')) {
    errors.password = 'Password must not contain spaces';
  }

  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.cpassword !== values.password) {
    errors.cpassword = 'Passwords do not match';
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = 'Password must not contain spaces';
  }

  return errors;
}
