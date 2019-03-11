export default class FSM {
    constructor({ actions, transitions }) {
        //this.activeState = initialState;
        this.actions = actions;
        this.transitions = transitions;
    }
    getState() {
        return this.activeState;
    }

    setState(newState) {
        this.activeState = newState;
    }
    getNewTransistion() {
        return (
            this.transitions[this.activeState] &&
            this.transitions[this.activeState].to
        );
    }
    performTransition = to => (...params) => {
        if (
            !this.activeState ||
            (this.transitions[this.activeState] &&
                this.transitions[this.activeState].to === to)
        ) {
            this.activeState = to;
            return this.actions[to](...params);
        } else {
            console.error('wrong transition');
        }
    };
}
