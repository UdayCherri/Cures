import { jsPDF } from 'jspdf';
import type { Patient, Diagnosis } from '../types';

export function generateMedicalReport(patient: Patient, diagnosis: Diagnosis): void {
  const doc = new jsPDF();
  const lineHeight = 10;
  let y = 20;

  // Title
  doc.setFontSize(20);
  doc.text('Medical Report', 105, y, { align: 'center' });
  y += lineHeight * 2;

  // Patient Details
  doc.setFontSize(16);
  doc.text('Patient Information', 20, y);
  y += lineHeight;
  
  doc.setFontSize(12);
  doc.text(`Name: ${patient.name}`, 20, y);
  y += lineHeight;
  doc.text(`Age: ${patient.age}`, 20, y);
  y += lineHeight;
  doc.text(`Gender: ${patient.gender}`, 20, y);
  y += lineHeight * 2;

  // Diagnosis
  doc.setFontSize(16);
  doc.text('Diagnosis', 20, y);
  y += lineHeight;

  doc.setFontSize(12);
  doc.text(`Disease: ${diagnosis.disease}`, 20, y);
  y += lineHeight;
  doc.text(`Confidence: ${diagnosis.confidence}%`, 20, y);
  y += lineHeight;
  doc.text('Description:', 20, y);
  y += lineHeight;
  
  const descriptionLines = doc.splitTextToSize(diagnosis.description, 170);
  doc.text(descriptionLines, 20, y);
  y += lineHeight * (descriptionLines.length + 1);

  // Treatment
  doc.text('Treatment:', 20, y);
  y += lineHeight;
  diagnosis.treatment.forEach(item => {
    doc.text(`• ${item}`, 25, y);
    y += lineHeight;
  });
  y += lineHeight;

  // Medication
  doc.text('Medication:', 20, y);
  y += lineHeight;
  diagnosis.medication.forEach(item => {
    doc.text(`• ${item}`, 25, y);
    y += lineHeight;
  });
  y += lineHeight;

  // Diet
  doc.text('Dietary Recommendations:', 20, y);
  y += lineHeight;
  diagnosis.diet.forEach(item => {
    doc.text(`• ${item}`, 25, y);
    y += lineHeight;
  });

  doc.save('medical-report.pdf');
}