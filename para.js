const emojiContainer = document.createElement("div");
emojiContainer.classList.add("emoji-container");
document.body.appendChild(emojiContainer);

const emojis = ["❤️", "💕", "💖", "💓", "💗", "💘", "💞"];
const numEmojis = 30;

for (let i = 0; i < numEmojis; i++) {
  const emoji = document.createElement("span");
  emoji.classList.add("emoji");
  emoji.style.top = "0";

  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = `${Math.random() * 100}%`;
  emoji.style.animationDuration = `${5 + Math.random() * 5}s`;
  emojiContainer.appendChild(emoji);
}
