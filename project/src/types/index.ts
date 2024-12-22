export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
}

export interface Diagnosis {
  disease: string;
  confidence: number;
  description: string;
  treatment: string[];
  diet: string[];
  medication: string[];
}