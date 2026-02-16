import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User, Send, Minimize2, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const naeemExperience = {
  name: "Naeem Khan",
  title: "Creative Developer & Digital Services Provider",
  experience: [
    {
      role: "Full Stack Developer & Creative Services",
      company: "Freelance & Consulting",
      duration: "2022 - Present",
      description: "Developing modern web applications and providing comprehensive digital services including video editing, graphic design, and content creation"
    },
    {
      role: "Frontend Developer",
      company: "Ideal Innovative Solutions",
      duration: "2020 - 2026",
      description: "Created responsive and interactive user interfaces using Angular and React plus nextjs"
    },
    {
      role: "Junior Developer & Content Creator",
      company: "Ideal Innovative Solutions",
      duration: "2020 - 2021",
      description: "Built web applications and provided creative services including data entry, assignment making, and technical documentation"
    }
  ],
  skills: [
    "React", "TypeScript", "Node.js", "Express", "Tailwind CSS", 
    "PostgreSQL", "MongoDB", "GraphQL", "Next.js", "Vue.js",
    "Video Editing", "Graphic Design", "Data Entry", "Content Creation",
    "Technical Writing", "Assignment Making", "Flex Designing"
  ],
  services: [
    "Web Development", "Video Content Editing", "Graphic/Flex Designing",
    "Data Entry Services", "Assignment Making", "Technical Documentation",
    "Creative Content Creation", "UI/UX Design", "Digital Marketing Support"
  ],
  education: {
    degree: "Bachelor of Software Engineering Science",
    university: "University of Technology",
    year: "2021"    
  },
  projects: [
    {
      name: "E-Commerce Platform",
      tech: ["React", "Node.js", "MongoDB", "Video Content"],
      description: "Full-stack e-commerce solution with payment integration and promotional video content"
    },
    {
      name: "Creative Portfolio Website",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Graphic Design"],
      description: "Personal portfolio showcasing projects, skills, and creative services with animated graphics"
    },
    {
      name: "Video Editing Platform",
      tech: ["React", "TypeScript", "Video APIs"],
      description: "Web-based video editing tool with graphic design integration"
    }
  ],
  contact: {
    email: "naeem78804@gmail.com",
    phone: "+923409192279",
    location: "Islamabad, Pakistan"
  }
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello! I'm here to tell you about ${naeemExperience.name}'s experience and skills. Feel free to ask me anything about his background, projects, or expertise!`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return `Hi there! I can tell you all about ${naeemExperience.name}'s background, skills, and creative services. What would you like to know?`;
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      const expText = naeemExperience.experience.map(exp => 
        `**${exp.role}** at ${exp.company} (${exp.duration}):\n${exp.description}`
      ).join('\n\n');
      return `${naeemExperience.name}'s Work Experience:\n\n${expText}`;
    }
    
    if (lowerMessage.includes('services') || lowerMessage.includes('offer') || lowerMessage.includes('provide')) {
      return `${naeemExperience.name}'s Services:\n\n${naeemExperience.services.map(service => `• ${service}`).join('\n')}\n\nFeel free to ask about any specific service!`;
    }
    
    if (lowerMessage.includes('video') || lowerMessage.includes('editing')) {
      return `**Video Content Editing Services:**\n\n${naeemExperience.name} provides professional video editing services including:\n• Video content creation and editing\n• Promotional video production\n• Web-based video editing tools\n• Integration with graphic design elements\n\nContact: ${naeemExperience.contact.email}`;
    }
    
    if (lowerMessage.includes('graphic') || lowerMessage.includes('design') || lowerMessage.includes('flex')) {
      return `**Graphic & Flex Designing Services:**\n\n${naeemExperience.name} offers:\n• Graphic design for digital and print\n• Flex banner designing\n• UI/UX design services\n• Creative content creation\n• Brand identity design\n\nEmail: ${naeemExperience.contact.email}`;
    }
    
    if (lowerMessage.includes('data') || lowerMessage.includes('entry')) {
      return `**Data Entry Services:**\n\nProfessional data entry services including:\n• Accurate data input and management\n• Database maintenance\n• Spreadsheet organization\n• Technical documentation\n• Data processing and cleaning\n\nContact: ${naeemExperience.contact.phone}`;
    }
    
    if (lowerMessage.includes('assignment') || lowerMessage.includes('writing')) {
      return `**Assignment Making & Writing Services:**\n\nAcademic and professional services:\n• Assignment creation and editing\n• Technical writing\n• Documentation preparation\n• Content development\n• Research assistance\n\n📧 ${naeemExperience.contact.email}`;
    }
    
    if (lowerMessage.includes('skills') || lowerMessage.includes('technologies')) {
      return `${naeemExperience.name}'s Technical Skills:\n\n**Development:** ${naeemExperience.skills.slice(0, 10).join(', ')}\n\n**Creative Services:** ${naeemExperience.skills.slice(10).join(', ')}`;
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('degree')) {
      return `**Education:**\n${naeemExperience.education.degree} from ${naeemExperience.education.university} (${naeemExperience.education.year})`;
    }
    
    if (lowerMessage.includes('projects')) {
      const projectText = naeemExperience.projects.map(project => 
        `**${project.name}**\nTech: ${project.tech.join(', ')}\n${project.description}`
      ).join('\n\n');
      return `Featured Projects:\n\n${projectText}`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return `**Contact Information:**\n📧 Email: ${naeemExperience.contact.email}\n📱 Phone: ${naeemExperience.contact.phone}\n📍 Location: ${naeemExperience.contact.location}\n\nAvailable for remote work and freelance projects!`;
    }
    
    if (lowerMessage.includes('who') || lowerMessage.includes('about')) {
      return `${naeemExperience.name} is a ${naeemExperience.title} with expertise in modern web development and comprehensive digital services. He specializes in React, TypeScript, and Node.js ecosystems, plus creative services like video editing, graphic design, and content creation.`;
    }
    
    return `I can tell you about ${naeemExperience.name}'s experience, skills, services (web development, video editing, graphic design, data entry, assignments), education, projects, or contact information. What specific information would you like?`;
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="rounded-full w-14 h-14 shadow-lg bg-blue-600 hover:bg-blue-700"
            >
              <Bot className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-4 right-4 z-50 ${isMinimized ? 'w-80' : 'w-96'}`}
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-5 h-5" />
                    <CardTitle className="text-sm font-medium">AI Assistant</CardTitle>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="text-white hover:bg-white/20 p-1 h-6 w-6"
                    >
                      {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20 p-1 h-6 w-6"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {!isMinimized && (
                <>
                  <CardContent className="p-0">
                    <ScrollArea className="h-96 p-4">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                              <Avatar className="w-8 h-8 flex-shrink-0">
                                <AvatarFallback className={message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'}>
                                  {message.sender === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                                </AvatarFallback>
                              </Avatar>
                              <div className={`rounded-lg px-3 py-2 text-sm ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                                <p className="whitespace-pre-line">{message.text}</p>
                                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        
                        {isTyping && (
                          <div className="flex justify-start">
                            <div className="flex items-start space-x-2">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-gray-600">
                                  <Bot className="w-4 h-4 text-white" />
                                </AvatarFallback>
                              </Avatar>
                              <div className="bg-gray-100 rounded-lg px-3 py-2">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>
                  </CardContent>
                  
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about Naeem's experience..."
                        className="flex-1"
                        disabled={isTyping}
                      />
                      <Button
                        onClick={handleSendMessage}
                        size="sm"
                        disabled={isTyping || inputValue.trim() === ''}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
