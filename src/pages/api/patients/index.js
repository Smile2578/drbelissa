import { getPatientModel } from '../../../models/patientModel';
import { connectToDatabase } from '../../../util/mongodb';

export default async function handler(req, res) {
  const { method } = req;

  // Connect to the database before handling any request
  await connectToDatabase();

  const Patient = getPatientModel();

  switch (method) {
    case 'GET':
      try {
        const patientList = await Patient.find({});
        res.status(200).json(patientList);
      } catch (error) {
        console.log('Error fetching patients:', error);
        res.status(500).json({ error: 'Error fetching patients' });
      }
      break;

    case 'POST':
      try {
        console.log('Creating new patient:', req.body);
        const newPatient = req.body;
        const patient = await Patient.create(newPatient);
        console.log('New patient created:', patient);
        res.status(201).json(patient);
      } catch (error) {
        console.log('Error creating patient:', error);
        res.status(500).json({ error: 'Error creating patient' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
