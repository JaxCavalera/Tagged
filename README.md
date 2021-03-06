# **Tagged - Testing and Report**


* * *



## Contents
**[◄ Purpose ►](#purpose)**

**[◄ Milestone One ►](#milestone-one)**   
[Development Environment Setup](#development-environment-setup)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Node & Webpack Setup](#node--webpack-setup)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Preparing for Webpack-dev-server](#preparing-for-webpack-dev-server)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Installing Webpack-dev-server](#installing-webpack-dev-server)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Running the Server](#running-the-server)   
[React Setup](#react-setup)   
[Development of Web Application](#development-of-web-application)   
[Testing](#testing)    

**== Extra Content ==**
[Callbacks and Promises](#calbacks-and-promises)    
- - -





# Purpose
The purpose of this document is to detail the development and test results for the initial setup to this non-isomorphic React web application. My primary goal for this document is to keep a point of reference for future development work and is not intended as a tutorial guide as there are much better guides out there.

Essentially this is my personal, informal tutorial on getting up and running with Node.js, React and Webpack.  It does not consider Redux or React-Router as those demand significant alterations to both the code and directory structure to best suit their approach to **state** management.

[Back to Top](#contents)

- - -
# Milestone One
## Development Environment Setup
#### Node & Webpack Setup
Node.js is responsible for hosting all of the modules required to run and develop web applications including the Node Package Manager (NPM). Webpack is responsible for bundling all of your project into a single bundle.js file which is placed inside the body tags of your index.html document and will load in all the components that form the web application.

Babel-loader is a webpack specific version of Babel, which is used to convert (parse) ES6 and JSX amongst other things into CommonJS (ES5). Webpack-dev-server will be used to auto-compile when changes to the source code are made and will also force refresh the browser to streamline the development process.

The HTML assembler, file and css loaders are used to process the "app" folder's contents and generate the deployable website in the "build" folder.

The process of setting up a testing and development environment for Tagged required the following steps to be performed in the order listed :

1. Download the latest stable release of Node.js as a compiled binary and install

2. Create the ROOT project folder with "build" and "app" as sub-directories.

3. Create the following directory structure inside "app" -> /app/heading/images

4. Through Terminal (command prompt), navigate to the project root folder and use NPM to do the following:
 - **Initialize the Project :** npm init
 - **Install Webpack :** npm install webpack --save-dev
    - **--save**, lists the module in the dependency section of package.json

    - **-dev**, moves it to the developer section in package.json   
    `for dev use only (won't be installed when npm install is ran on your package)`

 - **Install Babel-Loader :** npm install babel-loader@5.x --save   
   `@5.x forces the latest 5.x version as 6.x is not fully supported at the time of writing.`

 - ** Install Jquery Library :** npm install jquery --save

 - **Install Autoprefixer & Postcss :** npm install postcss-loader autoprefixer --save

 - **Install CSS & File Loaders :** npm i css-loader style-loader file-loader url-loader --save

 - **Install HTML Assembler :** npm install html-webpack-plugin -D   
   `-D is shorthand for --save-dev.  i is shorthand for install.`

5. Open Package.json and add this to Scripts :
```
"scripts":
{
        "build": "webpack",
        "start": "webpack-dev-server --devtool eval --progress",
        "dev": "npm run build && npm run start"
}
```
[Back to Top](#contents)

- - -

#### Preparing for Webpack-dev-server
The next step is to prepare the computer for webpack-dev-server to be installed.  As the dev environment used for this project is Windows 10 it will require the following steps to be taken before the webpack-dev-server can be installed :

`Additional steps may be required for your operating system if following along, so be sure to do a quick google for webpack-dev-server prerequisites for your specific computer setup`

- Windows 10 requires the installation of [Python 2.7.3](http://www.python.org/download/releases/2.7.3#download)

- Add a **System** Environment Variable to the Path section.
 - Use the "Search Windows" charm in the taskbar to search for 'Environment Variable'.

 - In **System** *(not user)* add : *The folder where python.exe is located* `but not to the actual executable file`
 e.g: just add`c:/Python27/` just add it to the end of the long list of PATH variables putting a semi-colon ";" before your new entry and then press Apply/Ok or similar.
- If you have Visual Studio 2015 but did a "typical" install `which does not install c++ stuff required for webpack-dev-server to run correctly`, you can install the c\++ stuff by going **File** > **New Project** and trying to start a c\++ project.   

    You will get options to install things. Make sure you have a couple gb on your hard disk.

If you do not have Visual Studio currently Installed you can install VS 2015 Community and make sure you include the c\++ stuff in a custom installation.
([Source of information](https://github.com/nodejs/node-gyp/issues/629#issuecomment-151018292))

[Back to Top](#contents)

- - -

#### Installing Webpack-dev-server
Now that the prep work is completed it's time to install and configure the web server so open up command prompt to the root directory of the project and do the following :

- npm install webpack-dev-server --save-dev

- npm install ip --save

At this point, the packages used for detecting the Local IP and running the dev server are installed. The next task is to create the webpack.config.js file inside the root directory of the project and add **[the code linked here](https://github.com/JaxCavalera/Tagged/blob/Milestone1/webpack.config.js)**

[Back to Top](#contents)

- - -

#### Running the Server
To start the web server Two (2) more things need to be done. Firstly the following documents need to be created inside ROOT/app/ :

**Entry File - index.jsx**
```
import './default.css';
```

**Main CSS File - default.css**
```
*
{
    text-decoration: none;
    padding: 0px;
    margin: 0px;
}
```

The index.html page will be automatically generated and will include code for adding bundle.js `which is created when webpack runs`.

In web applications, favicons are used on mobile devices as "app icons" when a shortcut is established to your web application on the device Home screen. Generating the favicon and coding it to be picked up by the browser will be covered in the development stage of the report.

**Launching**   
The server can now be ran by opening the terminal to the ROOT directory of the project and entering the following commands to control the server operation :

- `npm run dev`  ► This starts the server which can be accessed in a browser at your local ip address followed by the port   
e.g 192.168.1.2:8080

- `Control+C`  ► This shortcut command will stop the server

The page should currently be blank and is ready for setting up React.

[Back to Top](#contents)

- - -

## React Setup
Now the server is working and the jsx parser is installed it's time to get the React and ReactDOM packages installed. In the Terminal, navigate to the ROOT directory of the web application and enter the following commands :

- **Install React and ReactDOM :** npm i react react-dom --save

Now React and ReactDOM are installed the development of the web application can begin.

[Back to Top](#contents)

- - -

## Development of Web Application
The development of Tagged follows several steps beginning with the customisation of the index.html template file.

**Index Template File**   
Inside the "app" sub-directory within the project, create a html file named, "index_template.html" and enter **[the code linked here](https://github.com/JaxCavalera/Tagged/blob/Milestone1/app/index_template.html)**.

The template file is referenced inside the webpack.config.js file and is used by the html-webpack-plugin to generate our code. The {% %} symbols are used for concatenation and should always have a space between the "%" sign and the code they are wrapping.

**Entry File**   
The next step is to flesh out the Entry file, "index.jsx" using **[the code linked here](https://github.com/JaxCavalera/Tagged/blob/Milestone1/app/index.jsx)**.

The "main" function will be used to generate a holding div for the React web application. It is bad practice to insert the react code directly into the document.body node as other 3rd party browser plugins etc may manipulate this element breaking the code.

The HeaderDiv component is being imported from a file that hasn't been created yet.

**Header Div Component**   
**[The code linked here](https://github.com/JaxCavalera/Tagged/blob/Milestone1/app/Heading/headerdiv.jsx)** will need to be added to the HeaderDiv component jsx file which will be created inside a sub-directory below "app"   
e.g. ROOT/app/heading/headerdiv.jsx

**CSS Files**   
Both the index.jsx Entry file and the headerdiv.jsx Component are referencing several files including Two (2) Cascading Style Sheets, JSON Manifest document for managing the smartphone Meta Data and several images.

The default.css file previously created should be extended to match the contents of the "default.css" **[linked here](https://github.com/JaxCavalera/Tagged/tree/Milestone1/app)**. The heading.css file found at the same link, inside the "heading" sub-directory will also need to be created and fleshed out to match the online repository.

The Tagged logo, Favicon and Manifest code can be found at : https://github.com/JaxCavalera/Tagged/tree/Milestone1

[Back to Top](#contents)

- - -

## Testing
The scripts were parsed by several compilers to ensure that they were free of syntax errors and adhered to best practices as outlined in **[this React style guide](https://github.com/airbnb/javascript/tree/master/react#airbnb-reactjsx-style-guide)**

The primary goals in the design of the foundational structure to the component and template were as follows :
- Ensure the website would load all content adjusting for mobile and desktop displays appropriately Avoid horizontal scrolling.

- Ensure the logo and favicon displayed correctly on both mobile home screen and desktop browser windows.

Ports were forwarded from the local ip through the router and directed to a public domain using a DNS service called duckDNS.org during testing. This allowed for the testing on both desktop and mobile simultaneously taking advantage of the Hot-Reloading of components made available through the Webpack-Dev-Server.

[Back to Top](#contents)

- - -

## Callbacks and Promises
A callback is registered by putting "callback" or any other placeholder name as an argument inside the parenthesis of a function.

e.g.
```javascript
let fancyText = 'some text in here';

function myFunction(callMeBack, justSomeString) {
    //  do a bunch of things like ajax requests or fetch
    let randomText = justSomeString;

    //  Now "register" the callback so it will fire off whatever Function
    //  you assign to that argument placeholder
    callMeBack();
}
```
With the example above, we can make a new function outside "myFunction" that will run something like, "console.log('heyo');" the moment callMeBack(); runs (gets called).

```javascript
//  let's assume the previous code is part of this same file

//  Define a function to be used inside the placeholder "callMeBack"
function logMyConsole() {
    console.log('heyo');
}

//  Actually run "myFunction" where we "registered" our callback
myFunction(logMyConsole, fancyText);
```
Because javascript is synchronous, it will run each line of code in the order we list them inside a function.  This means that in cases where the data is locally available and will not have a delay, it can be used right away.

"fancyText" was declared locally within the same javascript file so there is no delay when we later assign it to the value of "randomText" and the same can be said for our function, "logMyConsole".

So now we have our callback function, let's look at the Promise alternative.  The A+ specification describes a promise as :
>A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its then method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.

This basically means that a promise is the **VALUE** being returned from a task that does not finish the moment it is started (immediately).  The description goes pretty fast overlooking a basic snippet of information valuable to understand things.

It doesn't explain **what** a promise *really* is.  A promise is not a **VALUE**, it is actually a **function** :
```javascript
//  A simple example of a promise and .then
let p = new Promise(function(resolve, reject) {
  resolve("hello world");
});

p.then(function(pValue) {
  console.log(pValue);
});

//  or

let p1 = new Promise(function(resolve, reject) {
  resolve("Success!");
  // or
  // reject ("Error!");
});

p1.then(function(value) {
  console.log(value); // Success!
}, function(reason) {
  console.log(reason); // Error!
});

//  Below shows how we can turn a normal function into a promise object
//  simply by having it do nothing other than return a promise object.. it becomes a wrapper. a.k.a promisified
//  the function becomes a promise because the value it returns
//  can be used outside the function before the asyncFunction has
//  executed the resolve or reject callbacks

function thisBecomesAPromise() {
    return new Promise(
        //  because this anonymous function ends with a semi-colon it is
        //  self executing and so it is automatically registered (being called to run.. by itself)
        function(resolve, reject) {

        //  Now inside the callback, some function runs returning either an error or a result
        asyncFunction(function(error, result) {
            //  it does some things and based on how they go it will
            if (error) {
            //  if there was an error run this Code

            //  reject is a registered callback
                reject(error);

            } else {
            //  if there was no error then run this Code

            //  resolve is also a registered callback
                resolve(result);
            }                
        });
    });
}

```
So keeping this in mind, we could console.log() the returned value of our newly created promise function, "thisBecomesAPromise();" as shown below :

```javascript
//  assumes this continues on from the previous code

//  We run (call) the function that was turned into a promise
//  It will be returning the value of "error" or "result"
//  to log this value all we need to do is run the Function
//  and **.then** console log the returned value when it eventually arrives
thisBecomesAPromise().then(function(ourPromiseResult) {
    console.log(ourPromiseResult);
});
```
As demonstrated, The primary way of doing things with the **VALUE** of a promise is through its **.then** method (function).  So it is easy to think of a promise as an Object with various functions and properties that we can use.

The promise object will have a Return or Error **VALUE**.  It will also have a **.then** and **.catch** function.  **.then** will let us do things with a resolved (successful) result and **.catch** will let us do things with any errors.

With this in mind, when they documentation says :
>The primary way of interacting with a promise is through its then method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.

This should be making more sense now.  the registered callback inside our promise object has a **resolve** and **reject** argument.  The registered callback in the **.then** function is the **VALUE** such as "ourPromiseResult" (from the previous example).


## React Router Tip
If a main component is rendering on state change and so is the child component that also connects to the store.  Write some logic into the main component to update only on path name update (redux + react-router specific solution). this seems to prevent the double render from happening to the child components.

##  FileReader and Image tips
```
let myImage = new Image();
image.onload = function() {};
image.src = "some/image/url";
```
because as soon as you assign to img.src, it goes out and starts trying to load the image.
