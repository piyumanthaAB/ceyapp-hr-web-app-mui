import { Helmet } from 'react-helmet-async';

import { UserRoleView } from 'src/sections/userroles/view';


// ----------------------------------------------------------------------

export default function UserRolePage() {
  return (
    <>
      <Helmet>
        <title> User Roles | ACORN </title>
      </Helmet>

      <UserRoleView />
    </>
  );
}
