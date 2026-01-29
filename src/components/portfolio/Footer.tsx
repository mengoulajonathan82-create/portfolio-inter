import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-foreground">
              Portfolio<span className="text-primary">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
