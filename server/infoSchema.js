const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
  FirstName: { type: String,  },
  LastName: { type: String,  },
  Email: { type: String,  unique: true },
  // Password: { type: String, required: true },
  Gender: { type: String,  },
  DOB: { type: Date, },
  DateOfJoining: { type: Date,  },
  // TerminateDate: { type: Date },
  // Deleted: { type: Boolean },
  // Photo: { type: String },
  ContactNo: { type: String,  },
  EmployeeCode: { type: String, },
  Account: { type: Number,  },
  Role: { type: String, ref: "Role" },
  Position: { type: String, ref: "Position" },
  Project: { type: String, ref: "Project" },
  Salary: { type: String, ref: "Salary" },
  Education: { type: String, ref: "Education" },
  // familyInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "FamilyInfo" }],
  WorkExperience: 
    { type: String, ref: "WorkExperience" }
  ,
  createdTime: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Info", infoSchema);
