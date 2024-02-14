import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function HeaderImage() {
  return (
    <Avatar className="mb-4 h-48 w-48">
      <AvatarFallback>
        <Skeleton className="h-full w-full rounded-full"></Skeleton>
      </AvatarFallback>
      <AvatarImage src={"/header.png"} />
    </Avatar>
  );
}
