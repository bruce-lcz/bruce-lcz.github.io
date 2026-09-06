import type { ReactNode } from 'react';
import type { DetailedProject } from '../data/types';

type VisualType = NonNullable<DetailedProject['visualType']>;

type ThumbnailConfig = {
    eyebrow: string;
    signal: string;
    shell: string;
    accent: string;
    glow: string;
};

const configs: Record<VisualType, ThumbnailConfig> = {
    'genai-workspace': {
        eyebrow: 'AI Workspace',
        signal: 'Models online',
        shell: 'from-[#111827] via-[#172554] to-[#312e81]',
        accent: 'bg-violet-300 text-violet-950',
        glow: 'bg-violet-400/30',
    },
    'legal-comparison': {
        eyebrow: 'Document Review',
        signal: '3 changes found',
        shell: 'from-[#172033] via-[#1e293b] to-[#3f1d2e]',
        accent: 'bg-rose-300 text-rose-950',
        glow: 'bg-rose-400/25',
    },
    'yield-optimization': {
        eyebrow: 'Yield Intelligence',
        signal: '+1.43% yield',
        shell: 'from-[#062d2a] via-[#064e3b] to-[#0f3d38]',
        accent: 'bg-emerald-300 text-emerald-950',
        glow: 'bg-emerald-300/25',
    },
    'manufacturing-assistant': {
        eyebrow: 'Knowledge Assistant',
        signal: 'Answer verified',
        shell: 'from-[#172033] via-[#1e3a5f] to-[#164e63]',
        accent: 'bg-cyan-300 text-cyan-950',
        glow: 'bg-cyan-300/25',
    },
    'patent-translation': {
        eyebrow: 'Patent Translation',
        signal: 'Format preserved',
        shell: 'from-[#292524] via-[#3f2d28] to-[#78350f]',
        accent: 'bg-amber-300 text-amber-950',
        glow: 'bg-amber-300/25',
    },
    'meeting-intelligence': {
        eyebrow: 'Meeting Intelligence',
        signal: 'Actions ready',
        shell: 'from-[#172033] via-[#312e81] to-[#4c1d95]',
        accent: 'bg-fuchsia-300 text-fuchsia-950',
        glow: 'bg-fuchsia-300/25',
    },
    'asc-merge-c-generator': {
        eyebrow: 'File-to-Code',
        signal: 'Export ready',
        shell: 'from-[#172033] via-[#243447] to-[#0f4c5c]',
        accent: 'bg-sky-300 text-sky-950',
        glow: 'bg-sky-300/25',
    },
    'gym-tracker': {
        eyebrow: 'Training Dashboard',
        signal: 'Week complete',
        shell: 'from-[#18181b] via-[#3f1d2e] to-[#701a3f]',
        accent: 'bg-pink-300 text-pink-950',
        glow: 'bg-pink-300/25',
    },
    'preventive-maintenance': {
        eyebrow: 'Maintenance Monitor',
        signal: 'Risk detected',
        shell: 'from-[#172033] via-[#3f2d28] to-[#7c2d12]',
        accent: 'bg-orange-300 text-orange-950',
        glow: 'bg-orange-300/25',
    },
    'address-normalization': {
        eyebrow: 'Data Quality',
        signal: 'Fields parsed',
        shell: 'from-[#172033] via-[#134e4a] to-[#155e75]',
        accent: 'bg-teal-300 text-teal-950',
        glow: 'bg-teal-300/25',
    },
    'workforce-analytics': {
        eyebrow: 'Work-Hour Review',
        signal: 'Manager Review',
        shell: 'from-[#0f172a] via-[#1e1b4b] to-[#2e1065]',
        accent: 'bg-indigo-300 text-indigo-950',
        glow: 'bg-indigo-400/25',
    },
    'datasheet-review': {
        eyebrow: 'Datasheet Review',
        signal: 'Multimodal VLM',
        shell: 'from-[#172033] via-[#1e293b] to-[#042f2e]',
        accent: 'bg-teal-300 text-teal-950',
        glow: 'bg-teal-400/25',
    },
    'llm-telemetry': {
        eyebrow: 'LLMOps Telemetry',
        signal: 'Live Metrics',
        shell: 'from-[#0f172a] via-[#0c4a6e] to-[#082f49]',
        accent: 'bg-cyan-300 text-cyan-950',
        glow: 'bg-cyan-400/25',
    },
    'evidence-qa': {
        eyebrow: 'Grounded RAG',
        signal: 'Source Cited',
        shell: 'from-[#1c1917] via-[#292524] to-[#44403c]',
        accent: 'bg-amber-300 text-amber-950',
        glow: 'bg-amber-400/25',
    },
};

const Lines = ({ widths, accent = false }: { widths: string[]; accent?: boolean }) => (
    <div className="space-y-2">
        {widths.map((width, index) => (
            <div
                key={`${width}-${index}`}
                className={`h-2 rounded-full ${accent && index === 1 ? 'bg-current opacity-80' : 'bg-white/20'}`}
                style={{ width }}
            />
        ))}
    </div>
);

const Arrow = () => (
    <div className="flex shrink-0 items-center gap-1 text-white/45">
        <span className="h-px w-4 bg-current sm:w-7" />
        <span className="h-2 w-2 rotate-45 border-r-2 border-t-2 border-current" />
    </div>
);

const GenAIVisual = () => (
    <div className="grid h-full grid-cols-[0.34fr_1fr] gap-3 sm:gap-4">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
            <div className="mb-4 flex gap-1.5"><i className="h-2 w-2 rounded-full bg-violet-300" /><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /></div>
            <div className="space-y-3"><div className="h-8 rounded-xl bg-violet-300/20" /><div className="h-8 rounded-xl bg-white/5" /><div className="h-8 rounded-xl bg-white/5" /></div>
        </div>
        <div className="flex flex-col justify-end gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4">
            <div className="mr-8 rounded-2xl rounded-bl-md bg-white/10 p-3"><Lines widths={['82%', '58%']} /></div>
            <div className="ml-5 rounded-2xl rounded-br-md border border-violet-300/20 bg-violet-300/10 p-3 text-violet-200"><Lines widths={['92%', '76%', '48%']} accent /></div>
            <div className="h-9 rounded-xl border border-white/10 bg-black/20" />
        </div>
    </div>
);

const LegalVisual = () => (
    <div className="flex h-full items-center justify-center gap-3 sm:gap-5">
        {['Original', 'Signed'].map((label, index) => (
            <div key={label} className={`relative h-[88%] w-[42%] rounded-xl border bg-white p-4 shadow-2xl ${index ? 'rotate-2 border-rose-200' : '-rotate-2 border-slate-200'}`}>
                <div className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-xs">{label}</div>
                <div className="space-y-3">
                    {[88, 72, 82, 64, 78].map((width, line) => <div key={line} className={`h-2 rounded-full ${index && (line === 1 || line === 3) ? 'bg-rose-300' : 'bg-slate-200'}`} style={{ width: `${width}%` }} />)}
                </div>
                {index ? <div className="absolute -right-2 top-1/2 h-6 w-6 rounded-full border-4 border-white bg-rose-400 shadow-lg" /> : null}
            </div>
        ))}
    </div>
);

const YieldVisual = () => (
    <div className="grid h-full grid-cols-[1fr_0.42fr] gap-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="absolute inset-x-4 bottom-5 top-4 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:100%_25%]" />
            <svg viewBox="0 0 320 150" className="relative h-full w-full" aria-hidden="true">
                <path d="M8 125 C48 118 72 102 104 108 S158 78 192 84 S250 38 312 25" fill="none" stroke="rgb(110 231 183)" strokeWidth="7" strokeLinecap="round" />
                <path d="M8 125 C48 118 72 102 104 108 S158 78 192 84 S250 38 312 25 L312 150 L8 150Z" fill="rgba(110,231,183,.13)" />
                <circle cx="312" cy="25" r="8" fill="rgb(110 231 183)" />
            </svg>
        </div>
        <div className="flex flex-col justify-center rounded-2xl border border-emerald-200/15 bg-emerald-200/10 p-4 text-center">
            <strong className="text-2xl font-semibold text-emerald-200 sm:text-4xl">+1.43%</strong>
            <span className="mt-2 text-[0.6rem] uppercase tracking-[0.18em] text-emerald-100/60 sm:text-xs">Yield</span>
        </div>
    </div>
);

const AssistantVisual = () => (
    <div className="flex h-full flex-col justify-center gap-3">
        <div className="mx-auto flex w-[82%] items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="h-5 w-5 rounded-full border-2 border-cyan-200/70" /><div className="h-2 w-1/2 rounded-full bg-white/20" />
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4">
            <div className="grid w-[34%] gap-2"><div className="h-10 rounded-xl bg-white/10" /><div className="h-10 rounded-xl bg-white/10" /></div>
            <Arrow />
            <div className="w-[42%] rounded-2xl border border-cyan-200/20 bg-cyan-200/10 p-4 text-cyan-100"><div className="mb-3 flex items-center gap-2"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-cyan-950">✓</div><span className="text-xs font-semibold">Verified answer</span></div><Lines widths={['92%', '72%', '55%']} accent /></div>
        </div>
    </div>
);

const TranslationVisual = () => (
    <div className="flex h-full items-center justify-center gap-2 sm:gap-4">
        <div className="h-[86%] w-[38%] rounded-xl border border-white/15 bg-white/95 p-4 text-stone-700 shadow-2xl"><div className="mb-4 text-xs font-bold">中文專利</div><Lines widths={['90%', '76%', '84%', '66%', '78%']} /></div>
        <Arrow />
        <div className="h-[86%] w-[38%] rounded-xl border border-amber-200/30 bg-amber-50 p-4 text-amber-700 shadow-2xl"><div className="mb-4 text-xs font-bold">Patent EN</div><Lines widths={['86%', '72%', '82%', '68%', '74%']} accent /></div>
    </div>
);

const MeetingVisual = () => (
    <div className="grid h-full grid-cols-[0.85fr_1fr] gap-4">
        <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex h-24 items-center gap-1">
                {[28, 54, 82, 42, 96, 66, 38, 74, 48, 88, 35, 60].map((height, index) => <i key={index} className="w-1.5 rounded-full bg-fuchsia-300/80 sm:w-2" style={{ height: `${height}%` }} />)}
            </div>
        </div>
        <div className="space-y-2.5">
            {['Decision', 'Risk', 'Action'].map((label, index) => <div key={label} className={`rounded-xl border p-3 ${index === 2 ? 'border-fuchsia-200/20 bg-fuchsia-200/10' : 'border-white/10 bg-white/[0.06]'}`}><div className="mb-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white/60 sm:text-[0.68rem]">{label}</div><Lines widths={[index === 1 ? '68%' : '86%', '52%']} /></div>)}
        </div>
    </div>
);

const AscVisual = () => (
    <div className="flex h-full items-center justify-center gap-2 sm:gap-4">
        <div className="w-[34%] space-y-2">{['01.asc', '02.asc', '03.asc'].map((file, index) => <div key={file} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] p-2.5"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-300/15 text-[0.55rem] font-bold text-sky-200">{index + 1}</span><span className="text-[0.58rem] font-medium text-white/75 sm:text-xs">{file}</span></div>)}</div>
        <Arrow />
        <div className="relative h-[88%] w-[40%] rounded-xl border border-sky-200/25 bg-[#0b1220] p-4 shadow-2xl"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold text-sky-200">init_config.c</span><span className="h-2 w-2 rounded-full bg-emerald-300" /></div><div className="space-y-2 font-mono text-sky-200"><Lines widths={['88%', '66%', '78%', '52%', '84%']} accent /></div></div>
    </div>
);

const GymVisual = () => (
    <div className="grid h-full grid-cols-[0.45fr_1fr] gap-4">
        <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20"><div className="flex h-24 w-24 items-center justify-center rounded-full bg-[conic-gradient(rgb(249,168,212)_0_78%,rgba(255,255,255,.1)_78%)] p-3"><div className="flex h-full w-full items-center justify-center rounded-full bg-[#3f1d2e] text-lg font-semibold text-pink-100">78%</div></div></div>
        <div className="flex items-end justify-around gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 pb-4 pt-7">{[44, 70, 52, 86, 64, 94, 76].map((height, index) => <div key={index} className={`w-full rounded-t-lg ${index === 5 ? 'bg-pink-300' : 'bg-pink-200/25'}`} style={{ height: `${height}%` }} />)}</div>
    </div>
);

const MaintenanceVisual = () => (
    <div className="grid h-full grid-cols-[1fr_0.42fr] gap-4">
        <div className="relative rounded-2xl border border-white/10 bg-black/20 p-4"><svg viewBox="0 0 300 150" className="h-full w-full" aria-hidden="true"><path d="M5 110 C38 108 54 96 82 100 S132 84 158 90 S198 72 218 76 L232 30 L246 105 L260 74 L294 82" fill="none" stroke="rgb(253 186 116)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="232" cy="30" r="10" fill="rgb(251 146 60)" /><circle cx="232" cy="30" r="20" fill="none" stroke="rgba(251,146,60,.35)" strokeWidth="8" /></svg></div>
        <div className="flex flex-col justify-center rounded-2xl border border-orange-200/20 bg-orange-200/10 p-4"><span className="text-[0.58rem] uppercase tracking-[0.16em] text-orange-100/60 sm:text-xs">Pump B</span><strong className="mt-2 text-xl text-orange-200 sm:text-3xl">High risk</strong><div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-full w-[86%] rounded-full bg-orange-300" /></div></div>
    </div>
);

const AddressVisual = () => (
    <div className="flex h-full items-center justify-center gap-2 sm:gap-4">
        <div className="w-[40%] rotate-[-2deg] rounded-2xl border border-white/10 bg-black/20 p-4"><div className="mb-3 text-[0.6rem] uppercase tracking-[0.16em] text-white/45 sm:text-xs">Raw string</div><div className="text-xs leading-5 text-white/75 sm:text-sm">No. 23-2, Sec. 5, Xinyi Rd...</div></div>
        <Arrow />
        <div className="grid w-[40%] grid-cols-2 gap-2">{['City', 'District', 'Road', 'No.'].map((field, index) => <div key={field} className={`rounded-xl border p-2.5 ${index === 2 ? 'border-teal-200/25 bg-teal-200/15' : 'border-white/10 bg-white/[0.07]'}`}><span className="text-[0.55rem] uppercase tracking-[0.12em] text-white/50 sm:text-[0.65rem]">{field}</span><div className="mt-2 h-2 rounded-full bg-teal-200/55" /></div>)}</div>
    </div>
);

const WorkforceVisual = () => (
    <div className="grid h-full grid-cols-[1.16fr_0.84fr] gap-3 sm:gap-4">
        <div className="flex flex-col rounded-2xl border border-indigo-300/20 bg-black/30 p-3.5">
            <div className="flex items-start justify-between gap-2">
                <div>
                    <div className="text-[0.58rem] uppercase tracking-[0.14em] text-indigo-200/60">2026 / 03</div>
                    <div className="mt-1 text-[0.72rem] font-semibold text-white sm:text-sm">Monthly Hours Review</div>
                </div>
                <span className="rounded-full border border-amber-300/30 bg-amber-400/15 px-2 py-0.5 text-[0.52rem] font-medium text-amber-200">3 pending</span>
            </div>
            <div className="my-3">
                <div className="mb-1.5 flex items-center justify-between text-[0.58rem] text-indigo-100/70">
                    <span>Review progress</span><span className="font-mono text-emerald-300">39 / 42 complete</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[93%] rounded-full bg-gradient-to-r from-indigo-400 to-emerald-300" /></div>
            </div>
            <div className="space-y-1.5 border-t border-white/10 pt-2">
                <div className="flex items-center justify-between rounded-lg bg-white/[0.05] px-2 py-1.5 text-[0.55rem] text-white/75"><span>Overtime to review</span><span className="font-mono text-amber-200">12.5 h</span></div>
                <div className="flex items-center justify-between rounded-lg bg-white/[0.05] px-2 py-1.5 text-[0.55rem] text-white/75"><span>Missing punch</span><span className="font-mono text-amber-200">1 record</span></div>
            </div>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-3.5">
            <div>
                <div className="text-[0.58rem] uppercase tracking-[0.12em] text-white/50">Monthly summary</div>
                <div className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">1,624<span className="ml-1 text-xs font-medium text-indigo-200/70">hrs</span></div>
                <div className="mt-1 text-[0.55rem] text-emerald-300">+2.8% vs last month</div>
            </div>
            <div className="space-y-1.5 border-t border-white/10 pt-2 text-[0.55rem]">
                <div className="flex justify-between text-white/60"><span>Regular hours</span><span className="font-mono text-white/85">1,556 h</span></div>
                <div className="flex justify-between text-white/60"><span>Overtime</span><span className="font-mono text-white/85">68 h</span></div>
                <div className="mt-2 rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-center font-medium text-emerald-200">Manager approval pending</div>
            </div>
        </div>
    </div>
);

const DatasheetVisual = () => (
    <div className="grid h-full grid-cols-[1fr_1fr] gap-3 sm:gap-4">
        <div className="flex flex-col rounded-2xl border border-white/10 bg-black/25 p-3.5">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                <span className="text-[0.6rem] font-medium text-white/70">DS_Sensor_v3.docx</span>
                <span className="rounded bg-teal-400/20 px-1.5 py-0.5 text-[0.55rem] text-teal-300">DOCX</span>
            </div>
            <div className="space-y-2 flex-1">
                <div className="text-[0.6rem] font-semibold text-teal-200">§ 4.2 Electrical Specs</div>
                <div className="rounded border border-white/10 bg-white/[0.04] p-1.5 space-y-1">
                    <div className="flex justify-between text-[0.55rem] font-mono text-white/60 pb-1 border-b border-white/5">
                        <span>Param</span><span>Min</span><span>Max</span><span>Unit</span>
                    </div>
                    <div className="flex justify-between text-[0.52rem] font-mono text-white/80">
                        <span>VDD</span><span>1.71</span><span>3.6</span><span className="text-amber-300">V</span>
                    </div>
                    <div className="flex justify-between text-[0.52rem] font-mono text-white/80">
                        <span>IDD</span><span>-</span><span>12.5</span><span className="text-amber-300">mA</span>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 text-[0.55rem] text-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>EMF vector figure converted</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border border-teal-300/20 bg-teal-950/30 p-3.5 text-teal-100">
            <div className="flex items-center justify-between">
                <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-teal-300">Review Findings</span>
                <span className="rounded-full bg-teal-400/20 px-2 py-0.5 text-[0.55rem] font-medium text-teal-200">2 flagged</span>
            </div>
            <div className="space-y-2 my-2">
                <div className="rounded-xl border border-amber-400/25 bg-amber-500/10 p-2 text-[0.58rem] leading-relaxed">
                    <span className="font-semibold text-amber-300">Sec 4.2 Table 2: </span>
                    <span className="text-white/80">Unit mismatch ('uA' vs 'mA' in register map)</span>
                </div>
                <div className="rounded-xl border border-teal-400/20 bg-teal-500/10 p-2 text-[0.58rem] leading-relaxed">
                    <span className="font-semibold text-teal-300">Fig 3 (Pinout): </span>
                    <span className="text-white/80">VLM confirmed pin label matches text</span>
                </div>
            </div>
            <div className="text-[0.55rem] text-teal-200/60 text-right">Web · CLI · MCP Ready</div>
        </div>
    </div>
);

const LLMTelemetryVisual = () => (
    <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-3 sm:gap-4">
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/30 p-3.5">
            <div className="flex items-center justify-between text-[0.6rem] text-cyan-200/70">
                <span>GPU Cluster Telemetry</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />Syncing</span>
            </div>
            <div className="my-2 space-y-2">
                <div>
                    <div className="flex justify-between text-[0.55rem] text-white/60 mb-1">
                        <span>vLLM Worker 01 (H100)</span>
                        <span className="font-mono text-cyan-300">88% Load</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[88%] rounded-full bg-cyan-400" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-[0.55rem] text-white/60 mb-1">
                        <span>vLLM Worker 02 (A100)</span>
                        <span className="font-mono text-cyan-300">64% Load</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[64%] rounded-full bg-cyan-400" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-[0.55rem] text-white/50 pt-2 border-t border-white/10">
                <span>Watermark: 23:45:00</span>
                <span className="text-cyan-300 font-mono">0.82s avg TTFT</span>
            </div>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-3.5">
            <div>
                <div className="text-[0.6rem] uppercase tracking-wider text-white/50">Weekly Token Volume</div>
                <div className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">28.4M</div>
                <div className="text-[0.55rem] text-cyan-300">+14.2% vs last week</div>
            </div>
            <div className="space-y-1 text-[0.55rem] text-white/70 pt-2 border-t border-white/10">
                <div className="flex justify-between"><span>Persisted Tokens</span><span className="font-mono text-white">92%</span></div>
                <div className="flex justify-between"><span>Estimated Tokens</span><span className="font-mono text-white/60">8%</span></div>
                <div className="flex justify-between text-cyan-200"><span>Weekly PDF</span><span>Automated</span></div>
            </div>
        </div>
    </div>
);

const EvidenceQAVisual = () => (
    <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-3 sm:gap-4">
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/35 p-3.5">
            <div className="flex items-center justify-between text-[0.6rem] text-amber-200/80">
                <span>Troubleshoot_Flow.pptx</span>
                <span className="rounded bg-amber-400/20 px-1.5 py-0.5 text-[0.55rem] text-amber-300">Page 14</span>
            </div>
            <div className="my-2 rounded-xl border border-dashed border-amber-300/30 bg-amber-400/5 p-2 text-center">
                <div className="text-[0.6rem] font-semibold text-amber-200">VLM Visual Extraction</div>
                <div className="mt-1 space-y-1 text-[0.52rem] text-white/70">
                    <div>[Flowchart Box] Step 3: Check VDDIO</div>
                    <div className="text-amber-300/90">Rule: Voltage &lt; 1.6V triggers E-04</div>
                </div>
            </div>
            <div className="flex items-center justify-between text-[0.55rem] text-white/50">
                <span>Native Text + Page Image</span>
                <span className="text-emerald-400 font-semibold">Matched</span>
            </div>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border border-amber-400/20 bg-amber-950/20 p-3.5">
            <div>
                <div className="flex items-center justify-between">
                    <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-amber-300">Evidenced Claim</span>
                    <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[0.55rem] font-medium text-emerald-300">Confidence 98%</span>
                </div>
                <div className="mt-2 rounded-xl border border-white/10 bg-black/30 p-2 text-[0.6rem] text-white/90 leading-relaxed">
                    "When VDDIO drops below 1.6V during calibration, register 0x0A triggers fault code E-04."
                </div>
            </div>
            <div className="pt-2 border-t border-amber-400/15 flex items-center justify-between text-[0.55rem]">
                <span className="text-amber-200/70">Source: Slide 14, Sec 2</span>
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-white/80">Chroma Indexed</span>
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
};

export const ProjectThumbnailVisual = ({ visualType }: { visualType: VisualType }) => {
    const config = configs[visualType];

    return (
        <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${config.shell} p-5 text-white sm:p-7`}>
            <div className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl ${config.glow}`} />
            <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-xs">{config.eyebrow}</span>
                    <span className={`rounded-full px-2.5 py-1 text-[0.58rem] font-semibold sm:text-xs ${config.accent}`}>{config.signal}</span>
                </div>
                <div className="min-h-0 flex-1">{visuals[visualType]}</div>
            </div>
        </div>
    );
};
