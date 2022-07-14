let active
let expanders = gsap.utils.toArray(".expander")

expanders.forEach(function(expander, index){
    let close = expander.querySelector(".close")
    let animation = gsap.timeline({paused:true})
    animation.to(expander, {width:200, duration:0.4})
        .from(close, {opacity:0, scale:0.4, duration:0.1, x:"-=10"}, "-=0.1")
    expander.animation = animation // assign the animation to the current element

    expander.addEventListener("click", function(){

        if(active){
            active.animation.reverse() // reverse (close) active element's animation
        }

        expander.animation.play() // play (open) the clicked element's animation
        active = expander
    })

    close.addEventListener("click", function(event){
        event.stopPropagation()
        expander.animation.reverse()
    })

    console.log(expander)
    console.log(animation)
})

gsap.set(".expander", {backgroundColor:gsap.utils.wrap(["#f5ce5b", "#c570b6", "#78d6e0"])})

//initial state in full view at 800 x 450
gsap.set("img", {clipPath:"polygon(0px 0px, 800px 0px, 800px 450px, 0px 450px)"})

//animate to clipped state
gsap.to("img", {clipPath:"polygon(120px 0px, 680px 0px, 680px 300px, 120px 300px)", duration:2, repeat:3, yoyo:true})
