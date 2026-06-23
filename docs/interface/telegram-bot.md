# Telegram: Your Everyday Control Room

After your VPS is ready and ZeroClaw is installed, Week 1 becomes real the moment you connect your phone to your agent.

That is why we use **Telegram**.

### Why Telegram Works So Well

The best interface is often the one you already use.

Telegram gives beginners an immediate win:

* you do not need to build a dashboard first
* you do not need to learn a new interface
* you can talk to your system from anywhere

This matters more than it sounds. A powerful agent that is inconvenient to use quickly becomes dead software.

### What It Feels Like

Instead of opening a laptop and managing tabs, you can send a message from your phone and trigger a workflow directly.

That makes the system feel personal and alive. It also helps non-technical participants understand the value fast, because the result is visible: **your own bot is responding to you, backed by your own server.**

### Why Telegram Instead of WhatsApp?

For most participants, there might be a comparison between Telegram and WhatsApp.

We use Telegram because it is much easier to turn into a practical agent interface during a workshop.

Telegram is a better fit for Intro Track because:

1. **Bot friendliness**: Telegram is designed to work smoothly with bots and developer workflows.
2. **Lower friction**: it is straightforward to create a bot, get a token, and connect it to your system.
3. **Faster learning**: participants can see results quickly instead of fighting platform constraints.

WhatsApp is familiar, but for this workshop it is a less practical starting point. It usually brings more platform restrictions, more setup friction, and less flexibility for quick experimentation.

### Why Not Build a Custom App First?

That would also be the wrong priority for Intro Track.

We are not trying to impress people with frontend complexity. We are trying to prove that your own agent system can exist, respond, and do useful work with very little friction.

That is why Telegram still gives us:

1. **Speed**: you can get a working interface quickly.
2. **Familiarity**: the interaction model is already natural.
3. **Leverage**: you benefit from a mature messaging platform without building one yourself.

### How the Handshake Works

The setup is simple:

1. You create a bot using **BotFather**.
2. You place the API token into ZeroClaw's `config.toml`.
3. You start the service and test the connection.

At that point, your phone and your VPS are linked.

For many people, this is the first moment the workshop "clicks." It stops feeling like theory and starts feeling like ownership.

### This Is Where the Workshop Comes In

Wiring Telegram to your agent — BotFather, tokens, the allowlist — is fiddly to get right on your own.

In the live Intro Track you don't do this part alone: guided setup, daily async check-ins, and weekly office hours mean a blocker costs you minutes, not a lost weekend.
