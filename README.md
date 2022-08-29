# FlashCards
Simple flash cards web application for studying. A free resource for teachers with some development knowledge.

# Usage
This app is meant to be copied and updated with any information to create a custom deck of cards the teacher wants to share with students. Flashcards can be used, for example, as a resource for reviewing in class or as homework. No data is saved other than the single deck of cards that is shown in the application.

# What you need
1. Install Node.js
2. Install Yarn
3. A source-code editor such as VSCode
4. GitHub Desktop (recommended)

# Setup
1. Fork this repository
2. Pull the project with git (GitHub Desktop makes it very simple)
3. From a Terminal (can be opened inside VSCode), navigate to the project ```FlashCards/flash-cards/``` and install dependencies with ```yarn```
4. The project can be run with ```yarn start```

# Customization
1. Inside flash-cards/src/data find the testCards.json file. This is the default deck.
2. Modify the deck by editing the text and adding an optional image url to each card.
3. Additional .json files may be created, however the current deck of cards must be imported inside src/App.tsx in ```import cards from './data/testCards.json'```
4. Test that the correct deck is selected before deploying.

# Deployment
In order to be shared, the app with customized content has to be deployed as a GitHub page. Every time the deck is changed, the project must be redeployed in order to reflect the changes on the website. This requires only a simple command, but there is an initial setup to be done beforehand:

1. Inside flash-cards/package.json update the "homepage" to your own github page ("https://[YOUR-USER-NAME].github.io/FlashCards/")
2. From inside the project in a Terminal run ```yarn run deploy```
3. Inside GitHub, check the Settings of your forked project. You should see a "Pages" section. There should be a link to your FlashCards page inside (it might take a couple of minutes from when you deploy).

Every time you make a change, you need only to repeat step 2 above. The link to your GitHub page will stay the same.
