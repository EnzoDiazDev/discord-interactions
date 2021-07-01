import ComponentType from "../interactions/ComponentType";
import SelectOption from "./SelectOption";

export default interface SelectMenu {
    type:ComponentType.SELECT_MENU;

    /** A developer-defined identifier for the button, max 100 characters */
    custom_id:string;

    /** The choices in the select, max 25 */
    options:SelectOption[];

    /** Custom placeholder text if nothing is selected, max 100 characters */
    placeholder?:string;

    /** The minimum number of items that must be chosen; default 1, min 0, max 25 */
    min_values?:number;

    /** The maximum number of items that can be chosen; default 1, max 25 */
    max_values?:number;
}
