# ZeroClaw: The Software That Runs Your Agent

Once your server exists, you need the software layer that turns it into an actual agent system.

That is what **ZeroClaw** does.

### What ZeroClaw Does

In plain language, ZeroClaw is the bridge between:

* your messages
* your AI model
* your files
* your tools

It runs on your VPS and acts like the core engine of your setup. When you message your bot, ZeroClaw receives the request, routes it correctly, and allows the agent to work with files and tools instead of only replying like a normal chatbot.

### Why We Use It in the Intro Track

For beginners, the goal is not to collect platforms. The goal is to understand one clean architecture end to end.

We use ZeroClaw because it helps us keep the system:

* **simple enough to learn**
* **real enough to be useful**
* **text-based enough to inspect and change**
* **portable enough to grow with you**

That last point matters. Your setup should not feel like a rented black box.

### Why This Is Better Than "Just Another AI App"

Many AI tools give you a polished interface, but they hide the moving parts. That may feel easy at first, but it becomes limiting when you want to adapt the system to your own workflow.

ZeroClaw is different. It is closer to building your own operating layer for agent work.

In the Intro Track, that means you can start with a simple research workflow. Later, the same foundation can support more advanced tool use, more specialized agents, and more complex automations.

### Infrastructure as Text

One of the reasons ZeroClaw is powerful is that much of the behavior is defined in plain text files.

That means:

* your logic is readable
* your setup is portable
* your agent can evolve without hiding everything behind a drag-and-drop UI

For beginners, this is helpful because the system stays inspectable. For advanced builders, it becomes a strong base for more sophisticated orchestration later.

### The Core Engine

In the architecture image, ZeroClaw is the service sitting inside your VPS.

Its role is to:

* receive requests from Telegram
* connect to the model layer
* read the files that define agent behavior
* use tools when the workflow requires them
* save useful outputs into your filesystem

In the workshop, we install it together and explain just enough of the configuration to make the system feel manageable, not mysterious.

*Tutorial details: how `config.toml` acts as the control panel for your setup.*

### Ask AI If You're Stuck

ZeroClaw problems become much easier to solve when you show AI the exact config section or startup error instead of describing the issue vaguely.

Try prompts like these:

```text
I am following the Super Individuals Intro Track and ZeroClaw is installed, but it does not start correctly.

Here is the relevant part of config.toml:
[paste snippet]

Here is the error:
[paste error]

Please identify the most likely cause, give me the next 3 checks in order, and explain the reasoning in beginner-friendly language.
```

```text
I do not understand what this ZeroClaw configuration section is doing.

Here is the snippet:
[paste snippet]

Please explain each part in plain language and tell me what would break if it were wrong.
```

For a reusable prompt template, see the [AI Debugging Guide](../support/ai-debugging.md).
