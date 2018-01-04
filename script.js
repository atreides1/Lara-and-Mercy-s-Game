let pos = 0;
let neg = 0;

function updateScore()
{
  if (pos >= neg)
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
  pos++;
  console.log(pos);
};

function updateNeg()
{
  neg++;
  console.log(neg);
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
