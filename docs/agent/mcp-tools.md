# MCP: Giving Your Agent Eyes and Hands

Model Context Protocol (MCP) is what separates a "Chatbot" from an "Agent". It gives ZeroClaw the ability to interact with the real world.

### The Tools of a Super Individual
* **`web_search_tool`**: The "Eyes". Allows Luna to scan the live web instead of relying on outdated training data.
* **Filesystem Tool**: The "Hands". Allows your agent to read your `USER.md` for context and write intelligence reports into your `archive`.

### Configuring the Tools
In the Intro Track, we enable tools via the `[[mcp.servers]]` section in your `config.toml`. 
> **Crucial Tip:** Always verify your tools are `Active` by running `zeroclaw agent` and checking the startup logs.
