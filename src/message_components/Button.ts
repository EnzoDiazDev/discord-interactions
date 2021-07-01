import ButtonStyle from "./ButtonStyle";
import ComponentType from "./ComponentType";
import Emoji from "./Emoji";

export default interface Button {
    /** Button type */
    type: ComponentType.BUTTON;

    /**
     * Button Style
     * @see https://discord.com/developers/docs/interactions/message-components#buttons-button-styles
     */
    style: ButtonStyle;

    /** Text that appears on the button, max 80 characters */
    label?:string;

    /**
     * Partial Emoji (`name`, `id`, and `animated`)
     * @see https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    emoji?:Emoji;

    /** A developer-defined identifier for the button, max 100 characters */
    custom_id?:string;

    /** A url for link-style buttons */
    url?:string;

    /** Whether the button is disabled */
    disabled?:boolean;
}
