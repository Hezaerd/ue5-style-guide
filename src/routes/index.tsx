import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { absoluteUrl } from "@/lib/site";

const HOME_TITLE = "UE5 Style Guide";
const HOME_DESCRIPTION =
  "A mostly reasonable approach to Unreal Engine 5. Conventions for asset naming, directory structure, Blueprints, and more.";

export const Route = createFileRoute("/")({
  head: () => {
    const canonical = absoluteUrl("/");

    const meta: Array<
      | { title: string }
      | { name: string; content: string }
      | { property: string; content: string }
    > = [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "twitter:card", content: "summary" },
      { property: "twitter:title", content: HOME_TITLE },
      { property: "twitter:description", content: HOME_DESCRIPTION },
    ];

    if (canonical) {
      meta.push({ property: "og:url", content: canonical });
    }

    const links = canonical
      ? [{ rel: "canonical" as const, href: canonical }]
      : [];

    return { meta, links };
  },
  component: Home,
});

function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-16 max-w-4xl mx-auto">
        <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4 text-center bg-linear-to-r from-[#13d9cd] to-[#4effd2] bg-clip-text text-transparent">
          {HOME_TITLE}
        </h1>
        <p className="text-fd-muted-foreground text-center text-lg mb-2 max-w-2xl">
          {HOME_DESCRIPTION}
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
