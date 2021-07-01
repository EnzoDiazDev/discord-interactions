import ComponentType from "./ComponentType";

export default interface CommandInteractionData {
    /** The ID of the invoked command */
    id:string;

    /** The name of the invoked command */
    name:string;

    /** Converted users + roles + channels */
    resolved?:object;

    /** The params + values from the user */
    options?:object;

    /** For components, the `custom_id` of the component */
    custom_id:string;

    /** For components, the type of the component */
    component_type: ComponentType;
}
