import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Homepage } from '../pages/Homepage';
import { Registerpage } from '../pages/Registerpage';
import { Loginpage } from '../pages/Loginpage';
import { Contactspage } from '../pages/Contactspage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/contacts" element={<Contactspage />} />
      </Route>
    </Routes>
  );
};
