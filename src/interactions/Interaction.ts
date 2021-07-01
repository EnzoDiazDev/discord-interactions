import InteractionType from "./InteractionType";
import InteractionData from "./CommandInteractionData";
import GuildMember from "../discord_entities/GuildMember";
import User from "../discord_entities/User";

export default interface Interaction {
    /** ID of the interaction */
    id:string;

    /** ID of the application this interaction is for */
    application_id:string;

    /** The type of interaction */
    type: InteractionType;

    /** The command data payload */
    data?:InteractionData;

    /** The guild it was sent from */
    guild_id?:string;

    /** The channel it was sent from */
    channel_id?:string;

    /** Guild member data for the invoking user, including permissions */
    member?: GuildMember;

    /** User object for the invoking user, if invoked in a DM */
    user?:User;

    /** A continuation token for responding to the interaction */
    token:string;

    /** Read-only property, always `1` */
    version:1;
}
