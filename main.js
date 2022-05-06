import './style.css'
import { gsap } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";

const send = document.querySelector('.sendMail')

const scaleTween = gsap.to(send, {scale: 1.2, repeat: 15, yoyo:true, paused: true})

send.addEventListener('mouseenter', () => {
    scaleTween.restart()
})

send.addEventListener('mouseleave', () => {
    scaleTween.pause()
    gsap.to(send, {scale: 1})
})

gsap.registerPlugin(TextPlugin);

gsap.to(".Main-text", {
    text:"Home",
    ease:"power1.in",
    duration:1,
    repeat:10,
    yoyo:true,
    repeatDelay:0.4
})
