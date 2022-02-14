export let windowWidth = 0;
export let isMobile = true;

function handleResizeWindow() {
  windowWidth = document.documentElement.clientWidth;
  isMobile = windowWidth <= 752
}
  
window.addEventListener("resize", handleResizeWindow);

handleResizeWindow();