# FlashCards
Simple flash cards web application for studying.
Thought as a free resource for teachers with some knowledge on development

# Usage
This app is meant to be copyed and updated with any deck of cards the teacher wants to share with students.
Flashcards can be used for example as a resource for reviewing or aiding in homework.
No data is saved other than a single deck of cards that is shown in the application.

# What you need
1. Install Node.js
2. A source-code editor such as VSCode
3. GitHub Desktop (recommended)

# Setup
1. Fork this repository
2. Pull the project with git (GitHub Desktop makes it very simple)
3. From a Terminal (can be opened inside VSCode), navigate to the project ```FlashCards/flash-cards/``` and install dependencies with ```npm install```
4. The project can be run with ```npm start```

# Customization
1. Inside flash-cards/src/data a testCards.json file can be found, this is the default deck
2. Modify the deck by providing text and optionally an image url to each card
3. Additional .json files may be created, however the current deck of cards must be imported inside src/App.tsx in ```import cards from './data/testCards.json'```;
4. Test that the correct deck is selected before deploying

# Deployment
In order to be shared, the app with customized content has to be deployed as a github page.
Each time the deck is changed, the project most be redeployed in order to reflect the changes on the website.
This requires only a simple command, but there is an initial setup to be done beforehand:

1. Inside flash-cards/package.json update the "homepage" to your own github page ("https://[YOUR-USER-NAME].github.io/FlashCards/")
2. From inside the project in a Terminal run ```npm run deploy```
3. Inside Github check the Settings of your forked project, inside there is a Pages section. There should be a link to your FlashCards page inside (it might take a couple of minutes from when you deploy)

Everytime you make a change you need only to repeat the step 2 above. The link to your github page will be the same.
