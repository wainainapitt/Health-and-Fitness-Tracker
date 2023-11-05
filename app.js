document.addEventListener('DOMContentLoaded', function() {
    // Select important elements
    const userDetailsForm = document.getElementById('userDetailsForm');
    const userProfile = document.getElementById('userProfile');
    const exerciseLog = document.getElementById('exerciseLog');
    const nutritionLog = document.getElementById('nutritionLog');
    const report = document.getElementById('report');
    const healthTips = document.getElementById('healthTips');
    const resetFormButton = document.getElementById('resetForm');
  
    // Initialize variables to store user details
    let userName = '';
    let userAge = 0;
    let userWeight = 0;
    let userHeight = 0;
  
    // Handle the user details form submission
    userDetailsForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get user details
      userName = document.getElementById('userName').value;
      userAge = parseInt(document.getElementById('userAge').value);
      userWeight = parseFloat(document.getElementById('userWeight').value);
      userHeight = parseFloat(document.getElementById('userHeight').value);
  
      // Update the user profile section
      userProfile.innerHTML = `
        <p>Name: ${userName}</p>
        <p>Age: ${userAge} years</p>
        <p>Weight: ${userWeight} kg</p>
        <p>Height: ${userHeight} cm</p>
      `;
    });
  
    // Handle adding exercise entries
    const addExerciseButton = document.getElementById('addExercise');
    addExerciseButton.addEventListener('click', function() {
      const activity = document.getElementById('activity').value;
      const duration = parseFloat(document.getElementById('duration').value);
      const caloriesBurned = parseFloat(document.getElementById('caloriesBurned').value);
  
      const exerciseEntry = document.createElement('div');
      exerciseEntry.innerHTML = `<p>Activity: ${activity}, Duration: ${duration} minutes, Calories Burned: ${caloriesBurned}</p>`;
      exerciseLog.appendChild(exerciseEntry);
  
      // Clear the exercise log form
      document.getElementById('activity').value = '';
      document.getElementById('duration').value = '';
      document.getElementById('caloriesBurned').value = '';
    });
  
    // Handle adding nutrition entries
    const addNutritionButton = document.getElementById('addNutrition');
    addNutritionButton.addEventListener('click', function() {
      const meal = document.getElementById('meal').value;
      const caloriesConsumed = parseFloat(document.getElementById('caloriesConsumed').value);
  
      const nutritionEntry = document.createElement('div');
      nutritionEntry.innerHTML = `<p>Meal: ${meal}, Calories Consumed: ${caloriesConsumed}</p>`;
      nutritionLog.appendChild(nutritionEntry);
  
      // Clear the nutrition log form
      document.getElementById('meal').value = '';
      document.getElementById('caloriesConsumed').value = '';
    });
  
    // Generate a health report
    const generateReportButton = document.getElementById('generateReport');
    generateReportButton.addEventListener('click', function() {
      if (userName && userAge > 0 && userWeight > 0 && userHeight > 0) {
        // Calculate BMI
        const bmi = (userWeight / ((userHeight / 100) * (userHeight / 100))).toFixed(2);
  
        // Determine BMI category
        let bmiCategory = '';
        if (bmi < 18.5) {
          bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
          bmiCategory = 'Normal Weight';
        } else if (bmi >= 25 && bmi < 29.9) {
          bmiCategory = 'Overweight';
        } else {
          bmiCategory = 'Obese';
        }
  
        // Display the health report
        report.innerHTML = `
          <p>Health Report for ${userName}</p>
          <p>Age: ${userAge} years</p>
          <p>Weight: ${userWeight} kg</p>
          <p>Height: ${userHeight} cm</p>
          <p>BMI (Body Mass Index): ${bmi}</p>
          <p>BMI Category: ${bmiCategory}</p>
        `;
  
        // Scroll the page to display the report
        report.scrollIntoView({ behavior: 'smooth' });
      } else {
        report.innerHTML = '<p>Please fill in your user details first.</p>';
      }
    });
  
    // Handle resetting the entire form
    resetFormButton.addEventListener('click', function() {
      userDetailsForm.reset();
      userProfile.innerHTML = '';
      exerciseLog.innerHTML = '';
      nutritionLog.innerHTML = '';
      report.innerHTML = '';
    });
  
    // Rest of the code remains the same
  });
  