$(window).scroll(function () {
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    }
    else {
      $("nav").removeClass("black");
    }
  })



  const HightlightNavbar = () =>{
    const homehighlight=document.querySelector(".hsec");
    const serviceshighlight=document.querySelector(".ssec");
    const portfoliohighlight=document.querySelector(".psec");
    const pricinghighlight=document.querySelector(".prsec");
    const contacthighlight=document.querySelector(".csec");
    let scrollpos = window.scrollY;
    if(scrollpos<500){
      homehighlight.classList.add("active");
      serviceshighlight.classList.remove("active");
      portfoliohighlight.classList.remove("active");
      pricinghighlight.classList.remove("active");
      contacthighlight.classList.remove("active");
      return
    }
    else if(scrollpos<1400){
      homehighlight.classList.remove("active");
      serviceshighlight.classList.add("active");
      portfoliohighlight.classList.remove("active");
      pricinghighlight.classList.remove("active");
      contacthighlight.classList.remove("active");
      return
    }
    else if(scrollpos<2300){
      homehighlight.classList.remove("active");
      serviceshighlight.classList.remove("active");
      portfoliohighlight.classList.add("active");
      pricinghighlight.classList.remove("active");
      contacthighlight.classList.remove("active");
      return
    }
    else if(scrollpos<2800){
      homehighlight.classList.remove("active");
      serviceshighlight.classList.remove("active");
      portfoliohighlight.classList.remove("active");
      pricinghighlight.classList.add("active");
      contacthighlight.classList.remove("active");
      return
    }
    else if(scrollpos<3500){
      homehighlight.classList.remove("active");
      serviceshighlight.classList.remove("active");
      portfoliohighlight.classList.remove("active");
      pricinghighlight.classList.remove("active");
      contacthighlight.classList.add("active");
      return
    }
  }

  window.addEventListener('scroll' ,HightlightNavbar);
  window.addEventListener('click' ,HightlightNavbar);