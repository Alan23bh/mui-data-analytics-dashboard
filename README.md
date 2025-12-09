# DataSoft • Analytics Dashboard

A fully responsive data analytics dashboard built with **Next.js (App Router)**, **TypeScript**, **Material UI**, **Recharts**, and **NextAuth (Google OAuth)**.

This project showcases a modern front-end stack with a protected dashboard experience, light/dark theming, and real-world UI patterns that are relevant for SaaS / internal tools.

---

## 🚀 Live Demo

**Vercel:** https://mui-data-analytics-dashboard.vercel.app

_(Best viewed on desktop, but fully responsive.)_

---

## ✨ Features

### 🧭 Layout & Navigation
- App Shell layout with:
  - Persistent sidebar navigation
  - Top AppBar with theme toggle and user avatar
  - Sticky footer
- Fully responsive: works on desktop and smaller viewports
- Drawer navigation that collapses/expands and adapts to header height

### 🔐 Authentication & Authorization
- Google OAuth via **NextAuth**
- Protected routes using **Next.js middleware**:
  - `/dashboard`
  - `/dashboard/data`
  - `/dashboard/profile`
  - `/dashboard/settings`
- Custom auth pages:
  - Sign in, Sign out, Error, New User, Verify Request

### 📊 Dashboard
- Line chart: **Transactions per day** (Recharts)
- KPI cards:
  - Total Sales
  - Total Value
  - Average Order Value
  - Conversion Rate
- Donut charts per user type with legend & labels

### 📁 Data Table
- **MUI Data Grid** with:
  - Sorting
  - Pagination
  - Checkbox row selection
  - Custom styling for dark theme

### 🎨 Theming
- Custom **MUI light/dark themes**
- Theme toggle on the AppBar
- Charts and tables styled to match theme
- Consistent typography & spacing system

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Library:** Material UI
- **Charts:** Recharts
- **Auth:** NextAuth (Google OAuth)
- **Deployment:** Vercel

---





## 📂 Project Structure

```text
src/
  app/
    api/auth/[...nextauth]/route.ts   # NextAuth configuration
    auth/                             # Custom auth pages
    dashboard/                        # Dashboard routes (home, data, profile, settings)
    components/
      Dashboard/
      DataChart/
      Footer/
      Header/
      Layout/
      Login/
      SideMenu/
  styles/ (if applicable)
  middleware.ts                       # Protected routes via withAuth


---

## 📱 Running the Project Locally
git clone https://github.com/Alan23bh/mui-data-analytics-dashboard.git
cd mui-data-analytics-dashboard

# install dependencies
yarn install   # or npm install

# create .env.local and add your NextAuth + Google credentials
# NEXTAUTH_URL=http://localhost:3000
# NEXTAUTH_SECRET=your-secret
# GOOGLE_CLIENT_ID=...
# GOOGLE_CLIENT_SECRET=...

# run dev server
yarn dev
# visit http://localhost:3000

