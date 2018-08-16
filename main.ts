enum stateUnit {
    //% block="On"
    "On",
    //% block="Off"
    "Off"
}

/**
 * Sonar and ping utilities
 */
//% color="#2c3e50" weight=10
namespace sonar {
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig tigger pin
     * @param echo echo pin
     */
    //% blockId=sonar_ping block="ping trig %trig|echo %echo"
    export function ping(trig: DigitalPin, echo: stateUnit): void {
		
    }
}
