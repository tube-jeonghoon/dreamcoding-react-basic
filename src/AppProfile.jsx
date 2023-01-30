import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return(
    <>
      <Profile image='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4744&q=80'
      name='tube'
      title='devops' />
      <Profile image='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4744&q=80'
      name='임현민'
      title='DevOps' />
    </>
  );
};

export default AppProfile;
