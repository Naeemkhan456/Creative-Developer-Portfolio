import { useExperience } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { data: experiences, isLoading } = useExperience();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Experience</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and career milestones.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {isLoading ? (
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-40 bg-muted rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {experiences?.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  {/* Timeline Line */}
                  <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />
                  
                  <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Date Bubble (Mobile: inline, Desktop: center) */}
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 mb-4 md:mb-0 flex justify-center">
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg border-4 border-background">
                        {exp.duration}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="md:w-[45%]">
                      <div className="glass-card p-6 rounded-xl hover:bg-card/90">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg leading-tight">{exp.role}</h3>
                            <p className="text-primary font-medium text-sm">{exp.company}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="md:w-[45%]" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
