export default interface GuildMember {
    /** The user this guild member represents */
    user?:object;

    /** This users guild nickname */
    nick?:string;

    /** Array of role object ids */
    roles:string[]

    /** When the user joined the guild ─ ISO8601 timestamp */
    joined_at:string;

    /** When the user started boosting the guild ─ ISO8601 timestamp */
    premium_since?:string;

    /** Whether the user is deafened in voice channels */
    deaf:boolean;

    /** Whether the user is muted in voice channels */
    mute:boolean;

    /** Whether the user has not yet passed the guild's Membership Screening requirements */
    pending?:boolean;

    /** Total permissions of the member in the channel, including overwrites, returned when in the interaction object */
    permissions?:string;
}
