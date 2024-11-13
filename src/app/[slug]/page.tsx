import { Menu } from "@/components/menu";
import { PictureCard } from "@/components/picture-card";
import { RuleCard } from "@/components/rule-card";
import { getRuleBySlug, rules } from "@/data";

export async function generateMetadata({
  params,
}: { params: { slug: string } }) {
  const rule = getRuleBySlug(params.slug);

  return {
    title: `hey meta commands | ${rule?.title} rule by ${rule?.author?.name}`,
    description: rule?.content,
  };
}

export async function generateStaticParams() {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const rule = getRuleBySlug(params.slug);

  if (!rule) {
    return <div>Rule not found</div>;
  }

  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-16 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Ray-Ban Meta Commands</h1>
          <h2 className="text-xl text-muted-foreground">Voice commands for your smart glasses</h2>
        </div>
        <RuleCard rule={rule} isPage={true} />
        <PictureCard picture={rule.imageUrls} title={rule.title} isPage={true} />
      </main>
    </>
  );
}

export const revalidate = 86400; // Revalidate every 24 hours (86400 seconds)
