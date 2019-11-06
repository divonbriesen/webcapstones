// just to show we've got client side js going in our infrastructure
console.log("you've loaded the team page for von Dubman. That is all."); 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log("get successful" + this.responseText);
  } else {
      console.log("get failed");
  }
};
xhttp.open("GET", "/entity/5dbb86e1881df31c2cac275e", true);
xhttp.send(); 