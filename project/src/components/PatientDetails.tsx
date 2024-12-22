import React from 'react';
import { UserCircle } from 'lucide-react';
import type { Patient } from '../types';

interface PatientDetailsProps {
  patient: Patient;
}

export function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <UserCircle className="w-12 h-12 text-blue-500" />
        <div>
          <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
          <p className="text-gray-500">Patient ID: {patient.id}</p>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-medium text-gray-500">Age</dt>
          <dd className="mt-1 text-sm text-gray-900">{patient.age}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Gender</dt>
          <dd className="mt-1 text-sm text-gray-900">{patient.gender}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Email</dt>
          <dd className="mt-1 text-sm text-gray-900">{patient.email}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Phone</dt>
          <dd className="mt-1 text-sm text-gray-900">{patient.phone}</dd>
        </div>
      </dl>
    </div>
  );
}