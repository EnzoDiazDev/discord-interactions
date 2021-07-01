import InteractionType from "./InteractionType";

export default interface Interaction {
    /** ID of the interaction */
    id:string;

    /** ID of the application this interaction is for */
    application_id:string;

    /** The type of interaction */
    type: InteractionType;

    /** The command data payload
     * @todo Implementar tipo para data
     * @see https://discord.com/developers/docs/interactions/slash-commands#interaction-object-application-command-interaction-data
    */
    data?:object;

    /** The guild it was sent from */
    guild_id?:string;

    /** The channel it was sent from */
    channel_id?:string;

    /** Guild member data for the invoking user, including permissions
     * @todo Implementar tipo para member
     * @see https://discord.com/developers/docs/resources/guild#guild-member-object
    */
    member?: object;

    /** User object for the invoking user, if invoked in a DM
     * @todo Implementar tipo para user
     * @see https://discord.com/developers/docs/resources/user#user-object
     */
    user?:object;

    /** A continuation token for responding to the interaction */
    token:string;

    /** Read-only property, always `1` */
    version:1;
}
