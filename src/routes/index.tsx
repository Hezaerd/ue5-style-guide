import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export const Route = createFileRoute("/")({
  component: Home,
});

const sections = [
  {
    title: "Principles",
    description: "Core philosophy and guiding rules for project consistency.",
    href: "principles",
  },
  {
    title: "Asset Naming",
    description:
      "Naming conventions, prefixes, and suffixes for all asset types.",
    href: "asset-naming",
  },
  {
    title: "Content Directory",
    description: "Folder structure and organization for project content.",
    href: "content-directory",
  },
  {
    title: "Blueprints",
    description:
      "Variables, functions, events, and graph best practices.",
    href: "blueprints",
  },
  {
    title: "Static Meshes",
    description: "UVs, LODs, collision, and scaling standards.",
    href: "static-meshes",
  },
  {
    title: "Textures",
    description: "Dimensions, density, sizing, and grouping rules.",
    href: "textures",
  },
];

function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-16 max-w-4xl mx-auto">
        <h1 className="font-extrabold text-5xl md:text-6xl mb-4 text-center bg-linear-to-r from-[#13d9cd] to-[#4effd2] bg-clip-text text-transparent">
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
          className="px-6 py-2.5 rounded-lg bg-fd-primary text-fd-primary-foreground font-semibold text-sm mb-12 transition-shadow hover:shadow-[0_0_24px_rgba(42,229,178,0.35)]"
        >
          Read the Guide
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {sections.map((s) => (
            <Link
              key={s.href}
              to="/docs/$"
              params={{ _splat: s.href }}
              className="group border border-fd-border border-l-2 border-l-fd-primary/30 rounded-lg p-4 text-left transition-all hover:bg-fd-accent/50 hover:border-l-fd-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-fd-primary/5"
            >
              <h2 className="font-semibold text-base mb-1 group-hover:text-fd-primary transition-colors">
                {s.title}
              </h2>
              <p className="text-fd-muted-foreground text-sm">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}
