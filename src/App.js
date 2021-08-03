
import './App.css';
import Profile from './profile/Profile.js';
import image from './profile/imageInSrc.png'


function App() {
  
  const handleName=(name)=> alert('welcome ' + name + '.' );

  return (
    <div className="App">
       <Profile fullName="lily" bio="work since 2001" profession="an artist" handleName={handleName}>
       <img src={image} alt='profile photo' />
       </Profile>
    </div>
  );
}

export default App;
