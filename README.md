# React-Contact-List-Vite
This is a simple React Contact List application built using Vite + React.
The project displays multiple contact cards with name, email, phone number,
and address in a clean and structured card layout. It uses reusable components
and basic CSS styling to create a beginner-friendly user interface.

## Features
- Built with React (Vite)
- Clean and simple UI
- Reusable ContactCard component
- Displays multiple contacts using map()
- Beginner-friendly project
- Simple and readable CSS styling

## Technologies Used
- React JS
- Vite
- JavaScript (ES6)
- CSS
- HTML

## Output Preview
The application shows:
- A contact list heading
- Multiple contact cards
- Contact name
- Email address
- Phone number
- Physical address
- Card-style layout with borders and spacing

## Component Explanation

ContactCard.jsx
- Displays contact details such as:
  - Name
  - Email
  - Phone
  - Address
- Uses props to receive data from the parent component

ContactCard.css
- Adds:
  - Card border and background
  - Padding and margin
  - Rounded corners
  - Basic layout styling

App.jsx
- Stores contact data in an array
- Uses map() to render multiple ContactCard components
- Acts as the main container of the application

## Learning Outcomes
- Understanding React components
- Passing data using props
- Rendering lists using map()
- Basic CSS styling in React
- Using Vite for fast development
- Uploading a React project to GitHub

## Future Improvements
- Add edit and delete contact functionality
- Make contact data dynamic
- Add search and filter options
- Improve UI and responsiveness
- Fetch contact data from an API

ContactList/
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
│
├── src/
│   ├── component/
│   │   ├── ContactCard.jsx
│   │   └── ContactCard.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css

## Conclusion
This project demonstrates the basic concepts of React using Vite by building
a simple Contact List application. It helps in understanding reusable components,
props, and list rendering using map(). The project is beginner-friendly and
useful for learning React fundamentals and building clean user interfaces.







