import React, { Suspense } from 'react';

const SecondAppButton = React.lazy(() => import('app2/Button'));
const ThirdAppButton = React.lazy(() => import('app3/Button'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <Suspense fallback="Loading...">
      <SecondAppButton />
      <ThirdAppButton />
    </Suspense>
  </div>
);

export default App;
