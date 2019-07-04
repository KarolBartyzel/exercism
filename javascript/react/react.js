export class InputCell {
    constructor(value) {
        this.value = value;
        this.setValue = this.setValue.bind(this);
    }

    setValue(value) {
        this.value = value;
        if (this.callback) {
            this.callback.notify();
        }
    }
}

export class ComputeCell {
    constructor(inputs, calc) {
        this.inputs = inputs;
        this.calc = calc;

        this.addCallback = this.addCallback.bind(this);
    }

    notify() {

    }

    addCallback(callback) {
        for (let input of this.inputs) {
            input.callback = this.notify;
        }
        this.callback = callback;
    }

    get value() {
        return this.calc(this.inputs);
    }
}

export class CallbackCell {
    constructor(callback) {
        this.callback = callback;
    }

    notify() {

    }
}
