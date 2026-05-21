import { useState } from 'react';
import { createExercise } from '../api/Exercises';
import type { IExercise } from '../types/Exercise';

const MUSCLE_GROUPS = [
  'Quads', 'Hamstrings', 'Glutes', 'Chest', 'Lats',
  'Lower back', 'Shoulders', 'Biceps', 'Triceps', 'Core', 'Calves', 'Traps',
];

const CATEGORIES = ['Barbell', 'Dumbbell', 'Machine', 'Cable', 'Bodyweight', 'Duration'];

interface Props {
  onClose: () => void;
  onCreated: (exercise: IExercise) => void;
}

function toggle(arr: string[], value: string): string[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function ExerciseModal({ onClose, onCreated }: Props) {
  const [name, setName] = useState('');
  const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
  const [category, setCategory] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const exercise = await createExercise({ name, muscleGroups, category: category ? [category] : [] });
    onCreated(exercise);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h5>New Exercise</h5>
          <button type="button" className="modal__close" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>Muscle groups</label>
          <div className="tag-group">
            {MUSCLE_GROUPS.map((mg) => (
              <button
                key={mg}
                type="button"
                className={`tag${muscleGroups.includes(mg) ? ' tag--active' : ''}`}
                onClick={() => setMuscleGroups(toggle(muscleGroups, mg))}
              >
                {mg}
              </button>
            ))}
          </div>
          <label>
            Category
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="btn-success">Save</button>
        </form>
      </div>
    </div>
  );
}
