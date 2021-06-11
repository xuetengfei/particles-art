$(document).ready(function () {
  var divs = $('#f div');
  console.log('divs.length', divs.length);
  for (let index = 0; index < divs.length; index++) {
    let element = divs[index];
    animateDiv(element);
  }
});

function makeNewPosition() {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  var width = Math.floor(Math.random() * 40);
  return [nh, nw, width];
}

function animateDiv(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate(
    {
      top: newq[0],
      left: newq[1],
      width: newq[2],
      height: newq[2],
    },
    10000,
    'swing',
    function () {
      setTimeout(() => {
        animateDiv(myclass);
      }, Math.floor(Math.random() * 5000));
    },
  );
}

var timer = null;
var image = $('#goal');

$('#f').delegate('div', 'click', function (ev) {
  if (timer) return;
  console.log('$(this)', $(this));
  console.log('click');
  come();
});

// particlesJS

// $('#app').click(function () {
//   if (timer) return;
//   console.log('click');
//   come();
// });

function come() {
  image.animate(
    { width: '60vw', height: '60vw', opacity: 1 },
    1500,
    'swing',
    function () {
      timer = setTimeout(function () {
        leave();
      }, 5000);
    },
  );
}

function leave() {
  image.animate(
    { width: 0, height: 0, opacity: 0 },
    1000,
    'swing',
    function () {
      let prevSrc = image.attr('src');
      let nextSrc =
        prevSrc == './images/1.jpeg' ? './images/2.jpeg' : './images/1.jpeg';
      image.attr('src', nextSrc);
      timer = null;
    },
  );
}
