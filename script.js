function begin()
{
  if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      sessionStorage.setItem("pos", 0);
      sessionStorage.setItem("neg", 0);
  } else {
      console.log("No can do, your browser does not support web storage, sorry!")
  }
};
//let pos = 0;
//let neg = 0;
console.log(sessionStorage.pos);
console.log(sessionStorage.neg);
function updateScore()
{
  if (Number(sessionStorage.pos) >= Number(sessionStorage.neg))
  {
    d = document.getElementById("next");
    p = document.createElement('a');
    p.href = 'end1.html';
    p.innerHTML = "Next";
    d.appendChild(p);
  }
  else
  {
    //set link to end2
    d = document.getElementById("next");
    p = document.createElement('a');
    p.href = 'end2.html';
    p.innerHTML = "Next";
    d.appendChild(p);
  }
  return true
};

function updatePos()
{
  sessionStorage.pos = Number(sessionStorage.pos) + 1;
  console.log(sessionStorage.pos);
};

function updateNeg()
{
  sessionStorage.neg = Number(sessionStorage.neg) + 1;
  console.log(sessionStorage.neg);
};

function firstChoice()
{
  const p1 = document.getElementById('p1');
  const n1 = document.getElementById('n1');
  p1.addEventListener('click', updatePos);
  n1.addEventListener('click', updateNeg);
};

function secondChoice()
{
  const p2 = document.getElementById('p2');
  const n2 = document.getElementById('n2');
  p2.addEventListener('click', updatePos);
  n2.addEventListener('click', updateNeg);
};

function thirdChoice()
{
  const p3 = document.getElementById('p3');
  const n3 = document.getElementById('n3');
  p3.addEventListener('click', updatePos);
  n3.addEventListener('click', updateNeg);
};
