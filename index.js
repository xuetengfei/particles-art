particlesJS('particlesJsWrapperBg', {
  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

particlesJS('particlesJsWrapper', {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    color: {
      value: '#fff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 1,
        color: '#000000',
      },
    },
    opacity: {
      value: 0.75,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
        mode: '',
      },
      resize: true,
    },
  },
  retina_detect: true,
});

var timer = null;
var image = $('#goal');

$('#app').click(function () {
  if (timer) return;
  console.log('click');
  come();
});

function come() {
  const prevSrc = image.attr('src');
  const nextSrc =
    prevSrc == './images/1.jpeg' ? './images/2.jpeg' : './images/1.jpeg';
  image.attr('src', nextSrc);
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
      timer = null;
    },
  );
}
