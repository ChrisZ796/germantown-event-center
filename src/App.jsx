import { useState } from 'react';
import './index.css';
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Directory from "./pages/directory/Directory";
import Profile from "./pages/profile/Profile";
import Updates from "./pages/updates/Updates";
import { AuthenticationProvider } from './contexts/Authentication';

function App() {
  const [user, setUser] = useState(null);
  const [selectedSection, setSelectedSection] = useState('Home');

  // if (!user) {
  //   return <Login onLogin={handleLogin} />;
  // }

  // let content;
  // switch (selectedSection) {
  //   case 'Home':
  //     content = <Home onSelect={setSelectedSection} selectedSection = {selectedSection}/>;
  //     break;
  //   case 'Directory':
  //     content = <Directory onSelect={setSelectedSection} selectedSection = {selectedSection}/>;
  //     break;
  //   case 'Updates':
  //     content = <Updates onSelect={setSelectedSection} selectedSection = {selectedSection}/>;
  //     break;
  //   case 'Profile':
  //     content = <Profile onSelect = {setSelectedSection} selectedSection = {selectedSection}/>;
  //     break;
  //   default:
  //     content = <Home onSelect={setSelectedSection} selectedSection = {selectedSection}/>;
  // }

  return (
    <div style={{ flex: 1 }}>
      <AuthenticationProvider value={{}}>
        <Login />
      </AuthenticationProvider>
    </div>
  );
}

export default App;
