const greetings = ['नमस्ते', 'नमस्कार', 'Hi there', 'Hola', 'Salut', 'やあ', 'Ciao'];
document.getElementById('hi').textContent = greetings[Math.floor(Math.random() * greetings.length)];

const loveText = 'explorations, computers, and fiction.';

let start = 0;
const stop = loveText.length;

const id = setInterval(() => {
  document.getElementById('love').textContent = loveText.slice(0, start);

  start++;

  if (start > stop) {
    clearInterval(id);
  }
}, 90);

console.log(
  `Hi!\nIt's good to see you here.😊\n\nI think you have already read my intro packaged into a bunch of utf-8 sequences.\nI often build some crazy stuff.`,
);
