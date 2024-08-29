let overlayBar = null;
let isDragging = false;
let startY = 0;

//create and setup the overlay bar
function createOverlay() {
  overlayBar = document.createElement('div');
  overlayBar.id = 'overlay-bar';
  document.body.appendChild(overlayBar);

//add event listeners to handle when the user drags/releases the overlay bar
  overlayBar.addEventListener('mousedown', stopDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', startDrag);
}

//start of drag / checks if the user is dragging
function startDrag(e) {
  isDragging = true;
  startY = e.clientY;
}

//is the user dragging? calculate/update position change
function drag(e) {
  if (!isDragging) return;

  const deltaY = e.clientY - startY;
  const newHeight = overlayBar.offsetHeight + deltaY;

  if (newHeight >= 0) {
    overlayBar.style.height = newHeight + 'px';
    startY = e.clientY; 
  }
}

//end of drag operation
function stopDrag() {
  isDragging = false;
}

//initialize overlay & setup event listeners
createOverlay();