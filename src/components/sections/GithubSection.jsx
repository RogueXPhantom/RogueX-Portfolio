import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  GitFork,
  Star,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

import SectionHeading from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";

const GITHUB_USERNAME = "RogueXPhantom";

export default function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=4`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories");
        }

        const data = await response.json();

        setRepos(data);
      } catch (err) {
        console.error("GitHub API error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRepositories();
  }, []);

  return (
    <section id="github" className="relative py-28 sm:py-36">
      <div className="section-shell">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

          <SectionHeading
            index={7}
            eyebrow="Open Source"
            title="GitHub"
            deck="Most of what I build ends up public. Here's a look at my recent activity and repositories."
          />

          <Button
            as="a"
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="shrink-0"
          >
            <Github className="h-4 w-4" />
            @{GITHUB_USERNAME}
          </Button>

        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-10% 0px",
          }}
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

            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={11}
              blockMargin={4}
              fontSize={12}
              colorScheme="light"
            />

          </div>

        </motion.div>

        {/* Repository Section */}
        <div className="mt-10 flex items-center justify-between">

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              Recent repositories
            </p>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-1.5
              font-mono
              text-xs
              text-ink-faint
              transition-colors
              hover:text-mint
            "
          >
            View all
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-6 flex items-center justify-center rounded-lg border border-border bg-surface-raised p-12">

            <div className="flex items-center gap-3 font-mono text-sm text-ink-faint">
              <Loader2 className="h-4 w-4 animate-spin" />
              Fetching repositories...
            </div>

          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-6 rounded-lg border border-border bg-surface-raised p-8 text-center">

            <p className="font-mono text-sm text-ink-muted">
              Unable to load GitHub repositories right now.
            </p>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-mint"
            >
              Visit GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

          </div>
        )}

        {/* Repositories */}
        {!loading && !error && (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

            {repos.map((repo, i) => (

              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"

                initial={{
                  opacity: 0,
                  y: 18,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  margin: "-10% 0px",
                }}

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
                    {repo.description || "No description provided."}
                  </p>

                </div>

                <div className="mt-6 flex flex-wrap items-center gap-5 font-mono text-xs text-ink-faint">

                  {/* Language */}
                  {repo.language && (
                    <span className="flex items-center gap-1.5">

                      <span className="h-2.5 w-2.5 rounded-full bg-mint/60" />

                      {repo.language}

                    </span>
                  )}

                  {/* Stars */}
                  <span className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stargazers_count}
                  </span>

                  {/* Forks */}
                  <span className="flex items-center gap-1.5">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks_count}
                  </span>

                </div>

              </motion.a>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}