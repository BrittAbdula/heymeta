import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, generateNameAbbr, isImageUrl } from "@/lib/utils";
import Image from "next/image";
import { ShareButton } from "./share-button";

interface PictureCardProps {
  picture: string[];
  title: string;
  isPage?: boolean;
}

export function PictureCard({ picture, title, isPage }: PictureCardProps) {
  return (
    <Card className="bg-background p-4">
      <CardContent
        className={cn(
          "bg-card p-4 opacity-100 hover:opacity-80 transition-opacity group relative",
          isPage && "opacity-100"
        )}
      >
        {picture.length === 1 ? (
          // 单张图片时占满宽度
          <div className="relative w-full aspect-[9/16]">
            <Image
              src={picture[0]}
              alt={title}
              fill
              className="object-contain rounded-md"
              sizes="100vw"
              priority
            />
          </div>
        ) : (
          // 多张图片时网格布局
          <div className={cn(
            "grid gap-4",
            picture.length === 2 && "grid-cols-1 md:grid-cols-2",
            picture.length >= 3 && "grid-cols-2"
          )}>
            {picture.map((imageUrl, index) => (
              <div 
                key={index} 
                className="relative w-full aspect-[9/16]"
              >
                <Image
                  src={imageUrl}
                  alt={`${title + 1}`}
                  fill
                  className="object-contain rounded-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}