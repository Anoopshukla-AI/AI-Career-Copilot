# 🎯 AI Career Copilot — Autonomous Job Search & Resume Tailoring Engine

[![n8n](https://img.shields.io/badge/n8n-Workflow_Automation-EA4B71?style=flat-square&logo=n8n&logoColor=white)](https://n8n.io)
[![Claude API](https://img.shields.io/badge/Anthropic-Claude_3.5_Sonnet-D97706?style=flat-square&logo=anthropic&logoColor=white)](https://anthropic.com)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

Searching for jobs, tailoring resumes, and tracking application status manually takes hours every week. **AI Career Copilot** is an automated pipeline powered by **n8n** and **Anthropic Claude 3.5 Sonnet** that ingests job postings, performs ATS keyword gap analysis, generates tailored resumes & cover letters, and logs applications directly into a centralized PostgreSQL tracker database.

## 🏗️ Architecture

```mermaid
graph TD
    JobScraper[Job Board Feed / RSS / Webhook] -->|Ingest Raw Posting| n8n[n8n Workflow Engine]
    n8n -->|Parse & Clean Text| Parser[Python FastAPI Microservice]
    Parser -->|Extract Requirements| Claude[Claude 3.5 Sonnet API]
    Claude -->|ATS Gap Analysis & Tailoring| Tailor[Resume & Cover Letter Generator]
    Tailor -->|Store PDF & Markdown| Vault[(Application Storage / Database)]
    n8n -->|Notify Match Score >= 85%| Slack[Slack / Telegram Alerts]
```

## ✨ Key Features

- 🔍 **Automated Job Ingestion:** Monitor LinkedIn, Indeed, and RSS feeds via n8n triggers.
- ⚡ **ATS Keyword Matching:** Claude 3.5 Sonnet extracts required hard & soft skills and compares them against your master profile.
- 📄 **Dynamic Resume Customization:** Generates targeted Markdown & PDF resumes emphasizing job-relevant experiences.
- ✉️ **Custom Cover Letter Drafting:** Writes personalized cover letters aligned with company mission and role requirements.
- 📊 **Central Application Tracking:** Stores match scores, application dates, company names, and follow-up reminders in PostgreSQL / Notion.
- 🔔 **Real-Time Notification:** Sends instant alerts via Slack or Telegram when high-match opportunities (85%+) are found.

## 🛠️ Tech Stack

- **Workflow Orchestration:** n8n (JSON workflow export provided)
- **AI Models:** Anthropic Claude 3.5 Sonnet, OpenAI GPT-4o
- **Backend Service:** Python, FastAPI, Pydantic
- **Database:** PostgreSQL / SQLite
- **Document Formatting:** WeasyPrint / Pandoc (Markdown to PDF conversion)

## 🚀 Quickstart & Setup

### 1. Clone & Setup Environment
```bash
git clone https://github.com/Anoopshukla-AI/AI-Career-Copilot.git
cd AI-Career-Copilot
python -m venv .venv

# Windows: .venv\Scripts\activate
# Linux/Mac: source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Configure Credentials
Create a `.env` file from the template:
```bash
ANTHROPIC_API_KEY=sk-ant-api03-...
OPENAI_API_KEY=sk-...
DATABASE_URL=postgresql://user:password@localhost:5432/career_copilot
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

### 3. Import n8n Workflow
1. Open your **n8n instance** (Self-hosted or Cloud).
2. Click **Workflows** -> **Import from File**.
3. Select `n8n/job_search_copilot_workflow.json`.
4. Configure your Anthropic API credential node.

## 📊 Sample Job Analysis & Match Report

```json
{
  "job_title": "Senior AI Automation Engineer",
  "company": "Enterprise AI Corp",
  "match_score": 92,
  "top_matched_skills": ["LangGraph", "n8n", "MCP Protocol", "FastAPI", "Python"],
  "missing_keywords": ["Kubernetes", "GraphQL"],
  "recommended_action": "Apply Immediately — High Fit",
  "tailored_summary": "Experienced AI Automation Engineer with 9 years IT experience specializing in Multi-Agent systems..."
}
```

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
