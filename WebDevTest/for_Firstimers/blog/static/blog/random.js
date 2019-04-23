
var document = "{% templates 'blog/about.html' %}";
(function(document, undefined) {

var theThing = document.querySelector('#chosen span')

var button = document.getElementById('choose-winner');
var theIntro = document.getElementById('span');
var input = document.getElementById('userInput');
index=0;
var options = ['one'];
button.addEventListener('click', function(){
  console.log(input.value);
get_activity(input.value.split("\n"));

}, false)

function get_activity(options){
  var index = 0, looper;

  function cycle(){
  var activity = options[index++ % options.length];

  theThing.textContent = activity;
  looper = setTimeout(__cycle, 80);
  cycle();
  };




  setTimeout(function(){
    clearTimeout(looper);
    theThing.textContent = options[options.length-1];

  }, 100);
}
})(document);
