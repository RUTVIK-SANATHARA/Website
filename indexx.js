// console.log("first");


// var typed = new Typed(".autoinp", {
    //   strings: [
    //     "UX & UI designer",
    //     "Frontend",
    //     "Web Developer"
    //   ],
    //   typeSpeed: 200,
    //   backSpeed: 200,
    //   loop: true
    // });
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");

    let p1 = document.querySelector(".p1");
    let p2 = document.querySelector(".p2");
    let p3 = document.querySelector(".p3");
    let p4 = document.querySelector(".p4");
    let p5 = document.querySelector(".p5");
    let p6 = document.querySelector(".p6");

    const add1 = () => {
      if (btn1.innerHTML === "See More") {
        btn1.innerHTML = "Less"
      } else {
        btn1.innerHTML = "See More"
      }
      p1.classList.toggle("text_elplis");
    }
    const add2 = () => {
      if (btn2.innerHTML === "See More") {
        btn2.innerHTML = "Less"
      } else {
        btn2.innerHTML = "See More"
      }
      p2.classList.toggle("text_elplis");
    }
    const add3 = () => {
      if (btn3.innerHTML === "See More") {
        btn3.innerHTML = "Less"
      } else {
        btn3.innerHTML = "See More"
      }
      p3.classList.toggle("text_elplis");
    }
    const add4 = () => {
      if (btn4.innerHTML === "See More") {
        btn4.innerHTML = "Less"
      } else {
        btn4.innerHTML = "See More"
      }
      p4.classList.toggle("text_elplis");
    }
    const add5 = () => {
      if (btn5.innerHTML === "See More") {
        btn5.innerHTML = "Less"
      } else {
        btn5.innerHTML = "See More";
      }
      p5.classList.toggle("text_elplis");
    }
    const add6 = () => {
      if (btn6.innerHTML === "See More") {
        btn6.innerHTML = "Less"
      } else {
        btn6.innerHTML = "See More"
      }
      p6.classList.toggle("text_elplis");
    }

    btn1.addEventListener("click", add1);
    btn2.addEventListener("click", add2);
    btn3.addEventListener("click", add3);
    btn4.addEventListener("click", add4);
    btn5.addEventListener("click", add5);
    btn6.addEventListener("click", add6);

    function write(obj, sentence, i, cb) {
      if (i != sentence.length) {
        setTimeout(function () {
          i++
          obj.innerHTML = sentence.substr(0, i + 1) + ' <em aria-hidden="true"></em>';
          write(obj, sentence, i, cb)
        }, 50)
      } else {
        cb()
      }
    }

    function erase(obj, cb, i) {
      var sentence = obj.innerText;
      if (sentence.length != 0) {
        setTimeout(function () {
          sentence = sentence.substr(0, sentence.length - 1)
          obj.innerText = sentence;
          erase(obj, cb);
        }, 18 / (i * (i / 10000000)))
      } else {
        obj.innerText = " "
        cb()
      }
    }

    var typeline = document.querySelector("#typeline");

    function writeErase(obj, sentence, time, cb) {
      write(obj, sentence, 0, function () {
        setTimeout(function () {
          erase(obj, cb)
        }, time)
      })
    }
    var sentences = [
      "Isha Amlani",
      "Graphic Designer",
      "UI-UX Designer",
      "3D artist"
    ]
    var counter = 0;

    function loop() {
      var sentence = sentences[counter % sentences.length]
      writeErase(typeline, sentence, 1500, loop)
      counter++
    }

    loop()
