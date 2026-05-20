import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Workouts from './pages/Workouts';
import ActiveWorkout from './pages/ActiveWorkout';

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
        element: <Workouts />
      },
      {
        path: '/active-workout',
        element: <ActiveWorkout />
      }
    ],
  },
]);
