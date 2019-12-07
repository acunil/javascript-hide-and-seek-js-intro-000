function getFirstSelector(selector){
  var f = document.querySelector(selector);
  return f;
}

function nestedTarget(){
  var j = document.getElementById('nested').querySelector('div.target');
  return j;
}

function increaseRankBy(n){
  var scores = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i<scores.length; i++){
    scores[i].innerHTML += 50;
    
  }
}


function deepestChild(){
  
}