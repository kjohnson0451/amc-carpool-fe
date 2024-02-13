# AMC Carpool Frontend (amc-carpool-fe)

## Description

The AMC Carpool Frontend is a web app specifically crafted for hiking club event leaders, aiming to streamline carpool coordination. At its core, the app focuses on the primary resource of a "trip," supplemented by "carpool groups" and "participants" as secondary resources. Its design facilitates the creation and management of these resources, simplifying the process for event leaders.

## Installation

### Prerequisites

- Node.js and npm installed. You should install them via [Node Version Manager](https://github.com/nvm-sh/nvm).

### Steps to Deploy a Developer Instance

1. Deploy a developer instance of [amc-carpool-api](https://github.com/kjohnson0451/amc-carpool-api)

Follow the instructions provided in the README in the above repository.

2. Clone this Repository

```
git clone https://github.com/kjohnson0451/amc-carpool-fe.git
cd amc-carpool-fe
```

3. Install Dependencies

```
npm install
```

4. Start the Development Environment

```
npm run dev
```

5. Access the Application

Once the app is up and running, access it at http://localhost:5173 in your web browser. As of this writing, the main page is "All trips", and you can add trips via "Add new trip."

## Technologies Used

- JavaScript
- Node.js
- Vite
- React
- React Query
- Tailwind CSS
