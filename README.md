# Pulse Properties Application

This is a simple Pulse Properties application built with NestJS, GraphQL, and TypeORM (PostgreSQL).

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Database Configuration](#database-configuration)
- [Usage](#usage)
  - [Starting the App](#starting-the-app)
  - [Using GraphQL](#using-graphql)
- [Authentication](#authentication)
  - [Generating JWT Token](#generating-jwt-token)
  - [Authorization Header](#authorization-header)

## Getting Started
- Fully connected users with their properties, you can achieve full monitoring on a person, what he buy, when, on what price and so on...
### Installation

1. Clone this repository to your local machine:
   git clone https://github.com/your-username/pulse-properties.git

2. cd pulse-properties

3. npm install

## Database Configuration

- Just check the .env file and align your connection with the already provided values

## Starting the App

- npm run build
- npm run start

## Using GraphQL

- Visit the GraphQL Playground at http://localhost:3000/graphql to interact with the API. You can use the GraphQL Playground to execute queries and mutations.

## Generating JWT Token

- To generate a JWT token for a user, you need to use the loginUser mutation but before that you need to create a user and copy the provided used id.
- You'll need the user ID generated during the user creation process.

- mutation {
  loginUser(userId: "your-user-id") {
    token
  }
}

- this will provide JWT token that you can use in authorization header for every request to the server

## Authorization Header

- For every GraphQL request that requires authentication, you need to include the JWT token in the Authorization header. Set the header as follows:
- Authorization: your-generated-token


