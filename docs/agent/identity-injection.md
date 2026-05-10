# Identity Injection: Shaping the Agent with SOUL and SKILL

A raw model is a general-purpose machine. It can answer questions, but it does not yet feel like *your* agent.

Week 2 is where you shape that raw capability into a more specific role.

In the Intro Track, we keep this simple by focusing on two core files:

* **`SOUL.md`**: who the agent is, what it values, and how it should think
* **`SKILL.md`**: what the agent should do, step by step, when asked to perform its job

That is enough for a first real agent.

### What `SOUL.md` Does

`SOUL.md` gives the agent a stable identity.

This is where you define things like:

* the role of the agent
* the standards it should follow
* the tone it should use
* the anti-patterns it should avoid

For a research agent, that might include:

* be concise
* prioritize signal over noise
* avoid invented claims
* state uncertainty when the evidence is weak

`SOUL.md` is not about sounding fancy. It is about making the agent more dependable.

### What `SKILL.md` Does

`SKILL.md` is the operating procedure.

This is where you describe:

* what kind of task the agent handles
* which tools it may use
* the order of operations
* what the final output should look like

If `SOUL.md` shapes the agent's character, `SKILL.md` shapes its workflow.

### Why This Matters

Many beginners assume building an agent means writing complex code first.

In this workshop, the first lesson is different: a useful agent begins with clear instructions.

That is why Week 2 focuses on text files that are readable, editable, and easy to reason about.

### A Good Beginner Pattern

For your first research agent, a simple pattern is enough:

* `SOUL.md` defines the agent as disciplined, concise, and evidence-seeking
* `SKILL.md` tells it to search, filter, summarize, and save the result

That pairing is powerful because it answers both questions:

* how should the agent behave?
* what should the agent actually do?

### Looking Ahead

In more advanced systems, agent structure can expand into more files, more tools, and more orchestration layers.

But for the Intro Track, `SOUL.md` and `SKILL.md` are the right level of complexity. They are enough to help you understand the logic of agent design without drowning in framework details.

### Ask AI If You're Stuck

AI can help you turn vague instincts about the agent into clearer `SOUL` and `SKILL` instructions.

Try prompts like these:

```text
I want to build a research agent on this topic:
[describe topic or use case]

Please draft a beginner-friendly SOUL.md with:
1. the role
2. 4 core values
3. 4 anti-patterns
4. a concise tone
```

```text
I need help writing SKILL.md for my research agent.

The task is:
[describe task]

Please turn it into a step-by-step skill with:
1. trigger
2. tool usage
3. workflow steps
4. output format
5. stop condition
```

For a reusable prompt template, see the [AI Debugging Guide](../support/ai-debugging.md).
