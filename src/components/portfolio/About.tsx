import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              À propos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Passionné par le
              <span className="text-gradient"> design </span>
              et le code
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je suis un développeur créatif avec plus de 5 ans d'expérience dans
                la conception et le développement d'applications web modernes.
              </p>
              <p>
                Mon approche combine une attention méticuleuse aux détails visuels
                avec une expertise technique solide, pour créer des produits qui
                sont à la fois beaux et fonctionnels.
              </p>
              <p>
                Je crois que les meilleures expériences numériques naissent de la
                rencontre entre un design réfléchi et un code propre.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-7xl font-bold text-gradient mb-2">5+</div>
                <div className="text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl border border-primary/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
