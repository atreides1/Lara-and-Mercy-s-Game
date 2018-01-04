let pos = 0;
let neg = 0;

function updateScore()
{
  if (pos > neg)
  {
    //set link to end1
  }
  else
  {
    //set link to end2
  }
  return true
}

function updatePos()
{
  pos++;
}

function updateNeg()
{
  neg++;
}

var element = document.getElementById('myElement');
element.addEventListener('click', clickHandler);
