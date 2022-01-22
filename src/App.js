import './App.css';

// Components
import Header from '../src/components/Header'

// Templates
import DefaultTemplate from '../src/templates/DefaultTemplate'

function App() {
  return (
    <>
      <Header />
      <DefaultTemplate title="Funcionários" isSearchBox>
      </DefaultTemplate>
    </>
  );
}

export default App;
