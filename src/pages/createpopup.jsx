import { Helmet } from 'react-helmet-async';

import { CreatePopupView } from 'src/sections/createpopup';

// ----------------------------------------------------------------------

export default function CreatePopupPage() {
  return (
    <>
      <Helmet>
        <title> Create Popup | ACORN </title>
      </Helmet>

      <CreatePopupView />
    </>
  );
}
