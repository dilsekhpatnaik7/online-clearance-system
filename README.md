# Online Clearance System
An Online Clearance System typically refers to a digital platform or software used to streamline and automate the process of obtaining clearances or approvals. This system allows individuals or organizations to submit clearance requests, track their progress, and receive electronic clearances or approvals.

## Tech Stack Used
React JS, Node JS, Express JS, MongoDB, Tailwind CSS

## Installation
Run the Command on your local machine\
``git clone https://github.com/dilsekhpatnaik7/online-clearance-system.git``


After Cloning into your local machine run this Command\
`cd online-clearance-system`



Create a ``config.env`` file in the root directory and add the following
```
port = 5000
db = <YourMongoDBURL>
```

First Install the dependencies in the backend and run it
```
cd server
npm install
npm run serve
```

After the backend has been running successfullly, run the frontend
```
cd client
npm install
npm start
```