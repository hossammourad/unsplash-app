import React, { Fragment, useState } from 'react';
import StatusBar from '../StatusBar/StatusBar';
import Window from '../Window/Window';
import PhotoCredit from '../PhotoCredit/PhotoCredit';

export default function App() {
  const [photoCreditData, updatePhotoCreditData] = useState(null);

  return (
    <Fragment>
      <StatusBar />
      <Window updatePhotoCreditData={updatePhotoCreditData} />
      {photoCreditData && <PhotoCredit user={photoCreditData} />}
    </Fragment>
  );
}
