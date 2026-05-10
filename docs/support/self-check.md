# Self-Check: Intro Track or Builder Track?

This page helps you do two things:

* check whether you are understanding the Intro Track concepts clearly
* notice when your questions are starting to move into Builder Track territory

That distinction matters. The Intro Track is intentionally simple. It teaches the core architecture first. The Builder Track goes further into orchestration, automation systems, richer toolchains, and more advanced deployment practice.

### Intro Track Self-Check

These questions match the level of the workshop foundation.

If you can reason through them, you are understanding the core logic.

### Scenario 1: The Invisible Wall

Your research agent says it saved a file, but when you check the target folder, the file is missing.

**Question:** Is this more likely a workflow problem, a path problem, or a permission problem? How would you test those possibilities in order?

### Scenario 2: The Fuzzy Agent

Your agent returns long, vague summaries instead of concise, evidence-based notes.

**Question:** Is the more likely problem in `SOUL.md`, `SKILL.md`, or tool configuration? What signs would help you distinguish between them?

### Scenario 3: The Silent Tool

Your agent replies, but it does not appear to use web search even though that is part of the task.

**Question:** What would you check first: tool activation, skill instructions, or the user request? Why?

### Scenario 4: The Publishing Gap

Your agent saves useful Markdown notes locally, but they do not appear on the site you expected to publish.

**Question:** Which layer would you inspect first: the file output itself, the MkDocs structure, or the deployment pipeline? Explain your reasoning.

### What These Questions Are Testing

The Intro Track is not testing whether you can memorize commands.

It is testing whether you can reason about layers:

* interface
* agent behavior
* tools
* files
* publishing

That is the real skill underneath the workshop.

### When You Are Starting to Outgrow Intro Track

If your questions increasingly sound like these, you may be moving into Builder Track territory:

* "How should I coordinate multiple agents with distinct roles?"
* "Should I use n8n, OpenCode, or a custom toolchain for this automation?"
* "How do I design a more reliable deployment and monitoring setup?"
* "How do I build a more complex workflow triggered by external systems?"

Those are good questions. They are just not the center of Intro Track.

### Builder Track Signals

You are probably ready for the Builder Track if you are already thinking seriously about:

* multi-agent orchestration
* larger MCP tool ecosystems
* automation tools such as n8n or OpenCode
* operational discipline and deployment hygiene
* more sophisticated production use cases

If that sounds like you, Intro Track is still useful as a foundation, but Builder Track is likely where your real growth curve continues.

We will point advanced participants to the Builder Track on the Super Individuals website as that path is expanded.

### Use AI for the Self-Check Too

If you want, you can use AI to pressure-test your own reasoning instead of only asking for direct answers.

Try prompts like these:

```text
Here is my answer to this scenario:
[paste scenario and your answer]

Please review my reasoning, tell me what is strong, what is weak, and what I may be missing.
```

```text
I am not sure whether this question belongs to Intro Track or Builder Track:
[paste question]

Please explain which track it fits better and why.
```
