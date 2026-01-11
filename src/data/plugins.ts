import {Box, Cpu, Layers} from "lucide-react";

export const categories = [
    {
        title: "Core Infrastructure",
        icon: Cpu,
        description: "The backbone of the server, providing the framework for custom logic and automated deployment workflows.",
        plugins: [
            {
                name: "CraftEngine",
                url: "https://polymart.org/product/7624/craftengine",
                icon: "https://images.polymart.org/product/7624/thumbnail.png?t=1745254035&v=3",
                description: "A robust scripting API used to develop custom gameplay features and server-side logic with high performance.",
                tag: "Core Framework"
            },
            {
                name: "GitHub Integration",
                url: "https://github.com/CrayonSMP",
                icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                description: "Enables version-controlled configuration management, allowing seamless updates and deployment from remote repositories.",
                tag: "DevOps"
            }
        ]
    },
    {
        title: "Visuals & Immersion",
        icon: Layers,
        description: "Tools focused on bypassing vanilla limitations to deliver high-fidelity 3D assets and custom interfaces.",
        plugins: [
            {
                name: "ModelEngine",
                url: "https://mythiccraft.io/index.php?resources/model-engine",
                icon: "https://mythiccraft.io/data/resource_icons/1/1213.jpg",
                description: "Implements advanced 3D model rendering for entities, supporting complex animations and bone-based structures.",
                tag: "Rendering"
            },
            {
                name: "MythicCrucible",
                url: "https://mythiccraft.io/index.php?resources/crucible-custom-items-armor-furniture-blocks-more.2/",
                icon: "https://mythiccraft.io/data/resource_icons/0/2.jpg",
                description: "A toolkit for designing custom items, placeable furniture, and interactive blocks with unique properties.",
                tag: "Assets"
            }
        ]
    },
    {
        title: "Gameplay Mechanics",
        icon: Box,
        description: "Systems that define player interaction, entity behavior, and advanced utility functions.",
        plugins: [
            {
                name: "MythicMobs",
                url: "https://mythiccraft.io/index.php?resources/mythicmobs.1/",
                icon: "https://mythiccraft.io/data/resource_icons/0/1.jpg",
                description: "A powerful mob-creation engine using a scripted skill system to create unique boss fights and custom AI.",
                tag: "AI Systems"
            },
            {
                name: "StorageMechanic",
                url: "https://polymart.org/product/2978/storagemechanic",
                icon: "https://images.polymart.org/product/2978/thumbnail.png?t=1693450155&v=3",
                description: "Provides advanced inventory systems, including specialized containers, portable storage, and GUI-driven sorting.",
                tag: "Utility"
            }
        ]
    }
];