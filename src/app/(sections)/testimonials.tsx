import Blockquote from "@/components/typography/blockquote";
import H2 from "@/components/typography/h2";
import Muted from "@/components/typography/muted";
import P from "@/components/typography/p";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/data/testimonials";
import TESTIMONIALS from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-5xl pt-64">
      <H2 className="mx-auto mb-8 max-w-max">Testimonials</H2>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {TESTIMONIALS.map((testimonial) => (
          <Testimonial key={testimonial.review} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

function Testimonial({
  testimonial: { name, imageUrl, review },
}: {
  testimonial: Testimonial;
}) {
  return (
    <Blockquote className="mb-2">
      <Avatar className="mb-2 not-italic">
        <AvatarImage src={imageUrl} />
        <AvatarFallback>US</AvatarFallback>
      </Avatar>
      <P>{review}</P>
      <Muted>- {name}</Muted>
    </Blockquote>
  );
}
