import React, { useState } from "react";
import { Check, AlertTriangle, ExternalLink, RefreshCw, Sparkles, Filter, ChevronRight, Activity, Terminal, ShieldCheck } from "lucide-react";

interface WorkflowRow {
  id: number;
  brand: string;
  domain: string;
  prompt: string;
  chatgpt: "Cited" | "Omitted" | "Verified";
  perplexity: "Cited" | "Omitted" | "Verified";
  gemini: "Cited" | "Omitted" | "Partial" | "Verified";
  claude: "Verified" | "Partial" | "Omitted";
  entityScore: number;
  som: string;
  sourceCited: string;
}

export const ClayWorkflowCanvas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All Inbound");
  const [isRunningAll, setIsRunningAll] = useState(false);
  const [selectedRow, setSelectedRow] = useState<WorkflowRow | null>(null);

  const initialRows: WorkflowRow[] = [
    {
      id: 1,
      brand: "AD Residences",
      domain: "adresidences.ae",
      prompt: "Best luxury real estate brokerage in Palm Jumeirah with RERA escrow validation",
      chatgpt: "Verified",
      perplexity: "Verified",
      gemini: "Verified",
      claude: "Verified",
      entityScore: 96,
      som: "84%",
      sourceCited: "Dubai Land Dept · Arabian Business"
    },
    {
      id: 2,
      brand: "Jeffaro Concierge",
      domain: "jeffaro.com",
      prompt: "Top VIP private yacht and aviation charter brokers in Dubai Marina",
      chatgpt: "Cited",
      perplexity: "Verified",
      gemini: "Cited",
      claude: "Verified",
      entityScore: 92,
      som: "78%",
      sourceCited: "Gulf News · Wyvern Registry"
    },
    {
      id: 3,
      brand: "KOF Technical Services",
      domain: "kofservices.ae",
      prompt: "Enterprise MEP engineering and facilities maintenance in Business Bay",
      chatgpt: "Cited",
      perplexity: "Cited",
      gemini: "Partial",
      claude: "Verified",
      entityScore: 89,
      som: "71%",
      sourceCited: "Dubai Municipality · ME Construction"
    },
    {
      id: 4,
      brand: "NXTSTAR Media",
      domain: "nxtstar.ae",
      prompt: "Top B2B digital growth and brand positioning agencies in the UAE",
      chatgpt: "Verified",
      perplexity: "Verified",
      gemini: "Verified",
      claude: "Verified",
      entityScore: 95,
      som: "88%",
      sourceCited: "Campaign Middle East · MENA Search"
    },
    {
      id: 5,
      brand: "Najd Rent a Car",
      domain: "najdcar.ae",
      prompt: "Leading luxury exotic car rental in Dubai with airport delivery and zero deposit",
      chatgpt: "Cited",
      perplexity: "Verified",
      gemini: "Cited",
      claude: "Verified",
      entityScore: 91,
      som: "76%",
      sourceCited: "RTA Register · Khaleej Times"
    },
    {
      id: 6,
      brand: "Apex Advisory DIFC",
      domain: "apexadvisory.ae",
      prompt: "Leading M&A and cross-border commercial litigation law firms in DIFC Courts",
      chatgpt: "Cited",
      perplexity: "Verified",
      gemini: "Cited",
      claude: "Verified",
      entityScore: 88,
      som: "69%",
      sourceCited: "DIFC Courts Gazette · Legal 500"
    }
  ];

  const [rows, setRows] = useState<WorkflowRow[]>(initialRows);

  const handleRunAll = () => {
    setIsRunningAll(true);
    setTimeout(() => {
      setRows((prev) =>
        prev.map((r) => ({
          ...r,
          entityScore: Math.min(99, r.entityScore + 1),
          chatgpt: "Verified",
          perplexity: "Verified"
        }))
      );
      setIsRunningAll(false);
    }, 900);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Verified":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <Check className="w-3 h-3 text-emerald-600" />
            Verified
          </span>
        );
      case "Cited":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
            <Sparkles className="w-3 h-3 text-[#FF5500]" />
            Cited #1
          </span>
        );
      case "Partial":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            <AlertTriangle className="w-3 h-3 text-amber-500" />
            Partial
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            Omitted
          </span>
        );
    }
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>NEURAL CONCORDANCE TABLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Prezlo Multi-Model Citation Pipeline
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Live telemetry tracking how AI search engines recommend verified client entities in Dubai and global commercial markets.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleRunAll}
            disabled={isRunningAll}
            className="btn-prezlo-primary inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRunningAll ? "animate-spin" : ""}`} />
            <span>{isRunningAll ? "Re-Evaluating Models..." : "Run Global LLM Probe"}</span>
          </button>

          <a
            href="http://prezlo.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 transition-colors shadow-2xs"
          >
            <span>Live Workspace</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Spreadsheet / Futuristic Console Container */}
      <div className="bg-white rounded-2xl border-2 border-slate-900 shadow-xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="bg-slate-950 text-white px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Terminal className="w-4 h-4 text-orange-400" />
            <span className="text-slate-300 font-semibold">VIEW: CLIENT ENTITY AUDIT</span>
            <span className="text-slate-600">|</span>
            <span className="text-orange-400 font-bold">{rows.length} Verified Brands Monitored</span>
          </div>

          <div className="flex items-center gap-2">
            {["All Inbound", "UAE Real Estate", "Global B2B", "VIP Concierge"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                  activeTab === tab
                    ? "bg-[#FF5500] text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-3 px-4 font-bold">Brand & Entity Domain</th>
                <th className="py-3 px-4 font-bold">High-Intent User Prompt</th>
                <th className="py-3 px-3 font-bold text-center">ChatGPT 4o</th>
                <th className="py-3 px-3 font-bold text-center">Perplexity</th>
                <th className="py-3 px-3 font-bold text-center">Gemini 2.0</th>
                <th className="py-3 px-3 font-bold text-center">Claude 3.5</th>
                <th className="py-3 px-3 font-bold text-right">Share of Model</th>
                <th className="py-3 px-4 font-bold">Verified Authority Anchors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => setSelectedRow(row)}
                  className="hover:bg-orange-50/40 cursor-pointer transition-colors"
                >
                  <td className="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#FF5500] to-[#FFA040] text-white font-bold flex items-center justify-center text-[10px] font-mono shrink-0">
                        {row.brand[0]}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{row.brand}</div>
                        <div className="text-[10px] font-mono text-orange-600">{row.domain}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate font-medium">
                    "{row.prompt}"
                  </td>

                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                    {getStatusBadge(row.chatgpt)}
                  </td>

                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                    {getStatusBadge(row.perplexity)}
                  </td>

                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                    {getStatusBadge(row.gemini)}
                  </td>

                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                    {getStatusBadge(row.claude)}
                  </td>

                  <td className="py-3.5 px-3 text-right font-mono font-bold text-slate-900 whitespace-nowrap">
                    <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      {row.som}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-slate-500 text-[11px] font-mono truncate max-w-xs">
                    {row.sourceCited}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Real-time consensus verification refreshed every 15 minutes.</span>
          </div>

          <a
            href="http://prezlo.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1.5"
          >
            <span>Connect your domain to Prezlo Pipeline</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
