const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoSchema");
const LeaveRouter = require("./leaveApplicationSchema");

router.post("/", async (req, res) => {
  const data = new InfoRouter({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Password: req.body.Password,
    Gender: req.body.Gender,
    DOB: req.body.DOB,
    DateOfJoining: req.body.DateOfJoining,
    ContactNo: req.body.ContactNo,
    EmployeeCode: req.body.EmployeeCode,
    Account: req.body.Account,
    Role: req.body.Role,
    Position: req.body.Position,
    Project: req.body.Project,
    Salary: req.body.Salary,
    Education: req.body.Education,
    WorkExperience: req.body.WorkExperience,
  });

  await data.save();
  res.json(data);
});

router.post("/leave", async (req,res) => {
    const leave = new LeaveRouter({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Leavetype: req.body.Leavetype,
        FromDate: req.body.FromDate,
        ToDate: req.body.ToDate,
        Reason: req.body.Reason,
        // Status: req.body.Status,
      });
      await data.save();
  res.json(leave);

})

router.get("/", async (req, res) => {
  const findData = await InfoRouter.find();
  res.json(findData);
});
router.get("/leave", async (req, res) => {
  console.log(findLeave)
  const findLeave = await LeaveRouter.find();
  res.json(findLeave);
});

router.delete("/del/:id", async (req, res) => {
  const delData = await InfoRouter.findByIdAndRemove(req.params.id).then(
    (e) => {
      res.json({ message: "Deleted Successfully" });
    }
  );
  res.json(delData);
});
router.delete("leave/del/:id", async (req, res) => {
  const delLeave = await LeaveRouter.findByIdAndRemove(req.params.id).then(
    (e) => {
      res.json({ message: "Deleted Successfully" });
    }
  );
  res.json(delLeave);
});
router.get("/show/:id", async (req, res) => {
  const showData = await InfoRouter.findById(req.params.id).then((e) => {
    res.json({ message: "Success" });
  });
  //  res.json(showData)
});

router.put("/update/", async (req, res) => {
  const update = await InfoRouter.findByIdAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        DateOfJoining: req.body.DateOfJoining,
        ContactNo: req.body.ContactNo,
        EmployeeCode: req.body.EmployeeCode,
        Account: req.body.Account,
        Role: req.body.Role,
        Position: req.body.Position,
        Project: req.body.Project,
        Salary: req.body.Salary,
        Education: req.body.Education,
        WorkExperience: req.body.WorkExperience,
       
      },
    }
  );

  res.json(update);
});
// router.put("/leave/update", async (req, res) => {
//   const LeaveUpdate = await LeaveRouter.findByIdAndUpdate(
//     { _id: req.body._id },
//     {
//       $set: {
//         FirstName: req.body.FirstName,
//         LastName: req.body.LastName,
//         Leavetype: req.body.Leavetype,
//         FromDate: req.body.FromDate,
//         ToDate: req.body.ToDate,
//         Reason: req.body.Reason,
//         // Status: req.body.Status,
//       },
//     }
//   );

//   res.json(LeaveUpdate);
// });

router.get("/", (req, res) => {
  res.json("I am from Router File");
});

module.exports = router;
