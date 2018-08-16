enum stateUnit {
    //% block="On"
    "On",
    //% block="Off"
    "Off"
}

/**
 * Light utilities
 */
//% color="#2c3e50" weight=10
namespace light {
    /**
     * Flash an LED
     * @param ledPin LED pin
     * @param state state
     */
    //% blockId=light_flash block="ping ledPin %ledPin|state %state"
    export function flash(ledPin: DigitalPin, state: stateUnit): void {
		
    }
}
