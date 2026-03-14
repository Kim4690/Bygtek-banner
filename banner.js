(function () {

  var sections = [
    "Entreprenørmateriel",
    "VVS",
    "El & Belysning",
    "Trapper",
    "Døre & Vinduer",
    "Facader",
    "Gulv",
    "Tag",
    "Værktøj",
    "Indeklima",
    "Biler i Byggebranchen",
    "Kloak & Afvanding",
    "Isolering",
    "Nedrivning",
    "Miljøsanering",
    "Træ",
    "Arbejdstøj"
  ];

  var banner = document.createElement("div");

  banner.style.width = "1920px";
  banner.style.height = "600px";
  banner.style.position = "relative";
  banner.style.overflow = "hidden";
  banner.style.fontFamily = "Arial";
  banner.style.cursor = "pointer";

  document.body.appendChild(banner);

  banner.onclick = function(){
    window.open("https://www.bygtek.dk","_blank");
  };

  var img = document.createElement("img");

  img.src = "banner.jpg";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.position = "absolute";
  img.style.transition = "filter 3s ease";

  banner.appendChild(img);

  var overlay = document.createElement("div");

  overlay.style.position = "absolute";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background =
  "linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.85))";
  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 3s ease";

  banner.appendChild(overlay);

  var container = document.createElement("div");

  container.style.position = "absolute";
  container.style.left = "50%";
  container.style.top = "50%";
  container.style.transform = "translate(-50%, -50%) scale(0.15)";
  container.style.textAlign = "center";
  container.style.opacity = "0";
  container.style.transition =
  "transform 2.6s cubic-bezier(.22,.61,.36,1), opacity 1.4s ease";

  banner.appendChild(container);

  var label = document.createElement("div");

  label.innerText = "Fagsektion";
  label.style.fontSize = "36px";
  label.style.color = "#153F78";

  var word = document.createElement("div");

  word.style.fontSize = "100px";
  word.style.fontWeight = "bold";
  word.style.whiteSpace = "nowrap";

  container.appendChild(label);
  container.appendChild(word);

  var index = 0;

  function blurBackground(){

    img.style.filter = "brightness(2.3) blur(6px) saturate(0.7)";
    overlay.style.opacity = "1";

  }

  function clearBackground(){

    img.style.filter = "brightness(1) blur(0)";
    overlay.style.opacity = "0";

  }

  function animateWord(){

    if(index >= sections.length){
      endCycle();
      return;
    }

    word.innerText = sections[index];

    container.style.opacity = "0";
    container.style.transform =
    "translate(-50%, -50%) scale(0.15)";
    word.style.color = "#9bb3d3";

    setTimeout(function(){

      container.style.opacity = "1";

      container.style.transform =
      "translate(-50%, -50%) scale(1.7)";

      word.style.color = "#153F78";

    },400);

    setTimeout(function(){

      container.style.opacity = "0";

      index++;

      setTimeout(animateWord,1800);

    },3400);

  }

  function endCycle(){

    container.style.opacity = "0";

    clearBackground();

    setTimeout(function(){

      index = 0;

      blurBackground();

      setTimeout(animateWord,4000);

    },7000);

  }

  function start(){

    setTimeout(function(){

      blurBackground();

      setTimeout(animateWord,4000);

    },3000);

  }

  start();

})();