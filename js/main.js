
function looping()
{
  let str = "";
  let s = "";
  let i;
  for (i = 1; i <= 20 ;i++) {
    s += str.padStart(i,"X") + "<br>";
  }
  document.getElementById("forLoop").innerHTML = s;
}

function dateDiff()
{
  const d = new Date(); // create today's date
  let year = d.getFullYear(); //parse today's date
  let month = d.getMonth()+1; //month is [0-11] so +1
  let today = d.getDate();
  let b = document.getElementById("myForm").elements[3].value;
  let f = document.getElementById("myForm").elements[1].value;
  let l = document.getElementById("myForm").elements[2].value;
  const dateArray = b.split("-"); //put date from input into an array as string
  let y = parseInt(dateArray[0]); //convert to int
  let m = parseInt(dateArray[1]);
  let t = parseInt(dateArray[2]);
  const dayArray = [0,31,59,90,120,151,181,212,243,273,304,334,365];

  year -= y; // calculate age

  let db = 365 - (dayArray[m-1] + t); // dayBorn calcalute to end of year
  let v = (365 * (year-1)) + dayArray[m-1] + today + db;

  if (!b) {// check to see if user selected a birthday
    document.getElementById("dateTest").innerHTML = "Invalid birthday";
    return;
  }
  if (year>17) {// check if age over 17, & if today is bday, else not old enough
    document.getElementById("dateTest").innerHTML = f + " " + l + " you have been breathing for " + v + " days!";
    return;
  }
  if (year===17){
    if(month >= m){
      if(today >= t) {
        document.getElementById("dateTest").innerHTML = f + " " + l + " you have been breathing for " + v + " days!";
        return;
      } // today is your birthday
    }
  }
  document.getElementById("dateTest").innerHTML = "You are probably not old enough to take this class!";
}

function checkUserInput()
{
  let x = document.getElementById("myForm"); //get form info
  let uid = x.elements[0].value; // parse user info
  let fname = x.elements[1].value;
  let lname = x.elements[2].value;
  let bday = x.elements[3].value;
  let outResult = "";
  const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  // regex pattern for check uppercase, lowercase, number, & 8 char long
  if (!pattern.test(uid)){
    outResult += "Invalid UserID" + "<br>";
    console.log("User name must have one uppercase, one lowercase, one number, and 8 characters long");
  }
  if (fname === "")
    outResult += "Invalid fname" + "<br>";
  if (lname === "")
    outResult += "Invalid lname" + "<br>";
  if (bday === "")
    outResult += "Invalid birthday";
  document.getElementById("result").innerHTML = outResult;
}
// put your JavaScript code to read HTML inputs
// and validate inputs here using if statements
// and document.getElementById().innerHTML to display results
// write your JS functions here
// write your JS Loop For here to print the Xs
// use something like document.write(str.padStart(i,"x") + "<br>");
