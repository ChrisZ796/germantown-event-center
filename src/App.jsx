import { useState } from 'react';
import './index.css';
import Login from "./page-components/Login";
import Home from "./page-components/Home";
import Directory from "./page-components/Directory";
import Profile from "./page-components/Profile";
import Updates from "./page-components/Updates";

function App() {
  const [user, setUser] = useState(null);
  const [selectedSection, setSelectedSection] = useState('Home');

  const handleLogin = (username, password) => {
    if (username === "test" && password === "pswd123") {
      const userInfo = { username: "test", name: "Test User" };
      setUser(userInfo);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  let content;
  switch (selectedSection) {
    case 'Home':
      content = <Home onSelect={setSelectedSection} selectedSection = {selectedSection}/>;
      break;
    case 'Directory':
      content = <Directory onSelect={setSelectedSection} selectedSection = {selectedSection}/>;
      break;
    case 'Updates':
      content = <Updates onSelect={setSelectedSection} selectedSection = {selectedSection}/>;
      break;
    case 'Profile':
      content = <Profile onSelect = {setSelectedSection} selectedSection = {selectedSection}/>;
      break;
    default:
      content = <Home onSelect={setSelectedSection} selectedSection = {selectedSection}/>;
  }

  return (
    <div style={{ flex: 1 }}>
      {content}
    </div>
  );
}

export default App;
