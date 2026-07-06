export type DepartmentSuite = {
  name: string;
  focus: string;
  outcome: string;
  skills: string[];
  adoption: string;
};

export type IndustryOverlay = {
  name: string;
  description: string;
  fit: string[];
  signatureModules: string[];
};

export type SubscriptionTier = {
  name: string;
  priceBand: string;
  audience: string;
  included: string[];
  credits: string;
};

export const departmentSuites: DepartmentSuite[] = [
  {
    name: "Revenue Operations Suite",
    focus: "Pipeline hygiene, account prioritization, and AI-assisted deal coaching.",
    outcome: "Shrinks deal-cycle friction while giving RevOps a governed catalog of repeatable sales skills.",
    skills: ["Forecast QA", "Executive Brief Builder", "Renewal Risk Radar", "QBR Drafting"],
    adoption: "Best for GTM teams rolling out Claude skills to SDR, AE, and CS motions in one launch wave."
  },
  {
    name: "People & Talent Suite",
    focus: "Hiring coordination, interview prep, onboarding, and policy-aware HR support.",
    outcome: "Turns scattered enablement assets into reusable workflows with review checkpoints.",
    skills: ["Interview Panel Coach", "Job Scorecard Writer", "Onboarding Buddy", "Policy Q&A Guardrails"],
    adoption: "Strong fit for shared-services teams that need consistency across high-volume employee interactions."
  },
  {
    name: "Finance & Strategy Suite",
    focus: "Close support, spend analysis, board prep, and narrative operating reviews.",
    outcome: "Pairs financial rigor with executive-ready communication artifacts.",
    skills: ["Variance Narrator", "Scenario Packager", "Board Memo Composer", "Procurement Triage"],
    adoption: "Useful when finance wants AI leverage without exposing raw models directly to every stakeholder."
  },
  {
    name: "Support Excellence Suite",
    focus: "Case summarization, escalation guidance, VOC tagging, and QA sampling.",
    outcome: "Improves response quality while keeping sensitive support flows aligned to policy.",
    skills: ["Escalation Coach", "Root Cause Summaries", "Response Tone Calibrator", "VOC Signal Miner"],
    adoption: "Ideal for support orgs standardizing AI usage across BPO and in-house teams."
  }
];

export const industryOverlays: IndustryOverlay[] = [
  {
    name: "Healthcare & Life Sciences",
    description: "Adds compliance-aware playbooks, evidence handling, and medical-affairs review scaffolding.",
    fit: ["Provider ops", "Pharma field enablement", "Clinical support services"],
    signatureModules: ["HIPAA-safe summarization", "Medical inquiry routing", "Regulatory evidence binder"]
  },
  {
    name: "Financial Services",
    description: "Packages suitability checks, servicing workflows, and policy-constrained client communication.",
    fit: ["Banking service centers", "Insurance ops", "Wealth enablement"],
    signatureModules: ["Policy citation drafting", "Claims intake normalization", "Adviser prep kits"]
  },
  {
    name: "Manufacturing & Industrial",
    description: "Focuses on service diagnostics, distributor enablement, and field knowledge capture.",
    fit: ["Field service", "Channel sales", "Plant operations"],
    signatureModules: ["Maintenance note distillation", "Distributor battlecards", "Shift handoff briefs"]
  },
  {
    name: "Public Sector & Education",
    description: "Supports stakeholder communication, procurement narratives, and constituent-safe workflows.",
    fit: ["Higher education", "Government shared services", "Nonprofit program delivery"],
    signatureModules: ["Grant narrative assistant", "Constituent response composer", "Policy explainer kits"]
  }
];

export const subscriptionTiers: SubscriptionTier[] = [
  {
    name: "Foundation",
    priceBand: "$",
    audience: "Single department pilots proving value with 5–10 curated skills.",
    included: ["Department starter suite", "Admin analytics", "Template governance", "Monthly skill refresh"],
    credits: "1,500 skill credits per month"
  },
  {
    name: "Expansion",
    priceBand: "$$",
    audience: "Multi-team deployments layering department suites with one industry overlay.",
    included: ["Two department suites", "One industry overlay", "Shared prompt QA", "Quarterly adoption workshop"],
    credits: "7,500 skill credits per month"
  },
  {
    name: "Enterprise Grid",
    priceBand: "$$$",
    audience: "Large enterprises standardizing a governed skill marketplace across business units.",
    included: ["Unlimited department suites", "Multiple overlays", "Advanced observability", "Dedicated enablement lead"],
    credits: "Custom pooled credits with rollover policy"
  }
];

export const urlAppendix = [
  {
    label: "Department suites overview",
    url: "https://example.com/catalog/department-suites"
  },
  {
    label: "Industry overlay matrix",
    url: "https://example.com/catalog/industry-overlays"
  },
  {
    label: "Subscription packaging guide",
    url: "https://example.com/catalog/subscription-packaging"
  },
  {
    label: "Skill credit policy",
    url: "https://example.com/catalog/skill-credits"
  }
];
