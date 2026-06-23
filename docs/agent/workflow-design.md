# Workflow Design: Decide What the Agent Should Actually Do

Week 2 is where the workshop shifts from setup to creation.

Before you build an agent, you need a clear answer to one question: **what job should this agent do for you?**

That sounds obvious, but it is where many beginners get stuck. They try to build "an AI agent" instead of designing one specific workflow that is useful in real life.

### Start with One Useful Job

In the Intro Track, we do not begin with a giant automation system.

We begin with one practical workflow, such as:

* research a topic and return a short summary
* gather signals about a market or industry
* save findings into a Markdown note you can reuse later

That is enough to learn the structure of an agent without being overwhelmed.

### The DO vs. DECIDE Framework

A good beginner workflow separates what the agent can do automatically from what still needs your judgment.

Break the task into 5 to 8 small steps. For each step, assign one of these labels:

* **[DO]**: routine work with a clear instruction, such as searching, collecting, formatting, or saving
* **[DECIDE]**: a point where your judgment matters, such as choosing which direction to pursue or which findings are most important

This prevents a common mistake: expecting the agent to make decisions you have not defined clearly enough.

### A Simple Example

Imagine you want a research agent to help you explore "local LLM startups in Europe."

The workflow might look like this:

* **[DO]** search for relevant companies, articles, and signals
* **[DO]** collect the strongest findings
* **[DO]** group them into a short structure
* **[DECIDE]** choose which angle matters most to you
* **[DO]** save the final summary into a file

That is already a real agent workflow. It is small, clear, and useful.

### Define the Boundaries

Vague instructions create vague results. Good agents have boundaries.

Before building, define:

* **Trigger**: what starts the workflow
* **Input**: what the user provides
* **Tools**: what the agent is allowed to use
* **Output**: what a finished result looks like
* **Stop condition**: when the agent should stop and hand the result back

For the Intro Track research agent, that might be:

* **Trigger**: a Telegram message from you
* **Input**: a research topic or keyword
* **Tools**: web search and file writing
* **Output**: a clean Markdown summary
* **Stop condition**: the file is saved and the response is returned

### Why This Matters

The point of workflow design is not bureaucracy. It is leverage.

If you can describe the work clearly, you can teach the agent to do it clearly. If the workflow is fuzzy, the agent will be fuzzy too.

That is why Week 2 starts with design before personality files or tools.

### This Is Where the Workshop Comes In

Turning a vague idea into a bounded, buildable agent workflow is harder than it looks from the outside.

In the live Intro Track you don't do this part alone: guided setup, daily async check-ins, and weekly office hours mean a blocker costs you minutes, not a lost weekend.
