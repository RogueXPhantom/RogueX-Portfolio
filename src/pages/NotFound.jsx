import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlueprintGrid from "@/components/layout/BlueprintGrid";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center px-6 text-center">
      <BlueprintGrid />
      <div className="relative">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-4 font-serif text-display-2 text-ink">This route doesn't exist.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          Whatever you were looking for isn't at this path. Head back to the
          front page — everything else lives there anyway.
        </p>
        <Button as={Link} to="/" className="mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Button>
      </div>
    </main>
  );
}
