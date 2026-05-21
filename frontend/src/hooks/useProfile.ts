import { useState, useEffect } from 'react';
import { getProfile } from '../api/Profile';
import type { IProfile } from '../types/Profile';

export function useProfile() {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch(() => setError('Failed to load profile'))
      .finally(() => setLoading(false));
  }, []);

  return { profile, setProfile, loading, error };
}
