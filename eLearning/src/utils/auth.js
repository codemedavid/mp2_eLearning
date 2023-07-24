// src/utils/auth.js

// Function to check if the user is an admin
export const isAdminUser = () => {
    const userType = localStorage.getItem("userType");
    return userType === "instructor";
  };
  