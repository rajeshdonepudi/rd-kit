# RD UI Kit Monorepo

A modern, accessible UI component library built with React, Tailwind CSS, and Radix UI. This project is structured as a pnpm monorepo.

## 📦 Structure

This repository uses a monorepo setup containing the following packages and applications:

### Apps
- **`docs`**: A Storybook application documenting the UI components.
- **`playground`**: A Vite-powered React application for testing and playing with the UI components in a real environment.

### Packages
- **`ui`**: The core React UI component library, built with tsup.
- **`eslint-config`**: Shared ESLint configurations used across the workspace.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- [pnpm](https://pnpm.io/installation) (v8+)

### Installation

Install all dependencies from the root of the repository:

```bash
pnpm install
```

### Development

To start the development servers for all apps and packages simultaneously, run:

```bash
pnpm run dev
```

This command will:
1. Start building the `ui` package in watch mode.
2. Boot up the Vite development server for the `playground` at `http://localhost:5173/`.
3. Boot up the Storybook server for the `docs` at `http://localhost:6006/`.

### 🛠️ Available Scripts

Run these from the root directory:

- **Build all:** `pnpm run build` - Builds all packages and apps for production.
- **Lint:** `pnpm run lint` - Lints all files across the workspace.
- **Test:** `pnpm run test` - Runs Vitest suites.
- **Typecheck:** `pnpm run typecheck` - Validates TypeScript types without emitting files.
- **Storybook:** `pnpm run storybook` - Starts just the Storybook server.
