export const team = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Game Director",
    department: "Design",
    bio: "Visionary behind the studio's core design philosophy.",
    // Let Vite inject the correct base path automatically
    image: `${import.meta.env.BASE_URL}images/studio.png` 
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Lead Engineer",
    department: "Engineering",
    bio: "Architects the foundational systems that make our worlds tick.",
    image: `${import.meta.env.BASE_URL}images/studio.png`
  },
  {
    id: 3,
    name: "Sarah Lin",
    role: "Art Director",
    department: "Art",
    bio: "Defines the visual language and aesthetic pillars of every project.",
    image: `${import.meta.env.BASE_URL}images/studio.png`
  },
  {
    id: 4,
    name: "David Chen",
    role: "Lead Technical Animator",
    department: "Animation",
    bio: "Bridges the gap between technical constraints and artistic vision.",
    image: `${import.meta.env.BASE_URL}images/studio.png`
  },
  {
    id: 5,
    name: "Alex Vane",
    role: "Audio Director",
    department: "Audio",
    bio: "Crafts the sonic landscapes that bring our worlds to life.",
    image: `${import.meta.env.BASE_URL}images/studio.png`
  },
  {
    id: 6,
    name: "Maya Brooks",
    role: "Executive Producer",
    department: "Production",
    bio: "Ensures the team has everything they need to do their best work.",
    image: `${import.meta.env.BASE_URL}images/studio.png`
  }
];
