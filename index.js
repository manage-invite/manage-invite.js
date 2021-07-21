const fetch = require('node-fetch');

module.exports = class ManageInviteAPIClient {

    constructor (token, baseURL) {
        if (!token) throw new Error('API Token is required - get it at https://manage-invite.xyz');
        this.token = token;
        this.baseURL = baseURL || 'https://api.manage-invite.xyz';
    }

    request (endpoint, method, body) {
        return fetch(`${this.baseURL}${endpoint}`, {
            method,
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
                },
                body: body ? JSON.stringify(body) : undefined
            }).then((res) => res.json());
    }

    fetchGuildSettings (guildID) {
        return this.request(`/guilds/${guildID}/settings`, 'GET');
    }

    updateGuildSettings (guildID, settings) {
        return this.request(`/guilds/${guildID}/settings`, 'POST', settings);
    }

    fetchGuildPlugins (guildID) {
        return this.request(`/guilds/${guildID}/plugins`, 'GET');
    }

    updateGuildPlugin (guildID, pluginName, pluginData) {
        return this.request(`/guilds/${guildID}/plugins/${pluginName}`, 'POST', pluginData);
    }

    fetchGuildBlacklistedUsers (guildID) {
        return this.request(`/guilds/${guildID}/blacklisted`, 'GET');
    }

    addGuildBlacklistedUser (guildID, userID) {
        return this.request(`/guilds/${guildID}/blacklisted/${userID}`, 'POST');
    }

    removeGuildBlacklistedUser (guildID, userID) {
        return this.request(`/guilds/${guildID}/blacklisted/${userID}`, 'DELETE');
    }

    fetchGuildAlerts (guildID) {
        return this.request(`/guilds/${guildID}/alerts`, 'GET');
    }

    createGuildAlert (guildID, inviteCount) {
        return this.request(`/guilds/${guildID}/alerts/${inviteCount}`, 'POST');
    }

    deleteGuildAlert (guildID, inviteCount) {
        return this.request(`/guilds/${guildID}/alerts/${inviteCount}`, 'DELETE');
    }

    fetchGuildStorages (guildID) {
        return this.request(`/guilds/${guildID}/storages`, 'GET');
    }

    createNewGuildStorage (guildID) {
        return this.request(`/guilds/${guildID}/storages`, 'POST');
    }

    fetchGuildLeaderboard (guildID) {
        return this.request(`/guilds/${guildID}/leaderboard`, 'GET');
    }

    fetchGuildMember (guildID, userID) {
        return this.request(`/guilds/${guildID}/members/${userID}`, 'GET');
    }

    addGuildMemberInvites (guildID, userID, inviteType, inviteCount) {
        return this.request(`/guilds/${guildID}/members/${userID}/invites`, 'POST', {
            type: inviteType,
            number: inviteCount
        });
    }

    fetchGuildMemberEvents (guildID, userID) {
        return this.request(`/guilds/${guildID}/members/${userID}/events`, 'GET');
    }

}
