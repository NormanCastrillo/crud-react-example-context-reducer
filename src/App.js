import './App.css';
import Create from './components/Create'
import Show from './components/Show';

function App() {
  return (
    <div className='text-center p-4' >
      <h1>CRUD reducer</h1>
     <Create/>
     <Show/>
    </div>
  );
}

export default App;
