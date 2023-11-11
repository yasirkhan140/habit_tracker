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
