# MCP Tools: Giving Your Agent Useful Abilities

By Week 2, your agent has a role and a workflow. The next question is simple: **what is it actually allowed to do?**

That is where tools come in.

### What MCP Means in Practice

You do not need to memorize the protocol name first.

For the Intro Track, the important idea is this: **tools give your agent abilities beyond plain conversation.**

Without tools, the agent can only generate text.

With tools, it can do things like:

* search the web
* read files
* write files

That is what makes it feel like an agent instead of just a chatbot.

### The Two Abilities That Matter Most in Intro Track

For the research agent example, two abilities are enough:

* **web search**: this lets the agent gather live information instead of relying only on its built-in knowledge
* **file writing**: this lets the agent save the result into your own system

That combination is powerful because it supports the full path from request to reusable output.

### Why We Keep the Tool Set Small

Beginners often assume that more tools means a better agent.

Usually it means more confusion.

The Intro Track uses a deliberately small tool set so participants can understand:

* what each tool does
* when the agent should use it
* how the final result moves into the filesystem

This keeps the workshop focused on real understanding instead of tool collecting.

### Looking Ahead

In the Builder Track, tools become much broader:

* more MCP integrations
* custom toolchains
* automation systems like n8n
* more complex orchestration patterns

But first, the Intro Track teaches the core pattern clearly.

### Configuring the Tools

In practice, Intro Track tools are enabled through the `[[mcp.servers]]` section of your `config.toml`.

The exact syntax matters less than the mental model:

* enable the tool
* confirm it is active
* make sure the agent knows when to use it

> **Tip:** Always verify your tools are active by running `zeroclaw agent` and checking the startup logs.

### This Is Where the Workshop Comes In

Knowing which tools your agent actually needs — and wiring them in safely — is easy to overcomplicate on your own.

In the live Intro Track you don't do this part alone: guided setup, daily async check-ins, and weekly office hours mean a blocker costs you minutes, not a lost weekend.
