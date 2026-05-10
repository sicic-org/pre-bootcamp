# Research Agent Example: Luna

Week 2 becomes concrete when you build your first actual agent.

In the Intro Track, we use a research agent example called **Luna**. The point is not the name. The point is to show how a useful agent can take shape from a clear workflow, a strong `SOUL`, and a practical `SKILL`.

### The Job Luna Does

Luna is a simple research agent.

You send her a topic through Telegram, such as:

* "Research local LLM companies in Europe"
* "Find recent trends in AI safety education"
* "Gather signals about small business automation tools"

She then:

* searches for relevant information
* filters weak or repetitive findings
* organizes the strongest points
* saves the result into your filesystem as a reusable note

### Why This Is a Good First Agent

Research is a strong beginner use case because it is:

* easy to understand
* useful immediately
* powered by simple tools
* naturally connected to documentation and publishing later

It also shows the core difference between a chatbot and an agent: the result does not vanish into chat history. It becomes a file you can keep.

### The Basic Structure

Luna only needs a few moving parts:

* **Trigger**: a Telegram message from you
* **`SOUL.md`**: disciplined, analytical, concise, evidence-oriented
* **`SKILL.md`**: search, evaluate, summarize, save
* **Tools**: web search and file writing
* **Output**: a clean Markdown report

This is a small system, but it is already real.

### What Success Looks Like

By the end of this part of the workshop, participants should be able to imagine and begin shaping their own first agent.

That does not mean building a giant multi-agent machine immediately.

It means understanding the core pattern:

* choose a clear job
* define the agent's role
* describe the workflow
* give it the minimum tools it needs
* save the output somewhere durable

### Why This Connects to Week 3

Luna is not only a research assistant. She is also the bridge into documentation.

Once the agent saves findings into Markdown files, those files can later feed your GitHub repository, your MkDocs site, and your published knowledge base.

This is the larger arc of the Intro Track:

**Telegram request -> agent workflow -> saved file -> publishable asset**

### Ask AI If You're Stuck

If you are unsure whether your first agent idea is realistic, ask AI to simplify it into a strong Intro Track version.

Try prompts like these:

```text
I want to build this kind of agent:
[describe idea]

Please turn it into a good first agent for the Intro Track.
Include:
1. the agent's job
2. the SOUL.md direction
3. the SKILL.md steps
4. the tools needed
5. what the output should look like
```

```text
Here is my draft SOUL.md and SKILL.md for a research agent:
[paste draft]

Please review them for clarity, scope, and beginner-friendliness. Tell me what is too broad, too vague, or missing.
```

For a reusable prompt template, see the [AI Debugging Guide](../support/ai-debugging.md).
