# Community Benefit Reporting App
<img alt="Alt text" src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&amp;logo=Vite&amp;logoColor=white"> <img alt="Alt text" src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&amp;logo=React&amp;logoColor=black">
<img alt="Alt text" src="https://img.shields.io/badge/React Router-CA4245.svg?style=for-the-badge&amp;logo=React-Router&amp;logoColor=white">
<img alt="Alt text" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&amp;logo=JavaScript&amp;logoColor=black">
<img alt="Alt text" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=white">
<img alt="Alt text" src="https://img.shields.io/badge/MUI-007FFF.svg?style=for-the-badge&amp;logo=MUI&amp;logoColor=white">
<img alt="Alt text" src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&amp;logo=PostgreSQL&amp;logoColor=white"> 
## Overview
The Community Benefit Reporting App is a comprehensive web application designed to streamline the process of reporting and managing community benefit activities. This application is built with a modern tech stack and follows best practices in software development to ensure scalability, maintainability, and a seamless user experience.
### Features
- **User Authentication:** Secure login and logout functionality with role-based access control.
- **Dynamic User Profiles:** Personalized user profiles with dynamically rendered profile pictures and user information.
- **Dashboard:** An intuitive dashboard that provides an overview of key metrics and activities.
- **Data Management:** Comprehensive management of users, contacts, and various data points related to community benefits.
- **Charts and Visualizations:** Interactive charts and graphs to visualize data trends and insights.
- **Responsive Design:** Fully responsive design to ensure a seamless experience across all devices.
### Tech Stack
- **Frontend:**
  - **React:** A powerful JavaScript library for building user interfaces.
  - **Material-UI (MUI):** A popular React UI framework for designing responsive and visually appealing components.
  - **React Router:** For handling client-side routing and navigation.
  - **React Pro Sidebar:** For creating a customizable and collapsible sidebar menu.
  - **Nivo:** For creating interactive and responsive charts and visualizations.
- **State Management:**
  - **Context API:** For managing global state and user authentication.
- **Backend:**
  - **Node.js:** A JavaScript runtime for building scalable server-side applications.
  - **Express.js:** A minimal and flexible Node.js web application framework.
  - **PostgreSQL:** A powerful, open-source relational database system.
- **Authentication:**
  - **JWT (JSON Web Tokens):** For secure user authentication and authorization.
  - **Development Tools:**
  - **Visual Studio Code:** A powerful code editor with integrated development tools.
  - **ESLint:** For maintaining code quality and consistency.
  - **Prettier:** For code formatting and styling.
### Methodologies and Processes
- **Agile Development:** The project follows Agile methodologies, with iterative development and continuous feedback loops to ensure the application meets user needs and expectations.
- **Component-Based Architecture:** The application is built using a component-based architecture, promoting reusability and modularity.
- **Responsive Design:** Ensuring the application is fully responsive and provides a seamless experience across all devices.
- **Code Quality:** Adherence to best practices in coding standards, including the use of ESLint and Prettier for code quality and consistency.
- **Version Control:** Git is used for version control, enabling collaborative development and efficient management of code changes.
### Functionalities
- **User Authentication:** Secure login and logout functionality with role-based access control.
- **Dynamic User Profiles:** Personalized user profiles with dynamically rendered profile pictures and user information.
- **Dashboard: An intuitive** dashboard that provides an overview of key metrics and activities.
- **Data Management:** Comprehensive management of users, contacts, and various data points related to community benefits.
- **Charts and Visualizations:** Interactive charts and graphs to visualize data trends and insights.
- **Responsive Design:** Fully responsive design to ensure a seamless experience across all devices.
### Directory Structure
**Public Directory**
```
public/
├── assets/
│   ├── admin.png
│   ├── default.png
│   ├── reporter.png
│   ├── viewer.png
├── index.html
├── manifest.json
└── robots.txt
```
**Server Directory**
```
server/
├── config/
│   ├── config.js
│   ├── db.js
├── controllers/
│   ├── register-controller.js
│   ├── roles-controller.js
│   ├── user-controller.js
├── index.js
├── middleware/
│   ├── authMiddleware.js
├── models/
│   ├── userModel.js
├── routes/
│   ├── login-routes.js
│   ├── register-routes.js
│   ├── roles-routes.js
│   ├── user-routes.js
```
**Src Directory**
```
src/
├── App.jsx
├── components/
│   ├── AuthContext.jsx
│   ├── BarChart.jsx
│   ├── GeographyChart.jsx
│   ├── Header.jsx
│   ├── LineChart.jsx
│   ├── Login.jsx
│   ├── ...
├── data/
│   ├── ...
├── index.css
├── index.js
├── scenes/
│   ├── ...
├── theme.js
```
### Installation
To get started with this Vite React project, follow these steps:

1. **Clone the Repository**
First, you need to clone the repository to your local machine. You can do this using Git:
```
git clone https://github.com/GStreet71/community-benefit-reporting-app.git
```
```
cd community-benefit-reporting-app
```

3. **Install Dependencies**
Install the dependencies using one of the following package managers:

**Using npm**
```
npm install --legacy-peer-deps
```
**Using yarn**
```
yarn install --legacy-peer-deps
```
# Run the Project
After installing the dependencies, you can start the development server with:

**Using npm**
```
npm start    
```
**Using yarn**
```
yarn start
```
Your app will open automatically in your default web browser at http://localhost:3000.

# Conclusion
The Community Benefit Reporting App is a robust and feature-rich application that demonstrates expertise in modern web development technologies and methodologies.
