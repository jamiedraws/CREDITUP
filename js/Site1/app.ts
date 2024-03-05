// applications
import { initializeValidateEvent } from "Shared/ts/applications/form";
import {
    importScrollableHeightByElement,
    importScrollableHeightByElementIntoStyleElement,
    initializeNavById
} from "Shared/ts/applications/navigation";
import { initializeToolTip } from "Shared/ts/applications/template";
import { navigateToPageSectionOnLoad } from "ts/applications/navigation";

// components
import StatusScreen from "Shared/ts/components/status-screen";
import Accordion from "Shared/ts/components/accordion";
import PageSectionNav from "ts/components/page-section-nav";

initializeToolTip();
const nav = initializeNavById("nav");
importScrollableHeightByElement(nav?.root);

const initializeValidateEventWithStatusScreen = () => {
    const form = document.querySelector("form");
    if (!form) return;

    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
    if (!submit) return;

    const validateEvent = initializeValidateEvent(form, submit, "required");

    const statusScreen = new StatusScreen();

    validateEvent.submit?.addEventListener("click", (event) => {
        validateEvent.validateAll();
        validateEvent.setFocusOnInvalidControl();

        if (!validateEvent.isValidForm()) {
            event.preventDefault();
            return;
        }

        statusScreen.busy("Please wait...");
    });
};

initializeValidateEventWithStatusScreen();

const initializeAccordions = (): void => {
    const accordions = Array.from(document.querySelectorAll(".accordion"));

    accordions.forEach((accordion) => new Accordion(accordion));
};

const initializePageSectionNav = (): void => {
    const element = document.querySelector<HTMLElement>(".page-section-nav");
    if (!element) return;

    new PageSectionNav(element);
};

initializePageSectionNav();

initializeAccordions();

navigateToPageSectionOnLoad();
