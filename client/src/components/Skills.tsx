import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Palette, 
  Video, 
  Database, 
  FileText, 
  PenTool,
  Monitor,
  Smartphone,
  Globe,
  Cpu,
  Camera,
  Edit3
} from 'lucide-react';

const skillsData = {
  technical: [
    { name: 'React', level: 90, icon: Code, category: 'Frontend' },
    { name: 'TypeScript', level: 85, icon: Code, category: 'Frontend' },
    { name: 'Node.js', level: 80, icon: Cpu, category: 'Backend' },
    { name: 'Express', level: 75, icon: Monitor, category: 'Backend' },
    { name: 'Tailwind CSS', level: 95, icon: Palette, category: 'Frontend' },
    { name: 'PostgreSQL', level: 70, icon: Database, category: 'Database' },
    { name: 'MongoDB', level: 75, icon: Database, category: 'Database' },
    { name: 'GraphQL', level: 65, icon: Globe, category: 'Backend' },
    { name: 'Next.js', level: 85, icon: Monitor, category: 'Frontend' },
    { name: 'Vue.js', level: 70, icon: Code, category: 'Frontend' }
  ],
  creative: [
    { name: 'Video Editing', level: 80, icon: Video, category: 'Media' },
    { name: 'Graphic Design', level: 75, icon: Palette, category: 'Design' },
    { name: 'Flex Designing', level: 70, icon: Edit3, category: 'Design' },
    { name: 'Data Entry', level: 90, icon: FileText, category: 'Admin' },
    { name: 'Content Creation', level: 85, icon: PenTool, category: 'Creative' },
    { name: 'Technical Writing', level: 80, icon: FileText, category: 'Writing' },
    { name: 'Assignment Making', level: 85, icon: FileText, category: 'Education' },
    { name: 'UI/UX Design', level: 75, icon: Smartphone, category: 'Design' },
    { name: 'Digital Marketing', level: 70, icon: Globe, category: 'Marketing' }
  ]
};

const categoryColors: Record<string, string> = {
  'Frontend': 'bg-blue-100 text-blue-800',
  'Backend': 'bg-green-100 text-green-800',
  'Database': 'bg-purple-100 text-purple-800',
  'Media': 'bg-red-100 text-red-800',
  'Design': 'bg-pink-100 text-pink-800',
  'Admin': 'bg-yellow-100 text-yellow-800',
  'Creative': 'bg-indigo-100 text-indigo-800',
  'Writing': 'bg-gray-100 text-gray-800',
  'Education': 'bg-orange-100 text-orange-800',
  'Marketing': 'bg-teal-100 text-teal-800'
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical and creative skills to deliver exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <motion.div className="space-y-4">
                  {skillsData.technical.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                              <Icon className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="font-medium text-gray-800">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={categoryColors[skill.category]} variant="secondary">
                              {skill.category}
                            </Badge>
                            <span className="text-sm text-gray-600">{skill.level}%</span>
                          </div>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-gray-200"
                          style={{
                            background: `linear-gradient(to right, #3B82F6 ${skill.level}%, #E5E7EB ${skill.level}%)`
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Creative Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Creative & Digital Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <motion.div className="space-y-4">
                  {skillsData.creative.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
                              <Icon className="w-4 h-4 text-purple-600" />
                            </div>
                            <span className="font-medium text-gray-800">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={categoryColors[skill.category]} variant="secondary">
                              {skill.category}
                            </Badge>
                            <span className="text-sm text-gray-600">{skill.level}%</span>
                          </div>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-gray-200"
                          style={{
                            background: `linear-gradient(to right, #9333EA ${skill.level}%, #E5E7EB ${skill.level}%)`
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Services Overview</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <Code className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Web Development</h4>
                  <p className="text-sm opacity-90">Full-stack applications with modern frameworks</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <Video className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Video & Design</h4>
                  <p className="text-sm opacity-90">Professional video editing and graphic design</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <FileText className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Content Services</h4>
                  <p className="text-sm opacity-90">Data entry, assignments, and technical writing</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
