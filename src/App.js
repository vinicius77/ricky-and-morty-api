import './App.css';
import CharactersContainer from './components/CharactersContainer';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CharactersContainer />
      </div>
    </Provider>
  );
}

export default App;
