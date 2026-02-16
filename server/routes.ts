import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertSkillSchema, insertProjectSchema, insertExperienceSchema, insertContactMessageSchema } from "@shared/schema";
import { openai } from "./replit_integrations/image/client";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // === Chat ===
  app.post(api.chat.send.path, async (req, res) => {
    try {
      const { message } = api.chat.send.input.parse(req.body);
      
      const response = await openai.chat.completions.create({
        model: "gpt-5.1",
        messages: [
          { 
            role: "system", 
            content: "You are an AI assistant for Nasir's portfolio website. Nasir has 4+ years of experience in web development (Next.js, GraphQL, Git, Material UI, etc.), data entry, video editing, and graphic design. Answer questions about his skills, experience, and availability professionally." 
          },
          { role: "user", content: message }
        ],
      });

      const reply = response.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
      res.json({ reply });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // === Skills ===
  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.post(api.skills.create.path, async (req, res) => {
    try {
      const input = insertSkillSchema.parse(req.body);
      const skill = await storage.createSkill(input);
      res.status(201).json(skill);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === Projects ===
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.projects.create.path, async (req, res) => {
    try {
      const input = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(input);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === Experience ===
  app.get(api.experience.list.path, async (_req, res) => {
    const exp = await storage.getExperience();
    res.json(exp);
  });

  app.post(api.experience.create.path, async (req, res) => {
    try {
      const input = insertExperienceSchema.parse(req.body);
      const exp = await storage.createExperience(input);
      res.status(201).json(exp);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === Contact ===
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === SEED DATA ===
  // Auto-seed if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    console.log("Seeding database...");
    
    // Skills
    const skills = [
      { name: "Next.js", category: "Web Development", proficiency: 95, icon: "SiNextdotjs" },
      { name: "React", category: "Web Development", proficiency: 95, icon: "SiReact" },
      { name: "TypeScript", category: "Web Development", proficiency: 90, icon: "SiTypescript" },
      { name: "GraphQL", category: "Web Development", proficiency: 85, icon: "SiGraphql" },
      { name: "Node.js", category: "Web Development", proficiency: 85, icon: "SiNodedotjs" },
      { name: "PostgreSQL", category: "Web Development", proficiency: 80, icon: "SiPostgresql" },
      { name: "UI/UX Design", category: "Creative", proficiency: 85, icon: "SiFigma" },
      { name: "Video Editing", category: "Creative", proficiency: 75, icon: "SiAdobepremierepro" },
      { name: "Data Entry", category: "Technical", proficiency: 90, icon: "FaKeyboard" }
    ];
    
    for (const skill of skills) {
      await storage.createSkill(skill);
    }

    // Projects
    const projects = [
      {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and Tailwind CSS.",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        category: "Web Development",
        repoUrl: "https://github.com/username/project",
        projectUrl: "https://project-demo.com"
      },
      {
        title: "Portfolio v1",
        description: "My first portfolio website showcasing early work and design skills.",
        techStack: ["HTML", "SCSS", "JavaScript"],
        category: "Web Development",
        repoUrl: "https://github.com/username/portfolio-v1"
      },
      {
        title: "Brand Identity Design",
        description: "Complete brand identity package including logo, typography, and color palette for a local startup.",
        techStack: ["Illustrator", "Photoshop", "Figma"],
        category: "Creative",
        projectUrl: "https://behance.net/project"
      }
    ];

    for (const project of projects) {
      await storage.createProject(project);
    }

    // Experience
    const experience = [
      {
        role: "Senior Web Developer",
        company: "Tech Solutions Inc.",
        duration: "2022 - Present",
        description: "Leading frontend development teams, architecting scalable solutions using Next.js, and mentoring junior developers."
      },
      {
        role: "Freelance Full Stack Developer",
        company: "Self Employed",
        duration: "2020 - 2022",
        description: "Delivered custom web applications for various clients, managing the full lifecycle from requirements gathering to deployment."
      },
      {
        role: "Junior Web Developer",
        company: "Creative Agency",
        duration: "2018 - 2020",
        description: "Collaborated with designers to implement responsive user interfaces using React and SCSS."
      }
    ];

    for (const exp of experience) {
      await storage.createExperience(exp);
    }
    
    console.log("Database seeded successfully!");
  }
}
