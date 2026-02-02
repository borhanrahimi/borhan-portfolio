"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: Props) {
    const reduce = useReducedMotion();

    const variants: Variants = {
        hidden: { opacity: 0, y: reduce ? 0 : 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduce ? 0 : 0.55,
                ease: "easeOut",
                delay,
            },
        },
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            animate="show"
            variants={variants}
        >
            {children}
        </motion.div>
    );
}

export function FadeInView({ children, className, delay = 0 }: Props) {
    const reduce = useReducedMotion();

    const variants: Variants = {
        hidden: { opacity: 0, y: reduce ? 0 : 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduce ? 0 : 0.6,
                ease: "easeOut",
                delay,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            {children}
        </motion.div>
    );
}

export function Stagger({
    children,
    className,
    delay = 0,
}: Props) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        delayChildren: delay,
                        staggerChildren: reduce ? 0 : 0.08,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: reduce ? 0 : 12 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: reduce ? 0 : 0.55, ease: "easeOut" },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
