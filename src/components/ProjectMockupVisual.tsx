import type { ReactNode } from 'react';
import { DetailedProject } from '../data/types';

type ProjectMockupVisualProps = {
    visualType: NonNullable<DetailedProject['visualType']>;
};

type LineTone = 'muted' | 'cyan' | 'amber' | 'blue' | 'emerald';

const lineToneClassName: Record<LineTone, string> = {
    muted: 'bg-slate-500/45',
    cyan: 'bg-cyan-300/60',
    amber: 'bg-amber-300/80',
    blue: 'bg-blue-300/65',
    emerald: 'bg-emerald-300/70',
};

const renderLines = (lines: Array<{ width: string; tone?: LineTone }>, marker = false) => (
    <div className="space-y-3">
        {lines.map((line, index) => (
            <div key={`${line.width}-${index}`} className="flex items-center gap-2">
                <span className={`h-2.5 rounded-full ${line.width} ${lineToneClassName[line.tone ?? 'muted']}`} />
                {marker ? <span className="h-2 w-2 rounded-full border border-white/10 bg-white/40" /> : null}
            </div>
        ))}
    </div>
);

const Shell = ({
    header,
    status,
    children,
    footer,
    tags,
}: {
    header: string;
    status: string;
    children: ReactNode;
    footer: string;
    tags: string[];
}) => (
    <div className="mx-auto w-full max-w-[520px]">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,20,25,0.98),rgba(17,24,39,0.96))] shadow-[0_24px_70px_rgba(8,15,28,0.42),0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="border-b border-white/8 px-4 py-4 sm:px-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/65">
                        {header}
                    </p>

                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/12 px-3 py-1.5 text-xs font-medium text-cyan-100">
                        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.55)]" />
                        {status}
                    </span>
                </div>
            </div>

            <div className="space-y-4 p-4 sm:p-5">
                {children}

                <div className="rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3">
                    <p className="text-sm text-slate-300">{footer}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const LegalComparisonVisual = () => (
    <Shell
        header="Document Comparison"
        status="Validation Passed"
        footer="Clause-level differences highlighted with a review-ready validation check"
        tags={['Confidential Review', 'Difference Analysis', 'Validation Layer']}
    >
        <div className="grid gap-3 md:grid-cols-2">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Original</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                        Legal Document
                    </span>
                </div>
                {renderLines([
                    { width: 'w-[88%]' },
                    { width: 'w-[74%]', tone: 'cyan' },
                    { width: 'w-[82%]' },
                    { width: 'w-[69%]' },
                    { width: 'w-[85%]', tone: 'cyan' },
                    { width: 'w-[63%]' },
                ])}
            </section>

            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Signed Scan</span>
                    <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-amber-100">
                        3 Diff Marks
                    </span>
                </div>
                {renderLines([
                    { width: 'w-[88%]' },
                    { width: 'w-[74%]', tone: 'cyan' },
                    { width: 'w-[79%]', tone: 'amber' },
                    { width: 'w-[67%]' },
                    { width: 'w-[83%]', tone: 'amber' },
                    { width: 'w-[61%]', tone: 'amber' },
                ], true)}
            </section>
        </div>
    </Shell>
);

const PatentTranslationVisual = () => (
    <Shell
        header="Patent Translation Workspace"
        status="Format Preserved"
        footer="Source paragraphs aligned with localized terminology output"
        tags={['Translation Workflow', 'docx Export', 'Terminology Control']}
    >
        <div className="grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Source Patent</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                        CN / EN
                    </span>
                </div>
                {renderLines([
                    { width: 'w-[90%]' },
                    { width: 'w-[76%]' },
                    { width: 'w-[84%]' },
                    { width: 'w-[71%]', tone: 'amber' },
                    { width: 'w-[80%]' },
                    { width: 'w-[66%]' },
                ])}
            </section>

            <section className="rounded-2xl border border-cyan-300/12 bg-cyan-400/[0.05] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Translated Draft</span>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-cyan-100">
                        Legal Tone
                    </span>
                </div>
                {renderLines([
                    { width: 'w-[86%]', tone: 'cyan' },
                    { width: 'w-[72%]', tone: 'blue' },
                    { width: 'w-[81%]', tone: 'cyan' },
                    { width: 'w-[68%]', tone: 'amber' },
                    { width: 'w-[77%]', tone: 'blue' },
                    { width: 'w-[63%]', tone: 'cyan' },
                ])}
            </section>
        </div>
    </Shell>
);

const MeetingMinutesVisual = () => (
    <Shell
        header="Meeting Intelligence Console"
        status="Summary Ready"
        footer="Transcript, speakers, and action items generated in one internal workflow"
        tags={['Meeting Workflow', 'Structured Summary', 'Internal Processing']}
    >
        <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Transcript Timeline</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                        42 min
                    </span>
                </div>
                <div className="space-y-3">
                    {['Speaker A', 'Speaker B', 'Speaker C', 'Speaker A'].map((label, index) => (
                        <div key={label + index} className="rounded-xl border border-white/8 bg-slate-900/55 px-3 py-2.5">
                            <div className="mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-cyan-100/80">{label}</div>
                            {renderLines([
                                { width: 'w-[88%]' },
                                { width: 'w-[71%]' },
                            ])}
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/12 bg-white/[0.03] p-4">
                <div className="mb-3 text-sm font-medium text-slate-100">Structured Summary</div>
                <div className="space-y-3">
                    {['Decisions', 'Risks', 'Action Items'].map((label, index) => (
                        <div key={label} className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-3">
                            <div className="mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">{label}</div>
                            {renderLines([
                                { width: index === 2 ? 'w-[69%]' : 'w-[83%]', tone: index === 1 ? 'amber' : 'cyan' },
                                { width: 'w-[58%]' },
                            ])}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </Shell>
);

const GenAIWorkspaceVisual = () => (
    <Shell
        header="Internal GenAI Workspace"
        status="Models Online"
        footer="Internal chat, multimodal review, and coding assistance inside one secure workspace"
        tags={['Internal Workspace', 'Model Access', 'Multimodal Support']}
    >
        <div className="grid gap-3 md:grid-cols-[0.78fr_1.22fr]">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 text-sm font-medium text-slate-100">Model Router</div>
                <div className="space-y-3">
                    {['Fast Model', 'Reasoning Model', 'Vision Model'].map((label, index) => (
                        <div key={label} className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-3">
                            <div className="mb-2 flex items-center justify-between gap-2">
                                <span className="text-xs font-medium text-slate-200">{label}</span>
                                <span className={`h-2.5 w-2.5 rounded-full ${index === 1 ? 'bg-cyan-300' : 'bg-emerald-300'}`} />
                            </div>
                            {renderLines([{ width: 'w-[74%]' }])}
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/12 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Workspace Tabs</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                        Internal Only
                    </span>
                </div>
                <div className="mb-3 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-slate-300">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-1">Chat</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1">Code</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1">Vision</span>
                </div>
                <div className="rounded-2xl border border-white/8 bg-slate-950/45 p-4">
                    <div className="mb-4 grid grid-cols-3 gap-2">
                        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">{renderLines([{ width: 'w-[84%]', tone: 'cyan' }, { width: 'w-[60%]' }])}</div>
                        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">{renderLines([{ width: 'w-[79%]', tone: 'blue' }, { width: 'w-[66%]' }])}</div>
                        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">{renderLines([{ width: 'w-[76%]', tone: 'amber' }, { width: 'w-[54%]' }])}</div>
                    </div>
                    {renderLines([
                        { width: 'w-[92%]' },
                        { width: 'w-[75%]', tone: 'cyan' },
                        { width: 'w-[84%]' },
                        { width: 'w-[66%]', tone: 'blue' },
                    ])}
                </div>
            </section>
        </div>
    </Shell>
);

const GymTrackerVisual = () => (
    <Shell
        header="Private AI Gym Coach"
        status="Plan Synced"
        footer="Training log, weekly volume, and AI coaching live in the same private dashboard"
        tags={['Personal Workflow', 'Private Data', 'AI Support']}
    >
        <div className="grid gap-3 md:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 text-sm font-medium text-slate-100">Weekly Volume</div>
                <div className="flex h-[142px] items-end gap-2 rounded-2xl border border-white/8 bg-slate-950/45 px-3 py-3">
                    {[42, 71, 58, 82, 64, 90, 74].map((height, index) => (
                        <span
                            key={height + index}
                            className={`flex-1 rounded-t-xl ${index === 5 ? 'bg-cyan-300/80' : 'bg-slate-500/65'}`}
                            style={{ height: `${height}%` }}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/12 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Coach Notes</span>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-cyan-100">
                        AI Insight
                    </span>
                </div>
                <div className="space-y-3">
                    <div className="rounded-xl border border-white/8 bg-slate-950/45 p-3">
                        {renderLines([{ width: 'w-[88%]', tone: 'cyan' }, { width: 'w-[73%]' }, { width: 'w-[61%]' }])}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                            <div className="mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">Recovery</div>
                            {renderLines([{ width: 'w-[72%]', tone: 'emerald' }, { width: 'w-[54%]' }])}
                        </div>
                        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                            <div className="mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">Progress</div>
                            {renderLines([{ width: 'w-[70%]', tone: 'blue' }, { width: 'w-[58%]' }])}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Shell>
);

const ManufacturingAssistantVisual = () => (
    <Shell
        header="Manufacturing Assistant"
        status="Decision Path Ready"
        footer="Knowledge context and tool-routed investigation steps for factory diagnosis"
        tags={['Decision Support', 'Cross-Source Reasoning', 'Investigation Flow']}
    >
        <div className="grid gap-3 md:grid-cols-[0.92fr_1.08fr]">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 text-sm font-medium text-slate-100">Agent Flow</div>
                <div className="space-y-3">
                    {['Intent', 'SQL', 'Graph', 'Root Cause'].map((label, index) => (
                        <div key={label} className="flex items-center gap-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-xs font-medium ${index > 1 ? 'bg-cyan-400/10 text-cyan-100' : 'bg-white/[0.04] text-slate-300'}`}>
                                {label.slice(0, 2)}
                            </div>
                            <div className="h-[2px] flex-1 rounded-full bg-slate-700/80" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/12 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Investigation Workspace</span>
                    <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-amber-100">
                        Root Cause Trace
                    </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/8 bg-slate-950/45 p-3">{renderLines([{ width: 'w-[84%]' }, { width: 'w-[62%]', tone: 'cyan' }, { width: 'w-[73%]' }])}</div>
                    <div className="rounded-xl border border-white/8 bg-slate-950/45 p-3">{renderLines([{ width: 'w-[76%]', tone: 'blue' }, { width: 'w-[69%]' }, { width: 'w-[57%]', tone: 'amber' }])}</div>
                </div>
                <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">{renderLines([{ width: 'w-[91%]' }, { width: 'w-[79%]' }, { width: 'w-[68%]', tone: 'cyan' }])}</div>
            </section>
        </div>
    </Shell>
);

const YieldOptimizationVisual = () => (
    <Shell
        header="Yield Optimization Studio"
        status="Recommendation Ready"
        footer="Cross-factory signals converted into explainable parameter recommendations"
        tags={['Optimization Workflow', 'Explainable Output', 'Cross-Factory']}
    >
        <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 text-sm font-medium text-slate-100">Factory Comparison</div>
                <div className="space-y-3">
                    {[
                        ['Fab A', '76%', 'bg-cyan-300/80'],
                        ['Fab B', '71%', 'bg-slate-500/65'],
                        ['Fab C', '79%', 'bg-blue-300/75'],
                    ].map(([label, value, barClass]) => (
                        <div key={label} className="space-y-2">
                            <div className="flex items-center justify-between text-xs text-slate-300">
                                <span>{label}</span>
                                <span>{value}</span>
                            </div>
                            <div className="h-2.5 rounded-full bg-slate-800">
                                <div className={`h-2.5 rounded-full ${barClass}`} style={{ width: value }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/12 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Explainability Panel</span>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-cyan-100">
                        Golden Path
                    </span>
                </div>
                <div className="space-y-3">
                    <div className="rounded-xl border border-white/8 bg-slate-950/45 p-3">{renderLines([{ width: 'w-[84%]', tone: 'amber' }, { width: 'w-[61%]' }])}</div>
                    <div className="rounded-xl border border-white/8 bg-slate-950/45 p-3">{renderLines([{ width: 'w-[78%]', tone: 'cyan' }, { width: 'w-[69%]' }])}</div>
                    <div className="rounded-xl border border-white/8 bg-slate-950/45 p-3">{renderLines([{ width: 'w-[73%]', tone: 'blue' }, { width: 'w-[58%]' }])}</div>
                </div>
            </section>
        </div>
    </Shell>
);

const PreventiveMaintenanceVisual = () => (
    <Shell
        header="Predictive Maintenance Monitor"
        status="Alert Ranked"
        footer="Time-series anomaly trends prioritized into maintenance scheduling signals"
        tags={['Maintenance Planning', 'Trend Signals', 'Scheduling Support']}
    >
        <div className="grid gap-3 md:grid-cols-[1.08fr_0.92fr]">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 text-sm font-medium text-slate-100">Trend Forecast</div>
                <div className="rounded-2xl border border-white/8 bg-slate-950/45 p-4">
                    <div className="relative h-[144px]">
                        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
                        <svg viewBox="0 0 240 140" className="h-full w-full">
                            <path d="M10 102 C40 82, 52 92, 82 76 S130 44, 168 58 S210 22, 230 34" fill="none" stroke="rgba(103,232,249,0.9)" strokeWidth="4" strokeLinecap="round" />
                            <path d="M10 112 C38 106, 60 101, 92 96 S140 90, 176 80 S212 74, 230 70" fill="none" stroke="rgba(251,191,36,0.72)" strokeWidth="3" strokeDasharray="7 7" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/12 bg-white/[0.03] p-4">
                <div className="mb-3 text-sm font-medium text-slate-100">Maintenance Queue</div>
                <div className="space-y-3">
                    {['Chamber A', 'Pump B', 'Valve Cluster'].map((label, index) => (
                        <div key={label} className="rounded-xl border border-white/8 bg-slate-950/45 p-3">
                            <div className="mb-2 flex items-center justify-between gap-2">
                                <span className="text-xs font-medium text-slate-200">{label}</span>
                                <span className={`rounded-full px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] ${index === 0 ? 'bg-amber-400/10 text-amber-100' : 'bg-white/[0.04] text-slate-300'}`}>
                                    {index === 0 ? 'High' : 'Queued'}
                                </span>
                            </div>
                            {renderLines([{ width: 'w-[76%]' }, { width: 'w-[60%]', tone: index === 0 ? 'amber' : 'cyan' }])}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </Shell>
);

const AddressNormalizationVisual = () => (
    <Shell
        header="Address Data Quality Console"
        status="Normalized"
        footer="Messy address strings parsed into structured fields for downstream use"
        tags={['Data Quality', 'Normalization Logic', 'Structured Fields']}
    >
        <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
            <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 text-sm font-medium text-slate-100">Raw Address Input</div>
                <div className="space-y-3">
                    {['Taipei City Xinyi Rd. Sec. 5 No. 23-2', 'Taichung City Industrial Rd. Lane 8', 'Kaohsiung City Minzu 1st Rd. No. 20'].map((row, index) => (
                        <div key={row} className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-3">
                            <div className="text-sm text-slate-200">{row}</div>
                            <div className="mt-2">{renderLines([{ width: index === 1 ? 'w-[72%]' : 'w-[64%]' }])}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/12 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">Structured Fields</span>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-cyan-100">
                        Parsed
                    </span>
                </div>
                <div className="space-y-3">
                    {['City', 'District', 'Road', 'Number'].map((label, index) => (
                        <div key={label} className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-3">
                            <div className="mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">{label}</div>
                            {renderLines([{ width: index % 2 === 0 ? 'w-[66%]' : 'w-[79%]', tone: index === 2 ? 'cyan' : 'blue' }])}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </Shell>
);

export const ProjectMockupVisual = ({ visualType }: ProjectMockupVisualProps) => {
    switch (visualType) {
        case 'legal-comparison':
            return <LegalComparisonVisual />;
        case 'patent-translation':
            return <PatentTranslationVisual />;
        case 'meeting-intelligence':
            return <MeetingMinutesVisual />;
        case 'genai-workspace':
            return <GenAIWorkspaceVisual />;
        case 'gym-tracker':
            return <GymTrackerVisual />;
        case 'manufacturing-assistant':
            return <ManufacturingAssistantVisual />;
        case 'yield-optimization':
            return <YieldOptimizationVisual />;
        case 'preventive-maintenance':
            return <PreventiveMaintenanceVisual />;
        case 'address-normalization':
            return <AddressNormalizationVisual />;
        default:
            return null;
    }
};
