const human = (age) => {
  try {
    if (typeof age !== 'number') {
      throw new Error('Invalid Argument')
    }
    if (age < 13) {
      console.log('Child')
    } else if (age >= 13 && age <= 19) {
      console.log('Teenager')
    } else if (age >= 20) {
      console.log('Adult')
    }
  } catch (error) {
    console.log('Error happened: ' + error.message)
  }
}

human(5)
human(13)
human(16)
human(25)
human(50)
human('2452r45')
