import './App.css';
import Index from './pages/Index';
import { Provider } from "react-redux";
import store from "./redux/store";
// import ExampleComponent from './pages/example';

function App() {
  return (
    <>
    <Provider store={store}>
      <Index />
    </Provider>
    </>
  );
}

export default App;
