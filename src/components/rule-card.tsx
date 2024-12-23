import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, generateNameAbbr, isImageUrl } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { ShareButton } from "./share-button";

export type Rule = {
  libs?: string[];
  content: string;
  title?: string;
  slug: string;
  author: {
    name: string;
    url: string;
    avatar: string;
  };
};

export function RuleCard({ rule, isPage }: { rule: Rule; isPage?: boolean }) {
  return (
    <Card className="bg-background p-4 max-h-[calc(100vh-8rem)] flex flex-col">
      <CardContent
        className={cn(
          "bg-card h-full mb-2 font-mono p-4 pr-1 text-sm opacity-100 hover:opacity-80 transition-opacity group relative flex-grow",
          isPage && "opacity-100",
        )}
      >
        <div className="group-hover:flex hidden right-4 absolute top-2 z-10 space-x-2">
          <ShareButton slug={rule.slug} />
          <CopyButton content={rule.content} slug={rule.slug} />
        </div>

        <Link href={`/${rule.slug}`}>
          <ScrollArea className="h-full">
          <code className="text-sm block pr-3 font-mono text-blue-600 leading-relaxed tracking-tight">
          {rule.content}
            </code>
          </ScrollArea>
        </Link>
      </CardContent>

      <CardHeader className="p-0 space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">{rule.author.name}</CardTitle>
          <a href={rule.author.url} target="_blank" rel="noopener noreferrer">
            <Avatar className="size-6">
              {isImageUrl(rule.author.avatar) ? (
                <AvatarImage src={rule.author.avatar} alt={rule.author.name} />
              ) : (
                <AvatarFallback>
                  {generateNameAbbr(rule.author.name)}
                </AvatarFallback>
              )}
            </Avatar>
          </a>
        </div>
        {rule.libs && rule.libs.length > 0 && (
          <Popover>
            <PopoverTrigger className="flex gap-2 items-center overflow-x-auto whitespace-nowrap h-5 cursor-pointer hover:bg-accent">
              {rule.libs.slice(0, 6).map((lib) => (
                <span
                  key={lib}
                  className="text-xs text-[#878787] font-mono flex-shrink-0"
                >
                  {lib}
                </span>
              ))}
              {rule.libs.length > 6 && (
                <span className="text-xs text-[#878787] font-mono flex gap-1 items-center">
                  <span>+{rule.libs.length - 2} more</span>
                  <ChevronDown className="w-3 h-3" />
                </span>
              )}
            </PopoverTrigger>
            <PopoverContent>
              {rule.libs.map((lib) => (
                <div key={lib} className="flex flex-col justify-center gap-2">
                  <span className="text-xs text-[#878787] font-mono flex-shrink-0">
                    {lib}
                  </span>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        )}
      </CardHeader>
    </Card>
  );
}
