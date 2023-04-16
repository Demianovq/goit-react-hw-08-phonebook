import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section';
import { FormContacts } from 'components/form/form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';

export function Contactspage() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Container>
        <Section title={'Phonebook'}>
          <FormContacts />
        </Section>

        <Section title={'Contacts'}>
          <Filter />
          <ContactList />
        </Section>
      </Container>
    </>
  );
}
