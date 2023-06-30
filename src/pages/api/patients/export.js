import { connectToDatabase } from '../../../util/mongodb';
import { Parser } from 'json2csv';
import { Patient } from '../../../models/Patient'; 

const exportPatients = async (req, res) => {
  if (req.method === 'GET') {
    try {
      await connectToDatabase();

      const patients = await Patient.find({});
      const modifiedPatients = patients.map(patient => ({
        'Prénom et Nom': `${patient.personalInfo.firstName} ${patient.personalInfo.lastName}`,
        'Date de Naissance': formatDate(patient.personalInfo.dateOfBirth),
        'Classe Squelettique': patient.examenIntraOral.classeSquelettique,
        'Traitement': patient.traitementState.typeDeTraitement,
        'En Cours': patient.traitementState.encours,
      }));

      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(modifiedPatients);

      res.setHeader('Content-Disposition', 'attachment; filename=patients.csv');
      res.setHeader('Content-Type', 'text/csv');
      res.status(200).end(csv);

    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
};

const pad = (num) => {
  return num < 10 ? '0' + num : num;
};


export default exportPatients;
