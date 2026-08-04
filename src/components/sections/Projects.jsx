import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const SIZE_CLASSES = {
  lg: "sm:col-span-2 sm:row-span-2 min-h-[22rem]",
  md: "sm:col-span-1 sm:row-span-2 min-h-[22rem]",
  sm: "sm:col-span-1 sm:row-span-1 min-h-[14rem]",
};

function ProjectVisual({ project }) {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgb(var(--accent)/0.12),transparent_55%)]">
      <div className="absolute inset-0 bg-blueprint-grid bg-[size:34px_34px] opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

      <div className="absolute bottom-5 right-5 select-none font-mono text-[10px] uppercase tracking-widest text-ink-ghost transition-colors duration-500 group-hover:text-mint/40">
        {project.year}
      </div>

      <div className="absolute left-5 top-5 font-serif text-2xl text-ink-ghost/70 transition-colors duration-500 group-hover:text-mint/50">
        {project.title.slice(0, 2).toUpperCase()}
      </div>
    </div>
  );
}

function DialogTriggerCard({ project }) {
  return (
    <DialogTrigger asChild>
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "group relative overflow-hidden rounded-lg border border-border bg-surface-raised text-left transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-mint/40",
          SIZE_CLASSES[project.size]
        )}
      >
        <ProjectVisual project={project} />

        {/* Project information */}
        <div
          className="
            absolute inset-x-0 bottom-0
            flex flex-col gap-2
            border-t border-border/0
            bg-surface-raised/95
            p-6 pt-7
            backdrop-blur-sm
            transition-all duration-500
            group-hover:border-border
            group-hover:bg-surface-raised
          "
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-mint sm:text-3xl">
              {project.title}
            </h3>

            <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" />
          </div>

          <p className="text-sm leading-relaxed text-ink-muted">
            {project.tagline}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-widest text-ink-faint"
              >
                {t}
                <span className="mx-1.5 text-ink-ghost">/</span>
              </span>
            ))}
          </div>
        </div>
      </motion.button>
    </DialogTrigger>
  );
}

function ProjectCard({ project }) {
  return (
    <Dialog>
      <DialogTriggerCard project={project} />

      <DialogContent>
        <DialogHeader>
          <p className="eyebrow mb-2">
            {project.role} · {project.year}
          </p>

          <DialogTitle>{project.title}</DialogTitle>

          <DialogDescription>
            {project.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 p-6">
          <p className="text-sm leading-relaxed text-ink-muted">
            {project.description}
          </p>

          {project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4 border-y border-border py-5">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-serif text-2xl text-mint">
                    {m.value}
                  </div>

                  <div className="mt-1 text-xs text-ink-faint">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-mint"
            >
              <Github className="h-4 w-4" />
              Source
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-mint"
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index={2}
            eyebrow="Selected Work"
            title="Featured Projects"
            deck="A working set of security tooling and platforms — some solo, some with a small team. Click any tile for the full write-up."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:auto-rows-[10rem]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}