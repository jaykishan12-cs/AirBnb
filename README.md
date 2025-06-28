# AIRBNB WEBSITE FULL STACK CLONE

## DESCRIPTION
A fully functional Airbnb clone that lets users create, edit, and manage property listings, leave and view reviews, and browse available stays through an interactive map interface. Designed with a clean UI and a focus on user experience.

## 🧰 Tech Stack Used

### 🌐 Frontend
<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/EJS-8B4513?logo=ejs&logoColor=white" />
</p>

### 🔧 Backend
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" />
</p>

### 🗄️ Database
<p align="left">
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
</p>



## 🚀 Getting Started

Follow these steps to clone and run the project locally:

### 1) Clone the repo
```bash
git clone https://github.com/jaykishan12-cs/AirBnb.git
cd AirBnb
```
### 2) Install Dependencies
```bash
npm install
```

### 3) Set Up Environment Variables
Create a .env file in the root directory and add your environment variables. Example:

```env
MONGO_URI=your_mongodb_connection_string
```

### 4)Run the Project
```bash
npm app.js
```

## SCREENSHOTS

### 🏠 Home Page
![Home Page](public/screenshots/home.png)

---

### 🔐 Login Page
![Login Page](public/screenshots/login.png)

---

### 🗺️ Map View
![Map View](public/screenshots/map.png)

---

### ➕ Add New Listing
![New Listing](public/screenshots/new.png)

---

### 📝 Reviews Section
![Reviews](public/screenshots/reviews.png)

---

### 📄 Show Listing Page
![Show Listing](public/screenshots/show.png)

---

### 🧾 Signup Page
![Signup](public/screenshots/signup.png)

---

## ✨ Features

- 🔐 **User Authentication**  
  Users can sign up, log in, and log out securely.

- 🧾 **Protected Actions**  
  Only logged-in users can add new property listings.

- 🛠️ **Listing Management**  
  - Users can **create** listings with title, description, location, price, and image.
  - Only the **owner** of a listing can edit or delete it.

- 🗺️ **Interactive Map Integration**  
  Listings are displayed with an interactive map for better navigation.

- 💬 **Reviews System**  
  Logged-in users can leave and view reviews on listings.

- 🖼️ **Clean & Responsive UI**  
  Fully responsive design optimized for both desktop and mobile.






