import mongoose from 'mongoose';
import PatientSchema from './Patient';

let PatientModel;

try {
  PatientModel = mongoose.model('Patient');
} catch {
  PatientModel = mongoose.model('Patient', PatientSchema);
}

export default PatientModel;

export const getPatientModel = () => PatientModel;
