import { Route, Routes } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout';
import { Homepage } from '../pages/Homepage';
import { Registerpage } from '../pages/Registerpage';
import { Loginpage } from '../pages/Loginpage';
import { Contactspage } from '../pages/Contactspage';
import { refreshUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import { Loader } from './Loader/Loader';
import { selectIsLoading } from 'redux/contacts/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route
                path="contacts"
                element={<PrivateRoute component={<Contactspage />} />}
              />
              <Route
                path="login"
                element={<RestrictedRoute component={<Loginpage />} />}
              />

              <Route
                path="register"
                element={<RestrictedRoute component={<Registerpage />} />}
              />
              <Route path="*" element={<Homepage />} />
            </Route>
          </Routes>
        )}
      </Suspense>
      {isLoading && <Loader />}
    </>
  );
};
