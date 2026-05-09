# Identity Injection: Shaping the Sub-Agent

A blank AI model is a generalist. To create a highly specialized Sub-agent, you do not write complex code. You use the main agent to perform **Identity Injection**.

### The Four Pillars of Identity

Every sub-agent in the ZeroClaw framework requires a dedicated workspace directory containing four specific Markdown files:

1. **`IDENTITY.md`**: The outer shell. Defines the role, the emoji avatar, and the primary focus (e.g., "A Data-driven Content Analyst").
2. **`SOUL.md`**: The most critical file. This contains the Core Beliefs and Anti-Patterns. This is where you explicitly forbid the agent from using filler words like "Anyways" or "I hope this helps".
3. **`USER.md`**: Context inheritance. Tells the sub-agent who you are, what business model you operate (e.g., "Super Individual operations"), and your specific preferences.
4. **`STYLE.md`**: The formatting rules. Do you want Pyramid Principle structures? Bullet points only? A strict 300-word limit? It goes here.

### The Creation Protocol
You never write these manually. You instruct your main Orchestrator Agent via Telegram:
> "Use your `write_file` tool to create `SOUL.md` for Luna. Her core value is extreme brevity and filtering out low-ROI noise."
