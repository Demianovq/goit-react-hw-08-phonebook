import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
export function Loginpage() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
