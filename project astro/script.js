let button = document.querySelector(".submit");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let fullName = document.querySelector(".inp").value;
  const output = document.querySelector(".output");
//   const img1=document.querySelector(".leo");
//   const img2=document.querySelector(".scorpio")
//   const img3=document.querySelector(".vigro")
//   const img4=document.querySelector(".aques")
  let newName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
  let twochar = newName.slice(0, 2);
  const leo = ["Ma", "Mi", "Mu", "Me", "Ta", "Mo", "Ta", "Ti", "Te"];
  const scorpio = ["To", "Na","Ni","Nu","Ne","Ni","NO","Ya","Yi","Ye","Ya"];
  const virgo = ["Ra", "Ri", "Ru", "Re", "Ro", "Ta", "Tu"];
  const Aquarius = ["Gu", "Ga", "Go", "Sa", "Si", "Sh", "So", "Se", "Si"];

  const pics={
    con1:"leo.jpg",
    con1:"scor.jpg",
    con1:"vigro.jpg",
    con1:"aqu.jpg"
  };

  for (let i = 0; i < leo.length; i++) {
    if (twochar == leo[i]) {
      output.textContent = "You Are a , leo";
      document.getElementsByClassName("pict").src = pics.con1;
// document.querySelector("img1")
      return;

    } else if (twochar == scorpio[i]) {
      output.textContent = "You Are a , scorpio";
   
      return;
    } else if (twochar == virgo[i]) {
      output.textContent = "You Are a , virgo";
    //   document.querySelector("img3")
      return;
    } else if (twochar == Aquarius[i]) {
      output.textContent = "You Are a , Aquarius";
    //   document.querySelector("img4")
      return;
    } else {
      output.textContent = "Other zodiac sign comming soon";
    }
  }

  
  document.body.appendChild(img)
  let NewFullName=document.querySelector(".inp")

  NewFullName.value="";
  NewFullName.focus()
});
