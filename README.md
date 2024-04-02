# LET`S RELAX: built using MERN STACK (Mongo, Express, React.JS, Node)

Let`s relax is a MERN app that displays some of the most renowned meditation and relaxation apps around the world and allows
experienced users to create more exercises and display them on the web.

# Deployed Application

To install all the dependencies used in the project, simply run the command:

```
npm install
```

# Environment Variables

You will need to create a .env (or .env.local) file if you want to run this project locally. In order to do so you will also need variable:

- REACT_APP_GOOGLE_MAPS_API_KEY
- REACT_APP_API_URL

# Application Routes:

|              URL path               |        Description        | Protected |
| :---------------------------------: | :-----------------------: | :-------: |
|                  /                  |         Home page         |    ❌     |
|               /login                |        Login page         |    ❌     |
|               /signup               |        Signup page        |    ❌     |
|              /profile               |       Profile Page        |    ❌     |
|            /applications            |    Applications Page      |    ✅     |
|          /applications/:id          | Application Details Page  |    ✅     |
|         /application/create         | Applications Creation Page|    ✅     |

# Client_Final_Project
