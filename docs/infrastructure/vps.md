# VPS: Your Private AI Home

Week 1 starts here. Before you build agents, tools, or automations, you need one thing: a place that belongs to you.

A **VPS (Virtual Private Server)** is simply a remote computer that runs for you 24/7. In this workshop, it becomes the home for your agent.

### What You Get in Week 1

By the end of this part, you will have:

* your own server running in the cloud
* a safe way to log into it
* the foundation for your ZeroClaw agent
* a setup that stays online even when your laptop is shut

That is the real shift. You are no longer only using AI in someone else's chat box. You are starting to run your own system.

### Why Not Just Use Browser AI?

Browser AI is useful, but it has limits:

* it lives inside someone else's interface
* it does not naturally become your long-term operating system
* it stops the moment you stop interacting with it
* it is poor at turning repeated work into a durable workflow

A VPS changes that. Your agent can stay available, keep context in files, and do useful work in a place you control.

### Why This Matters for Non-Technical People

Most beginners do not fail because they are incapable. They fail because the internet throws ten tools, twenty tutorials, and a hundred security warnings at them all at once.

This workshop removes that chaos. We guide you through the minimum setup that actually matters, in the right order, with enough explanation to make the system feel understandable instead of magical.

You do not need to become a sysadmin. You need a clean starting point that is safe, practical, and repeatable.

### Security Is Part of the Product

For us, "deployment" does not mean spinning up a server and hoping for the best.

In Week 1, we also introduce the basic security habits that make your setup usable in real life:

* secure server access
* safer authentication practices
* reducing obvious exposure
* building with ownership and caution from the start

This matters because the point is not just to get an agent running. The point is to get an agent running on infrastructure you can trust.

### Why We Use a VPS

We use a VPS because it gives you the three things that matter most in the Intro Track:

* **persistence**: your system keeps running
* **control**: your files and logs live in your own environment
* **growth**: this same foundation can later support more advanced agents and automation

### The Technical Setup

In the workshop, this section becomes a guided walkthrough: connecting to the server, performing basic updates, and preparing the machine for your agent.

You will see commands such as `ssh root@<your-ip>` and `apt update`, but the important part is not memorizing commands. The important part is understanding what each step is doing and why it belongs in a safe setup.

### Ask AI If You're Stuck

If you hit a blocker in Week 1, do not guess blindly. Ask AI with the exact command and the exact error.

Try prompts like these:

```text
I am in Week 1 of the Super Individuals Intro Track and I cannot connect to my VPS with SSH.

Command:
ssh root@<my-ip>

Error:
[paste exact error]

Please tell me the most likely cause, the next 3 checks in order, and how to verify the fix worked.
```

```text
I can access my VPS, but I do not understand which security steps matter most for a beginner setup.

Please explain the purpose of SSH keys, updates, and basic hardening in plain language, and tell me what to do first.
```

For a reusable prompt template, see the [AI Debugging Guide](../support/ai-debugging.md).
