"use client";

import { motion } from "framer-motion";
import styles from "@/components/LinksComponent/Links.module.css";
import Image from "next/image";

export default function LinksComponent() {
    const currentYear = new Date().getFullYear();

    const linkSections = [
        {
            section: "Work",
            links: [
                {
                    code: "project-site",
                    title: "Project Demo Website",
                    href: "https://example.com/demo",
                    img: "/assets/links/sample-site.webp",
                },
                {
                    code: "github",
                    title: "GitHub Repository",
                    href: "https://github.com/sample-user/sample-repo",
                    img: "/assets/links/sample-github.webp",
                },
                {
                    code: "linkedin",
                    title: "LinkedIn Profile",
                    href: "https://www.linkedin.com/in/sample-user/",
                    img: "/assets/links/sample-linkedin.webp",
                },
            ],
        },
        {
            section: "Community & Extras",
            links: [
                {
                    code: "blog",
                    title: "Technical Blog",
                    href: "https://blog.example.com",
                    img: "/assets/links/sample-site.webp",
                },
                {
                    code: "donate",
                    title: "Support This Project",
                    href: "https://buymeacoffee.com/sampleuser",
                    img: "/assets/links/sample-support.webp",
                }
            ],
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" } }}
            className={styles.outerWrapper}
        >
            <div className={styles.innerContainer}>

                {/* Profile */}
                <div className="flex flex-col items-center mb-8 mt-8">
                    <Image
                        className="rounded-full w-36 h-36 object-cover mb-4"
                        src="/assets/avatar-placeholder.webp"
                        alt="Profile avatar"
                        width={144}
                        height={144}
                    />
                    <h1 className="text-2xl font-semibold text-center text-white">Sample User</h1>
                </div>

                {/* Sections */}
                {linkSections.map((section, idx) => (
                    <div key={idx} className="w-full mb-6">
                        <h2 className={styles.sectionTitle}>{section.section}</h2>
                        <div className="flex flex-col gap-4 w-full">
                            {section.links.map((link, linkIdx) => (
                                <button
                                    key={linkIdx}
                                    className={`${styles.linkButton} bg-white/40 ${idx === 0 && linkIdx === 0 ? styles.shake : ""}`}
                                >
                                    <div className={styles.linkInner}>
                                        <div className={styles.linkImage}>
                                            <Image
                                                src={link.img}
                                                alt={link.title}
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <div className={styles.linkTitle}>{link.title}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

                <p className="mt-4 text-xs md:text-sm leading-relaxed text-black">
                    © {currentYear} Sample Project. All rights reserved.
                </p>
            </div>
        </motion.div>
    );
}