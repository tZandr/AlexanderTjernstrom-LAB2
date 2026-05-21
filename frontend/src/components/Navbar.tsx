import { Link } from 'react-router-dom';
import { FaHistory, FaUser, FaCog, FaPlus, FaDumbbell } from 'react-icons/fa';

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">
            <FaUser />
          </Link>
        </li>
        <li>
          <Link to="/history">
            <FaHistory />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaPlus />
          </Link>
        </li>
        <li>
          <Link to="/workouts">
            <FaDumbbell />
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
