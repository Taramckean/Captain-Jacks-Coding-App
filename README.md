# Host Locally
Ensure any instances of Mongod are stopped, check the activity monitor just in case.

### Javascript-back-end

Navigate to the Javascript-back-end folder and do the following:

1. `npm install` installs required packages
2. `mongo < db/seedDB.js` creates db "pirates" and seeds the database
3. In terminal window 1: `mongod`
4. In terminal window 2: `npm start`

In third terminal window navigate to Javascript-front-end folder

### Javascript-front-end

1. In terminal window 3: `npm install`
2. In terminal window 3: `npm start`

### Localhost Information
Route information can be found in the Javascript-back-end folder in the server.js file.
* In order to view our api navigate to [localhost 3001](http://localhost:3001/)

* To view our website navigate to [localhost 3000](http://localhost:3000/)
