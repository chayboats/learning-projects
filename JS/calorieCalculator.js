function dailyCalories(day) {
  if(day === 'monday'){
    return 1450
  } else if(day === 'tuesday') {
    return 1560
  } else if(day === 'wednesday') {
    return 1720
  } else if(day === 'thursday') {
    return 1460
  } else if(day === 'friday') {
    return 1600
  } else if(day === 'saturday') {
    return 1820
  } else if(day === 'sunday') {
    return 4065
  }
  return 'Error calculating daily caloric intake.'
}

function actualWeeklyCalories() {
  return dailyCalories('monday') + 
  dailyCalories('tuesday') + 
  dailyCalories('wednesday') + 
  dailyCalories('thursday') + 
  dailyCalories('friday') + 
  dailyCalories('saturday') + 
  dailyCalories('sunday');
}

// 1 week = 7 days
function idealWeeklyCalories() {
  const idealDailyCalories = 1560
  return idealDailyCalories * 7
}

function healthPlan() {
  console.log('Calorie Goal: ', idealWeeklyCalories());
  console.log('Your Actual Calories: ', actualWeeklyCalories());
  if(actualWeeklyCalories() > idealWeeklyCalories()){
    return 'Time to hit the gym!'
  } else if(actualWeeklyCalories() < idealWeeklyCalories()){
    return 'Time for seconds!'
  } else if(actualWeeklyCalories() = idealWeeklyCalories()){
    return 'You ate just the right amount'
  }
  return 'Error calculating health plan.'
}
  
console.log(healthPlan())