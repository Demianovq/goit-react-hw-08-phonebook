import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export function Registerpage() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm />
    </div>
  );
}
