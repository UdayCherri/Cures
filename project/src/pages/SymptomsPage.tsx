import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SymptomInput } from '../components/SymptomInput';
import { DiagnosisResult } from '../components/DiagnosisResult';
import { PatientDetails } from '../components/PatientDetails';
import { generateMedicalReport } from '../utils/pdfGenerator';
import type { Patient, Diagnosis } from '../types';

export function SymptomsPage() {
  const navigate = useNavigate();
  const [showPatientDetails, setShowPatientDetails] = useState(false);
  const [diagnosis, setDiagnosis] = useState<Diagnosis | null>(null);
  
  const patientData = localStorage.getItem('currentPatient');
  const patient = patientData ? JSON.parse(patientData) as Patient : null;

  if (!patient) {
    navigate('/');
    return null;
  }

  const handleSymptomSubmit = (symptoms: string[]) => {
    // Mock API call - Replace with actual ML model integration
    const mockDiagnosis: Diagnosis = {
      disease: "Common Cold",
      confidence: 85,
      description: "A viral infection of the upper respiratory tract.",
      treatment: [
        "Rest and adequate sleep",
        "Stay hydrated",
        "Over-the-counter decongestants"
      ],
      medication: [
        "Acetaminophen for fever and pain",
        "Decongestant nasal spray",
        "Cough suppressant"
      ],
      diet: [
        "Warm chicken soup",
        "Citrus fruits high in Vitamin C",
        "Honey and warm tea"
      ]
    };
    setDiagnosis(mockDiagnosis);
  };

  const handleGenerateReport = () => {
    if (diagnosis && patient) {
      generateMedicalReport(patient, diagnosis);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Symptom Analysis</h1>
          <p className="text-gray-600">Enter your symptoms for AI-powered diagnosis</p>
        </div>

        <SymptomInput onSubmit={handleSymptomSubmit} />
        
        {diagnosis && (
          <>
            <DiagnosisResult diagnosis={diagnosis} />
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowPatientDetails(!showPatientDetails)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {showPatientDetails ? 'Hide' : 'Show'} Patient Details
              </button>
              <button
                onClick={handleGenerateReport}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Download Medical Report
              </button>
            </div>

            {showPatientDetails && <PatientDetails patient={patient} />}
          </>
        )}
      </div>
    </div>
  );
}