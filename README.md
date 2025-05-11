# 🍔 Food App

A modern React application that allows users to search for recipes and view detailed cooking instructions using the Spoonacular API.

## Features

- 🔍 Search for recipes
- 📝 View detailed recipe instructions
- 🥗 See ingredients list with measurements
- ⏱️ Cooking time information
- 🥕 Dietary information (vegetarian/vegan options)
- 💰 Price per serving
- 👨‍👩‍👧‍👦 Number of servings

## Technologies Used

- React
- Vite
- Spoonacular API
- CSS Modules

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Spoonacular API key:
   ```
   VITE_SPOONACULAR_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The following environment variables are required:

- `VITE_SPOONACULAR_API_KEY`: Your Spoonacular API key

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

- `/src/components` - React components
- `/src/components/*.module.css` - Component-specific styles
- `/src/App.jsx` - Main application component
- `/src/main.jsx` - Application entry point

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request