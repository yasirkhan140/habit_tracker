const Habit = require("../models/habit");

module.exports.home = async (req, res) => {
  // try {
  //   let result = await Habit.find();
  //   return res.render("home", {
  //     title: "Habit Tracker",
  //     habit_list: result,
  //   });
  // } catch (err) {
  //   console.log(`Error in fetching the habits ${err}`);
  // }
  Habit.find()
    .then((result) => {
      return res.render("home", {
        title: "Habit Tracker",
        habit_list: result,
        weeklyDate: getOneWeekDate(),
      });
    })
    .catch((err) => {
      console.log(`Error in fetching the habits ${err}`);
      return res.render("home", {
        title: "Habit Tracker",
      });
    });
  // Habit.find({}, (err, habits) => {
  //   if (err) {
  //     console.log(`Error in fetching the habits ${err}`);
  //     return;
  //   }
  //   console.log("fetch successfully");
  //   return res.render("home", {
  //     title: "Habit Tracker",
  //     habit_list: habits,
  //   });
  // });
};
function getTodayDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let today = day + "/" + month + "/" + year;
  return today;
}
function getOneWeekDate() {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    let mm = d.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let dd = d.getDate();
    if (dd < 10) dd = "0" + dd;
    const yyyy = d.getFullYear();
    arr.push(dd + "/" + mm + "/" + yyyy);
  }
  arr.reverse();
  return arr;
}
module.exports.createHabit = async (req, res) => {
  try {
    // if habit exesist

    // if habit nor exesist | create it
    let habits = await Habit.create({
      habit: req.body.habit,
      description: req.body.description,
      dates: { date: await getTodayDate(), complete: "none" },
      frequency: "none",
      time: new Date(),
    });
    // add new habit to user-> habits array
    habits.save();

    // // redirect home
    return res.redirect("/");
  } catch (err) {
    console.log(err.message);
  }
};

//---------Dashboard Add/Remove Habit to/from Favorites----------//
module.exports.favoriteHabit = (req, res) => {
  let id = req.query.id;

  Habit.findOne({
    _id: {
      $in: [id],
    },
  })
    .then((habit) => {
      habit.favorite = habit.favorite ? false : true;
      habit
        .save()
        .then((habit) => {
          return res.redirect("back");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log("Error adding to favorites!");
      return;
    });
};

//---------Deleting a habit----------//
module.exports.destroyHabit = (req, res) => {
  let id = req.query.id;
  Habit.deleteMany({
    _id: {
      $in: [id],
    },
  })
    .then((result) => {
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error in deleting record(s)!");
    });
};

module.exports.statusUpdate = (req, res) => {
  var d = req.query.date;
  var id = req.query.id;
  Habit.findById(id).then((habit) => {
    let dates = habit.dates;
    let found = false;
    dates.find((item, index) => {
      if (item.date === d) {
        if (item.complete === "yes") {
          item.complete = "no";
        } else if (item.complete === "no") {
          item.complete = "none";
        } else if (item.complete === "none") {
          item.complete = "yes";
        }
        found = true;
      }
    });
    if (!found) {
      dates.push({ date: d, complete: "yes" });
    }
    habit.dates = dates;
    habit.save().then((habit) => {
      // console.log(habit);
      res.redirect("back");
    });
  });
};
