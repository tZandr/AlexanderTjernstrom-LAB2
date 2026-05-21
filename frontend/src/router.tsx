import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Workouts from './pages/Workouts';
import ActiveWorkout from './pages/ActiveWorkout';
import Settings from './pages/Settings';
import History from './pages/History';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/workouts',
        element: <Workouts />,
      },
      {
        path: '/workouts/:id',
        element: <ActiveWorkout />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
]);
