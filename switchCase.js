let role = 'guest';

switch (role) {
  case 'guest':
    console.log('guest user');
    break;

  case 'moderator':
    console.log('moderator user');
    break;

  default:
    console.log('unknown user');
}

/////////////or
///////////  if else is better
if (role === 'guest') console.log('guest');
else if (role === 'moderator') console.log('moderatorj');
else
  console.log('unknown user');

