## ManageInvite.js

ManageInvite.js is a Node.js library to interact with the [official ManageInvite API](https://github.com/manage-invite/manage-invite-api).

## Features

* Authentication
* 100% API coverage
* 100% TypeScript coverage

## Installation

```sh
npm install @manage-invite/manage-invite.js
```

## Example

```js
const ManageInvite = require('@manage-invite/manage-invite.js');
const client = new ManageInvite('token');

// Add 100000 regular invites to a specific member!
await client.addGuildMemberInvites('guild id', 'user id', 'regular', 100000);
```
