import React from 'react';

import FetchWeather from './Components/Weather';
import MainLayout from './layouts/MainLayouts';

export const App = () => {
  return (
    <div>
      <MainLayout>
        <FetchWeather/>
      </MainLayout>

    </div>
  )
}

export default App