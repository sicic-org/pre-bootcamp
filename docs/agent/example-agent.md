# Sub-Agent Blueprint: Luna (Intelligence)

To truly understand the power of the Orchestrator/Sub-agent model, we will build **Luna**—your Strategic Intelligence Synthesizer.

### The Problem Luna Solves
Reading newsletters and Googling industry trends takes hours. Luna automates this. You give her a keyword via Telegram; she searches the live web, aligns the findings with your business goals, and saves a formatted report directly into your VPS filesystem.

### The Architecture
* **Trigger**: A Telegram message from you (e.g., "Research Local LLMs").
* **Identity**: `workspace/luna/SOUL.md` (Strict, analytical, zero fluff).
* **Tools (MCP)**: 
    * `web_search_tool` (To gather live data).
    * `file_write` (To save the report to `/archive/`).

### Why this is a Breakthrough
Instead of a chat history that disappears into the void, Luna creates **Digital Assets**. Because she writes Markdown files directly to your server, you can later use MkDocs to instantly publish these findings to your public GitHub Pages. 

This is the complete pipeline: **Telegram Input $\rightarrow$ ZeroClaw Processing $\rightarrow$ Local File Storage $\rightarrow$ Public Wiki.**
