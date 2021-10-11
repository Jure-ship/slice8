window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    
    document.querySelector(
      ".box11"
    ).style.transform = `translateY(${distance * 1}px)`;
    setTimeout(() => {
      document.querySelector("#sec2").classList.add(".cont1");
    }, 400);
  });