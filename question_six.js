const getGrade = (grade) => {
  if (grade < 60) {
    console.log(`Your Scored an F of (${grade})`)
  } else if (grade >= 60 && grade <= 69) {
    console.log(`Your Scored an D of (${grade})`)
  } else if (grade >= 70 && grade <= 79) {
    console.log(`Your Scored an C of (${grade})`)
  } else if (grade >= 80 && grade <= 89) {
    console.log(`Your Scored an B of (${grade})`)
  } else if (grade > 90 && grade < 100) {
    console.log(`Your Scored an A of (${grade}) Congratulations! ✨✨`)
  } else {
    console.log('Invalid grade value!')
  }
}

getGrade(50)
getGrade(65)
getGrade(73)
getGrade(85)
getGrade(96)
