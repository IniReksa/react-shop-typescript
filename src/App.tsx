import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import AppLayout from "./components/applayout/AppLayout";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <Homepage name="index home" />
      </AppLayout>
    </Provider>
  );
}

export default App;
