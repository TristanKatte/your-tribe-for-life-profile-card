const card = gsap.utils.toArray('.card')[0]
const topSection = document.querySelector('#top')

topSection.addEventListener('mousemove', (event) => {
  const mouseX = -((window.innerWidth / 2) - event.pageX) / 30
  const mouseY = ((window.innerHeight / 2) - event.pageY) / 10

  gsap.to(card, {
    duration: 0.5,
    rotationY: mouseX,
    rotationX: mouseY,
    ease: 'power2.out'
  })
})