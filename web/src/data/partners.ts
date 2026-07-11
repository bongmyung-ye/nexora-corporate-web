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

export type PartnerCategory =
    | "cloudInfrastructure"
    | "cloudPlatform"
    | "networkPlatform"
    | "cloudHosting"
    | "cloudComputing"
    | "frontendPlatform"
    | "webDeployment"
    | "containerPlatform"
    | "developmentPlatform"
    | "devOpsPlatform"
    | "applicationLanguage"
    | "javascriptRuntime"
    | "documentDatabase"
    | "relationalDatabase"
    | "inMemoryStorage"
    | "communityPlatform";

export interface TechnologyPartner {
    name: string;
    category: PartnerCategory;
    href: string;
    icon: IconType;
}

export const infrastructurePartners = [
    {
        name: "Amazon Web Services",
        category: "cloudInfrastructure",
        href: "https://aws.amazon.com/",
        icon: FaAws,
    },
    {
        name: "Google Cloud",
        category: "cloudPlatform",
        href: "https://cloud.google.com/",
        icon: SiGooglecloud,
    },
    {
        name: "Cloudflare",
        category: "networkPlatform",
        href: "https://www.cloudflare.com/",
        icon: SiCloudflare,
    },
    {
        name: "Hetzner",
        category: "cloudHosting",
        href: "https://www.hetzner.com/",
        icon: SiHetzner,
    },
    {
        name: "DigitalOcean",
        category: "cloudComputing",
        href: "https://www.digitalocean.com/",
        icon: SiDigitalocean,
    },
    {
        name: "Vercel",
        category: "frontendPlatform",
        href: "https://vercel.com/",
        icon: SiVercel,
    },
    {
        name: "Netlify",
        category: "webDeployment",
        href: "https://www.netlify.com/",
        icon: SiNetlify,
    },
    {
        name: "Docker",
        category: "containerPlatform",
        href: "https://www.docker.com/",
        icon: SiDocker,
    },
] satisfies TechnologyPartner[];

export const developmentPartners = [
    {
        name: "GitHub",
        category: "developmentPlatform",
        href: "https://github.com/",
        icon: SiGithub,
    },
    {
        name: "GitLab",
        category: "devOpsPlatform",
        href: "https://gitlab.com/",
        icon: SiGitlab,
    },
    {
        name: "TypeScript",
        category: "applicationLanguage",
        href: "https://www.typescriptlang.org/",
        icon: SiTypescript,
    },
    {
        name: "Node.js",
        category: "javascriptRuntime",
        href: "https://nodejs.org/",
        icon: SiNodedotjs,
    },
    {
        name: "MongoDB",
        category: "documentDatabase",
        href: "https://www.mongodb.com/",
        icon: SiMongodb,
    },
    {
        name: "PostgreSQL",
        category: "relationalDatabase",
        href: "https://www.postgresql.org/",
        icon: SiPostgresql,
    },
    {
        name: "Redis",
        category: "inMemoryStorage",
        href: "https://redis.io/",
        icon: SiRedis,
    },
    {
        name: "Discord",
        category: "communityPlatform",
        href: "https://discord.com/",
        icon: SiDiscord,
    },
] satisfies TechnologyPartner[];