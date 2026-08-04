import React from "react";
import { motion } from "framer-motion";
import { Github, GitFork, Star, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const PINNED = projects.slice(0, 4).map((p, i) => ({
  name: p.id,
  desc: p.tagline,
  language: p.tags[0],
  stars: [128, 64, 41, 22][i] ?? 10,
  forks: [24, 12, 8, 3][i] ?? 1,
}));

function ContributionGraph() {
  return (
    <img
      src="https://ghchart.rshah.org/000000/RogueXPhantom"
      alt="RogueXPhantom GitHub contribution graph"
      className="
        w-full
        max-w-4xl
        opacity-90
      "
    />
  );
}

export default function GithubSection() {
  return (
    <section id="github" className="relative py-28 sm:py-36">
      <div className="section-shell">

        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

          <SectionHeading
            index={7}
            eyebrow="Open Source"
            title="GitHub"
            deck="Most of what I build ends up public. Here's a slice of the pinned repos and recent activity."
          />

          <Button
            as="a"
            href="https://github.com/RogueXPhantom"
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="shrink-0"
          >
            <Github className="h-4 w-4" />
            @RogueXPhantom
          </Button>

        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="
            mt-16
            overflow-x-auto
            rounded-lg
            border border-border
            bg-surface-raised
            p-6
            sm:p-8
          "
        >

          <div className="flex items-center justify-between">

            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              GitHub activity over the last year
            </p>

            <p className="hidden font-mono text-[11px] text-ink-ghost sm:block">
              less · more
            </p>

          </div>


          <div className="mt-6 min-w-[700px]">
            <ContributionGraph />
          </div>


        </motion.div>



        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

          {PINNED.map((repo, i) => (

            <motion.a
              key={repo.name}
              href={`https://github.com/RogueXPhantom/${repo.name}`}
              target="_blank"
              rel="noreferrer"

              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}

              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.08,
              }}

              className="
                card-editorial
                group
                flex
                flex-col
                justify-between
                rounded-lg
                p-6
              "
            >

              <div>

                <div className="flex items-center justify-between">

                  <span className="font-mono text-sm text-mint">
                    {repo.name}
                  </span>


                  <ArrowUpRight
                    className="
                      h-4 w-4
                      text-ink-faint
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-mint
                    "
                  />

                </div>


                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {repo.desc}
                </p>


              </div>



              <div className="mt-6 flex items-center gap-5 font-mono text-xs text-ink-faint">


                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-mint/60" />
                  {repo.language}
                </span>


                <span className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5" />
                  {repo.stars}
                </span>


                <span className="flex items-center gap-1.5">
                  <GitFork className="h-3.5 w-3.5" />
                  {repo.forks}
                </span>


              </div>


            </motion.a>

          ))}


        </div>


      </div>
    </section>
  );
}