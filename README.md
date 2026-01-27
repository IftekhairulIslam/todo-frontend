# 📝 Todo App

A modern, responsive todo application built with React, Tailwind CSS, and localStorage for data persistence.

## ✨ Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Edit todos by double-clicking or clicking the edit button
- ✅ Delete todos
- ✅ Progress tracking (shows completion percentage)
- ✅ Data persistence using browser's localStorage
- ✅ Beautiful, modern UI with Tailwind CSS
- ✅ Fully responsive design
- ✅ Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **localStorage** - Client-side data persistence

## 📁 Project Structure

```
todo-frontend/
├── src/
│   ├── components/
│   │   ├── AddTodo.jsx      # Component for adding new todos
│   │   ├── TodoList.jsx     # Component for displaying list of todos
│   │   └── TodoItem.jsx     # Individual todo item component
│   ├── utils/
│   │   └── localStorage.js  # Utility functions for localStorage
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css           # Global styles with Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Usage

1. **Add a Todo**: Type your task in the input field and click "Add" or press Enter
2. **Complete a Todo**: Click the checkbox next to a todo item
3. **Edit a Todo**: Double-click on a todo text or click the edit button (✏️)
4. **Delete a Todo**: Click the delete button (🗑️)
5. **Track Progress**: View the completion percentage at the top of the todo list

## 💾 Data Storage

All todos are automatically saved to the browser's localStorage. Your data persists even after closing the browser, but it's specific to the browser and device you're using.

## 🎨 Customization

You can customize the appearance by modifying the Tailwind classes in the components or by extending the theme in `tailwind.config.js`.

## 📝 Development

This project follows agile development methodology with:
- Small, focused commits
- Feature-based development
- Clear commit messages

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Commit following the project's commit message conventions
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and emojis for visual enhancement
