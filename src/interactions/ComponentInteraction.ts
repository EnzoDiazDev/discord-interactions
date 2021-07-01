import Interaction from "./Interaction";
import InteractionType from "./InteractionType";

export default interface ComponentInteraction extends Interaction {
    type: InteractionType.MESSAGE_COMPONENT;

    /** The message they were attached to
     * @todo Implementar tipo para message
     * @see https://discord.com/developers/docs/resources/channel#message-object
    */
    message:object;
}
