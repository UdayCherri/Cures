import React, { useState } from 'react';
import { Search } from 'lucide-react';

type Symptom = string;

interface SymptomInputProps {
  onSubmit: (symptoms: Symptom[]) => void;
}

export function SymptomInput({ onSubmit }: SymptomInputProps) {
  const [currentSymptom, setCurrentSymptom] = useState('');
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);

  const handleAddSymptom = () => {
    if (currentSymptom.trim()) {
      setSymptoms([...symptoms, currentSymptom.trim()]);
      setCurrentSymptom('');
    }
  };

  const handleRemoveSymptom = (index: number) => {
    setSymptoms(symptoms.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symptoms.length > 0) {
      onSubmit(symptoms);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={currentSymptom}
            onChange={(e) => setCurrentSymptom(e.target.value)}
            placeholder="Enter a symptom..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleAddSymptom}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>

        {symptoms.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {symptoms.map((symptom, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center gap-2"
              >
                {symptom}
                <button
                  type="button"
                  onClick={() => handleRemoveSymptom(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={symptoms.length === 0}
          className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Search size={20} />
          Analyze Symptoms
        </button>
      </form>
    </div>
  );
}