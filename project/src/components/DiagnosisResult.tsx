import React from 'react';
import { AlertCircle, Apple, Pill } from 'lucide-react';

interface DiagnosisResultProps {
  diagnosis: {
    disease: string;
    confidence: number;
    description: string;
    treatment: string[];
    diet: string[];
  } | null;
}

export function DiagnosisResult({ diagnosis }: DiagnosisResultProps) {
  if (!diagnosis) return null;

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{diagnosis.disease}</h2>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            {diagnosis.confidence}% confidence
          </span>
        </div>
        <p className="text-gray-600">{diagnosis.description}</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <Pill className="text-blue-500" />
            <h3>Recommended Treatment</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6">
            {diagnosis.treatment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <Apple className="text-green-500" />
            <h3>Dietary Recommendations</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6">
            {diagnosis.diet.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg flex items-start gap-3">
          <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" />
          <p className="text-sm text-yellow-700">
            This is an AI-powered prediction and should not be considered as a replacement for
            professional medical advice. Please consult with a healthcare provider for proper
            diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
}