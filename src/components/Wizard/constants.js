import WizardComponents from './components';
export const transitions = {
    STEP1: {
        to: 'STEP2'
    },
    STEP2: {
        to: 'STEP3'
    },
    STEP3: {
        to: 'STEP4'
    },
    STEP4: {
        to: 'STEP1'
    }
};

export const actions = {
    STEP1: (dispatch, payload) => {
        dispatch({ type: 'LOAD_STEP_1', payload });
        return WizardComponents.Step1;
    },
    STEP2: (dispatch, payload) => {
        dispatch({ type: 'LOAD_STEP_2', payload });
        return WizardComponents.Step2;
    },
    STEP3: (dispatch, payload) => {
        dispatch({ type: 'LOAD_STEP_3', payload });
        return WizardComponents.Step3;
    },
    STEP4: (dispatch, payload) => {
        dispatch({ type: 'LOAD_STEP_4', payload });
        return WizardComponents.Step4;
    }
};
