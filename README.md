# Acro Connect

Acro Connect is a LinkedIn-like web application designed for college campuses, featuring a red and black theme. It allows users to sign in, view their profile, post updates, and interact with others. This project is built using React and Tailwind CSS for the frontend, with routing managed by React Router.

## Features

- **Red and Black Theme**: A sleek and modern design.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Login Page**: A user-friendly login page with validation.
- **Profile Page**: A detailed user profile with personal information, skills, and contact details.
- **Feed**: A place for users to post updates and interact.
- **Navigation Bar**: For easy navigation between login, signup, feed, and profile pages.

## Project Structure

- `src/components/Navbar.tsx` - Navigation bar at the top of the page.
- `src/components/Post.tsx` - Reusable post component for displaying updates.
- `src/components/Sidebar.tsx` - Sidebar containing user profile and navigation menu.
- `src/components/Feed.tsx` - Main content area displaying posts.
- `src/components/Login.tsx` - Login page component.
- `src/components/Profile.tsx` - Profile page component.
- `src/components/Signup.tsx` - Signup page for new users.
- `src/components/NavigationBar.tsx` - Navigation bar for login/signup pages.
- `src/App.tsx` - Main application component containing routing logic.
- `tailwind.config.js` - Tailwind CSS configuration file.

## Setup

To get started, follow these steps:

### Prerequisites

Ensure you have `Node.js` and `npm` installed on your machine.

### Installation

1. #### Clone the repository:

   ```bash
   git clone <repository-url>
   cd acro-connect

2. #### Install dependencies:

```
npm install
```
 
3. #### Running the Development Server
```
 npm run dev
```

 ### Pages and Navigation
 #### Login Page
Users can log in with their email and password.
The page includes a "Remember me" checkbox, "Forgot password" link, and a link to the signup page.
#### Signup Page
Allows new users to sign up with their full name, email, password, and profession.
Upon successful signup, the user is redirected to the feed page.
 #### Profile Page
Displays the user's profile with a cover image, large profile picture, personal information, skills, and contact details.
The user can edit their profile.
#### Feed Page
Displays posts from users.
Each post includes like, comment, and share functionalities.
#### Navigation
The Navigation Bar appears on all pages, providing links to the login, signup, feed, and profile pages.
The navigation bar uses React Router for seamless transitions between pages.
#### Technologies Used
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
React Router: A library for handling routing in React applications.
Lucide React: A set of open-source icons for React.
Unsplash: Placeholder images for profile and cover photos.
#### Contributing
If you'd like to contribute to this project, please fork the repository, create a new branch, and submit a pull request with your changes.

#### License
This project is licensed under the MIT License.