declare module '@manage-invite/manage-invite.js' {

    import { GuildAlert, GuildMember, GuildMemberEvent, GuildPlugin, GuildSettings, GuildStorage, InviteType, PluginName, Snowflake, UserLeaderboardEntry } from '@manage-invite/manage-invite-db-client';

    export default class ManageInviteAPIClient {

        public token: string;
        public baseURL: string;

        constructor(token: string, baseURL?: string);

        request (endpoint: string, method: 'GET' | 'POST' | 'DELETE', body?: any): any;
    
        fetchGuildSettings (guildID: Snowflake): GuildSettings;
    
        updateGuildSettings (guildID: Snowflake, settings: GuildSettings): GuildSettings;
    
        fetchGuildPlugins (guildID: Snowflake): GuildPlugin[];
    
        updateGuildPlugin (guildID: Snowflake, pluginName: PluginName, pluginData: GuildPlugin): GuildPlugin[];
    
        fetchGuildBlacklistedUsers (guildID: Snowflake): Snowflake[];
    
        addGuildBlacklistedUser (guildID: Snowflake, userID: Snowflake): Snowflake[];
    
        removeGuildBlacklistedUser (guildID: Snowflake, userID: Snowflake): Snowflake[];
    
        fetchGuildAlerts (guildID: Snowflake): GuildAlert[];
    
        createGuildAlert (guildID: Snowflake, inviteCount: number): GuildAlert[];
    
        deleteGuildAlert (guildID: Snowflake, inviteCount: number): GuildAlert[];
    
        fetchGuildStorages (guildID: Snowflake): GuildStorage[];
    
        createNewGuildStorage (guildID: Snowflake): GuildStorage[];
    
        fetchGuildLeaderboard (guildID: Snowflake): UserLeaderboardEntry[];
    
        fetchGuildMember (guildID: Snowflake, userID: Snowflake): GuildMember;
    
        addGuildMemberInvites (guildID: Snowflake, userID: Snowflake, inviteType: InviteType, inviteCount: number): GuildMember;
    
        fetchGuildMemberEvents (guildID: Snowflake, userID: Snowflake): GuildMemberEvent[];

    }

}
