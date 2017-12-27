github-mentions-to-slack
========================

Provide proxy to resolve GitHub mentions into Slack mentions.

![](https://user-images.githubusercontent.com/3993388/34387761-54c074c4-eb73-11e7-8c72-29def8c413dd.png)

You can easily try this proxy on [Glitch](https://glitch.com/~github-mentions-to-slack)!

<a href="https://glitch.com/edit/#!/remix/github-mentions-to-slack">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" height="33" alt="remix button" aria-label="remix">
</a>

## How to use

1. [Setup GitHub integration](https://slack.com/apps/A0F7YS2SX-github) on your Slack team.
2. [Remix this app on Glitch.](https://glitch.com/edit/#!/remix/github-mentions-to-slack) To use this proxy continuously, you should be remix with logged-in by your Glitch account. ([not anonymous user!](https://glitch.com/faq#restrictions))
3. **Make remixed Glitch project as private.** *Putted Slack user ids  in `.env` would leak in public project!!*
4. Open `.env` and put the pair of Slack user id (or usergroup id) and GitHub account name. See [`.env` file](#env-file).
5. Open GitHub repository ➡ `Webhooks` ➡ `Edit` button that URL has started with `https://hooks.slack.com/`.
6. [Replace Payload URL host](#replace-payload-url-on-github) from `hooks.slack.com` to `[remixed-project-name].glitch.me` and click `Update webhook` button.
7. Let's try to send mentions at GitHub!

## Configuration

### `.env` file

```shell
# Please put the pair of Slack user id (or usergroup id) and GitHub account name.
# [Slack user id]=[GitHub account name]

U0123ABCD=yhatt
U4567EFGH=github-account
S8901IJKL=organization/team
```

### Replace payload URL on GitHub

If your payload URL is like this...

```
https://hooks.slack.com/services/T01234567/...
```

you could replace host like this.

```
https://github-mentions-to-slack.glitch.me/services/T01234567/...
```

Actually, we think that you are using remixed project. Let's try this:

```
https://[remixed-project-name].glitch.me/services/T01234567/...
```

## Author

Yuki Hattori ([@yhatt](https://github.com/yhatt/))

## License

This repository is under the [MIT License](LICENSE.md).