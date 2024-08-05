# Inventory Management App

## Description
This Inventory Management App is a React application designed to help users manage their pantry items effectively. It allows users to add, remove, and search for items within their inventory, ensuring easy and efficient management of goods.

## Features
- **Add Items:** Users can add items to their inventory with specified quantities.
- **Remove Items:** Allows users to decrease the count or remove items from the inventory.
- **Search Functionality:** Users can search for items by names to quickly find them in the inventory.
- **Responsive UI:** The app features a responsive user interface that works well on both desktop and mobile browsers.

## Technologies Used
- **React:** For building the user interface.
- **Material-UI:** Used for styling and structuring the layout with responsive design.
- **Firebase Firestore:** For real-time database management.
- **Vercel:** For deployment and hosting.

## Setup and Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/inventory-management-app.git

2. **Navigate to the project directory**
   ```bash
   cd inventory-management-app
   
3. **Install dependencies**
   ```bash
    npm install
   
4. **Set up Firebase**
    ```bash
    Create a Firebase project at Firebase Console.
    Initialize Firestore Database.
    Replace the firebase configuration in the firestore.js with your project credentials

5. **Start the development server**
    ```bash
    npm start

## Usage
Once the application is running, you can add items to your inventory by entering the item name and clicking the "Add New Item" button. To search for items, simply type the item name in the search bar. You can remove items by clicking the "Remove" button next to each item.

## Deployment
This application is set up for easy deployment to Vercel, which handles both frontend and serverless backend deployments:

**Deploy on Vercel:**
```bash
Push your code to GitHub.
Import your GitHub repository in Vercel.
Follow the prompts to deploy your application.
