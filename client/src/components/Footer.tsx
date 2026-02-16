import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-lg mb-2">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Building digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Naeemkhan456" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/Naeemkhan456" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/naeem-khan-55335b255/" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:futuretech492@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
