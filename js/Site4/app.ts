// applications
import { initializeValidateEvent } from "Shared/ts/applications/form";
import { initializeNavById } from "Shared/ts/applications/navigation";
import { initializeToolTip } from "Shared/ts/applications/template";
import { navigateToPageSectionOnLoad } from "ts/applications/navigation";

// components
import StatusScreen from "Shared/ts/components/status-screen";
import Accordion from "Shared/ts/components/accordion";

// utils
import ValidateEvent from "Shared/ts/utils/validate-event";
import { IValidateCommonErrorResponse } from "Shared/ts/interfaces/validate/validate-common";
import { ValidateControlTarget } from "Shared/ts/utils/validate";

initializeToolTip();
initializeNavById("nav");

const testPasswordValidation = (
    password: HTMLInputElement,
    confirmPassword: HTMLInputElement
): boolean => confirmPassword.value === password.value;

const getValidationMessageByControl = (
    control: ValidateControlTarget
): string | undefined => {
    const scope = control.closest(".message") ?? control;
    if (!scope) return;

    const invalidText = scope.querySelector(".message__invalid");
    if (!invalidText) return;

    return invalidText.textContent?.trim();
};

const validatePasswords = (validateEvent: ValidateEvent) => {
    const password = validateEvent.inputs.find(
        (input) => input.id === "Password"
    );
    if (!password) return;

    const confirmPassword = validateEvent.inputs.find(
        (input) => input.id === "ConfirmPassword"
    );
    if (!confirmPassword) return;

    confirmPassword.addEventListener("keyup", (event) => {
        testPasswordValidation(password, confirmPassword)
            ? validateEvent.setControlToValid(confirmPassword)
            : validateEvent.setControlToInvalid(confirmPassword);
    });

    window.onFormPostValidation = (
        event: Event
    ): IValidateCommonErrorResponse[] => {
        const errors: IValidateCommonErrorResponse[] = [];

        if (!password.validity.valid) {
            errors.push({
                element: $(password),
                message:
                    getValidationMessageByControl(password) ??
                    "Password is required"
            });
        }

        if (
            !confirmPassword.validity.valid ||
            !testPasswordValidation(password, confirmPassword)
        ) {
            errors.push({
                element: $(confirmPassword),
                message:
                    getValidationMessageByControl(confirmPassword) ??
                    "Passwords do not match"
            });
        }

        return errors;
    };
};

const initializeValidateEventWithStatusScreen = () => {
    const form = document.querySelector("form");
    if (!form) return;

    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
    if (!submit) return;

    const validateEvent = initializeValidateEvent(form, submit, "required");

    validateEvent.inputs
        .filter((input) => input.id === "Email")
        .forEach((input) =>
            input.addEventListener("focusout", (event) => {
                input.value = input.value.toLowerCase();
            })
        );

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

    validatePasswords(validateEvent);
};

initializeValidateEventWithStatusScreen();

const initializeAccordions = (): void => {
    const accordions = Array.from(document.querySelectorAll(".accordion"));

    accordions.forEach((accordion) => new Accordion(accordion));
};

initializeAccordions();

navigateToPageSectionOnLoad();
