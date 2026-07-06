import { AppendixLinks } from "@/components/AppendixLinks";
import { Hero } from "@/components/Hero";
import { OverlayTable } from "@/components/OverlayTable";
import { PricingCards } from "@/components/PricingCards";
import { SuiteGrid } from "@/components/SuiteGrid";
import {
  departmentSuites,
  industryOverlays,
  subscriptionTiers,
  urlAppendix
} from "@/src/catalog";

export default function HomePage() {
  return (
    <main className="pageShell">
      <Hero
        totalSuites={departmentSuites.length}
        totalOverlays={industryOverlays.length}
        totalTiers={subscriptionTiers.length}
      />
      <SuiteGrid suites={departmentSuites} />
      <OverlayTable overlays={industryOverlays} />
      <PricingCards tiers={subscriptionTiers} />
      <AppendixLinks items={urlAppendix} />
    </main>
  );
}
