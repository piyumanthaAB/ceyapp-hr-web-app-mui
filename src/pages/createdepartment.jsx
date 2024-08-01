import { Helmet } from 'react-helmet-async';

import { CreateDepartmentView } from 'src/sections/createdepartment';


// ----------------------------------------------------------------------

export default function CreateDepartmentPage() {
  return (
    <>
      <Helmet>
        <title> Create Department | ACORN </title>
      </Helmet>

      <CreateDepartmentView />
    </>
  );
}
