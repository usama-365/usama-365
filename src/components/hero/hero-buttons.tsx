"use client";

import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

import Large from "@/components/typography/large";
import { Button } from "@/components/ui/button";
import ContactButton from "./contact-button";

const AnimatedButton = motion(Button);

const hoverAnimationProps = {
  transition: {
    type: "spring",
  },
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 1.05,
  },
};

export default function HeroButtons({
  email,
  cvName,
  githubUrl,
  linkedinUrl,
}: {
  email: string;
  cvName: string;
  githubUrl: string;
  linkedinUrl: string;
}) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      className="flex flex-wrap items-center justify-center gap-3"
    >
      <ContactButton email={email}>
        <AnimatedButton {...hoverAnimationProps} size="lg">
          <Large className="flex items-center justify-center gap-2">
            Contact Now <FaEnvelope />
          </Large>
        </AnimatedButton>
      </ContactButton>

      <motion.a {...hoverAnimationProps} href={`/${cvName}`} download={cvName}>
        <Button variant="secondary" size="lg">
          <Large className="flex items-center justify-center gap-2">
            Download CV <FaDownload />
          </Large>
        </Button>
      </motion.a>

      <motion.a
        className="h-full"
        {...hoverAnimationProps}
        href={githubUrl}
        target="_blank"
      >
        <Button variant="secondary" size="lg">
          <Large className="flex items-center justify-center gap-2">
            <FaGithub />
          </Large>
        </Button>
      </motion.a>

      <motion.a {...hoverAnimationProps} href={linkedinUrl} target="_blank">
        <Button variant="secondary" size="lg">
          <Large className="flex items-center justify-center gap-2">
            <FaLinkedin />
          </Large>
        </Button>
      </motion.a>
    </motion.div>
  );
}
