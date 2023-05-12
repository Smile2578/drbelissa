import { MongoClient, ObjectId } from 'mongodb';
import { getPatientModel } from '../../../models/patientModel';
import { connectToDatabase } from '../../../util/mongodb';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  // Connect to the database before handling any request
  await connectToDatabase();

  const Patient = getPatientModel();

  switch (method) {
    case 'GET':
      try {
        const patient = await Patient.findOne({ _id: new ObjectId(id) });
        if (!patient) {
          return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({ patient });
      } catch (error) {
        console.error('Error fetching patient:', error.stack);
        res.status(500).json({ message: 'Error fetching patient' });
      }
      break;

    case 'PUT':
      try {
        const updatedPatient = req.body;
        const patient = await Patient.findOneAndUpdate(
          { _id: new ObjectId(id) },
          updatedPatient,
          { new: true }
        );
        if (!patient) {
          return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient updated successfully', patient });
      } catch (error) {
        console.error('Error updating patient:', error);
        res.status(500).json({ message: 'Error updating patient' });
      }
      break;

    case 'DELETE':
      try {
        console.log('Deleting patient with id:', id);
        const patient = await Patient.findOneAndDelete({ _id: new ObjectId(id) });
        if (!patient) {
          console.log('Patient not found');
          return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient deleted successfully' });
      } catch (error) {
        console.log('Error deleting patient:', error);
        res.status(500).json({ message: 'Error deleting patient' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}