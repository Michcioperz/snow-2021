setInterval(() => {
  const posX = Math.random();
  if (!document.hidden) {
    const droplet = document.createElement("div");
    droplet.style.position = "fixed";
    droplet.style.zIndex = "-999";
    droplet.style.height = droplet.style.width = "1mm";
    droplet.style.borderRadius = "0.5mm";
    droplet.style.backgroundColor = "rgba(255, 250, 250, 0.42)";
    droplet.style.border = "0.1mm solid darkslategray";
    droplet.style.top = "-10vh";
    const left = `${(posX * 100).toFixed(2)}vw`;
    droplet.style.left = left
    document.body.appendChild(droplet);
    droplet.addEventListener("transitionend", () => {
      document.body.removeChild(droplet);
    });
    droplet.style.transition = "top 13.37s linear";
    setTimeout(() => {
      droplet.style.top = "110vh";
    }, 160);
  }
}, 420);
