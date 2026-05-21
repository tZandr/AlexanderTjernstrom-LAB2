import { useState, useEffect } from 'react';
import { getExercises } from '../api/Exercises';
import type { IExercise } from '../types/Exercise';

export function useExercises() {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getExercises()
      .then(setExercises)
      .catch(() => setError('failed to load exercise'))
      .finally(() => setLoading(false));
  }, []);

  return { exercises, setExercises, loading, error }
}
