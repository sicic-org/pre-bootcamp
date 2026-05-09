# ZeroClaw Architecture: Infrastructure as Text

The second biggest question: **"There are so many No-Code AI platforms out there with visual drag-and-drop nodes. Why are we using ZeroClaw?"**

### The "Why": Transparency and Portability

Visual platforms (like Zapier, Coze, or Dify) are great for beginners, but they create a "Black Box." If something breaks, you are stuck waiting for their customer support. Furthermore, you cannot easily copy-paste a visual graph to share with others.

**ZeroClaw** is built on the philosophy of "Infrastructure as Text."
1. **Plain Markdown**: In ZeroClaw, your Agent's personality and logic are defined entirely in plain text files (`SOUL.md`, `SKILL.md`).
2. **LLM Native**: Large Language Models *understand* text perfectly. This means you can use your main Agent to write, rewrite, and fix the code for your sub-agents just by chatting. 
3. **No Lock-in**: Your entire business logic is just a folder of text files. You can back it up to a USB drive or GitHub in seconds.

### The Core Engine
ZeroClaw sits on your VPS and listens. It connects your Telegram inputs to the LLM (via OpenRouter), reads your `.md` files to understand its identity, and uses tools (MCP) to interact with the world.

*Tutorial details: How the `config.toml` acts as the master switchboard.*
