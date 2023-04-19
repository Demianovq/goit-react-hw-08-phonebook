import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { RegInput, RegField, RegForm, RegBtn } from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <RegField>
        <RegInput type="text" name="name" placeholder="Your UserName" />
      </RegField>
      <RegField>
        <RegInput type="email" name="email" placeholder="Your Email" />
      </RegField>
      <RegField>
        <RegInput type="password" name="password" placeholder="Your Password" />
      </RegField>
      <RegBtn type="submit">Register</RegBtn>
    </RegForm>
  );
};
