import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, AlertCircle, Eye, ExternalLink, GitBranch, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './GithubActivity.css';

export default function GithubActivity() {
  const username = 'dinalperaketiya';

  // Metrics matching your GitHub contribution breakdown
  const metrics = [
    { label: 'Commits', percentage: 94, color: '#2563eb', icon: GitCommit, count: '94%' },
    { label: 'Pull Requests', percentage: 5, color: '#0284c7', icon: GitPullRequest, count: '5%' },
    { label: 'Issues', percentage: 1, color: '#eab308', icon: AlertCircle, count: '1%' },
    { label: 'Code Review', percentage: 0, color: '#8b5cf6', icon: Eye, count: 'Active' },
  ];

  return (
    <motion.div
      className="github-activity-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="github-activity-header">
        <div className="github-title-group">
          <div className="github-icon-badge">
            <GithubIcon size={22} />
          </div>
          <div>
            <h3 className="github-activity-title">GitHub Contribution Activity</h3>
            <p className="github-activity-subtitle">
              Contributed to <strong>10 Repositories</strong> and open-source projects
            </p>
          </div>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="github-profile-btn"
        >
          <span>@{username}</span>
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="github-grid">
        {/* Left: Contribution Breakdown & Radar Chart */}
        <div className="github-card glass-card contribution-metrics-card">
          <h4 className="card-subtitle">Contribution Breakdown</h4>
          <div className="metrics-list">
            {metrics.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="metric-row">
                  <div className="metric-header">
                    <div className="metric-name">
                      <Icon size={16} style={{ color: item.color }} />
                      <span>{item.label}</span>
                    </div>
                    <span className="metric-pct">{item.count}</span>
                  </div>
                  <div className="metric-bar-bg">
                    <motion.div
                      className="metric-bar-fill"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max(item.percentage, item.percentage > 0 ? 6 : 2)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="contribution-radar-wrapper">
            <svg viewBox="0 0 240 200" className="radar-svg">
              {/* Cross Axes */}
              <line x1="120" y1="25" x2="120" y2="175" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="25" y1="100" x2="215" y2="100" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Radar Shape for 94% Commits (Left), 5% PRs (Bottom), 1% Issues (Right), Code Review (Top) */}
              <polygon
                points="120,35 125,100 120,105 18,100"
                fill="rgba(37, 99, 235, 0.15)"
                stroke="#2563eb"
                strokeWidth="2.5"
              />

              {/* Axis Labels */}
              <text x="120" y="16" textAnchor="middle" className="radar-label">Code review</text>
              <text x="120" y="193" textAnchor="middle" className="radar-label">Pull requests (5%)</text>
              <text x="2" y="104" textAnchor="start" className="radar-label">94% Commits</text>
              <text x="238" y="104" textAnchor="end" className="radar-label">1% Issues</text>

              {/* Points */}
              <circle cx="18" cy="100" r="4.5" fill="#2563eb" />
              <circle cx="120" cy="105" r="3.5" fill="#0284c7" />
              <circle cx="125" cy="100" r="3.5" fill="#eab308" />
              <circle cx="120" cy="35" r="3.5" fill="#8b5cf6" />
            </svg>
          </div>
        </div>

        {/* Right: Live GitHub Heatmap Graph */}
        <div className="github-card glass-card calendar-card">
          <div className="calendar-header">
            <h4 className="card-subtitle">Commit & Contribution Heatmap</h4>
            <span className="live-badge">
              <span className="live-dot" /> Live GitHub Sync
            </span>
          </div>

          <div className="heatmap-container">
            <img
              src={`https://ghchart.rshah.org/2563eb/${username}`}
              alt={`${username}'s GitHub Contribution Calendar`}
              className="github-heatmap-img"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-compact&bg_color=ffffff&color=2563eb&line=2563eb&point=1e40af&hide_border=true`;
              }}
            />
          </div>

          <div className="github-footer-info">
            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="info-pill interactive-pill"
              title="View all 10 repositories on GitHub"
            >
              <GitBranch size={14} />
              <span>10 Public Repositories</span>
              <ExternalLink size={12} className="pill-ext-icon" />
            </a>
            <a
              href="#projects"
              className="info-pill interactive-pill"
              title="View featured portfolio projects"
            >
              <ShieldCheck size={14} />
              <span>Open Source & Personal Projects</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
