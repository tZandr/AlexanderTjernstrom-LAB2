import { useState } from 'react';
import { updateExercise, deleteExercise } from '../api/Exercises';
import type { IExercise } from '../types/Exercise';

const MUSCLE_GROUPS = [
  'Quads', 'Hamstrings', 'Glutes', 'Chest', 'Lats',
  'Lower back', 'Shoulders', 'Biceps', 'Triceps', 'Core', 'Calves', 'Traps',
];

const CATEGORIES = ['Barbell', 'Dumbbell', 'Machine', 'Cable', 'Bodyweight', 'Duration'];

interface Props {
  exercise: IExercise;
  onClose: () => void;
  onUpdated: (exercise: IExercise) => void;
  onDeleted: (id: string) => void;
}

function toggle(arr: string[], value: string): string[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function EditExerciseModal({ exercise, onClose, onUpdated, onDeleted }: Props) {
  const [name, setName] = useState(exercise.name);
  const [muscleGroups, setMuscleGroups] = useState<string[]>(exercise.muscleGroups ?? []);
  const [category, setCategory] = useState(exercise.category?.[0] ?? '');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const updated = await updateExercise(exercise._id, {
      name,
      muscleGroups,
      category: category ? [category] : [],
    });
    onUpdated(updated);
    onClose();
  }

  async function handleDelete() {
    await deleteExercise(exercise._id);
    onDeleted(exercise._id);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h5>Edit Exercise</h5>
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
          <div className="btn-group">
            <button type="submit" className="btn-success">Save</button>
            <button type="button" onClick={handleDelete} className="btn-danger">Delete</button>
          </div>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
