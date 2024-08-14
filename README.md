# Onebox Application

## Overview

The **Onebox Application** is a dynamic email management tool designed to provide a seamless experience for handling emails. Built using React, TailwindCSS, and Vite, the application offers features for viewing, replying to, and deleting emails, with a modern and responsive interface.

## Features

- **User Authentication**: Secure login using Google OAuth.
- **Responsive Design**: Mobile and desktop-friendly layouts.
- **Email Management**: View details, reply to, and delete emails.
- **Dark Mode Toggle**: Switch between light and dark themes using a toggle button.
- **Interactive UI**: Real-time email updates and interactions.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool for modern web projects.
- **ContextAPI**: For state management

## Getting Started

To get the Onebox Application up and running locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/onebox-application.git

2. **Navigate to the Project Directory**

    ```bash
   cd Onebox

3. **Start the Development Server**

4. ```bash
   npm run dev
   ```

### Build for Production
To build the project for production, run:

```bash
npm run build
```

This command will generate a dist folder with optimized production files.

## Usage
1. Email Management:
View Emails: Access the list of emails from the Email component.
Reply to Emails: Click the 'Reply' button to open the Editor component and compose your reply.
Delete Emails: Click the 'Delete' button to remove an email from the list.

2. Toggle Dark Mode: Use the dark mode toggle button in the TopBar to switch themes.

## Components
1. TopBar: Contains the company name, dark mode toggle, and workspace dropdown.
2. LeftBar: Features the logo, navigation icons, and account icon.
3. Home: Displays a welcome message and image.
4. Email: Handles email listing, viewing, and actions like reply and delete.
5. Editor: Used for composing and sending replies to emails.

## Contrubuting
I welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Open a Pull Request.


