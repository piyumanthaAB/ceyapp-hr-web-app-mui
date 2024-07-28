import { Helmet } from 'react-helmet-async';

import { PopupReadersPage } from 'src/sections/popup-readers/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Popup - Readers | Ceyapps </title>
      </Helmet>

      <PopupReadersPage />
    </>
  );
}
