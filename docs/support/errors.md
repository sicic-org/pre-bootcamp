# The Error Dictionary

### 1. Terminal / VPS Errors
* **`Connection Refused`**: Check if your VPS is running and your IP address is correct.
* **`Permission Denied (publickey)`**: Your local SSH key isn't added to Linode. 

### 2. Git Errors
* **`src refspec main does not match any`**: You forgot to `git add .` and `git commit` before pushing.
* **`Permission denied (publickey)` to GitHub**: You need to add your VPS's SSH key to your GitHub account settings.

### 3. ZeroClaw / Telegram Errors
* **Bot not responding**: Check `zeroclaw service status`. Ensure your Token in `config.toml` is correct.
* **Luna can't write files**: Ensure the folder `/root/archive` exists and the path in `SKILL.md` is correct.
