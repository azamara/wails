// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Create as $Create} from "/wails/runtime.js";

export class embedded4 {
    /**
     * Creates a new embedded4 instance.
     * @param {Partial<embedded4>} [$$source = {}] - The source object to create the embedded4.
     */
    constructor($$source = {}) {
        if (!("NamingThingsIsHard" in $$source)) {
            /**
             * NamingThingsIsHard is a law of programming
             * @member
             * @type {`${boolean}`}
             */
            this["NamingThingsIsHard"] = "false";
        }
        if (!("Friends" in $$source)) {
            /**
             * Friends should not be shadowed in Person as embedded4 is not embedded
             * from encoding/json's point of view;
             * however, it should be shadowed in Embedded1
             * @member
             * @type {boolean}
             */
            this["Friends"] = false;
        }

        Object.assign(this, $$source);
    }

    /**
     * Creates a new embedded4 instance from a string or object.
     * @param {any} [$$source = {}]
     * @returns {embedded4}
     */
    static createFrom($$source = {}) {
        let $$parsedSource = typeof $$source === 'string' ? JSON.parse($$source) : $$source;
        return new embedded4(/** @type {Partial<embedded4>} */($$parsedSource));
    }
}