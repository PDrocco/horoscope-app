const prompt = require('prompt-sync')();
const month = prompt("What month were you born in? ");

const fortunes = [
    "Today is a great day to take risks! The stars are aligned in your favor.",
    "A surprise opportunity will come your way—be open to change!",
    "Avoid conflicts today; patience will lead to better outcomes.",
    "Your creativity is at its peak—use it to solve problems.",
    "A financial opportunity may appear unexpectedly. Stay alert!",
    "Someone from your past will reconnect with you soon.",
    "Trust your instincts—they will guide you correctly today.",
    "A long-held wish may finally come true. Keep believing!",
    "Take time for self-care today. Balance is key.",
    "A new friendship will bring joy into your life."
]
const randomFortune = fortunes[(Math.floor(Math.random() * 10))];

const signs = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"
]

const months = [
    "January",
    "February",
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const monthIndex = months.indexOf(month);
if (monthIndex !== -1) {
    const sign = signs[monthIndex];
    console.log('Hey',sign,'person, ',randomFortune);
} else {
    console.log('Invalid month!');
}