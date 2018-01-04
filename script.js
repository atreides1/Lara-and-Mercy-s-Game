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

//console.log(sessionStorage.pos);
//console.log(sessionStorage.neg);
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

function toggleRudeConvo()
{
  const here = document.getElementById("rudeConvo");
  const x = document.getElementById("rudeConvo").innerHTML;
  const p = document.getElementById("freakOut");

  const m1 = "click to continue";
  const m2 = "Hey doll face, I've been calling you,"
  const m3 = "Is something wrong, sir?"
  const m4 = "Do your parents still send you money?"
  const m5 = "I-I'm sorry...?"
  const m6 = "I just can't imagine how you could make a living if you live off of tips. My food may as well be freezing. Are you gonna fix this?";

  if (x == m1)
  {
    here.innerHTML = m2;
  }
  if(x == m2)
  {
  here.innerHTML = m3;
  }
  if (x == m3)
  {
    here.innerHTML = m4;
  }
  if (x == m4)
  {
    here.innerHTML = m5;
  }
  if (x == m5)
  {
    here.innerHTML = m6;
  }
  if (x == m6)
  {
    here.parentNode.removeChild(here);
    p.innerHTML = "I feel my insides burning. I need to get away. <br> I cannot stay here. <br> My whole body is moving, but it’s not me causing it. I’m trembling violently and I can’t do anything about it.";
    var a = document.createElement('a');
    var linkText = document.createTextNode("Continue");
    a.appendChild(linkText);
    a.href = "workWithChoices.html";
    document.body.appendChild(a);
  }
};

function toggleCalmDown() {
  const here = document.getElementById("calmDown");
  const x = document.getElementById("calmDown").innerHTML;
  const p = document.getElementById("calmText");
  const options = document.getElementById("options");
  const m1 = "Continue";
  const m2 = "Lila, are you alright?";

  if (x == m1)
  {
    here.innerHTML = m2;
    p.innerHTML = "Somehow I am sitting down now.<br>Someone brought me here.<br>My face and hands feel soaked with tears and sweat.<br>Even now I cannot remain still. No part of my body can.";
    options.style.visibility = "visible";
  }
}
