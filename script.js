const startDate = new Date("2024-07-19T20:32:00"); 

const messages = [
  "my choochi bole has been my favourite person ever since she opened that little yap of hers💕",
  "I love my pretty girl more everyday 💗",
  "the person who makes me the happiest💖💖💖",
  "only person to see the the side only choochii knows❤️",
  "im sooo proud of my pretty smartypants for everything shes done",
  "Forever sounds perfect with you ",
  "Every second with you is precious ✨",
  "You're my everything 💞"
];

function startTimer() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("loading").style.display = "block";
  
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      document.getElementById("counter").style.display = "block";
      showTime();
      setInterval(showTime, 1000);
      setTimeout(() => {
        startMessages();
      }, 4000);
    }, 4000); 
  
  } 
  

function maybeLater() {
  alert("balannai kiwwe yes obala guti denna kalin😠😠😤😤😒😒😒");
}

function showTime() {
  const now = new Date();
  let diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  diff -= years * 365 * 24 * 60 * 60 * 1000;
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  diff -= months * 30 * 24 * 60 * 60 * 1000;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 24 * 60 * 60 * 1000;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 60 * 60 * 1000;
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 60 * 1000;
  const seconds = Math.floor(diff / 1000);

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

function startMessages() {
  let i = 0;
  const msgContainer = document.getElementById("messages");

  const interval = setInterval(() => {
    if (i < messages.length) {
      const p = document.createElement("p");
      p.textContent = messages[i];

      
      let top = Math.random() * 60 + 10;
      let left = Math.random() * 80 + 5;
      if (top > 60 && left > 40 && left < 60) {
        top = 30; left = 75; 
      }

      p.style.top = `${top}%`;
      p.style.left = `${left}%`;

      msgContainer.appendChild(p);
      i++;
    } else {
      clearInterval(interval);
      document.getElementById("foreverBtn").style.display = "inline-block";
    }
  }, 1200);
}

function showFinalMessage() {
    
    document.getElementById("counter").style.display = "none";
    document.getElementById("messages").style.display = "none";
  
    
    const final = document.getElementById("finalMessage");
    final.innerHTML = `<h1>🥳🥳🥳<br>choochii clicked forever with meee<br>one nathi unath ,bunis have no choice😒<br>choochis stuck with me🥹❤️<br>forever with me❤️<br>anddd all of my chootii girls tummy aches will disappear from this kiss to her belly<br>( ˘ ³˘)♥︎<br>from my babys dearest,daddy❤️</h1>`;
  
    final.style.display = "flex";
    final.style.position = "fixed";
    final.style.top = "0";
    final.style.left = "0";
    final.style.width = "100%";
    final.style.height = "100%";
    final.style.backgroundColor = "rgba(255, 230, 255, 0.95)";
    final.style.zIndex = "200";
    final.style.justifyContent = "center";
    final.style.alignItems = "center";
    final.style.flexDirection = "column";
}
