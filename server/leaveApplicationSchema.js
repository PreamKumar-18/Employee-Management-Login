const mongoose = require("mongoose");

const leaveApplicationSchema = new mongoose.Schema({
  FirstName: { type: String,  },
  LastName: { type: String,  },
    Leavetype: { type: String, },
    FromDate: { type: Date,  },
    ToDate: { type: Date, },
    Reason: { type: String,  },
    // Status: { type: String, required: true },
    // employee: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }]
  });
  // leaveApplicationSchema.plugin(autoIncrement.plugin, {
  //   model: "LeaveApplication",
  //   field: "LeaveApplicationID"
  // });
  
  const LeaveApplication = mongoose.model(
    "Leave",
    leaveApplicationSchema
  );