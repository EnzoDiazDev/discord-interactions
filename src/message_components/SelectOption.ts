import Emoji from "./Emoji";

export default interface SelectOption {
    /** The user-facing name of the option, max 25 characters */
    label:string;

    /** the dev-define value of the option, max 100 characters */
    value:string;

    /** An additional description of the option, max 50 characters */
    description:string;

    /**
     * Partial Emoji (`name`, `id`, and `animated`)
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    emoji?:Emoji;

    /** Will render this option as selected by default */
    default?:boolean;
}
