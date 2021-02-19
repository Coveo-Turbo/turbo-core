import { Initialization } from "coveo-search-ui";

export function requiresFields(...fields: string[]) {
    return constructor => {
        Initialization.registerComponentFields(constructor.ID, fields);
        return constructor;
    }
}