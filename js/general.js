const FloatLabel = (() => {

  // add active class
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };

  // remove active class
  const handleBlur = (e) => {
    const target = e.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }
    target.removeAttribute('placeholder');
  };

  // register events
  const bindEvents = (element) => {
    const floatField = element.querySelector('input, textarea');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);
  };

  // get DOM elements
  const init = () => {
    const floatContainers = document.querySelectorAll('.input-container');

    floatContainers.forEach((element) => {

      if (element.querySelector('input, textarea').value) {
        element.classList.add('active');
      }

      bindEvents(element);
    });
  };

  return {
    init: init
  };
})();

FloatLabel.init();

function scrollToAbout() {
  document.querySelector('#about_segment').scrollIntoView({behavior: 'smooth'});
}

function scrollToPricing() {
  document.querySelector('#pricing_segment').scrollIntoView({behavior: 'smooth'});
}


function scrollToForm() {
  document.querySelector('#form').scrollIntoView({behavior: 'smooth'});
}

function scrollToTestimonials() {
  document.querySelector('#testimonial_segment').scrollIntoView({behavior: 'smooth'});
}

function scrollToLatestNews() {
  document.querySelector('#News_segment').scrollIntoView({behavior: 'smooth'});
}



const navbar = document.getElementById('nav-container')

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 0 - add class
  if (scroll > 30) {
    navbar.classList.add("nav-scrolling");
  } else {
    navbar.classList.remove("nav-scrolling")
  }
}

// Optional - throttling onScroll handler at 100ms with lodash
// const throttledOnScroll = _.throttle(onScroll, 100, {})

// Use either onScroll or throttledOnScroll
window.addEventListener('scroll', onScroll)