import { db } from "./db";
import {
  skills, projects, experience, contactMessages,
  type InsertSkill, type Skill,
  type InsertProject, type Project,
  type InsertExperience, type Experience,
  type InsertContactMessage, type ContactMessage
} from "@shared/schema";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  getExperience(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;

  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }

  async createExperience(exp: InsertExperience): Promise<Experience> {
    const [newExperience] = await db.insert(experience).values(exp).returning();
    return newExperience;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
