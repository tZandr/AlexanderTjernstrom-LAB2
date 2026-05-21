import CreateProfile from '../components/EditProfile';
import { UserProfile } from '../components/userProfile';
import { useState } from 'react';
import { FaCog } from 'react-icons/fa';

export default function Profile() {
  const [editing, SetEditing] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h5>Profile</h5>
        <button className="cog-btn" onClick={() => SetEditing(true)}>
          <FaCog />
        </button>
      </div>
      {editing ? (
        <CreateProfile onSaved={() => SetEditing(false)} />
      ) : (
        <>
          <div className="profile-view">
            <UserProfile />
          </div>
        </>
      )}
    </div>
  );
}
