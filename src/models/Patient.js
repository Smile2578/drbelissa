import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const ToothSchema = new mongoose.Schema({
  toothNumber: { type: Number, default: null },
  isSelected: { type: Boolean, default: false },
});

const setDateOfBirth = function (value) {
  if (value) {
    const [day, month, year] = value.split('/');
    return new Date(year, month, day);
  }
  return null;
};


const PatientSchema = new mongoose.Schema({
  personalInfo: {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    dateOfBirth: { type: String, default: null },
    email: { type: String, default: null },
    phone: { type: String, default: null },
  },
  medicalInfo: {
    radios: [
      {
        type: {
          data: Buffer,
          contentType: String,
        },
        default: null,
      },
    ],
    empreintes: {
      maxillaire: [
        {
          type: {
            data: Buffer,
            contentType: String,
          },
          default: null,
        },
      ],
      mandibulaire: [
        {
          type: {
            data: Buffer,
            contentType: String,
          },
          default: null,
        },
      ],
      checkmaxillaire: { type: Boolean, default: false },
      checkmandibulaire: { type: Boolean, default: false },
    },

    pp: { type: String, default: null },
    qm: { type: String, default: null },
    dentalAndOrthoHistory: { type: String, default: null },
  },
  examenRadio: {
    inclusion: [ToothSchema],
    absenceOrAgenesie: [ToothSchema],
    caries: [ToothSchema],
  },
  examenIntraOral: {
    profil: { type: String, default: null },
    visage: { type: String, default: null },
    milieuSup: { type: String, default: null},
    milieuInf: { type: String, default: null },
    sourire: { 
      etroit: { type: Boolean, default: false },
      large: { type: Boolean, default: false },
      symetrique: { type: Boolean, default: false },
      asymetrique: { type: Boolean, default: false },
      gingivale: { type: Boolean, default: false },
      dentaire: { type: Boolean, default: false },
      plat: { type: Boolean, default: false },
      devie: { type: Boolean, default: false },
      hypotonie_labiale_sup: { type: Boolean, default: false },
      hypotonie_labiale_inf: { type: Boolean, default: false },
     },
    vestibule: {
      large: { type: Boolean, default: false },
      etroit: { type: Boolean, default: false },
      retroverse: { type: Boolean, default: false },
      linguoverse: { type: Boolean, default: false },
    },
    atm: { type: String, default: null },
    hbd: { type: String, default: null },
    recessionGingivale: { type: String, default: null },
    classeSquelettique: { type: String, default: null },
    encombrement: { type: String, default: null },
    malposition: { type: String, default: null },
    diasteme: { type: String, default: null },
    infraSupraOcclusion: { type: String, default: null },
  },
  traitementState: {
    soinAPrevoir: { type: String, default: null },
    typeDeTraitement: { type: String, default: null },
    duree: { type: String, default: null },
    planDeTraitement: { type: String, default: null },
    accessoires: {
      taquets: { type: Boolean, default: false },
      stripping: { type: Boolean, default: false },
      vivera: { type: Boolean, default: false },
      elastiques: { type: Boolean, default: false },
    },
    consignes: { 
      parodontie: { type: Boolean, default: null },
      chirurgie: { type: Boolean, default: null },
      reeducation_deglution_infantile: { type: Boolean, default: null },
      reeducation_linguale: { type: Boolean, default: null },
      dentiste: { type: Boolean, default: null },
      frenectomie: { type: Boolean, default: null },
      greffe: { type: Boolean, default: null },
      implant: { type: Boolean, default: null },
     },
     encours: { type: Boolean, default: false },
     contention: { type: Boolean, default: false },
     aligneurRDV: { type: Number, default: null },
     nombreDAligneurs: { type: Number, default: null }, 
     aligneurActuel: { type: Number, default: null }, 
     jourDePort: { type: Number, default: null },
  },
});


PatientSchema.pre('save', function (next) {
  if (!this._id) {
    this._id = new ObjectId();
  }
  next();
});

const Patient = mongoose.models.Patient || mongoose.model('Patient', PatientSchema);

export { Patient };
export default PatientSchema;
