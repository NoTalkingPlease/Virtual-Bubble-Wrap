const bubbleWrap = document.getElementById('bubble-wrap');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.addEventListener('click', () => {
    bubble.classList.add('popped');
  });
  bubbleWrap.appendChild(bubble);
}

function createBubbles() {
  for (let i = 0; i < 100; i++) {
    createBubble();
  }
}

createBubbles();
