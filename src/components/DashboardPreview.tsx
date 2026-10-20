import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Settings2,
  LayoutDashboard,
  MessageSquare,
  ListChecks,
  Users,
} from "lucide-react";
export const ENGINES = [
  "ChatGPT",
  "Perplexity",
  "Gemini",
  "Claude",
  "Grok",
  "DeepSeek",
  "Meta AI",
];
const NAV = [
  { Icon: LayoutDashboard, label: "Overview" },
  { Icon: MessageSquare, label: "AI answers" },
  { Icon: Users, label: "Competitors" },
  { Icon: ListChecks, label: "Action plan" },
];
export function DashboardPreview() {
  const [tab, setTab] = useState("Overview");
  const [engine, setEngine] = useState("All assistants");
  const [period, setPeriod] = useState("Last 30 days");
  const all = engine === "All assistants";
  const long = period === "Last 30 days";
  const score = all ? (long ? "68.4" : "64.2") : long ? "72.8" : "69.1";
  const rows =
    tab === "Action plan"
      ? [
          "Align your business description across key profiles",
          "Add a comparison page for your category",
          "Review the sources cited in competitor answers",
        ]
      : tab === "Competitors"
        ? ["Acme Studio", "Northstar Creative", "Forma Agency"]
        : [
            "Which brand strategy agencies work with growing businesses?",
            "What should I look for in a creative agency?",
            "Compare independent branding studios in Dubai.",
          ];
  return (
    <div className="product-preview" id="product-preview">
      <aside className="preview-sidebar">
        <span className="preview-wordmark">
          prezlo<span>.</span>
        </span>
        <div className="workspace-icon">
          <b>a</b>
          <span>
            Acme Studio<small>Brand workspace</small>
          </span>
          <ChevronDown size={12} />
        </div>
        <div className="sidebar-caption">WORKSPACE</div>
        {NAV.map(({ Icon, label }) => (
          <button
            key={label}
            onClick={() => setTab(label)}
            className={tab === label ? "sidebar-item active" : "sidebar-item"}
            aria-pressed={tab === label}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
        <div className="sidebar-bottom">
          <span className="example-pill">Illustrative workspace</span>
          <span>
            <Settings2 size={14} /> Workspace settings
          </span>
          <span className="user-avatar">
            <b>J</b>
            <span>Jamie at Acme Studio</span>
          </span>
        </div>
      </aside>
      <div className="preview-main">
        <div className="preview-breadcrumb">
          Workspace <span>/</span> Acme Studio <span>/</span> {tab}
          <span className="preview-demo-label">Demo data</span>
        </div>
        <div className="preview-heading">
          <div>
            <h3>
              {tab === "Overview"
                ? "Your brand, through AI’s eyes."
                : tab === "AI answers"
                  ? "The answers behind the numbers."
                  : tab === "Competitors"
                    ? "Who else gets recommended?"
                    : "Your next move, made clearer."}
            </h3>
            <p>
              {tab === "Action plan"
                ? "Practical next steps, ready for your review."
                : "A little more visible. A lot more informed."}
            </p>
          </div>
          <select
            aria-label="Preview date range"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option>Last 30 days</option>
            <option>Last 7 days</option>
          </select>
        </div>
        {tab === "Overview" ? (
          <>
            <div className="preview-metrics">
              {[
                [
                  score + "%",
                  "AI visibility",
                  "+12.6%",
                  "of tracked answers mention you",
                ],
                [
                  long ? "128" : "32",
                  "Brand mentions",
                  "+24",
                  "across your tracked prompts",
                ],
                [
                  long ? "42" : "11",
                  "Cited sources",
                  "+8",
                  "sources shaping your story",
                ],
              ].map(([value, label, change, caption]) => (
                <div className="preview-metric" key={label}>
                  <span>
                    {label}
                    <span className="metric-info">ⓘ</span>
                  </span>
                  <strong>
                    {value}
                    <small>
                      {change} <ArrowUpRight size={11} />
                    </small>
                  </strong>
                  <p>{caption}</p>
                </div>
              ))}
            </div>
            <div className="preview-chart">
              <div className="chart-title">
                <h4>Visibility over time</h4>
                <span>
                  <i /> Your brand <i className="competitor-dot" /> Industry
                  average
                </span>
              </div>
              <div className="chart-body">
                <div className="chart-axis">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                </div>
                <div className="chart-plot">
                  <svg
                    viewBox="0 0 800 160"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Illustrative visibility trend increasing over time"
                  >
                    <defs>
                      <linearGradient
                        id="chart-fill"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#ee733d"
                          stopOpacity=".19"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ee733d"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 132 C30 138 40 114 65 116 S100 126 120 106 S155 118 180 97 S210 108 240 91 S275 103 300 81 S335 90 360 68 S395 82 420 58 S460 71 480 48 S520 60 545 38 S580 49 605 30 S640 38 665 21 S700 26 725 15 S770 22 800 4 L800 160 L0 160Z"
                      fill="url(#chart-fill)"
                    />
                    <path
                      d="M0 132 C30 138 40 114 65 116 S100 126 120 106 S155 118 180 97 S210 108 240 91 S275 103 300 81 S335 90 360 68 S395 82 420 58 S460 71 480 48 S520 60 545 38 S580 49 605 30 S640 38 665 21 S700 26 725 15 S770 22 800 4"
                      fill="none"
                      stroke="#eb7548"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M0 134 Q65 118 120 130 T240 113 T360 115 T480 98 T605 106 T725 90 T800 88"
                      fill="none"
                      stroke="#c6c4be"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />
                  </svg>
                  <div className="chart-dates">
                    {(long
                      ? ["Sep 21", "Sep 28", "Oct 05", "Oct 12", "Oct 20"]
                      : ["Oct 14", "Oct 15", "Oct 17", "Oct 19", "Oct 20"]
                    ).map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="demo-actions">
            {rows.map((s, i) => (
              <div key={s}>
                <span>0{i + 1}</span>
                <strong>{s}</strong>
                <span className="task-status">
                  {tab === "Competitors"
                    ? [68, 52, 41][i] + "% visibility"
                    : tab === "Action plan"
                      ? "For review"
                      : i === 1
                        ? "Not mentioned"
                        : "Mentioned"}
                </span>
              </div>
            ))}
          </div>
        )}
        <div className="preview-table-heading">
          <h4>
            Recent AI answers <span>Sample prompts</span>
          </h4>
          <select
            aria-label="Filter preview by assistant"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          >
            <option>All assistants</option>
            {ENGINES.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>
        <div className="answer-row">
          <span className="answer-query">
            “Best branding agencies for a growing business”
          </span>
          <span className="answer-engine">{all ? "ChatGPT" : engine}</span>
          <span className="mentioned">
            <Check size={11} /> Mentioned
          </span>
          <ArrowUpRight size={13} />
        </div>
      </div>
    </div>
  );
}
