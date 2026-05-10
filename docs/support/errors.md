# Troubleshooting Dictionary

This page is a quick-reference companion to the workshop.

Use it when you hit a common error and want a fast first interpretation before digging deeper.

If you want help turning one of these problems into a strong AI debugging question, start with the [AI Debugging Guide](ai-debugging.md).

### 1. Terminal / VPS Errors

**`Connection Refused`**

What it usually means:
your computer reached the IP address, but the server is not accepting the connection.

First things to check:

* the VPS is actually running
* the IP address is correct
* SSH is available on the server

**`Permission denied (publickey)`**

What it usually means:
the server is reachable, but your SSH authentication was not accepted.

First things to check:

* the correct SSH key is installed
* the key is attached to the server or provider account as required
* you are connecting as the expected user

### 2. Git Errors

**`src refspec main does not match any`**

What it usually means:
you are trying to push before creating the first commit on that branch.

First things to check:

* you ran `git add .`
* you created an initial commit
* your branch name is the one you expect

**`Permission denied (publickey)` to GitHub**

What it usually means:
GitHub cannot verify the SSH key from the machine that is trying to push.

First things to check:

* the VPS SSH key is added to GitHub
* you are pushing to the correct repository URL
* your SSH setup is using the expected key

### 3. ZeroClaw / Telegram Errors

**Bot not responding**

What it usually means:
the Telegram side may be created correctly, but the service connection or configuration is incomplete.

First things to check:

* `zeroclaw service status`
* the bot token in `config.toml`
* whether the service was restarted after configuration changes
* whether logs show an authentication or startup problem

**Agent cannot write files**

What it usually means:
the workflow may be correct, but the destination path or permissions are wrong.

First things to check:

* the target folder exists
* the configured path matches the actual folder
* the service has permission to write there
* the skill instructions are pointing to the right location

### A Good Next Step

When an error appears, do not only ask, "How do I fix this?"

Also ask:

* what does this error suggest about the system layer that is failing?
* is this a connection problem, a permission problem, a config problem, or a workflow problem?
* what should I verify after the fix?

That habit will make the workshop much easier to absorb.
