enum stateUnit {
    //% block="on"
	On = true,
	//% block="off"
	Off = false,
}

/**
 * Flash an LED
 */
//% color="#2c3e50" weight=10
namespace led2 {
    /**
     * Flash an LED
     * @param led_pin LED pin
     * @param state on or off
     */
    //% blockId=led2_flash="led2 flash led_pin %led_pin|state %state"
    export function flash(led_pin: AnalogPin, state: stateUnit): void {
		pins.digitalWritePin(led_pin, state);
		control.waitMicros(1000);
		pins.digitalWritePin(led_pin, !state);
    }
}
