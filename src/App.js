import {useState} from 'react';
import LoginForm from './components/LoginForm'
function App() {
  const adminUser = {
    email:'admin@admin.com',
    password:'admin123'
  };

  const [user, setUser] = useState({name:'', email:''});
  const [error, setError] = useState('');

  const login = details =>{
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password){
      
      setUser({
        name:details.name,
        email:details.email
      });
    } else{
      setError('not matching email and password!')
    }
  };

  const logout = () =>{
    setUser({
      name:'', 
      email:''
    })
  };
  return ( 
    <div className="App">
      {(user.email !== '')? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={logout}>Logout</button>
        </div>
      ):
      (<LoginForm login={login} error={error}/> )
      }
    </div>
  );
}

export default App;
