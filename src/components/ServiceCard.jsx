import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, Server, PanelsTopLeft } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputDemo } from "../components/AnimatedBeam";
import { AnimatedListDemo } from "../components/AnimatedList";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const files = [
  {
    name: "routes.js",
    body: "Defines structured endpoints for users, auth, and business logic.",
  },
  {
    name: "controller.js",
    body: "Handles requests, validates input, and communicates with services cleanly.",
  },
  {
    name: "middleware/auth.js",
    body: "Secures routes using JWT, session tokens, or API keys.",
  },
  {
    name: "dbService.js",
    body: "Connects PostgreSQL with smart queries and clear data models.",
  },
  {
    name: "logs.txt",
    body: "Captured API hits, errors, and debugging insights from production.",
  },
];

const features = [
  {
    Icon: Server,
    name: "Backend API Development",
    description:
      "Robust REST APIs built for scale, speed, and real-world logic.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: PanelsTopLeft,
    name: "Modern Web Development",
    description:
      "Crafting responsive, scalable websites with performance and pixel perfection.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
];

export function ServiceCard() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
