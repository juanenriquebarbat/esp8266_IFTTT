// Add your code here
//% color=#0fbc11 icon="\uf1eb"
namespace IFTTT {
    enum Cmd {
        None,
        ConnectWifi,
    }

    let iftttkey_def = ""
    let iftttevent_def = ""


    //////////----------------------------------- IFTTT--------------------------------/////////
    /**
     * set ifttt
     */
    //% subcategory=IFTTT weight=9
    //% blockId=setIFTTT block="set IFTTT key:%key event:%event"
    export function setIFTTT(key: string, event: string): void {
        iftttkey_def = key
        iftttevent_def = event
    }

    /**
     * post ifttt
     */
    //% subcategory=IFTTT weight=8
    //% blockId=postIFTTT block="post IFTTT with|value1:%value value2:%value2 value3:%value3"
    export function postIFTTT_TEST(value1: string, value2: string, value3: string): void {
        let sendST1 = "AT+HTTPCLIENT=3,1,\"https://maker.ifttt.com/trigger/alertaDoYourBit/with/key/i6eXTfs6U4hv0qW6bok_jj9UNQZHbM65bwCA9xwHAyh"
        let sendST = sendST1
        sendAT(sendST, 1000)
        //control.waitForEvent(EspEventSource, EspEventValue.PostIFTTT)
    }
}
