function getBotResponse(input) {
    
    // Simple responses
    if (input == "hello") {
        return "Hello,Welcome to EGBot\nWhat can i do for you";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    
    } else if(input == "Can you give roadmap for full stack developer"){
        return ``;
    }
    else if(input == `what can you do`||input == 'what you can do'||input == 'what you do') {
        return "I am Educational bot,I can help for your career paths";
    }
    else if(input == `what is your name` ||input == `your name `|| input == `tell your name `)
    {
        return "I am EG-BOT your personal assistant."
    }
    else if(input == `Tell about frontend ` ||input == `which are frontend`|| input == `frontend `)
    {
        return "1.HTML 2.CSS 3.JS "
    } 
    else if(input == `Tell about HTML ` ||input == `HTML`|| input == `What is html`)
    {
        return "HTML is a markup language which use to design the structure of the website"
    }
    else if(input == `Tell about css` ||input == `CSS `|| input == `What is css `)
    {
        return "css is styling language which is used to style the website"
    }
    else if(input == `what is js` ||input == `js`|| input == `tell about js `)
    {
        return "js means javascript its a scripting language, everyone confuse with java and js but this to things are different"
    }
    else if(input == `i want to became a full stack developer` ||input == `full stack developer`)
    {
        return "Becoming a full stack developer is an exciting and rewarding journey! It involves mastering both front-end and back-end technologies to build robust and dynamic web applications. Here's a roadmap to help you get started and progress along your path to becoming a full stack "
    }
    else if(input == `what is js` ||input == `js`|| input == `tell about js `)
    {
        return "js means javascript its a scripting language, everyone confuse with java and js but this to things are different"
    }
    else if(input == `what is js` ||input == `js`|| input == `tell about js `)
    {
        return "js means javascript its a scripting language, everyone confuse with java and js but this to things are different"
    }
    else if(input == `what is js` ||input == `js`|| input == `tell about js `)
    {
        return "js means javascript its a scripting language, everyone confuse with java and js but this to things are different"
    }
    else {
        return "Try asking something else!";
    }

}