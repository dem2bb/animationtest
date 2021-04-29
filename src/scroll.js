import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: {
    className: 'header--scrolled',
    targets: '.header',
  },
});
