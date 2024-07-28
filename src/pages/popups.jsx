import { Helmet } from 'react-helmet-async';

import { PopupsView } from 'src/sections/popups/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Employees | Ceyapps </title>
      </Helmet>

      <PopupsView />
    </>
  );
}
