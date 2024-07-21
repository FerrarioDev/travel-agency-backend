# Travel Agency Backend

This project is the backend implementation for a travel agency website, developed as part of a final exam. The backend is built using Node.js and Express.js, and it interacts with a MongoDB database to manage travel destinations, hotels, and user reservations.

## Features

- **City Management**: View and manage travel destinations with details such as image, description, and base price.
- **Hotel Management**: View and manage hotels associated with each city, including pricing information.
- **User Reservations**: Create and manage reservations, including user details and total pricing calculations.
- **Real-time Calculations**: Calculate total price based on selected city, hotel, number of people, and number of nights.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for Node.js to manage routing and middleware.
- **MongoDB**: NoSQL database for storing cities, hotels, and reservations.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Body-Parser**: Middleware to parse incoming request bodies.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/travel-agency-backend.git
