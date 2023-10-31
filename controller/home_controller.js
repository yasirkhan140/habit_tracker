const Habit = require("../models/habit");

module.exports.home = (req, res) => {
  Habit.find({}, (err, habits) => {
    if (err) {
      console.log(`Error in fetching the habits ${err}`);
      return;
    }
    console.log("fetch successfully");
    return res.render("home", {
      title: "Habit Tracker",
      habit_list: habits,
    });
  });
};
