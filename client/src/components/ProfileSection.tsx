import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Globe,
  Calendar,
  Award,
  Users
} from 'lucide-react';

export default function ProfileSection() {
  const profileData = {
    name: "Naeem Khan",
    title: "Creative Developer & Digital Services Provider",
    tagline: "Building digital experiences with creativity and code",
    bio: "Passionate full-stack developer with expertise in modern web technologies and comprehensive digital services. I transform ideas into reality through code, design, and creative solutions.",
    location: "Islamabad, Pakistan",
    email: "naeem78804@gmail.com",
    phone: "+923409192279",
    available: true,
    experience: "4+ Years",
    projects: "50+ Projects",
    clients: "30+ Happy Clients"
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Globe, href: "#", label: "Website" }
  ];

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row gap-8 items-center lg:items-start"
    >
      {/* Profile Card */}
      <motion.div variants={itemVariants} className="flex-shrink-0">
        <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center">
              {/* Profile Picture */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative inline-block mb-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-60" />
                <Avatar className="w-32 h-32 relative border-4 border-white shadow-lg">
                  <AvatarImage 
                    src="/api/placeholder/150/150" 
                    alt={profileData.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    NK
                  </AvatarFallback>
                </Avatar>
                
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </motion.div>

              {/* Name and Title */}
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {profileData.name}
              </h2>
              <p className="text-gray-600 mb-1">{profileData.title}</p>
              <p className="text-sm text-gray-500 italic mb-4">{profileData.tagline}</p>

              {/* Availability Badge */}
              <div className="mb-6">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  {profileData.available ? "Available for Work" : "Currently Busy"}
                </Badge>
              </div>

              {/* Bio */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {profileData.bio}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{profileData.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats and Info Cards */}
      <motion.div variants={itemVariants} className="flex-1 space-y-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-0"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-blue-100">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{profileData.experience}</p>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-0"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-purple-100">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{profileData.projects}</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-0"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-green-100">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{profileData.clients}</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Overview */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Core Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Web Development",
                "Video Content Editing",
                "Graphic/Flex Designing",
                "Data Entry Services",
                "Assignment Making",
                "Technical Writing"
              ].map((service, index) => (
                <motion.div
                  key={service}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
