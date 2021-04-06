function updateClock() {
    document.getElementById("clock").textContent=new Date();
  }
  
  setInterval(updateClock, 12000);