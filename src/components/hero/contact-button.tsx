import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "./contact-form";

export default function ContactButton({
  children,
  email,
}: {
  children: ReactNode;
  email: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            <span>You can contact me directly at </span>
            <a
              className="text-nowrap text-primary underline underline-offset-[1.5px] transition-colors hover:text-foreground hover:transition-colors"
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <span className=""> or by filling out this form</span>
          </DialogDescription>
          <ContactForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
