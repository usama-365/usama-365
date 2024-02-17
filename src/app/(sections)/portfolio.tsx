import H2 from "@/components/typography/h2";
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
            ({ title, description, imageUrl, technologies, url }) => (
              <CarouselItem
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                key={title}
              >
                <a target="_blank" href={url}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
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
