import Profile from './components/profile.tsx'

import ErrorPage from './components/ErrorPage.tsx'
import App from './App.tsx';

const routes =[
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "profile/:name",
    element: <Profile/>,

  },
];
export default routes;