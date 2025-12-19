# Noteify

A simple and elegant note-taking application built with React and Vite. Noteify allows users to create, view, and delete notes with a clean and responsive user interface.

## Features

- **Add Notes**: Create new notes with a title and description
- **View Notes**: Display all notes in a card layout
- **Delete Notes**: Remove notes with a single click using the trash icon
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS for a clean, modern look
- **Real-time Updates**: Notes are instantly displayed after creation

## Technologies Used

- **React 19.2.0**: Frontend library for building user interfaces
- **Vite 7.2.4**: Fast build tool and development server
- **Tailwind CSS 4.1.18**: Utility-first CSS framework for styling
- **Lucide React**: Icon library (used for the trash icon)
- **ESLint**: Code linting and quality assurance

## Project Structure

```
Noteify/
├── src/
│   ├── components/
│   │   ├── NoteCard.jsx      # Individual note card component
│   │   ├── NoteForm.jsx       # Form component (if applicable)
│   │   └── Notes.jsx          # Notes list component
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Noteify
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## How It Works

1. **Adding a Note**: 
   - Enter a title and description in the form on the left side
   - Click "Add Note" to save the note
   - The note will appear in the "Recent Notes" section on the right

2. **Deleting a Note**:
   - Click the trash icon at the bottom-right corner of any note card
   - The note will be immediately removed from the list

3. **Data Storage**:
   - Notes are stored in the component state (in-memory)
   - Notes will be cleared when the page is refreshed
   - To persist notes, consider adding localStorage or a backend API

## Future Enhancements

- [ ] Add localStorage support to persist notes across sessions
- [ ] Implement note editing functionality
- [ ] Add search and filter capabilities
- [ ] Implement note categories or tags
- [ ] Add color themes for notes
- [ ] Export notes to different formats (PDF, JSON, etc.)
- [ ] Add user authentication and cloud storage
- [ ] Implement drag-and-drop to reorder notes

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open source and available under the MIT License.
