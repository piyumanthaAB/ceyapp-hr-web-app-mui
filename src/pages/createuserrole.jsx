import { Helmet } from 'react-helmet-async';

import { CreateUserRoleView } from 'src/sections/createuserrole';


// ----------------------------------------------------------------------

export default function CreateUserRolePage() {
  return (
    <>
      <Helmet>
        <title> Create User Role | ACORN </title>
      </Helmet>

      <CreateUserRoleView />
    </>
  );
}
