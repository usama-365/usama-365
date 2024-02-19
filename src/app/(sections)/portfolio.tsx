import Image from "next/image";

import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PORTFOLIO from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section className="mx-auto px-4 py-12">
      <H2 className="mx-auto mb-8 w-max text-center">Portfolio</H2>
      <Carousel className="mx-auto max-w-[80%]">
        <CarouselContent>
          {PORTFOLIO.map(
            ({ title, description, imageUrl, technologies, type, url }) => (
              <CarouselItem
                className="basis-full md:basis-1/2 xl:basis-1/3"
                key={title}
              >
                <a target="_blank" href={url}>
                  <Card className="group relative h-full overflow-hidden">
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        className="absolute left-full top-0 h-full w-full rounded-sm object-cover object-left-top transition-all group-hover:left-0"
                        src={imageUrl}
                        alt={title}
                        quality={100}
                      />
                      <P>{description}</P>
                    </CardContent>
                    <CardFooter className="flex-wrap gap-2">
                      {technologies.map((technology) => (
                        <Badge key={technology}>{technology}</Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </a>
              </CarouselItem>
            ),
          )}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
