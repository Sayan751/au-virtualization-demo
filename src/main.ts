import { Aurelia, PLATFORM } from "aurelia-framework";
import { VirtualRepeat } from "aurelia-ui-virtualization";
import "whatwg-fetch";
import "../styles/app.scss";
import { App } from "./app";

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin(PLATFORM.moduleName("aurelia-ui-virtualization"));

    VirtualRepeat.prototype.attached = (function (oldFn) {
        return function () {
            const element = this.element;
            if (element.nodeType === 8) {
                this.element = element.parentElement;
            }
            oldFn.apply(this);
        };
    })(VirtualRepeat.prototype.attached);


    await aurelia.start()
        .then(() => aurelia.setRoot(App, document.querySelector("#aurelia-app")));

}