# socialMediaBackend
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application is a simple framework for a social media backend site. Being a backend it will only have API server functionality and will need to use you choice of postman, insomina, etc to interact and test the site

The site uses mongoDB as it's database and express as the communication layer to recieve and update data based on the api commands available.


A deployment of this app can be viewed at the link below

Please view the walkthrough video below.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Clone repo from the github link, in the CLI run npm i, if you want to test the site it is reccomended that you run the seed command "npm run seed". run npm run to start your server locally.

No enviorment variable were used in this backend but it does assume you are running mongoDB locally on your machine if you need to access an offsite mongo db you will need to update the mongo URI in the config file.

## Usage

a database must be established on a mongoDB server and a URI for that database must be made sure that it matches what is in the config/connection.js

npm start and you are running off your local machine.


## Contributing

n/a

## How-to-contribute

n/a

## Tests

n/a

## Questions

For any questions refer to the MagicCrouton repository https://github.com/MagicCrouton/socialMediaBackend
or email inqueries to e.park5336@gmail.com

## License

This application is covered under the MIT license