# HospitaListic BackEnd

Hospitalistic is a hospital management website with both backend and frontend components.

## Table of Contents

- [HospitaListic BackEnd](#hospitalistic-backend)
  - [Table of Contents](#table-of-contents)
  - [Folder Structure](#folder-structure)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [API Endpoints](#api-endpoints)
    - [Auth](#auth)
    - [Cities](#cities)
    - [Hospitals](#hospitals)
    - [Hospital Details](#hospital-details)
    - [User Roles](#user-roles)
  - [Deployment](#deployment)
  - [Contributing](#contributing)


## Folder Structure

``` bash
.
└── back-end
    ├── src
    │   ├── controllers
    │   ├── db
    │   ├── middlewares
    │   ├── models
    │   ├── routes
    │   └── services
    └── server.js
```

## Technologies Used
- Node.js
- express
- Mongoose
- MongoDB
- dotenv
- JWT (JSON Web Token)

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository
   ```
   git clone https://github.com/ssuryanshh/HospitaListic.git
   ```
2. Navigate to the project directory
   
   ```
   cd back-end
    ```

3. Install dependencies

    ```
    npm install
    ```
4. Create a .env file in the root directory and add the following variables
   ```
   MONGO_URI = <your_mongo_uri>
   JWT_SECRET = <your_jwt_secret>
   PORT = <your port number>
   ```
5. Start the server
   
    ```
    npm start
    ```
## API Endpoints
### Auth
- POST /auth/register - Register a new user
- POST /auth/login - Login a user
### Cities
- GET /cities - Get all cities
### Hospitals
- GET /hospitals - Get all hospitals
- POST /hospitals - Add a new hospital (Admin only)
- PUT /hospitals/:id - Update a hospital (Admin only)
- DELETE /hospitals/:id - Delete a hospital (Admin only)
### Hospital Details
- GET /hospital-details - Get all hospital details
- POST /hospital-details - Add new hospital details (Admin only)
- PUT /hospital-details/:id - Update hospital details (Admin only)
- DELETE /hospital-details/:id - Delete hospital details (Admin only)
### User Roles
- Admin: Can create, edit, and delete data.
- User: Can only fetch data.
## Deployment
 The application is deployed on Vercel. The link to the deployed application is <a href= "https://hospitalistic-backend.vercel.app/"> here </a>

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
