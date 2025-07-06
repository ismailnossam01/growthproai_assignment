import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample headlines for different business types
const headlineTemplates = [
  "Why {name} is {location}'s Best Kept Secret in 2025",
  "How {name} Became {location}'s Top-Rated Local Business",
  "The Ultimate Guide to {name} in {location}: What You Need to Know",
  "Why {name} is Transforming {location}'s Local Scene",
  "5 Reasons {name} is {location}'s Most Trusted Choice",
  "Behind the Success: How {name} Dominates {location}'s Market",
  "The {name} Effect: Why {location} Locals Can't Get Enough",
  "From Local to Legend: {name}'s Journey in {location}",
  "What Makes {name} {location}'s Hidden Gem?",
  "The {name} Advantage: Why {location} Residents Choose Us"
];

// Generate simulated business data
const generateBusinessData = (name, location) => {
  const rating = (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5-5.0
  const reviews = Math.floor(Math.random() * 500) + 50; // 50-550 reviews
  const template = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
  const headline = template.replace('{name}', name).replace('{location}', location);
  
  return {
    rating: parseFloat(rating),
    reviews,
    headline,
    lastUpdated: new Date().toISOString()
  };
};

// POST /business-data endpoint
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  
  if (!name || !location) {
    return res.status(400).json({ 
      error: 'Business name and location are required' 
    });
  }
  
  // Simulate API delay
  setTimeout(() => {
    const businessData = generateBusinessData(name, location);
    res.json(businessData);
  }, 800);
});

// GET /regenerate-headline endpoint
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  
  if (!name || !location) {
    return res.status(400).json({ 
      error: 'Business name and location are required' 
    });
  }
  
  // Simulate API delay
  setTimeout(() => {
    const template = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
    const headline = template.replace('{name}', name).replace('{location}', location);
    
    res.json({ 
      headline,
      generatedAt: new Date().toISOString()
    });
  }, 600);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 GrowthProAI Backend running at http://localhost:${port}`);
});