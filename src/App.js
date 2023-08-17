import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
