# 📝 The "Super Individual" Self-Check Challenge

Test your **Schema** before you start Day 1. If you can answer these without "guessing," you have the taste of a digital architect.

### Scenario 1: The Invisible Wall
You've "hired" Lunar via Telegram. She says she has saved the files, but when you check `ls ~/Lunar_Archive/`, the folder is empty. 
* **Question**: Is this more likely a failure in Lunar's **SOUL** (logic) or a failure in your **config.toml** (permission)? How would you prove it?

### Scenario 2: The Duplicate Webhook
You notice Stripe is sending 16 webhooks for a single payment. 
* **Question**: Why does using a dedicated "Stripe Trigger" node in n8n cause this duplication, and why is switching to a generic "Webhook Node" the more "sovereign" solution?

### Scenario 3: The Identity Inheritance
When you create Nova, you want her to know you hate the word "Anyway."
* **Question**: Instead of writing it into Nova's `SOUL.md`, how can you use **USER.md Inheritance** to ensure all future sub-agents automatically know this preference?
