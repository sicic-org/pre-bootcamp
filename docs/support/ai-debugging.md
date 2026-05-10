# AI Debugging Guide

This wiki is not only here to explain the workshop. It is also here to help you get unstuck while you are building.

One of the best skills you can learn in the Intro Track is how to use AI well when something breaks.

### When to Ask AI for Help

Ask AI when:

* a command fails and you do not understand the error
* a config file looks correct but the system still does not work
* a bot, service, or deployment behaves differently from what you expected
* you want a step-by-step checklist instead of guessing

Do not ask only:

* "it doesn't work"
* "please fix this"
* "why is my setup broken"

Those are too vague. Good debugging questions give the model enough context to reason from.

### The Best Prompt Template

Copy this template and fill it in:

```text
I am following the Super Individuals Intro Track.

Goal:
I am trying to [describe the step].

What I expected:
[expected result]

What happened instead:
[actual result]

What I already tried:
[list what you already checked or changed]

Relevant command, config, or log:
[paste the exact command, error message, config snippet, or output]

Please help me:
1. identify the most likely cause
2. give me the next 3 checks in order
3. explain the reason in beginner-friendly language
4. tell me how to verify the fix worked
```

### What Good Debugging Context Looks Like

The more precise your context, the better the answer.

Useful things to include:

* the exact command you ran
* the exact error message
* the part of the file you edited
* what step of the workshop you are on
* what changed right before the problem started

Useful habits:

* copy the full error text instead of paraphrasing it
* paste only the relevant part of a config file, not the whole machine
* ask for the next checks in order, not twenty theories at once
* ask how to verify the fix, not only how to apply it

### Keep Yourself Safe

Do not paste secrets into public tools or shared chats.

Avoid sharing:

* API tokens
* private keys
* passwords
* full server IPs if you do not need them

If you accidentally expose a token or secret, rotate it.

### Example Questions for This Workshop

For VPS setup:

```text
I am in Week 1 setting up my VPS. I cannot log in with SSH.

Command:
ssh root@<my-ip>

Error:
[paste exact error]

Please tell me the most likely cause and the first 3 things to check.
```

For ZeroClaw setup:

```text
I installed ZeroClaw, but the service does not start.

Here is the relevant config.toml section and the startup error.

Please explain what is wrong in plain language and what I should test next.
```

For Telegram bot connection:

```text
My Telegram bot exists, but it does not respond when I send a message.

I already added the token to config.toml and restarted the service.

Here are the logs.

Please give me a step-by-step checklist from simplest to most likely.
```

### A Simple Rule

When debugging with AI, do not ask only for an answer. Ask for:

* the likely cause
* the next checks
* the reasoning
* the verification step

That is how you learn, not just patch.
