var tl =  gsap.timeline()

tl.from("#navbarNav",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:2,
   stagger:0.3,
})


tl.from("h1",{
    x:-20,
    opacity:0,
    duration:1,
   stagger:0.3,
})

tl.from("#SERVICE",{
    x:-20,
    opacity:0,
    duration:0,
   stagger:1.2,
})