import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const ToothSchema = new mongoose.Schema({
  toothNumber: { type: Number, default: null },
  isSelected: { type: Boolean, default: false },
});

const PatientSchema = new mongoose.Schema({
  personalInfo: {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    dateOfBirth: { type: String, default: null },
    email: { type: String, default: null },
    phone: { type: String, default: null },
  },
  medicalInfo: {
    radios: {
      type: {
        data: Buffer,
        contentType: String,
      },
      default: null,
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
      parodontie: { type: String, default: null },
      chirurgie: { type: String, default: null },
      reeducation_deglution_infantile: { type: String, default: null },
      reeducation_linguale: { type: String, default: null },
      dentiste: { type: String, default: null },
     },
  },
});


PatientSchema.pre('save', function (next) {
  if (!this._id) {
    this._id = new ObjectId();
  }
  next();
});

export default PatientSchema;
