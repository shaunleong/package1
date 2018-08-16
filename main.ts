enum PingUnit {
    //% block="on"
	On,
	//% block="off"
	Off,
}

/**
 * Sonar and ping utilities
 */
//% color="#2c3e50" weight=10
namespace led {
    /**
     * Toggle an LED
     * @param led_pin LED pin
     * @param state on or off
     */
    //% blockId=led_toggle="led toggle led_pin %led_pin|state %state"
    export function toggle(led_pin: AnalogPin, state: boolean): void {
		pins.digitalWritePin(led_pin, state);
		control.waitMicros(1000);
		pins.digitalWritePin(led_pin, !state);
    }
}
