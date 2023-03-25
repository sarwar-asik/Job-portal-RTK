import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase/firebase.config';
import { setUser, toggleLoading } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();

  // const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth,user=>{
      if(user){
        dispatch(setUser(user?.email));
      }
      else{
        dispatch(toggleLoading())
      }
    })
    // const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   dispatch(setUser(currentUser?.email));
    // });
    // return () => unSubscribe();
  }, [dispatch]);

  return (
    <div className="">
      <RouterProvider router={routes}>

      </RouterProvider>

    </div>
  );
}

export default App;
