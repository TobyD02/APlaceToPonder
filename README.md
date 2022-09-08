# A Place to Ponder
## Description

## Building the app for the first time
First export the api url variables for the front end

    export REACT_APP_API_URL=http://localhost:8080

Then the docker containers must be built. To do this run the command
    
    docker-compose up --build

Once this has been done, the app can be accessed from http://localhost:3000
