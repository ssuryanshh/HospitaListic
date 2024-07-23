# Hospitalistic Frontend

This repository contains the frontend code for the Hospitalistic project, a hospital management website.

## Table of Contents

- [Hospitalistic Frontend](#hospitalistic-frontend)
  - [Table of Contents](#table-of-contents)
  - [Folder Structure](#folder-structure)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Deployment](#deployment)
  - [Access and Navigation](#access-and-navigation)
      - [Admin Credentials](#admin-credentials)
  - [Contributing](#contributing)

## Folder Structure

```
.
└── front-end/
    ├── public/
    │   └── index.html
    └── src/
        ├── Components/
        │   ├── Common/
        │   │   ├── Footer
        │   │   └── NavBar
        │   ├── HospitalDetail/
        │   │   ├── UpdateForm
        │   │   └── HospitalDetail
        │   ├── HospitalScreen/
        │   │   ├── HeroSection
        │   │   └── HospitalsCard
        │   └── LandingScreen/
        │       ├── CitySection
        │       └── HeroSection
        ├── Screens/
        │   ├── HospitalDetailScreen
        │   ├── HospitalsScreen
        │   ├── LandingScreen
        │   ├── LoginScreen
        │   └── RegisterHospital
        ├── App.js
        └── index.js
```

## Technologies Used

- React
- HTML
- CSS
- JSX
- MUI (Material-UI)
- Ant Design

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ssuryanshh/HospitaListic.git
    ```
2. Navigate to the project directory:
    ```sh
    cd frontend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Running the Application

```sh
npm start
```
The application will start on http://localhost:3000.

## Deployment
The application is deployed on Vercel. You can access it <a href="https://hospitalistic.vercel.app/"> here </a>

## Access and Navigation
Users can navigate to all pages without logging in. However, to access the RegisterHospital and UpdateForm pages, you must log in as an Admin.

#### Admin Credentials
- Email: admin@gmail.com
- Password: qwertyuiop
  
After logging in as Admin, you will see an add sign in the hospitals page and the update form in the details page.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

