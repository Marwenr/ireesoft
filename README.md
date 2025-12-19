# BRIGHTEDGE - Digital Design Creators Website

A modern, clean Next.js website built with Tailwind CSS, featuring a professional landing page design.

## Features

- ✨ Modern Next.js 14 with App Router
- 🎨 Tailwind CSS with custom color configuration
- 🧩 Reusable components (Button, Input)
- 📱 Responsive design
- 🎯 Clean, component-based architecture

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
ireesoft/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Button.tsx       # Reusable button component
│   ├── Input.tsx        # Reusable input component
│   ├── Sidebar.tsx      # Left sidebar with branding
│   ├── HeroSection.tsx  # Main hero content
│   ├── TeamSection.tsx  # Team member section
│   └── RightSection.tsx # Abstract background section
├── tailwind.config.ts   # Tailwind configuration with custom colors
└── package.json
```

## Custom Colors

All colors are configured in `tailwind.config.ts`:

- **Primary**: Dark gray tones for sidebar and backgrounds
- **Accent**: Red and Orange for highlights
- **Text**: Various gray shades for typography
- **Background**: White and light gray tones

## Components

### Button Component

Reusable button with variants (`primary`, `secondary`, `icon`) and sizes (`sm`, `md`, `lg`).

### Input Component

Form input component with label and error handling support.

All styling is done through Tailwind CSS classes.
