gsap.to('.title', {
  duration: 2,
  y: '40px',
  //   backgroundColor: 'tomato',
  //   border: '10px solid tomato',
  ease: 'bounce',
});

gsap.from('.img', {
  duration: 2.5,
  opacity: 0,
  scale: 0.3,
  ease: 'back',
});

gsap.from('.people-item', {
  duration: 1,
  opacity: 0,
  y: () => Math.random() * 400 - 200,
  stagger: 0.25,
});
