import { useSkills, useProjects } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Layout, Server } from "lucide-react";
import { Link } from "wouter";

// Helper for skill icons
const getIcon = (iconName: string | null) => {
  switch(iconName?.toLowerCase()) {
    case 'code': return <Code className="w-6 h-6" />;
    case 'server': return <Server className="w-6 h-6" />;
    case 'database': return <Database className="w-6 h-6" />;
    case 'layout': return <Layout className="w-6 h-6" />;
    default: return <Code className="w-6 h-6" />;
  }
};

export default function Home() {
  const { data: skills } = useSkills();
  const { data: projects } = useProjects();

  const featuredProjects = projects?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
              Building digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                experiences that matter.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I'm a Full Stack Developer with over 4 years of experience crafting beautiful, 
              responsive, and user-centric web applications using modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center">
                View Work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-8 py-3 rounded-full border border-border bg-background hover:bg-muted font-medium transition-colors">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-display mb-4">Technical Expertise</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills?.map((skill, idx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.category}</p>
                {skill.proficiency && (
                   <div className="mt-3 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-primary rounded-full" 
                       style={{ width: `${skill.proficiency}%` }} 
                     />
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-display mb-4">Featured Projects</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            <Link href="/projects" className="hidden md:flex items-center text-primary hover:text-primary/80 font-medium">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
