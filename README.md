# WROKS - Work & Project Management Application

🚧 **This project is under heavy development. Features and functionality may change frequently.** 🚧

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Server-green?logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)](https://www.postgresql.org/)
[![NeonDB](https://img.shields.io/badge/NeonDB-Cloud%20Database-orange?logo=neon)](https://neon.tech/)
[![Redux](https://img.shields.io/badge/Redux-State%20Management-purple?logo=redux)](https://redux.js.org/)
[![MUI](https://img.shields.io/badge/MUI-UI%20Library-blue?logo=mui)](https://mui.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Typing-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-green?logo=prisma)](https://www.prisma.io/)
[![GitHub stars](https://img.shields.io/github/stars/leos0509/wroks-v0?style=social)](https://github.com/leos0509/wroks-v0)
[![GitHub forks](https://img.shields.io/github/forks/leos0509/wroks-v0?style=social)](https://github.com/leos0509/wroks-v0/network/members)

## 🚀 Introduction
WROKS is a **modern project management application** designed to help teams collaborate efficiently, manage tasks, and track progress seamlessly. Inspired by tools like Trello and Jira, WROKS combines **Next.js, Node.js, PostgreSQL (NeonDB), Redux, and Prisma** to deliver a robust and scalable experience.

![Showcase](https://ik.imagekit.io/eef0on2jw/wroks_screenshot.png?updatedAt=1740759306222)

## 🌟 Features
- ✅ **Task & Project Management** - Create, organize, and track tasks and projects
- 👥 **Team Collaboration** - Assign tasks, set priorities, and track progress
- 📊 **Analytics & Reports** - Gain insights into team productivity
- 🔒 **Authentication & Authorization** - Secure access with token-based authentication
- 🎨 **Responsive UI** - Built with MUI & TailwindCSS for a sleek and adaptive design

## 🛠 Tech Stack
- **Frontend:** Next.js, MUI, TailwindCSS, Redux, Redux Persist
- **Backend:** Node.js, Next.js API routes
- **Database:** PostgreSQL (NeonDB) with Prisma ORM
- **State Management:** Redux Toolkit & Redux Persist
- **Deployment:** Vercel (Frontend), NeonDB (Database)

## 📦 Installation & Setup
### Prerequisites
- Node.js (>= 16.x)
- PostgreSQL Database (NeonDB recommended)

### Installation
```sh
# Clone the repository
git clone https://github.com/your-username/wroks.git
cd wroks

# Install dependencies
npm install  # or yarn install
```

### Environment Variables
Create a `.env.local` file and add the following:
```sh
DATABASE_URL="your-neondb-url"
NEXTAUTH_SECRET="your-secret-key"
```

### Running the Development Server
```sh
npm run dev  # or yarn dev
```

### Building for Production
```sh
npm run build  # or yarn build
npm run start  # or yarn start
```

### Deployment
WROKS is optimized for **Vercel**. Deploy by connecting your repository to Vercel or using:
```sh
vercel --prod
```

## 📌 Links
- 📂 [GitHub Repository](https://github.com/leos0509)
- 📧 [Contact](mailto:baopham.201015@gmail.com)

## 📝 License
This project is licensed under the MIT License.

---
💡 Feel free to fork and contribute!

