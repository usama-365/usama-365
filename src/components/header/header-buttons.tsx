import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

import Large from "@/components/typography/large";
import { Button } from "@/components/ui/button";

export default function HeaderButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="lg">
        <Large className="flex items-center justify-center gap-2">
          Contact Now <FaEnvelope />
        </Large>
      </Button>

      <Button variant="secondary" size="lg">
        <Large className="flex items-center justify-center gap-2">
          Download CV <FaDownload />
        </Large>
      </Button>

      <Button variant="secondary" size="lg">
        <Large>
          <FaGithub />
        </Large>
      </Button>

      <Button variant="secondary" size="lg">
        <Large>
          <FaLinkedin />
        </Large>
      </Button>
    </div>
  );
}
