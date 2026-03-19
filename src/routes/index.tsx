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
        <h1 className="font-bold text-4xl mb-3 text-center">
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
          className="px-5 py-2.5 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm mb-12"
        >
          Read the Guide
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {sections.map((s) => (
            <Link
              key={s.href}
              to="/docs/$"
              params={{ _splat: s.href }}
              className="border border-fd-border rounded-lg p-4 hover:bg-fd-accent/50 transition-colors text-left"
            >
              <h2 className="font-semibold text-base mb-1">{s.title}</h2>
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
