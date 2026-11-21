import type { ReactNode } from 'react';
import type { DetailedProject } from '../data/types';

type VisualType = NonNullable<DetailedProject['visualType']>;

type ThumbnailConfig = {
    eyebrow: string;
    signal: string;
    shell: string;
    dot: string;
    badge: string;
    glow: string;
};

const configs: Record<VisualType, ThumbnailConfig> = {
    'workforce-analytics': {
        eyebrow: 'Work-Hour Review',
        signal: 'Guarded NL2SQL',
        shell: 'from-[#f8fafc] via-[#f1f5f9] to-[#eef4ff]',
        dot: 'bg-indigo-500',
        badge: 'border-indigo-200/80 bg-white/95 text-indigo-700',
        glow: 'bg-indigo-300/25',
    },
    'datasheet-review': {
        eyebrow: 'Datasheet Review',
        signal: 'Multimodal VLM',
        shell: 'from-[#f8fafc] via-[#f0fdfa] to-[#ecfdf5]',
        dot: 'bg-teal-500',
        badge: 'border-teal-200/80 bg-white/95 text-teal-700',
        glow: 'bg-teal-300/25',
    },
    'llm-telemetry': {
        eyebrow: 'LLM Gateway & Ops',
        signal: 'Usage Metering',
        shell: 'from-[#f8fafc] via-[#f0f9ff] to-[#e0f2fe]',
        dot: 'bg-sky-500',
        badge: 'border-sky-200/80 bg-white/95 text-sky-700',
        glow: 'bg-sky-300/25',
    },
    'evidence-qa': {
        eyebrow: 'Evidence-Grounded RAG',
        signal: 'Source Cited',
        shell: 'from-[#f8fafc] via-[#fffbeb] to-[#fef3c7]/55',
        dot: 'bg-amber-500',
        badge: 'border-amber-200/90 bg-white/95 text-amber-800',
        glow: 'bg-amber-300/25',
    },
    'genai-enablement': {
        eyebrow: 'Enablement & Perf',
        signal: 'KV Cache & Guides',
        shell: 'from-[#f8fafc] via-[#f5f3ff] to-[#eef2ff]',
        dot: 'bg-violet-500',
        badge: 'border-violet-200/80 bg-white/95 text-violet-700',
        glow: 'bg-violet-300/25',
    },
    'asc-merge-c-generator': {
        eyebrow: 'File-to-Code Tool',
        signal: 'Open WebUI Tool',
        shell: 'from-[#f8fafc] via-[#f0f9ff] to-[#eff6ff]',
        dot: 'bg-primary',
        badge: 'border-blue-200/80 bg-white/95 text-primary',
        glow: 'bg-blue-300/25',
    },
    'genai-workspace': {
        eyebrow: 'Internal AI Workspace',
        signal: 'On-Prem vLLM',
        shell: 'from-[#f8fafc] via-[#f1f5f9] to-[#eef4ff]',
        dot: 'bg-primary',
        badge: 'border-primary/20 bg-white/95 text-primary',
        glow: 'bg-blue-300/25',
    },
    'legal-comparison': {
        eyebrow: 'Contract Comparison',
        signal: '3 Clauses Flagged',
        shell: 'from-[#f8fafc] via-[#fff1f2]/75 to-[#ffe4e6]/45',
        dot: 'bg-rose-500',
        badge: 'border-rose-200/80 bg-white/95 text-rose-700',
        glow: 'bg-rose-300/25',
    },
    'patent-translation': {
        eyebrow: 'Patent Translation',
        signal: 'Term Memory + DOCX',
        shell: 'from-[#f8fafc] via-[#fffbeb]/80 to-[#eff6ff]',
        dot: 'bg-amber-500',
        badge: 'border-amber-200/90 bg-white/95 text-amber-800',
        glow: 'bg-amber-300/20',
    },
    'meeting-intelligence': {
        eyebrow: 'Meeting Intelligence',
        signal: 'Offline ASR + LLM',
        shell: 'from-[#f8fafc] via-[#f5f3ff]/80 to-[#eef2ff]',
        dot: 'bg-violet-500',
        badge: 'border-violet-200/80 bg-white/95 text-violet-700',
        glow: 'bg-violet-300/25',
    },
    'manufacturing-assistant': {
        eyebrow: 'Decision Assistant',
        signal: 'LangGraph + KG',
        shell: 'from-[#f8fafc] via-[#ecfeff]/70 to-[#eef4ff]',
        dot: 'bg-cyan-600',
        badge: 'border-cyan-200/80 bg-white/95 text-cyan-800',
        glow: 'bg-cyan-300/25',
    },
    'yield-optimization': {
        eyebrow: 'Yield Optimization',
        signal: '+1.43% Yield',
        shell: 'from-[#f8fafc] via-[#ecfdf5]/85 to-[#f0fdfa]',
        dot: 'bg-emerald-500',
        badge: 'border-emerald-200/90 bg-white/95 text-emerald-700',
        glow: 'bg-emerald-300/25',
    },
    'gym-tracker': {
        eyebrow: 'Private AI Gym Coach',
        signal: 'Private D1 + AI',
        shell: 'from-[#f8fafc] via-[#ecfdf5]/70 to-[#f0f9ff]',
        dot: 'bg-emerald-500',
        badge: 'border-emerald-200/80 bg-white/95 text-emerald-700',
        glow: 'bg-emerald-300/20',
    },
    'preventive-maintenance': {
        eyebrow: 'Preventive Maintenance',
        signal: 'RMSE -20%',
        shell: 'from-[#f8fafc] via-[#fffbeb]/85 to-[#ffedd5]/45',
        dot: 'bg-orange-500',
        badge: 'border-orange-200/90 bg-white/95 text-orange-700',
        glow: 'bg-orange-300/25',
    },
    'address-normalization': {
        eyebrow: 'Address Normalization',
        signal: 'TGIS Best Paper',
        shell: 'from-[#f8fafc] via-[#f0fdfa]/85 to-[#eff6ff]',
        dot: 'bg-teal-500',
        badge: 'border-teal-200/80 bg-white/95 text-teal-700',
        glow: 'bg-teal-300/25',
    },
};

const cardClass =
    'flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5';

const miniPillClass =
    'shrink-0 rounded-full border px-1.5 py-0.5 text-[0.52rem] font-semibold leading-none sm:px-2 sm:text-[0.58rem]';

const WorkforceVisual = () => (
    <div className="grid h-full grid-cols-[1.14fr_0.86fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-start justify-between gap-1.5">
                <div className="min-w-0">
                    <div className="truncate text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[0.58rem]">
                        2026 / 03 · Dept Scope
                    </div>
                    <div className="mt-0.5 truncate text-[0.65rem] font-semibold text-slate-900 sm:text-xs xl:text-xs">
                        Monthly Hours Review
                    </div>
                </div>
                <span className={`${miniPillClass} border-amber-200 bg-amber-50 text-amber-700`}>
                    3 exceptions
                </span>
            </div>

            <div className="my-1.5 sm:my-2">
                <div className="mb-1 flex items-center justify-between text-[0.52rem] text-slate-500 sm:text-[0.6rem]">
                    <span>Review progress</span>
                    <span className="font-mono font-semibold text-emerald-700">39 / 42 complete</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[93%] rounded-full bg-gradient-to-r from-primary to-emerald-500" />
                </div>
            </div>

            <div className="space-y-1 border-t border-slate-100 pt-1.5 sm:space-y-1.5 sm:pt-2">
                <div className="flex items-center justify-between gap-1.5 rounded-lg border border-slate-100 bg-slate-50/90 px-2 py-1 text-[0.5rem] sm:text-[0.58rem]">
                    <span className="truncate text-slate-600">Overtime / Leave ETL</span>
                    <span className="shrink-0 font-mono font-semibold text-amber-700">12.5 h</span>
                </div>
                <div className="flex items-center justify-between gap-1.5 rounded-lg border border-indigo-100 bg-indigo-50/60 px-2 py-1 text-[0.5rem] sm:text-[0.58rem]">
                    <span className="truncate text-slate-600">Scoped SQLite</span>
                    <span className="shrink-0 font-mono font-semibold text-indigo-700">Read-Only SELECT</span>
                </div>
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-indigo-200/80 bg-gradient-to-b from-white to-indigo-50/60 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div>
                <div className="text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[0.58rem]">
                    Monthly Summary
                </div>
                <div className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl xl:text-[1.65rem]">
                    1,624<span className="ml-1 text-[0.62rem] font-medium text-slate-500 sm:text-xs">hrs</span>
                </div>
                <div className="text-[0.52rem] font-medium text-emerald-600 sm:text-[0.6rem]">
                    +2.8% vs last mo
                </div>
            </div>

            <div className="space-y-1 border-t border-indigo-100 pt-1.5 text-[0.52rem] sm:pt-2 sm:text-[0.58rem]">
                <div className="flex justify-between text-slate-600">
                    <span>Regular hours</span>
                    <span className="font-mono font-semibold text-slate-800">1,556 h</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span>Overtime</span>
                    <span className="font-mono font-semibold text-slate-800">68 h</span>
                </div>
                <div className="mt-1 truncate rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-center text-[0.5rem] font-semibold text-emerald-700 sm:text-[0.56rem]">
                    Role-Scoped Audit · Verified
                </div>
            </div>
        </div>
    </div>
);

const DatasheetVisual = () => (
    <div className="grid h-full grid-cols-2 gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1 border-b border-slate-100 pb-1.5">
                <span className="truncate font-mono text-[0.52rem] font-semibold text-slate-700 sm:text-[0.62rem]">
                    DS_Sensor_v3.docx
                </span>
                <span className={`${miniPillClass} border-teal-200 bg-teal-50 text-teal-700`}>
                    DOCX + EMF
                </span>
            </div>

            <div className="my-1.5 flex flex-1 flex-col justify-center space-y-1.5">
                <div className="text-[0.55rem] font-semibold text-teal-800 sm:text-[0.64rem]">
                    § 4.2 Electrical Specs
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200/80 bg-slate-50/70 p-1.5">
                    <div className="grid grid-cols-4 border-b border-slate-200/70 pb-1 font-mono text-[0.48rem] font-semibold text-slate-500 sm:text-[0.54rem]">
                        <span>Param</span>
                        <span>Min</span>
                        <span>Max</span>
                        <span className="text-right">Unit</span>
                    </div>
                    <div className="mt-1 grid grid-cols-4 font-mono text-[0.48rem] text-slate-700 sm:text-[0.54rem]">
                        <span>VDD</span>
                        <span>1.71</span>
                        <span>3.6</span>
                        <span className="text-right font-semibold text-slate-900">V</span>
                    </div>
                    <div className="mt-0.5 grid grid-cols-4 font-mono text-[0.48rem] text-slate-700 sm:text-[0.54rem]">
                        <span>IDD</span>
                        <span>-</span>
                        <span>12.5</span>
                        <span className="text-right font-bold text-amber-700">mA</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1.5 text-[0.5rem] text-slate-500 sm:text-[0.58rem]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                <span className="truncate">EMF vector figure converted</span>
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-teal-200/80 bg-gradient-to-b from-white to-teal-50/55 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1">
                <span className="text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-teal-800 sm:text-[0.6rem]">
                    Review Findings
                </span>
                <span className={`${miniPillClass} border-amber-200 bg-amber-50 text-amber-700`}>
                    2 flagged
                </span>
            </div>

            <div className="my-1.5 space-y-1.5">
                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-1.5 text-[0.5rem] leading-snug text-slate-700 sm:p-2 sm:text-[0.56rem]">
                    <span className="font-semibold text-amber-800">Sec 4.2 Table 2: </span>
                    Unit mismatch (&apos;uA&apos; vs &apos;mA&apos; in reg map)
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/80 p-1.5 text-[0.5rem] leading-snug text-slate-700 sm:p-2 sm:text-[0.56rem]">
                    <span className="font-semibold text-teal-800">Fig 3 (Pinout): </span>
                    VLM verified pin labels match text
                </div>
            </div>

            <div className="text-right font-mono text-[0.5rem] font-medium text-teal-700 sm:text-[0.56rem]">
                Web · CLI · MCP Ready
            </div>
        </div>
    </div>
);

const LLMTelemetryVisual = () => (
    <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1 text-[0.52rem] font-semibold text-slate-700 sm:text-[0.62rem]">
                <span className="truncate">Gateway &amp; GPU Nodes</span>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-1.5 py-0.5 text-[0.48rem] font-semibold text-sky-700 sm:text-[0.56rem]">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
                    Read-Only Sync
                </span>
            </div>

            <div className="my-1.5 space-y-2">
                <div>
                    <div className="mb-1 flex justify-between text-[0.5rem] text-slate-600 sm:text-[0.58rem]">
                        <span>vLLM Worker 01 (H100)</span>
                        <span className="font-mono font-semibold text-sky-700">88% Load</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
                    </div>
                </div>
                <div>
                    <div className="mb-1 flex justify-between text-[0.5rem] text-slate-600 sm:text-[0.58rem]">
                        <span>vLLM Worker 02 (A100)</span>
                        <span className="font-mono font-semibold text-sky-700">64% Load</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[64%] rounded-full bg-sky-400" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-1.5 text-[0.5rem] text-slate-500 sm:text-[0.58rem]">
                <span>Advisory Lock</span>
                <span className="font-mono font-semibold text-sky-700">0.82s avg TTFT</span>
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-sky-200/80 bg-gradient-to-b from-white to-sky-50/70 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div>
                <div className="text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[0.58rem]">
                    Weekly Token Volume
                </div>
                <div className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl xl:text-[1.65rem]">
                    28.4M
                </div>
                <div className="text-[0.52rem] font-medium text-emerald-600 sm:text-[0.6rem]">
                    +14.2% vs last wk
                </div>
            </div>

            <div className="space-y-1 border-t border-sky-100 pt-1.5 text-[0.5rem] text-slate-600 sm:pt-2 sm:text-[0.58rem]">
                <div className="flex justify-between">
                    <span>Persisted Tokens</span>
                    <span className="font-mono font-semibold text-slate-900">92%</span>
                </div>
                <div className="flex justify-between">
                    <span>Estimated Tokens</span>
                    <span className="font-mono font-medium text-slate-500">8%</span>
                </div>
                <div className="flex justify-between font-medium text-sky-700">
                    <span>Weekly PDF</span>
                    <span>Automated</span>
                </div>
            </div>
        </div>
    </div>
);

const EvidenceQAVisual = () => (
    <div className="grid h-full grid-cols-[0.94fr_1.06fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1 text-[0.52rem] sm:text-[0.6rem]">
                <span className="truncate font-mono font-semibold text-slate-700">Troubleshoot_Flow.pptx</span>
                <span className={`${miniPillClass} border-amber-200 bg-amber-50 text-amber-800`}>
                    Slide 14
                </span>
            </div>

            <div className="my-1.5 rounded-xl border border-dashed border-amber-300 bg-amber-50/60 p-2 text-center">
                <div className="text-[0.52rem] font-semibold text-amber-900 sm:text-[0.6rem]">
                    VLM + Native Text Baseline
                </div>
                <div className="mt-1 space-y-0.5 text-[0.48rem] text-slate-600 sm:text-[0.56rem]">
                    <div>[Flowchart] Step 3: Check VDDIO</div>
                    <div className="font-mono font-semibold text-amber-800">Rule: VDDIO &lt; 1.6V → Fault E-04</div>
                </div>
            </div>

            <div className="flex items-center justify-between text-[0.5rem] text-slate-500 sm:text-[0.58rem]">
                <span>Streamlit Review</span>
                <span className="font-semibold text-emerald-700">Approved ✓</span>
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-amber-200/80 bg-gradient-to-b from-white to-amber-50/60 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1">
                <span className="text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-amber-800 sm:text-[0.6rem]">
                    Evidenced Claim
                </span>
                <span className={`${miniPillClass} border-emerald-200 bg-emerald-50 text-emerald-700`}>
                    98% Grounded
                </span>
            </div>

            <div className="my-auto rounded-xl border border-amber-200/70 bg-white p-2 text-[0.52rem] leading-relaxed text-slate-700 sm:text-[0.58rem]">
                &ldquo;When VDDIO drops below 1.6V during calibration, reg 0x0A triggers fault E-04.&rdquo;
            </div>

            <div className="flex items-center justify-between gap-1 border-t border-amber-100 pt-1.5 text-[0.5rem] sm:pt-2 sm:text-[0.56rem]">
                <span className="truncate font-medium text-amber-800">Cite: Slide 14, Sec 2</span>
                <span className="shrink-0 rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-slate-700">
                    Chroma SHA-256
                </span>
            </div>
        </div>
    </div>
);

const GenAIEnablementVisual = () => (
    <div className="grid h-full grid-cols-[1.08fr_0.92fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1 text-[0.52rem] font-semibold text-slate-700 sm:text-[0.62rem]">
                <span className="truncate">Prefix Cache Structure</span>
                <span className={`${miniPillClass} border-violet-200 bg-violet-50 text-violet-700`}>
                    KV Reuse
                </span>
            </div>

            <div className="my-1.5 space-y-1.5">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/75 p-2">
                    <div className="flex items-center justify-between gap-1 text-[0.5rem] sm:text-[0.58rem]">
                        <span className="truncate font-semibold text-emerald-900">System + Tools + Docs</span>
                        <span className="shrink-0 font-mono font-semibold text-emerald-700">Cached Prefix</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-emerald-100">
                        <div className="h-full w-[78%] rounded-full bg-emerald-500" />
                    </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5">
                    <div className="flex items-center justify-between gap-1 text-[0.5rem] sm:text-[0.58rem]">
                        <span className="truncate text-slate-700">Dynamic Task Tail</span>
                        <span className="shrink-0 font-mono font-medium text-violet-700">TTFT Verified</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-1 border-t border-slate-100 pt-1.5 text-[0.48rem] text-slate-500 sm:text-[0.56rem]">
                <span className="truncate">Context Compression</span>
                <span className="shrink-0 font-mono font-medium text-violet-700">Prefill / Decode</span>
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-violet-200/80 bg-gradient-to-b from-white to-violet-50/60 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div>
                <div className="text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-violet-700 sm:text-[0.58rem]">
                    Developer Enablement
                </div>
                <div className="mt-0.5 truncate text-[0.68rem] font-semibold text-slate-900 sm:text-xs xl:text-sm">
                    OpenCode &amp; LLM Guides
                </div>
                <div className="mt-1 inline-block rounded-full border border-violet-200 bg-white px-2 py-0.5 text-[0.48rem] font-semibold text-violet-700 sm:text-[0.56rem]">
                    Company-Wide Rollout
                </div>
            </div>

            <div className="space-y-1 border-t border-violet-100 pt-1.5 text-[0.5rem] text-slate-600 sm:pt-2 sm:text-[0.58rem]">
                <div className="flex justify-between gap-1">
                    <span className="truncate">1-on-1 Consultations</span>
                    <span className="shrink-0 font-mono font-semibold text-violet-700">20+ Staff</span>
                </div>
                <div className="flex justify-between gap-1">
                    <span className="truncate">Context Compression</span>
                    <span className="shrink-0 font-mono font-semibold text-emerald-700">Playbooks</span>
                </div>
                <div className="flex justify-between gap-1">
                    <span className="truncate">Bilingual Portal</span>
                    <span className="shrink-0 font-mono font-semibold text-slate-800">ZH / EN</span>
                </div>
            </div>
        </div>
    </div>
);

const AscVisual = () => (
    <div className="grid h-full grid-cols-[0.95fr_1.05fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1">
                <span className="truncate text-[0.54rem] font-semibold text-slate-700 sm:text-[0.62rem]">
                    Uploaded ASC Files
                </span>
                <span className={`${miniPillClass} border-blue-200 bg-blue-50 text-primary`}>
                    Ordered
                </span>
            </div>

            <div className="my-1.5 space-y-1">
                {[
                    ['01_motor.asc', 'CP950'],
                    ['02_sensor.asc', 'Big5'],
                    ['03_init.asc', 'UTF-8'],
                ].map(([file, encoding]) => (
                    <div
                        key={file}
                        className="flex items-center justify-between gap-1 rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1"
                    >
                        <span className="truncate font-mono text-[0.5rem] font-medium text-slate-700 sm:text-[0.58rem]">
                            {file}
                        </span>
                        <span className="shrink-0 rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[0.46rem] font-semibold text-slate-600 sm:text-[0.52rem]">
                            {encoding}
                        </span>
                    </div>
                ))}
            </div>

            <div className="truncate font-mono text-[0.48rem] text-slate-500 sm:text-[0.56rem]">
                asc_read · Raw-byte fallback
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-blue-200/80 bg-gradient-to-b from-white to-blue-50/55 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-[0.56rem] font-semibold text-slate-800 sm:text-[0.64rem]">
                    init_config.c
                </span>
                <span className={`${miniPillClass} border-emerald-200 bg-emerald-50 text-emerald-700`}>
                    asc_export
                </span>
            </div>

            <div className="my-1.5 space-y-0.5 rounded-xl border border-slate-200 bg-slate-50 p-2 font-mono text-[0.48rem] leading-snug text-slate-700 sm:text-[0.56rem]">
                <div className="truncate text-emerald-700">{'// RD 註解保留 · Merged'}</div>
                <div className="truncate">
                    {'{ 0x1A, 0x04 }, '}
                    <span className="text-slate-400">{'// Gain'}</span>
                </div>
                <div className="truncate">
                    {'{ 0x2B, 0x80 }, '}
                    <span className="text-slate-400">{'// Init'}</span>
                </div>
            </div>

            <div className="truncate rounded-lg border border-blue-200 bg-white px-2 py-1 text-center font-mono text-[0.48rem] font-semibold text-primary sm:text-[0.56rem]">
                Nginx Download · .c &amp; .asc
            </div>
        </div>
    </div>
);

const GenAIVisual = () => (
    <div className="grid h-full grid-cols-[0.84fr_1.16fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[0.6rem]">
                Workspace Router
            </div>

            <div className="my-1.5 space-y-1">
                <div className="flex items-center justify-between rounded-lg border border-primary/25 bg-primary-50 px-2 py-1 text-[0.5rem] font-semibold text-primary sm:text-[0.58rem]">
                    <span className="truncate">Fast Coding &amp; Chat</span>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                </div>
                <div className="rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1 text-[0.5rem] font-medium text-slate-600 sm:text-[0.58rem]">
                    <span className="block truncate">Deep Reasoning Model</span>
                </div>
                <div className="rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1 text-[0.5rem] font-medium text-slate-600 sm:text-[0.58rem]">
                    <span className="block truncate">Doc &amp; Vision Tools</span>
                </div>
            </div>

            <div className="truncate text-[0.48rem] font-medium text-slate-500 sm:text-[0.56rem]">
                Air-Gapped Intranet
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-primary/20 bg-gradient-to-b from-white to-blue-50/55 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center gap-1.5">
                {['Code', 'Document', 'Vision'].map((tab, index) => (
                    <span
                        key={tab}
                        className={`rounded-full border px-2 py-0.5 text-[0.48rem] font-semibold sm:text-[0.56rem] ${
                            index === 0
                                ? 'border-primary/25 bg-primary-50 text-primary'
                                : 'border-slate-200 bg-white text-slate-500'
                        }`}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            <div className="my-auto space-y-1.5">
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-[0.5rem] text-slate-700 sm:text-[0.58rem]">
                    Review SPI timing &amp; generate C stub
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary-50/60 p-2 text-[0.5rem] leading-snug text-slate-800 sm:text-[0.58rem]">
                    <div className="font-semibold text-primary">Timing verified (tSU &gt;= 4ns)</div>
                    <div className="mt-0.5 font-mono text-[0.48rem] text-slate-600 sm:text-[0.54rem]">
                        Generated spi_init.h template
                    </div>
                </div>
            </div>

            <div className="truncate text-[0.48rem] font-medium text-slate-500 sm:text-[0.56rem]">
                Shared Engineering Patterns
            </div>
        </div>
    </div>
);

const LegalVisual = () => (
    <div className="grid h-full grid-cols-2 gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1 border-b border-slate-100 pb-1.5">
                <span className="truncate font-mono text-[0.52rem] font-semibold text-slate-700 sm:text-[0.6rem]">
                    Original_MSA.docx
                </span>
                <span className={`${miniPillClass} border-slate-200 bg-slate-50 text-slate-600`}>
                    Source
                </span>
            </div>

            <div className="my-auto space-y-1.5 py-1">
                <div className="rounded-lg border border-slate-200/80 bg-slate-50 p-1.5 text-[0.5rem] leading-snug text-slate-700 sm:text-[0.56rem]">
                    <div className="font-semibold text-slate-900">§ 8.2 Liability Cap</div>
                    <div className="mt-0.5">&ldquo;Liability shall not exceed 100% of prior 12-month fees.&rdquo;</div>
                </div>
                <div className="rounded-lg border border-slate-100 bg-white px-2 py-1 text-[0.48rem] text-slate-500 sm:text-[0.54rem]">
                    <span className="font-semibold text-slate-700">§ 11.1 Arbitration: </span>
                    Standard venue confirmed.
                </div>
            </div>

            <div className="truncate text-[0.48rem] font-medium text-slate-400 sm:text-[0.54rem]">
                Clause Baseline · Dual-Pane
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-rose-200/80 bg-gradient-to-b from-white to-rose-50/55 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1 border-b border-rose-100 pb-1.5">
                <span className="truncate font-mono text-[0.52rem] font-semibold text-slate-700 sm:text-[0.6rem]">
                    Signed_Scan.pdf
                </span>
                <span className={`${miniPillClass} border-rose-200 bg-rose-50 text-rose-700`}>
                    OCR + Diff
                </span>
            </div>

            <div className="my-auto rounded-xl border border-rose-200 bg-rose-50/70 p-2 text-[0.5rem] leading-relaxed text-slate-700 sm:text-[0.58rem]">
                <div className="font-semibold text-rose-800">§ 8.2 Modified:</div>
                <div className="mt-0.5">
                    &ldquo;...shall not exceed{' '}
                    <del className="rounded bg-rose-200/70 px-1 text-rose-900">100%</del>{' '}
                    <ins className="rounded bg-emerald-100 px-1 font-semibold text-emerald-800 no-underline">50%</ins>{' '}
                    of fees.&rdquo;
                </div>
            </div>

            <div className="truncate text-[0.48rem] font-medium text-rose-700 sm:text-[0.56rem]">
                Consistency Check · Human Review
            </div>
        </div>
    </div>
);

const TranslationVisual = () => (
    <div className="grid h-full grid-cols-2 gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1 border-b border-slate-100 pb-1.5">
                <span className="truncate font-mono text-[0.52rem] font-semibold text-slate-700 sm:text-[0.6rem]">
                    TW_Patent.docx
                </span>
                <span className={`${miniPillClass} border-slate-200 bg-slate-50 text-slate-600`}>
                    ZH Source
                </span>
            </div>

            <div className="my-auto rounded-xl border border-slate-200/80 bg-slate-50 p-2 text-[0.5rem] leading-relaxed text-slate-700 sm:text-[0.56rem]">
                請求項 1：一種光學感測封裝結構，包含基板與影像感測晶片...
            </div>

            <div className="flex flex-wrap items-center gap-1 text-[0.46rem] font-semibold text-slate-600 sm:text-[0.52rem]">
                <span className="rounded bg-slate-100 px-1.5 py-0.5">1. Parse</span>
                <span>→</span>
                <span className="rounded bg-amber-50 px-1.5 py-0.5 text-amber-800">2. Translate</span>
                <span>→</span>
                <span className="rounded bg-blue-50 px-1.5 py-0.5 text-primary">3. Proofread</span>
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-amber-200/80 bg-gradient-to-b from-white to-amber-50/55 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1 border-b border-amber-100 pb-1.5">
                <span className="truncate font-mono text-[0.52rem] font-semibold text-slate-700 sm:text-[0.6rem]">
                    US_Patent_Out.docx
                </span>
                <span className={`${miniPillClass} border-blue-200 bg-blue-50 text-primary`}>
                    DOCX Export
                </span>
            </div>

            <div className="my-auto rounded-xl border border-amber-200/70 bg-white p-2 text-[0.5rem] leading-relaxed text-slate-700 sm:text-[0.56rem]">
                Claim 1: An optical sensing package comprising a substrate and an image sensor die...
            </div>

            <div className="truncate rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[0.48rem] font-semibold text-emerald-800 sm:text-[0.54rem]">
                影像感測晶片 → image sensor die ✓
            </div>
        </div>
    </div>
);

const MeetingVisual = () => (
    <div className="grid h-full grid-cols-[0.94fr_1.06fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1">
                <span className="truncate font-mono text-[0.52rem] font-semibold text-slate-700 sm:text-[0.6rem]">
                    RD_Sync_42m.wav
                </span>
                <span className={`${miniPillClass} border-violet-200 bg-violet-50 text-violet-700`}>
                    VAD + Diarize
                </span>
            </div>

            <div className="my-1 flex h-6 items-center justify-between gap-1 rounded-lg border border-slate-100 bg-slate-50 px-2 sm:h-8">
                {[32, 62, 88, 46, 94, 58, 40, 82, 52, 74, 38, 66].map((height, index) => (
                    <span
                        key={index}
                        className="w-1 rounded-full bg-violet-400/80 sm:w-1.5"
                        style={{ height: `${height}%` }}
                    />
                ))}
            </div>

            <div className="space-y-1 text-[0.48rem] sm:text-[0.56rem]">
                <div className="truncate rounded-md bg-slate-50 px-1.5 py-1 text-slate-700">
                    <span className="font-semibold text-violet-700">Spk A: </span>
                    Lock SPI clock at 24MHz.
                </div>
                <div className="truncate rounded-md bg-slate-50 px-1.5 py-1 text-slate-700">
                    <span className="font-semibold text-primary">Spk B: </span>
                    Run QA regression by Fri.
                </div>
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-violet-200/80 bg-gradient-to-b from-white to-violet-50/55 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1">
                <span className="truncate text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-violet-800 sm:text-[0.6rem]">
                    Structured Minutes
                </span>
                <span className={`${miniPillClass} border-emerald-200 bg-emerald-50 text-emerald-700`}>
                    Action Ready
                </span>
            </div>

            <div className="my-auto space-y-1">
                <div className="rounded-lg border border-slate-200/80 bg-white px-2 py-1 text-[0.5rem] sm:text-[0.56rem]">
                    <span className="font-semibold text-primary">Decision: </span>
                    <span className="text-slate-700">SPI clock fixed at 24MHz</span>
                </div>
                <div className="rounded-lg border border-amber-200/80 bg-amber-50/70 px-2 py-1 text-[0.5rem] sm:text-[0.56rem]">
                    <span className="font-semibold text-amber-800">Risk: </span>
                    <span className="text-slate-700">Rev-B thermal drift check</span>
                </div>
                <div className="rounded-lg border border-violet-200/80 bg-violet-50/70 px-2 py-1 text-[0.5rem] sm:text-[0.56rem]">
                    <span className="font-semibold text-violet-800">Action: </span>
                    <span className="text-slate-700">QA regression before Fri</span>
                </div>
            </div>
        </div>
    </div>
);

const AssistantVisual = () => (
    <div className="grid h-full grid-cols-2 gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-[0.5rem] font-medium text-slate-800 sm:text-[0.58rem]">
                &ldquo;Line 3 Edge Mura spike after PM?&rdquo;
            </div>

            <div className="my-auto space-y-1 py-1">
                {[
                    ['1. SOP RAG', 'Process docs'],
                    ['2. SQL Tool', 'Chamber logs'],
                    ['3. Neo4j KG', 'Eqp → Defect graph'],
                ].map(([tool, desc], index) => (
                    <div
                        key={tool}
                        className={`flex items-center justify-between gap-1 rounded-lg border px-2 py-1 text-[0.48rem] sm:text-[0.56rem] ${
                            index === 2
                                ? 'border-cyan-200 bg-cyan-50/80 text-cyan-900'
                                : 'border-slate-200/80 bg-white text-slate-700'
                        }`}
                    >
                        <span className="shrink-0 font-semibold">{tool}</span>
                        <span className="truncate text-slate-500">{desc}</span>
                    </div>
                ))}
            </div>

            <div className="truncate text-[0.48rem] font-medium text-slate-400 sm:text-[0.54rem]">
                Cross-Source Agent Routing
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-cyan-200/80 bg-gradient-to-b from-white to-cyan-50/60 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1">
                <span className="text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-cyan-800 sm:text-[0.6rem]">
                    Root Cause Trace
                </span>
                <span className={`${miniPillClass} border-emerald-200 bg-emerald-50 text-emerald-700`}>
                    Verified
                </span>
            </div>

            <div className="my-auto rounded-xl border border-cyan-200/70 bg-white p-2 text-[0.52rem] leading-relaxed text-slate-700 sm:text-[0.58rem]">
                Chamber B temp drift (<span className="font-mono font-semibold text-amber-700">+1.8°C</span>) post-PM
                correlates with Edge Mura defect.
            </div>

            <div className="truncate font-mono text-[0.48rem] font-medium text-cyan-800 sm:text-[0.56rem]">
                Sources: eqp_sql_03 · SOP-402
            </div>
        </div>
    </div>
);

const YieldVisual = () => (
    <div className="grid h-full grid-cols-[1.15fr_0.85fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="truncate text-[0.52rem] font-semibold text-slate-700 sm:text-[0.62rem]">
                Cross-Fab Standardization &amp; LIME
            </div>

            <div className="relative my-1.5 min-h-[70px] flex-1 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70 p-2">
                <div className="absolute inset-x-2 bottom-2 top-2 bg-[linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[length:100%_33%]" />
                <svg viewBox="0 0 280 96" className="relative h-full w-full" aria-hidden="true">
                    <path
                        d="M6 78 C42 74 68 62 96 66 S146 46 178 49 S232 22 272 14"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M6 78 C42 74 68 62 96 66 S146 46 178 49 S232 22 272 14 L272 94 L6 94Z"
                        fill="rgba(16,185,129,0.12)"
                    />
                    <circle cx="272" cy="14" r="5" fill="#10b981" />
                </svg>
            </div>

            <div className="truncate rounded-lg border border-emerald-200 bg-emerald-50/80 px-2 py-1 font-mono text-[0.48rem] font-semibold text-emerald-800 sm:text-[0.56rem]">
                Param: Etch Bias -4.2% · Temp 62°C
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-emerald-200/80 bg-gradient-to-b from-white to-emerald-50/70 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div>
                <div className="text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[0.58rem]">
                    Yield Improvement
                </div>
                <div className="mt-0.5 text-lg font-bold tracking-tight text-emerald-700 sm:text-2xl xl:text-[1.65rem]">
                    +1.43%
                </div>
            </div>

            <div className="border-t border-emerald-100 pt-1.5">
                <div className="text-[0.48rem] font-semibold uppercase tracking-[0.1em] text-slate-500 sm:text-[0.54rem]">
                    Defect Reduction
                </div>
                <div className="text-sm font-bold text-slate-900 sm:text-base">-12.62%</div>
            </div>

            <div className="truncate rounded-lg border border-emerald-200 bg-white px-2 py-1 text-center text-[0.48rem] font-semibold text-emerald-700 sm:text-[0.56rem]">
                ~300 man-hours/mo saved
            </div>
        </div>
    </div>
);

const GymVisual = () => (
    <div className="grid h-full grid-cols-2 gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1">
                <span className="truncate text-[0.54rem] font-semibold text-slate-800 sm:text-[0.62rem]">
                    Push Day · Week 14
                </span>
                <span className={`${miniPillClass} border-sky-200 bg-sky-50 text-sky-700`}>
                    Cloudflare D1
                </span>
            </div>

            <div className="my-1.5 space-y-1">
                <div className="flex items-center justify-between gap-1 rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1 text-[0.48rem] sm:text-[0.56rem]">
                    <span className="truncate font-medium text-slate-700">Incline DB Press</span>
                    <span className="shrink-0 font-mono font-semibold text-slate-900">38kg × 8 × 4</span>
                </div>
                <div className="flex items-center justify-between gap-1 rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1 text-[0.48rem] sm:text-[0.56rem]">
                    <span className="truncate font-medium text-slate-700">Lateral Raise</span>
                    <span className="shrink-0 font-mono font-semibold text-slate-900">15kg × 12 × 4</span>
                </div>
            </div>

            <div className="truncate rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[0.48rem] font-semibold text-emerald-800 sm:text-[0.54rem]">
                AI Mapped: &ldquo;上斜啞鈴&rdquo; → Incline DB
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-emerald-200/80 bg-gradient-to-b from-white to-sky-50/55 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1">
                <span className="text-[0.52rem] font-semibold text-slate-700 sm:text-[0.6rem]">
                    Weekly Volume
                </span>
                <span className={`${miniPillClass} border-emerald-200 bg-emerald-50 text-emerald-700`}>
                    78% Complete
                </span>
            </div>

            <div className="my-1.5 flex min-h-[56px] flex-1 items-end justify-between gap-1 rounded-xl border border-slate-200/80 bg-white px-2.5 pb-2 pt-3">
                {[44, 70, 52, 86, 64, 94, 76].map((height, index) => (
                    <div
                        key={index}
                        className={`w-full rounded-t-md ${index === 5 ? 'bg-emerald-500' : 'bg-primary/25'}`}
                        style={{ height: `${height}%` }}
                    />
                ))}
            </div>

            <div className="truncate text-[0.48rem] font-medium text-slate-600 sm:text-[0.56rem]">
                <span className="font-semibold text-primary">AI Coach: </span>
                Volume +6%; keep RPE 8 on press.
            </div>
        </div>
    </div>
);

const MaintenanceVisual = () => (
    <div className="grid h-full grid-cols-[1.12fr_0.88fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1">
                <span className="truncate text-[0.54rem] font-semibold text-slate-800 sm:text-[0.62rem]">
                    Chamber Pump B · Trend
                </span>
                <span className={`${miniPillClass} border-orange-200 bg-orange-50 text-orange-700`}>
                    Custom Loss
                </span>
            </div>

            <div className="my-1.5 min-h-[68px] flex-1 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/75 p-2">
                <svg viewBox="0 0 260 96" className="h-full w-full" aria-hidden="true">
                    <line
                        x1="4"
                        y1="32"
                        x2="256"
                        y2="32"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="6 5"
                    />
                    <path
                        d="M8 78 C46 76 74 66 106 68 S154 54 188 46 L214 20 L236 52 L254 44"
                        fill="none"
                        stroke="#ea580c"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="214" cy="20" r="5" fill="#ea580c" />
                    <circle cx="214" cy="20" r="10" fill="none" stroke="rgba(234,88,12,0.28)" strokeWidth="4" />
                </svg>
            </div>

            <div className="truncate text-[0.48rem] font-medium text-slate-500 sm:text-[0.56rem]">
                Trend-aligned objective · ~90h/mo saved
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-orange-200/80 bg-gradient-to-b from-white to-orange-50/60 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-orange-800 sm:text-[0.6rem]">
                Maintenance Queue
            </div>

            <div className="my-auto space-y-1.5 py-1">
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-2">
                    <div className="text-[0.54rem] font-bold text-slate-900 sm:text-[0.62rem]">Pump B</div>
                    <div className="mt-0.5 text-[0.48rem] font-semibold text-amber-800 sm:text-[0.56rem]">
                        High Risk · Schedule Thu
                    </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                    <div className="text-[0.54rem] font-semibold text-slate-800 sm:text-[0.62rem]">Valve C1</div>
                    <div className="mt-0.5 text-[0.48rem] text-slate-500 sm:text-[0.56rem]">
                        Stable · Next 14d
                    </div>
                </div>
            </div>

            <div className="truncate text-[0.48rem] font-medium text-orange-800/80 sm:text-[0.54rem]">
                Actionable PM Scheduling
            </div>
        </div>
    </div>
);

const AddressVisual = () => (
    <div className="grid h-full grid-cols-[0.94fr_1.06fr] gap-2 sm:gap-3">
        <div className={cardClass}>
            <div className="flex items-center justify-between gap-1">
                <span className="text-[0.54rem] font-semibold text-slate-800 sm:text-[0.62rem]">
                    Raw Input
                </span>
                <span className={`${miniPillClass} border-slate-200 bg-slate-50 text-slate-600`}>
                    Heterogeneous
                </span>
            </div>

            <div className="my-auto space-y-1.5 py-1">
                <div className="truncate rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-[0.5rem] text-slate-700 sm:text-[0.58rem]">
                    &ldquo;北市信義路五段23之2號3F&rdquo;
                </div>
                <div className="truncate rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-[0.5rem] text-slate-700 sm:text-[0.58rem]">
                    &ldquo;臺中工業區工業路八巷12號&rdquo;
                </div>
            </div>

            <div className="truncate text-[0.48rem] font-medium text-teal-700 sm:text-[0.56rem]">
                Rule Parser + Attribute DB
            </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between rounded-xl border border-teal-200/80 bg-gradient-to-b from-white to-teal-50/55 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-3 xl:p-3.5">
            <div className="flex items-center justify-between gap-1">
                <span className="text-[0.54rem] font-semibold text-teal-900 sm:text-[0.62rem]">
                    Structured Output
                </span>
                <span className={`${miniPillClass} border-emerald-200 bg-emerald-50 text-emerald-700`}>
                    Parsed ✓
                </span>
            </div>

            <div className="my-auto grid grid-cols-2 gap-1.5 py-1">
                {[
                    ['City', '臺北市'],
                    ['District', '信義區'],
                    ['Road / Sec', '信義路五段'],
                    ['Number', '23-2號 3樓'],
                ].map(([label, value], index) => (
                    <div
                        key={label}
                        className={`rounded-lg border px-2 py-1 ${
                            index === 2
                                ? 'border-teal-200 bg-teal-50/85'
                                : 'border-slate-200/80 bg-white'
                        }`}
                    >
                        <div className="text-[0.44rem] font-semibold uppercase tracking-[0.1em] text-slate-400 sm:text-[0.5rem]">
                            {label}
                        </div>
                        <div className="truncate text-[0.52rem] font-semibold text-slate-800 sm:text-[0.58rem]">
                            {value}
                        </div>
                    </div>
                ))}
            </div>

            <div className="truncate text-[0.48rem] font-medium text-teal-700 sm:text-[0.54rem]">
                4/4 Fields Verified · GIS Ready
            </div>
        </div>
    </div>
);

const visuals: Record<VisualType, ReactNode> = {
    'genai-workspace': <GenAIVisual />,
    'legal-comparison': <LegalVisual />,
    'yield-optimization': <YieldVisual />,
    'manufacturing-assistant': <AssistantVisual />,
    'patent-translation': <TranslationVisual />,
    'meeting-intelligence': <MeetingVisual />,
    'asc-merge-c-generator': <AscVisual />,
    'gym-tracker': <GymVisual />,
    'preventive-maintenance': <MaintenanceVisual />,
    'address-normalization': <AddressVisual />,
    'workforce-analytics': <WorkforceVisual />,
    'datasheet-review': <DatasheetVisual />,
    'llm-telemetry': <LLMTelemetryVisual />,
    'evidence-qa': <EvidenceQAVisual />,
    'genai-enablement': <GenAIEnablementVisual />,
};

export const ProjectThumbnailVisual = ({ visualType }: { visualType: VisualType }) => {
    const config = configs[visualType];

    return (
        <div className={`relative flex h-full w-full flex-1 flex-col overflow-hidden bg-gradient-to-br ${config.shell} p-3 text-slate-900 sm:p-4 xl:p-5`}>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(203,213,225,0.42)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,213,225,0.42)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_85%_80%_at_50%_35%,#000_60%,transparent_100%)]" />
            <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl ${config.glow}`} />
            <div className="relative z-10 flex h-full flex-1 flex-col">
                <div className="mb-2 flex items-center justify-between gap-2 sm:mb-2.5 xl:mb-3">
                    <div className="flex min-w-0 items-center gap-2">
                        <span className={`h-2 w-2 shrink-0 rounded-full ${config.dot}`} />
                        <span className="truncate text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-[0.65rem] xl:text-[0.68rem]">
                            {config.eyebrow}
                        </span>
                    </div>
                    <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[0.54rem] font-semibold shadow-sm sm:px-2.5 sm:text-[0.62rem] xl:text-[0.65rem] ${config.badge}`}
                    >
                        {config.signal}
                    </span>
                </div>
                <div className="min-h-0 flex-1">{visuals[visualType]}</div>
            </div>
        </div>
    );
};
