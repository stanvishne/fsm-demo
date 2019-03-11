import FSM from '../index';

const transitions = {
    STEP1: {
        to: 'STEP2'
    },
    STEP2: {
        to: 'STEP3'
    },
    STEP3: {
        to: 'STEP1'
    }
};

export const actions = {
    STEP1: () => {
        return 'step1';
    },
    STEP2: () => {
        return 'step2';
    },
    STEP3: () => {
        return 'step2';
    }
};

test('create fsm check', () => {
    const fsm = new FSM({ transitions, actions });
    const initalStep = fsm.performTransition('STEP1')();
    expect(initalStep).toBe('step1');
});

test('create fsm and getState check', () => {
    const fsm = new FSM({ transitions, actions });
    fsm.performTransition('STEP1')();
    expect(fsm.getState()).toBe('STEP1');
});

test('create fsm and check perform tranistion', () => {
    const fsm = new FSM({ transitions, actions });
    fsm.performTransition('STEP1')();
    expect(fsm.getState()).toBe('STEP1');
    fsm.performTransition('STEP2')();
    expect(fsm.getState()).toBe('STEP2');
    fsm.performTransition('STEP1')();
    expect(fsm.getState()).toBe('STEP2');
});
