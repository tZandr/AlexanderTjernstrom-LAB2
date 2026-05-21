import type { IExercise } from '../types/Exercise';

interface Props {
  exercises: IExercise[];
  onSelect: (exercise: IExercise) => void;
}

export function ExerciseList({ exercises, onSelect }: Props) {
  return (
    <div className="exercise-list">
      {exercises.map((exercise) => (
        <div key={exercise._id} className="exercise-row" onClick={() => onSelect(exercise)}>
          <span className="exercise-row__name">{exercise.name}</span>
          <span className="exercise-row__categories">
            {exercise.muscleGroups?.join(', ')}
          </span>
        </div>
      ))}
    </div>
  );
}
