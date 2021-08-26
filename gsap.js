gsap.from("img", { opacity: 0, duration: 1, y: 50 });
gsap.from("h1", { duration: 1, y: -30, opacity: 0 });

var line = document.getElementsByClassName("line");

var tl = new TimelineLite({
  onComplete: function () {
    tl.restart();
  },
});

TweenLite.defaultEase = Circ.easeInOut;

var time = 0.9;
var y = 100;

tl.add(
  TweenMax.staggerFromTo(
    line,
    time,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
    },
    2
  )
).add(
  TweenMax.staggerTo(
    line,
    time,
    {
      delay: time,
      opacity: 0,
      y: -y,
    },
    2
  ),
  1.3
);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");

  section.bg.style.backgroundImage = `url(images/${i + 1}.webp)`;

  if (i) {
    section.bg.style.backgroundPosition = `50%${-innerHeight / 2}px`;

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    });
  } else {
    section.bg.style.backgroundPosition = "50% 0px";

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
});
