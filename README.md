# Resume Builder

A modern, high-performance Resume Builder application built with **React**, **Vite**, and **Tailwind CSS**. This project allows users to create professional resumes using various templates and export them as high-quality PDFs.

## 🚀 Features

-   **Dual Modes**:
    -   **Preview Mode**: Browse through pre-populated resumes to see how templates look with real data.
    -   **Builder Mode**: Enter your professional details in a live form and see the preview update instantly.
-   **Dynamic Templates**:
    -   **Classic**: A traditional, clean layout for professional roles.
    -   **Minimal**: A sleek, modern design with a focus on typography.
    -   **Minimal Image**: A sidebar-oriented layout with support for profile pictures.
    -   **Modern**: A bold, colored header design for a standout look.
-   **Professional PDF Export**: High-quality PDF generation using `html2canvas` and `jsPDF`, with support for multi-page resumes.
-   **A4 Optimized**: Templates are specifically designed to fit the standard A4 paper size (794px x 1123px).
-   **Responsive Design**: A smooth user interface that works across different screen sizes.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **PDF Generation**: [html2canvas](https://html2canvas.hertzen.com/) & [jsPDF](https://rawgit.com/MrRio/jsPDF/master/docs/index.html)

## 📂 Project Structure

```text
resumebuilder/
├── assets/             # Global assets like images and mock data
│   ├── images/         # Profile pictures for dummy data
│   └── assets.js       # Mock resume data
├── src/
│   ├── components/     # Reusable UI components (Form, Download, Selector)
│   ├── templates/      # React components for different resume styles
│   ├── pages/          # Main page components
│   ├── App.jsx         # Main application logic and routing
│   └── index.css       # Global Tailwind directives
├── index.html          # Entry point
└── package.json        # Dependencies and scripts
```

## 🏁 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16.x or higher recommended)
-   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/resumebuilder.git
    cd resumebuilder
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or new templates.

---

Built with ❤️ by [Eshwar Chavan](https://github.com/eshwarchavan)
