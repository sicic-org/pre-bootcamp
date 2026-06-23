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

### This Is Where the Workshop Comes In

Getting a first real agent working end to end is where momentum is won or lost.

In the live Intro Track you don't do this part alone: guided setup, daily async check-ins, and weekly office hours mean a blocker costs you minutes, not a lost weekend.
