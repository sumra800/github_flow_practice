function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomHex(length) {
  let result = "";
  const chars = "0123456789abcdef";
  for (let i = 0; i < length; i++) {
    result += chars[getRandomInt(0, chars.length - 1)];
  }
  return result;
}

function generateRandomCode() {
  const snippets = [
    `const id = '${getRandomHex(8)}';`,
    `const count = ${getRandomInt(1, 100)};`,
    `const active = ${Math.random() < 0.5};`,
    `const message = 'Random code: ${getRandomHex(4)}';`,
  ];

  return snippets.map((line) => line).join('\n');
}

console.log(generateRandomCode());
