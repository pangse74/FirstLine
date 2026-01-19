// src/data/characters.js

// This file maps a phrase ID to a character image.
// We are assuming the character images are named character-1.png, character-2.png, etc.
// and are located in the /src/assets/characters/ directory.

// Since there are 100 phrases and 31 characters, we'll loop through the characters.
const characterImageMapping = {};
for (let i = 1; i <= 100; i++) {
  const characterIndex = ((i - 1) % 31) + 1;
  characterImageMapping[`phrase${i}`] = `character-${characterIndex}`; // Removed .png
}

export { characterImageMapping };
