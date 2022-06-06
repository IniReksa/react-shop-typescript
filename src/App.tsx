import React from 'react';
import AppLayout from "./components/applayout/AppLayout";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Homepage name="index home" />
      </AppLayout>
    </div>
  );
}

export default App;
