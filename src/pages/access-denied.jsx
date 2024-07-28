import { Helmet } from 'react-helmet-async';

import { AccessDeniedView } from 'src/sections/access-denied';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> Access Denied </title>
      </Helmet>

      <AccessDeniedView />
    </>
  );
}
