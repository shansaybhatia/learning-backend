import mongoose from "mongoose";
const medicalRecordSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema,
);
