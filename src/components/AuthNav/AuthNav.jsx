import { AuthNavBlock } from './AuthNav.styled';
import { StyledLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <AuthNavBlock>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </AuthNavBlock>
  );
};
