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
        signal: '+8.4% yield',
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
            <strong className="text-2xl font-semibold text-emerald-200 sm:text-4xl">+8.4%</strong>
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
