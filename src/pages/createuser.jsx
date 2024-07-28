import { Helmet } from 'react-helmet-async';

import { CreateUserView } from 'src/sections/createuser';

// ----------------------------------------------------------------------

export default function CreateUserPage() {
  return (
    <>
      <Helmet>
        <title> Create User | ACORN </title>
      </Helmet>

      <CreateUserView />
    </>
  );
}
