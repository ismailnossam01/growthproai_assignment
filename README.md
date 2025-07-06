# GrowthProAI - Local Business Dashboard

A stunning, production-ready Mini Local Business Dashboard built for the GrowthProAI Full Stack Intern Assignment. This application simulates how small businesses can view their SEO content and Google Business data with a modern, professional interface.

## ✨ Features

- **Modern Dashboard Interface**: Clean, professional design with glass-morphism effects
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach, perfect on all devices
- **Real-time Business Analytics**: Simulated Google Business data with ratings and reviews
- **AI-Powered SEO Headlines**: Dynamic headline generation with regeneration capability
- **Smooth Animations**: Micro-interactions and loading states for enhanced UX
- **Form Validation**: Client-side validation with helpful error messages
- **Professional UI Components**: Reusable components with consistent design system
- **Production Ready**: Configured for deployment on Netlify, Vercel, and Render

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for development and building
- **Custom Hooks** for state management

### Backend
- **Node.js** with Express
- **CORS** enabled for cross-origin requests
- **RESTful API** design
- **Simulated data** (no database required)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ismailnossam01/growthproai_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   VITE_API_URL : https://growthproai-assignment-backend.onrender.com
   
   # For local development, the default settings work fine
   # For production, update VITE_API_URL in .env to your deployed backend URL
   ```

4. **Start the development servers**
   ```bash
   # Start both frontend and backend concurrently
   npm run dev:full
   ```

   Or run them separately:
   ```bash
   # Terminal 1 - Backend server
   npm run server

   # Terminal 2 - Frontend development server
   npm run dev
   ```

### 🌐 Access the Application

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3002

## 🚀 Deployment

### Frontend Deployment

#### Netlify
1. **Automatic Deployment:**
   - Connect your GitHub repository to Netlify
   - Netlify will automatically detect the build settings from `netlify.toml`
   - Update the `VITE_API_URL` in `netlify.toml` to your deployed backend URL

2. **Manual Deployment:**
   ```bash
   npm run build
   # Upload the 'dist' folder to Netlify
   ```

### Backend Deployment

#### Render
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use these settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm run server`
   - **Environment:** Node.js
   - **Port:** The port will be automatically assigned by Render

#### Railway/Heroku
1. Create a new app
2. Connect your repository
3. The app will automatically detect it's a Node.js app
4. Set the start command to `npm run server`

### Environment Variables for Production

After deploying your backend, update the frontend environment variables:

1. **For Netlify:** Update `VITE_API_URL` in `netlify.toml`
2. **For Vercel:** Update `VITE_API_URL` in `vercel.json`
3. **For local .env:** Update `VITE_API_URL` in `.env` file

Example:
```
VITE_API_URL=https: https://growthproai-assignment-backend.onrender.com
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── LoadingSpinner.tsx
│   │   └── ThemeToggle.tsx
│   ├── BackgroundEffects.tsx
│   ├── BusinessCard.tsx
│   ├── BusinessForm.tsx
│   └── Header.tsx
├── contexts/
│   └── ThemeContext.tsx
├── hooks/
│   └── useBusinessData.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🔌 API Endpoints

### POST /business-data
**Request:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "lastUpdated": "2025-01-08T10:30:00.000Z"
}
```

### GET /regenerate-headline
**Query Parameters:**
- `name`: Business name
- `location`: Business location

**Response:**
```json
{
  "headline": "How Cake & Co Became Mumbai's Top-Rated Local Business",
  "generatedAt": "2025-01-08T10:35:00.000Z"
}
```

## 🎨 Design Features

- **Glass Morphism**: Modern frosted glass effects
- **Gradient Backgrounds**: Animated floating shapes
- **Color System**: Comprehensive color palette with dark mode support
- **Typography**: Clean, readable font hierarchy
- **Micro-interactions**: Smooth hover effects and transitions
- **Loading States**: Professional loading spinners and animations

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing the Application

1. **Enter Business Details**: Use the form to input a business name and location
2. **View Analytics**: See simulated Google Business data with ratings and reviews
3. **Regenerate Headlines**: Click the "Regenerate" button to get new SEO headlines
4. **Theme Toggle**: Switch between light and dark themes
5. **Responsive Test**: Resize the browser to test mobile responsiveness

## 🎯 Assignment Requirements Met

- ✅ **Input Form**: Business name and location fields
- ✅ **Display Card**: Rating, reviews, and SEO headline
- ✅ **Backend API**: Two REST endpoints as specified
- ✅ **Responsive Design**: Mobile-friendly with Tailwind CSS
- ✅ **Bonus Features**: 
  - Dark/Light theme toggle
  - Loading animations
  - Form validation
  - Professional UI/UX
  - State management with custom hooks
  - **Production deployment ready**

## 🔧 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🌟 Why This Project Stands Out

1. **Production-Ready Code**: Clean, maintainable, and scalable architecture
2. **Modern Design**: Apple-level aesthetics with attention to detail
3. **Performance Optimized**: Efficient React patterns and optimized builds
4. **Accessibility**: ARIA labels and keyboard navigation support
5. **Type Safety**: Full TypeScript implementation
6. **Error Handling**: Comprehensive error states and user feedback
7. **Code Quality**: ESLint configuration and best practices
8. **Deployment Ready**: Configured for major hosting platforms
9. **Environment Management**: Proper environment variable handling

## 🔗 Live Demo

- **Frontend**: https://growthproailbi.netlify.app/
- **Backend**: https://growthproai-assignment-backend.onrender.com

---

Built with ❤️ for the GrowthProAI Full Stack Intern Assignment
