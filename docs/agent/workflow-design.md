# Workflow Design: Think Before You Build

Before writing a single command or deploying an agent, you need a clear blueprint. A vague design produces a vague agent. A clear design now makes every day that follows ten times faster.

### The DO vs. DECIDE Framework
Break down your manual task into 5-8 steps. For every step, assign one of two labels:

* **[DO]**: Routine action, no real decision needed. E.g., "open the document," "save the file." These are full delegation candidates.
* **[DECIDE]**: Requires your judgment before the next step. E.g., "choose which points to highlight." These become human checkpoints where the agent stops and asks for your approval.

### Define the Boundaries
Vague outputs produce vague agents. Define your boundaries strictly:
* **Trigger**: What starts the task? (e.g., "When a Stripe webhook arrives" or "Every Monday at 9am").
* **Output**: What does "done" look like? (e.g., "A 3-bullet summary saved as a note in Obsidian").
