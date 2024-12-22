import React from 'react';
import { Stethoscope } from 'lucide-react';
import { PatientForm } from '../components/PatientForm';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Stethoscope className="w-12 h-12 text-blue-500" />
            <h1 className="text-3xl font-bold">Medical Diagnosis</h1>
          </div>
          <p className="text-gray-600">
            Please enter your details to begin the diagnosis process
          </p>
        </div>
        <PatientForm />
      </div>
    </div>
  );
}