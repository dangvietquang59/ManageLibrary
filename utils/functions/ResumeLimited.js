const wordLimit = 100;

// Hàm để giới hạn số từ của resume
export const limitWords = text => {
  if (!text) return ''; // Check if text is undefined
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  } else {
    return text;
  }
};
