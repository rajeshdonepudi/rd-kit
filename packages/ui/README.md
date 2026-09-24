# @rd-kit/ui

A modern, accessible, and customizable React UI component library built with [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/).

## Installation

You can install the package via your preferred package manager:

```bash
# Using pnpm
pnpm add @rd-kit/ui

# Using npm
npm install @rd-kit/ui

# Using yarn
yarn add @rd-kit/ui
```

## Setup

For the components to render correctly, you need to import the global CSS styles into your application's root file (e.g., `App.tsx`, `index.tsx`, or `_app.tsx` in Next.js).

```tsx
import "@rd-kit/ui/src/styles/globals.css";
```

## Usage

Here is a quick example of how you can use the components in your React application:

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent, CardFooter } from "@rd-kit/ui";

function MyComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col space-y-1.5">
            <Input id="name" placeholder="Name of your project" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export default MyComponent;
```

## Features

- **Accessible:** Built on top of Radix UI primitives to ensure full accessibility compliance.
- **Customizable:** Styled with Tailwind CSS, allowing you to easily override styles and themes.
- **Dark Mode Support:** Comes with built-in dark mode support.
- **Typescript Ready:** fully typed, providing excellent developer experience and autocompletion.
