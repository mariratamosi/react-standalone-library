## Standalone react component to use as a library

###  Introduction
The purpose of this project is Create A Pure React Component and use it in a non-react project by only adding a script file.

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
        <script src="https://unpkg.com/react-standalone-library/dist/my-component.min.js"></script>
        <script>
        
          function onLoad() {
            var myComponent = new MessageCount.default({
              message: 'React standalone demo!!',
              container: document.getElementById('my-component-container'),
            })
            console.log(myComponent)
          }
        </script>

````
[The component name and file name is modifiable via webpack config]

#### In react project

`````npm i srim-chat`````

````import {SrimChat} from "srim-chat"````

````<SrimChat message={"Test me bro"}/>````


### Demo
[https://unpkg.com/srim-chat/browser/index.html](https://unpkg.com/srim-chat/browser/index.html)

### Point of Discussion
 ![img.png](img.png)
