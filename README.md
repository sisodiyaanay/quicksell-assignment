# Kanban Board Application

## Overview

This project is a Kanban board application developed using **ReactJS**, designed for efficient project management. The app fetches ticket data from the [Quicksell API](https://api.quicksell.co/v1/internal/frontend-assignment) and enables users to group and sort tickets based on various criteria. Explore the live application here: [Live Demo]().

---

## Features

### **Data Management**
- **Dynamic Data Fetching**: Retrieves ticket information from the Quicksell API.
- **Intuitive Kanban Display**: Displays tickets on an easy-to-navigate board.

### **Grouping & Sorting**
- **Flexible Grouping**: Group tickets by:
  - **Status**
  - **User**
  - **Priority**
- **Custom Sorting**: Sort tickets by:
  - **Priority**
  - **Title**

### **Priority Levels**
- Clearly categorized priority levels for tasks:
  - **Urgent (4)**
  - **High (3)**
  - **Medium (2)**
  - **Low (1)**
  - **No Priority (0)**

### **User Experience**
- **Responsive Design**: Adaptable to different devices for a seamless experience.
- **Icons Integration**: Utilizes **react-icons** for aesthetic and functional UI elements.

### **State Persistence**
- Automatically saves the user's view settings (grouping and sorting preferences) using **localStorage**, ensuring a consistent experience across page reloads.

### **Styling**
- Clean and elegant design using **Pure CSS** for styling, offering a fast and lightweight interface.

---

## Getting Started

Follow these steps to set up and run the application locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/Shubhankar-12/quicksell-frontend-assignment
```

### **2. Navigate to the Project Directory**

```bash
cd kanban-board-app
```

### **3. Install Dependencies**

Ensure you have **Node.js** and **npm** installed, then run:

```bash
npm install
```

### **4. Run the Application**

Start the development server:

```bash
npm start
```

### **5. Access the Application**

Open your browser and navigate to:

```text
http://localhost:3000
```

---

## Contributing

Contributions to enhance this application are welcome! Feel free to fork the repository and submit a pull request. For major changes, please open an issue to discuss your ideas.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **API Provider**: [Quicksell API](https://api.quicksell.co/v1/internal/frontend-assignment)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
