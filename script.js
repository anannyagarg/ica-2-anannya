var quotes = [
    '- When you look at the stars and the galaxy, you feel that you are not just from any particular piece of land, but from the solar system. - Kalpana Chawla',
    '- We are all stars in this galaxy All of us No one is greater than the other - Scatman Crothers', 
    '- However alert we are, antiquity remains an unknown, unanticipated galaxy - Donald Hall', 
    '- Aim for the moon. If you miss, you may hit a star - W. Clement Stone', 
    '- We are all like the bright moon, we still have our darker side - Khalil Gibran', 
    '- You can be the moon and still be jealous of the stars - Gary Allan', 
    '- Language exerts hidden power, like the moon on the tides - Rita Mae Brown', 
    '- The lovers of God never run out of patience, for they know that time is needed for the crescent moon to become full - Rumi', 
    '- Stars cant shine without darkness. - D.H. Sidebottom',
    '- Remember not to get too close to stars, theyre never gonna give you love like ours - bilie eilish',
    '- If I make music and people hate it, you know, whatever. Ill die someday, and one day, they will too. - billie eilish ',
    "- Look at the stars... It helps you to remember that you and your problems are both infinitesimally small and conversely, that you are a piece of an amazing and vast universe. - kate bartolota",
    "- Keep up the good work, if only for a while, if only for the twinkling of a tiny galaxy - wislava",
    "- I had always seen myself as a star; I wanted to be a galaxy - twyla tharp",
    "- We must remember that the sun is a star, but not all the stars are the sun. - munia khan",
    "- It is quite the big galaxy, perspective is ever a good thing. It is small compared to the Universe, one of an estimated trillion, more perspective - caa savastano",
    "- Everybody is their own galaxy, their own separate entity - weyes blood",
    "- We're electrical items and when we die the electricity goes somewhere else. When we die our energy goes into the galaxy - dominic monaghan",
    "- Is it not careless to become too local when there are four hundred billion stars in our galaxy alone - ammons",
    "- how you compredend what you aint understandng - post malone",
    "- The priceless galaxy of misinformation called the mind - djuna barnes",
    "- Everything dies, from the smallest blade of grass to the biggest galaxy - stephen ronaldson",
    "- How can you look at the galaxy and not feel insignificant? - ridley scott",
    "- I've always thought that we, as human beings, would be naive and arrogant to pretend that we're the only life form in the galaxy. - johanathan frake",
    "- There are at least as many galaxies in our observable universe as there are stars in our galaxy - martin rees",
    "- Perhaps two million years ago the creatures of a planet in some remote galaxy faced a musical crisis similar to that which we earthly composers face today - george crumb",
    "- There may be aliens in our Milky Way galaxy, and there are billions of other galaxies. The probability is almost certain that there is life somewhere in space - buzz aldrin",
    "- Since androids are, by definition, a product of that illogical mind, a more likely scenario is that they will evolve to resemble their masters more and more.",
    "- The ships hung in the sky in much the same way that bricks don't - douglas adams",
    "- however alert we are antiquity remains an unknown, unanticipated galaxy.- donal hall",
    "- Those freckles make you seem like a galaxy of stars, just waiting to be explored and loved - nikita gill",
    "- Never apologize for burning too brightly or collapsing into yourself every night. That is how galaxies are made - tyler white",
    "- The dancing Sun the dancing moon the dancing stars and the dancing galaxies are the direct expression of our divine Self - amit ray",
    "- Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious - stephen hawking",
    "- I can wait for the galaxy outside to get a little kinder - becky chambers",
    "- People will seek the ends of the galaxy to avoid that which they need most - criss jami",
    "- She wasnt a constellation. She was a galaxy - nitya prakash",
    "- To infinity and beyond!- buzz lightyear",
    "- you made me hate this city - billie eilish",
    "- fool me once, fool me twice, are you death or paradise? - billie eilish",
    "- the worlds a little blurry, or maybe its my eyes - billie eilish"
]

function newquote() { /* function behing the button 'new quote' */
    var randomNumber = Math.floor(Math.random() * (quotes.length)); 
    /* floor so that we get integer, random for number, and length for number of quotes */
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber]; 
    /* we link the id 'quotedisplay' to show in html. place var 'quotes' in the id so random ones show up */
}

function newBackgroundColor() { 
    
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = 256;

    
    var newColor = `rgb(${r},${g},${b})`;

   
    document.body.style.backgroundColor = newColor;
}
