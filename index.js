function scuberGreetingForFeet(feet){
  let result;
  if (feet <= 400) {
    result = 'This one is on me!';
  } else if (feet <= 2000) {
    result = 'That will be twenty bucks.';
  } else if (feet >= 2001 && feet <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (feet >= 2501) {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city) {
  let result = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return result;
}

function switchOnCharmFromTip(tip){
  let result;
  switch (tip) {
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.'
      break;
  }
  return result;
}