import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Server, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Vue, TypeScript, Next.js, Tailwind CSS",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Python, PostgreSQL, MongoDB, GraphQL",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Figma, UI/UX, Design Systems, Prototyping",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "React Native, Flutter, iOS, Android",
    color: "from-primary/15 to-primary/5",
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 rounded-2xl bg-gradient-to-br ${skill.color} border border-border/50 hover:border-primary/30 transition-colors duration-300`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <skill.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {skill.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Mes <span className="text-gradient">compétences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
