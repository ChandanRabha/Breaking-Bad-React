# React App Made Using BREAKING BAD API with FIREBASE as authenticatation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

To initialise all used packages
### `yarn init` OR `npm init`
To run
### `yarn start` OR `npm start`
### `remove homepage line from package.json before initialising app`
This project was created using Create React App. Data is taken from BREAKING BAD API and Firebase is used for Authentication.

# Key Points About the Project

=>Application was made only using Functional Components and React Hooks. 

=>For Authentication Firebase is used. (Note): To run the application in a local machine, the firebase api details need to be saved in the 'env' file in the root directory of the project.

=> The Project utilises the Breaking Bad Api in two ways that is Character Wise and Episodic Wise.

=> Pagination has been added for both types of views of data for easy accessibility.

=>Login, Register and Forgot Password System is integrated

=>User Data is saved on localStorage of the Browser on successfull login.


# Design Details About the Project

=>The data of both character wise and episode wise is loaded on the first load of the application.This was done so that data will not be fetched again and again as different views are rendered. A useEffect hook executes for the first time where the data are fetched and stored in state variables.

=>A main grid component takes the contents of both character wise and episode wise data where based on the users selection of which view to render that specific component is rendered at a time.

=>Responsive layout is added for accessibily in smaller devices.

