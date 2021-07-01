import PremiumType from "./PremiumType";
import UserFlag from "./UserFlag";

export default interface User {
    /** The user's id */
    id:string;

    /** the user's username, not unique across the platform */
    username:string;

    /** The user's 4-digit discord-tag */
    discriminator:string;

    /** The user's avatar hash
     * @see https://discord.com/developers/docs/reference#image-formatting
     */
    avatar?:string;

    /** Whether the user belongs to an OAuth2 application */
    bot?:boolean;

    /** Whether the user is an Official Discord System user (part of the urgent message system) */
    system?:boolean;

    /** Whether the user has two factor enabled on their account */
    mfa_enabled?:boolean;

    /** The user's chosen language option */
    locale?:string;

    /** Whether the email on this account has been verified */
    verified?:boolean;

    /** The user's email */
    email?:string;

    /** The flags on a user's account
     * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    flags?:UserFlag;

    /** The type of Nitro subscription on a user's account */
    premium_type:PremiumType;

    /** the public flags on a user's account
     * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    public_flags?:UserFlag;
}
