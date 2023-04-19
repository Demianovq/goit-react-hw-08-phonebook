import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  RegInput,
  RegField,
  RegForm,
  RegBtn,
} from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <RegField>
        <RegInput
          type="email"
          name="email"
          placeholder="Please enter your Email "
        />
      </RegField>
      <RegField>
        <RegInput
          type="password"
          name="password"
          placeholder="Please enter your Password "
        />
      </RegField>
      <RegBtn type="submit">Log In</RegBtn>
    </RegForm>
  );
};
