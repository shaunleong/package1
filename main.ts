enum stateUnit {
    //% block="On"
    On = 1,
    //% block="Off"
    Off = 0
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
    export function flash(ledPin: AnalogPin, state: stateUnit): void {
		//pins.setPull(trig, PinPullMode.PullNone);
		pins.analogWritePin(led_pin, state);
		control.waitMicros(1000);
		pins.analogWritePin(led_pin, !state);
    }
}