let username = prompt("who's there?", '');

if (username == "Admin") {

  let pass = prompt('Password', '');

  if(pass == 'TheMaster') {
    alert('Welcome');

  } else if (pass == null || evt.keyCode == 27) {
    alert('Cancel');
  }

}
