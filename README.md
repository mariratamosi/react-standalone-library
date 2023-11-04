## Standalone react component to use as a library

###  Introduction
The purpose of this project is to xreate **A Pure React Component** and use it in a **non-react project** by only adding a script file and use in **react projects** through NPM packages.

### How to run

`npm start` 
[entry point is index.js]

### How to publish
1. Update version in Package.json
2. Push the changes to main branch
3. Run
    `npm run prepublishOnly
npm publish`

### How to use

#### In browser
````
        <!-- Path to recent pablish can be found in npm directory -->
        <script src="https://unpkg.com/react-standalone-library/dist/my-component.min.js"></script>
        <script>
        
          function onLoad() {
            var myComponent = new SrimChat.default({
              message: 'React standalone demo!!',
              container: document.getElementById('your-component-container'),
            })
            console.log(myComponent)
          }
        </script>

````
[The component name(*SrimChat*) and file name (*my-component.min.js*) is modifiable via webpack config]

#### In react project

`````npm i srim-chat`````

````import {SrimChat} from "srim-chat"````

````<SrimChat message={"React standalone library"}/>````


### Demo
[https://unpkg.com/srim-chat/browser/index.html](https://unpkg.com/srim-chat/browser/index.html)

### Point of Discussion
 ![img.png](img.png)
