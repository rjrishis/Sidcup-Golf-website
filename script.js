var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursorBlur")
document.addEventListener("mousemove" ,(dets)=>{
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrblr.style.left = dets.x - 250 +"px"
    crsrblr.style.top = dets.y - 250+"px"
})
var h4all = document.querySelector("#nav h4")
h4all.forEach(function(element){
    element.addEventListener("mouseenter" , function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"

    })
})
    

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav" , 
        scroller:"body",
        markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }

}) 
