---

# 📄 Form Creation & Validation

A simple user registration form that demonstrates **HTML structure**, **CSS styling**, and **JavaScript-based form validation**.
This project validates user input for **username**, **email**, and **password** using basic JavaScript string methods and DOM manipulation.

---

## 🚀 Project Overview

The goal of this project is to practice:

* Implementing **client-side form validation**
* Using **DOM manipulation**
* Adding **event listeners**
* Displaying **error and success messages**
* Improving user experience using interactive feedback

This project contains three main files:

| File         | Description                              |
| ------------ | ---------------------------------------- |
| `index.html` | Contains the form structure              |
| `style.css`  | Handles page and form styling            |
| `script.js`  | Contains all JavaScript validation logic |

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

### ✅ Implement Form Validation

* Validate form fields using basic JavaScript conditions.
* Prevent invalid submissions using `event.preventDefault()`.
* Provide dynamic error messages.

### ✅ Work with the DOM

* Select and modify DOM elements using `document.getElementById`.
* Add event listeners to handle user interaction.

### ✅ Enhance User Experience

* Show real-time feedback after form submission.
* Display success or error messages.
* Apply simple interactive styling.

---

## 📁 Project Structure

```
Form-Creation-Validation/
│
├── index.html
├── style.css
└── script.js
```

---

## 🧱 Features & Validation Rules

### ✔ Username Validation

* Must be **minimum 3 characters**.

### ✔ Email Validation

* Must contain:

  * `@` symbol
  * `.` dot

### ✔ Password Validation

* Must be **minimum 8 characters**.

### ✔ Feedback System

* Displays errors in red
* Displays success message in green
* Error messages are shown together, line by line

---

## 🧩 How the Script Works

1. JavaScript waits for the page to fully load using:

```js
document.addEventListener("DOMContentLoaded", ...)
```

2. When the form is submitted:

   * The script prevents default form submission.
   * Retrieves values from each input field.
   * Performs validation checks.
   * Displays success or error messages inside the `#form-feedback` div.

3. If all validations pass:

   * Shows **“Registration successful!”** in green.
   * Otherwise displays all errors in red.

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/Form-Creation-Validation.git
```

### 2. Open the Project

Open `index.html` in any browser.

---

## 📝 Example Output

### ✔ Successful Registration

Green success message:

```
Registration successful!
```

### ❌ Failed Registration

Red error block:

```
Username must be at least 3 characters long.
Please enter a valid email containing '@' and '.'.
Password must be at least 8 characters long.
```

---

## 📌 Requirements

* Web browser (Chrome, Firefox, Edge, etc.)
* Basic understanding of HTML, CSS, and JavaScript.

---

## 💡 Optional Improvements

You can expand this project by adding:

* Real-time validation (on keyup)
* Password strength meter
* Email regex validation
* LocalStorage to save form data
* API integration
* Animated feedback messages

If you want help adding any of these, just ask!

---

## 📜 License

This project is free to use for learning and practice.

---
