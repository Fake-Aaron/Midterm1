This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

```bash
midterm-proj2/ 
├── app/ # App Router structure 
│ ├── globals.css # Tailwind CSS entry point
│ └── page.tsx # Main landing page 
├── components/ # Exported components for page
│ ├── "folders/" # Various folders for managing components of components
│ └── "components".tsx # Main component parts exported into page 
├── public/ # Static assets (images, logos, etc.) 
├── tailwind.config.js # Tailwind CSS configuration 
├── postcss.config.js # PostCSS configuration 
├── package.json # Project dependencies and scripts 
├── other configs
└── README.md # This file!
```

## 🛠️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/Fake-Aaron/Midterm1.git
cd Midterm1
```

2 **Create a new next app**

IMPORTANT: open or set the directory of the terminal to the place you want to create the app

```bash
npx create-next-app@latest Midterm1
```

3 **Copy repository files onto the new folder**

When prompted to replace files, select "Replace all files in destination"

4 **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
To edit individual components in the website, or modify existing pieces, go to `components/` and find the part you wish to edit. (You can also modify the components of that component by going to `components/components folder` (Name depends on part you wish to modify))

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Design Source

This project uses a template design from figma (somewhat) for inspiration and general theming
. You can check out the figma design used here

- [Figma Design Template](https://www.figma.com/design/Pyo2HzDNXY7O59Hr3RHP9K/Launch-UI-–-Landing-Page-Templates---Components--Community-?node-id=59-1931&p=f&t=TOzoh0RhWBT17Srg-0)

## 💡 Notes
This project uses the App Router, so routing is handled via the /app directory instead of /pages.

Components are written using functional React components and TypeScript.

Tailwind CSS is configured for dark mode by default.

Assets like icons and logos are stored in the /public directory.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

