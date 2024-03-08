# Todo List App

Welcome to the Todo List App! This simple application helps you manage your tasks efficiently. Keep track of your to-dos and stay organized with ease.

# Screenshot
![Screenshot (37)](https://github.com/ravikr126/react-redux-todo/assets/53082978/2a40d1ab-d09d-4eac-a805-503a6185e828)

# Video Demo


https://github.com/ravikr126/react-redux-todo/assets/53082978/9d3c3f19-942f-42e8-b5ac-02c38db7ab57


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for managing the application's state.
- **Vite**: A fast and efficient front-end build tool for React applications.

## Important Note

- In this project, I've demonstrated my proficiency in both functional and class component development, showcasing my versatility in React programming.

- The functional components can be found in the following files:
  - `src/redux/actions.js`
  - `src/redux/actionTypes.js`

- The class components with lifecycle methods are located in:
  - `src/redux/reducer.js`
  - `src/redux/store.js`

- **Persisting Data on Reload:**
  - The application is designed to persist data even when the page is reloaded. This ensures a seamless user experience, and the data remains intact across sessions.
  - # Important Note about Data Persistence
      - The current implementation relies on *local storage* for persisting data, allowing the preservation of to-do items when the application is reloaded. However, it's essential to note that this data persistence feature is only available when running the website on your local system.
      - When hosted on a server or deployed to platforms like Vercel, data may not persist between reloads as each session is treated independently. To enable persistent data across different sessions, consider implementing a backend solution with database integration.
      - Please be aware that the current setup does not utilize redux-thunk (as I explore the data persistence method)for handling asynchronous operations. If encounter difficulties in data persistence, exploring *redux-thunk* or other *backend solutions* may provide the desired functionality.

- **Redux for Global State Management:**
  - Redux is utilized for global state management in the application. It helps maintain a centralized state, making it easier to manage and share data across different components.

- **Organized Folder Structure:**
  - The project follows an organized folder structure to enhance code readability and maintainability. Key components and functionality are placed in logical directories for easy navigation.

- **Mobile Responsiveness:**
  - The application is designed to be responsive on mobile devices, ensuring a consistent and user-friendly experience across various screen sizes.

These features collectively contribute to a robust and user-centric application.
Feel free to explore the codebase to see how I've leveraged both approaches to create a well-rounded React application.


## Dependencies

- **redux**: State management library for React applications.
- **react-icons**: A library providing a collection of popular icons for React applications.
- **tailwindcss**: A utility-first CSS framework for easy styling and customization.

## Getting Started

Follow these steps to run the Todo List App locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ravikr126/react-redux-todo.git

2. **Move to code directory**:
   ```bash
   cd react-redux-todo

3. **Install Dependencies**:
   ``` bash
   npm install
4. **Run the App**:
   ```bash
   npm run dev
   
This command will start the development server, and you can view the app at http://localhost:3000.

   
## Usage
  1. Add new tasks to your to-do list.
  2. Mark tasks as completed or incomplete.
  3. Remove tasks from the list.
  
 ## Styling
This project uses Tailwind CSS for styling, providing a utility-first CSS framework. Tailwind CSS allows for rapid development and easy customization of your application's styles.

## Connect with Me

I hope you find this project useful! Feel free to connect with me on social media:

- **Twitter**: [@ravi14577](https://twitter.com/ravi14577)
- **LinkedIn**: [Ravi Kumar](https://www.linkedin.com/in/theravikr/)

## Let's stay in touch and discuss all things tech and development! and 🌟 star my repo 😀
