const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" }
];

// This selects a quote based on the day of the year for daily rotation using Math Library
function getDailyQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const quoteIndex = dayOfYear % quotes.length;
    return quotes[quoteIndex];
}

function displayDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').innerText = today.toLocaleDateString('en-US', options);
}

