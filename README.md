## Managment Orders and Articles

This is a simple React application that demonstrates how to use npm scripts to start the development server and run a local database. It's built using TypeScript and follows the Clean Architecture design pattern.

## Requirements

- Node.js (version 16 or higher)
- npm
- Installation

**Clone this repository to your local machine:**

    git clone https://github.com/andresmauricio/cetribal.git

**Navigate to the project directory:**

    cd cetribal

**Install the required dependencies:**

    npm install

\*\*

## Usage

\*\*

**To run a local database, run the following command:**

    npm run db:run

This will start a local instance of the database and configure it for use with the application on http://localhost:3000.

**To start the development server, run the following command:**

    npm run dev

This will start a development server on http://localhost:3001 and open the application in your default browser.

## Architecture

This application follows the Clean Architecture design pattern, which separates the application into layers with clear boundaries and dependencies. The layers are:

Presentation: The React components and their associated state management (using hooks) and routing.

Application: The business logic of the application, including use cases that orchestrate interactions between the domain and infrastructure layers.

Domain: The core domain logic of the application, including models, interfaces, and repositories.

Infrastructure: The implementation details of the application, including APIs, databases, and external services.

By following this architecture, the application is more modular, testable, and maintainable. It's also easier to reason about and understand, since each layer has a clearly defined responsibility and communicates only with the layers immediately adjacent to it.
