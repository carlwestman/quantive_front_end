# Quantive - Investment Research Platform

Quantive is a React-based application designed to organize and perform investment research. It allows users to create research projects, manage sources, engage in AI-driven chats, and generate reports.

## Features
- **Research Projects**: Create and manage research projects connected to one or more companies
- **Sources Management**: Upload and organize documents (PDF, Word, Excel, etc.)
- **AI-Powered Chats**: Interact with AI agents for research assistance
- **Report Generation**: Store and display research reports
- **Dynamic UI**: Collapsible left menu with project navigation
- **Modern Interface**: Built with Joy UI and Tailwind CSS

## Tech Stack
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Components**: Joy UI (@mui/joy)
- **Icons**: Material Icons (@mui/icons-material)
- **AI Integration**: Assistant UI (@assistant-ui/react)
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint, TypeScript

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm (v7 or later)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd quantive_front_end
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:5173

## Project Structure
```
src/
  ├── components/          # Reusable components
  │   ├── assistant-ui/   # AI-related components
  │   └── ui/             # Common UI components
  ├── lib/                # Utilities and helpers
  ├── App.tsx            # Main application component
  ├── main.tsx           # Application entry point
  └── index.css          # Global styles
```

## Key Components
- `App.tsx`: Main application layout with collapsible menu and content area
- `components/assistant-ui/`: AI chat and interaction components
- `components/ui/`: Shared UI components like buttons and tooltips

## Development Guide

### Adding a New Feature
1. Create any necessary components in `src/components/`
2. Update the main App.tsx if needed
3. Style using Tailwind CSS classes or Joy UI's sx prop
4. Test the changes using `npm run dev`

### Styling Guidelines
- Use Joy UI components for consistent styling
- Utilize Tailwind CSS for custom styles
- Follow the existing layout patterns for consistency

### Current Status
- Basic layout and navigation implemented
- Research project list with selection
- Tab-based content areas (Chats, Reports, Sources)
- Collapsible left menu

### Next Steps
- [ ] Implement file upload for Sources
- [ ] Add AI chat functionality
- [ ] Create report generation interface
- [ ] Add company management
- [ ] Implement project creation/editing
- [ ] Add backend integration

## Troubleshooting
- **PostCSS Issues**: Ensure postcss.config.cjs is properly configured
- **Tailwind Not Working**: Check tailwind.config.js content paths
- **Type Errors**: Verify tsconfig files and types are correctly set up

## Contributing
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request
```
