import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-16 max-w-4xl mx-auto">
        <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4 text-center bg-linear-to-r from-[#13d9cd] to-[#4effd2] bg-clip-text text-transparent">
          UE5 Style Guide
        </h1>
        <p className="text-fd-muted-foreground text-center text-lg mb-2 max-w-2xl">
          A mostly reasonable approach to Unreal Engine 5. Conventions for
          asset naming, directory structure, Blueprints, and more.
        </p>
        <p className="text-fd-muted-foreground/70 text-center text-sm mb-10">
          Based on the{" "}
          <a
            href="https://github.com/Allar/ue5-style-guide"
            className="underline hover:text-fd-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gamemakin UE5 Style Guide
          </a>{" "}
          by Michael Allar (MIT License).
        </p>

        <Link
          to="/docs/$"
          params={{ _splat: "" }}
          className="px-6 py-2.5 rounded-lg bg-fd-primary text-fd-primary-foreground font-semibold text-sm transition-shadow hover:shadow-[0_0_24px_rgba(42,229,178,0.35)]"
        >
          Read the Guide
        </Link>
      </div>
    </HomeLayout>
  );
}
