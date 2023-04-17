import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavBlock } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <NavBlock>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavBlock>
    </header>
  );
};
