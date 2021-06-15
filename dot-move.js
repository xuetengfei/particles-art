var timer = null;
var sound = null;
var image = $('#goal');
var audiolist = document.getElementById('list');

$(document).ready(function () {
  var divs = $('#f div');
  console.log('divs.length', divs.length);
  for (let index = 0; index < divs.length; index++) {
    let element = divs[index];
    animateDiv(element);
  }
});

$('#f').delegate('div', 'click', function (ev) {
  if (timer) return;
  // console.log('click');
  come($(this));
});

image.click(function () {
  leave();
  if (timer) {
    clearTimeout(timer);
  }
});

function come(dom) {
  dom[0].animate({ background: '#FFFB00', opacity: 1 }, 1000, 'linear');
  let nextSrcIdx = randomIntegerInRange(1, 10);
  let nextSrc = './images/' + nextSrcIdx + '.jpg';
  let nextAudio = './mpeg/' + nextSrcIdx + '.mp3';
  image.attr('src', nextSrc);
  sound = new Howl({
    src: [nextAudio],
  });
  image.animate(
    { width: '60vw', height: '60vw', opacity: 1 },
    1500,
    'swing',
    function () {
      sound.play();
      timer = setTimeout(function () {
        leave();
      }, 10000);
    },
  );
}

function leave() {
  sound.stop();
  image.animate(
    { width: 0, height: 0, opacity: 0 },
    1000,
    'swing',
    function () {
      timer = null;
    },
  );
}

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

// 随机整数
function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
