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

### This Is Where the Workshop Comes In

Installing ZeroClaw and getting `config.toml` right is the step where solo learners most often stall.

In the live Intro Track you don't do this part alone: guided setup, daily async check-ins, and weekly office hours mean a blocker costs you minutes, not a lost weekend.
