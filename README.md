# FlashCards
Simple flash cards web application for studying

# Objective
Thought as a resource that can be easily forked and used by teachers with some knowledge on development

# Usage
This app is meant to be copyed and updated with any deck of cards the teacher wants to share with students.
Flashcards can be used for example as a resource for reviewing or aiding in homework.
No data is saved other than a single deck of cards that is shown in the application.

# Setup
1. Fork this repository
2. Pull the project with git (GitHub Desktop makes it very simple)
3. From a Terminal, navigate to the project ```FlashCards/flash-cards/``` and install dependencies with ```npm install``` (you need to have installed node js)
4. The project can be run with ```npm start```

# Customization
1. Inside flash-cards/src/data a testCards.json file can be found, this is the default deck
2. Modify the deck by providing text and optionally an image url to each card
3. Additional .json files may be created, however the current deck of cards must be imported inside flash-cards/App.tsx in ```import cards from './data/testCards.json'```;
4. Test that the correct deck is selected before deploying

# Deployment
In order to be shared, the app with customized content has to be deployed as a github page.
Each time the deck is changed, the project most be redeployed in order to reflect the changes on the website.
1. 

