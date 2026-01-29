import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plateforme de commerce électronique moderne avec panier, paiement et gestion des stocks.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour la visualisation de données en temps réel.",
    tags: ["TypeScript", "D3.js", "PostgreSQL", "GraphQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Application Mobile",
    description: "Application de fitness avec suivi des entraînements et plans personnalisés.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-2">
          <a
            href={project.githubUrl}
            className="p-3 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={project.liveUrl}
            className="p-3 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Projets <span className="text-gradient">récents</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
