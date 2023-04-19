import { useAuth } from 'hooks/useAuth';
import { StyledLink, NavStyledBlock } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavStyledBlock>
        <StyledLink to="/">Home</StyledLink>

        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </NavStyledBlock>
    </nav>
  );
};
