const quotes = [
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn"
    },
    {
        quote: "There is nothing impossible to they who will try.",
        author: "Alexander the Great"
    },
    {
        quote: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshulert"
    },
    {
        quote: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
        author: "Nicole Kidman"
    },
    {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        quote: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
        author: "Amal Clooney"
    },
    {
        quote: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
        author: "Duchess Meghan"
    },
    {
        quote: "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.",
        author: "Taylor Swift"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//console.log(quotes[Math.floor(Math.random()* quotes.length)]);