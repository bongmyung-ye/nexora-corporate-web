import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
    SiCloudflare,
    SiDigitalocean,
    SiDiscord,
    SiDocker,
    SiGithub,
    SiGitlab,
    SiGooglecloud,
    SiHetzner,
    SiMongodb,
    SiNetlify,
    SiNodedotjs,
    SiPostgresql,
    SiRedis,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

export interface TechnologyPartner {
    name: string;
    category: string;
    href: string;
    icon: IconType;
}

export const infrastructurePartners: TechnologyPartner[] = [
    {
        name: "Amazon Web Services",
        category: "Cloud infrastructure",
        href: "https://aws.amazon.com/",
        icon: FaAws,
    },
    {
        name: "Google Cloud",
        category: "Cloud platform",
        href: "https://cloud.google.com/",
        icon: SiGooglecloud,
    },
    {
        name: "Cloudflare",
        category: "Network platform",
        href: "https://www.cloudflare.com/",
        icon: SiCloudflare,
    },
    {
        name: "Hetzner",
        category: "Cloud hosting",
        href: "https://www.hetzner.com/",
        icon: SiHetzner,
    },
    {
        name: "DigitalOcean",
        category: "Cloud computing",
        href: "https://www.digitalocean.com/",
        icon: SiDigitalocean,
    },
    {
        name: "Vercel",
        category: "Frontend platform",
        href: "https://vercel.com/",
        icon: SiVercel,
    },
    {
        name: "Netlify",
        category: "Web deployment",
        href: "https://www.netlify.com/",
        icon: SiNetlify,
    },
    {
        name: "Docker",
        category: "Container platform",
        href: "https://www.docker.com/",
        icon: SiDocker,
    },
];

export const developmentPartners: TechnologyPartner[] = [
    {
        name: "GitHub",
        category: "Development platform",
        href: "https://github.com/",
        icon: SiGithub,
    },
    {
        name: "GitLab",
        category: "DevOps platform",
        href: "https://gitlab.com/",
        icon: SiGitlab,
    },
    {
        name: "TypeScript",
        category: "Application language",
        href: "https://www.typescriptlang.org/",
        icon: SiTypescript,
    },
    {
        name: "Node.js",
        category: "JavaScript runtime",
        href: "https://nodejs.org/",
        icon: SiNodedotjs,
    },
    {
        name: "MongoDB",
        category: "Document database",
        href: "https://www.mongodb.com/",
        icon: SiMongodb,
    },
    {
        name: "PostgreSQL",
        category: "Relational database",
        href: "https://www.postgresql.org/",
        icon: SiPostgresql,
    },
    {
        name: "Redis",
        category: "In-memory storage",
        href: "https://redis.io/",
        icon: SiRedis,
    },
    {
        name: "Discord",
        category: "Community platform",
        href: "https://discord.com/",
        icon: SiDiscord,
    },
];