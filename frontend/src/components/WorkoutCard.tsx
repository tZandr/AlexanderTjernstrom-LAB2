import { Link } from 'react-router-dom';
import type { IWorkout } from '../types/Workout';

interface Props {
  workout: IWorkout;
}

export function WorkoutCard({ workout }: Props) {
  return (
    <Link to={`/workouts/${workout._id}`} className="workout-card">
      <div className="workout-card__header">
        <span className="workout-card__name">{workout.name}</span>
        <span className="workout-card__date">
          {new Date(workout.date).toLocaleDateString()}
        </span>
      </div>
      <span className="workout-card__meta">
        {workout.exercises.length} exercise{workout.exercises.length !== 1 ? 's' : ''}
        {workout.gym ? ` · ${workout.gym}` : ''}
      </span>
    </Link>
  );
}
