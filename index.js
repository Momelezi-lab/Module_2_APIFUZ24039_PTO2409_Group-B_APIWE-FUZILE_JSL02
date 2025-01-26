// Welcome message function
const welcomeMessage = () => {
  const today = new Date().toDateString();
  document.getElementById(
    "welcomeMessage"
  ).textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Display workout routine
const displayWorkoutRoutine = () => {
  const workoutInput = document.querySelector("#workoutInput").value.trim();
  const workoutList = document.querySelector("#workoutList");

  if (workoutInput !== "") {
    // Check if input is valid
    const newWorkout = document.createElement("li");
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
  } else {
    alert("Please enter a valid workout!");
  }
};

document
  .querySelector("#submitWorkout")
  .addEventListener("click", displayWorkoutRoutine);

// Add new fitness goals and prevent duplicates
const addNewGoal = () => {
  const goalInput = document.querySelector("#goalInput").value.trim(); // Get the input value and trim whitespace
  const goalList = document.querySelector("#goalList");
  const existingGoals = goalList.querySelectorAll("li"); // Get all existing goals

  // Check for duplicates
  for (let goal of existingGoals) {
    if (goal.textContent === goalInput) {
      alert("This goal already exists! Please enter a new goal."); // Alert the user
      return; // Stop the function
    }
  }

  // Add the new goal if no duplicate is found
  if (goalInput !== "") {
    const newGoal = document.createElement("li");
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
  } else {
    alert("Please enter a valid goal!");
  }
};

// Add event listener to the goal submit button
document.querySelector("#submitGoal").addEventListener("click", addNewGoal);

// Water intake tracker
let waterIntake = 0;
const updateWaterIntake = (change) => {
  waterIntake += change;
  document.querySelector(
    "#waterIntakeDisplay"
  ).textContent = `${waterIntake} glasses 💦`;
};

document
  .querySelector("#increaseWater")
  .addEventListener("click", () => updateWaterIntake(1));
document
  .querySelector("#decreaseWater")
  .addEventListener("click", () => updateWaterIntake(-1));

// Progress charts update
const updateProgressCharts = () => {
  document.querySelector("#workoutProgress").textContent =
    "Updated workout progress...";
  document.querySelector("#calorieIntakeProgress").textContent =
    "Updated calorie intake progress...";
};

updateProgressCharts();

// Theme toggle functionality
const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

document.querySelector("#themeToggle").addEventListener("click", toggleTheme);

// Meal plan submission
const submitMealPlan = (event) => {
  event.preventDefault();
  alert("Meal plan submitted successfully! 🍴");
};

document
  .querySelector("#mealPlanForm")
  .addEventListener("submit", submitMealPlan);
