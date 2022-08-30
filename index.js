document.addEventListener('DOMContentLoaded', () => {


    class Element {
        constructor() {
            this.d = 0;
            this.intervalID = 0;
            this.speed = 50;
            this.spinner = this.createSpinner();
            this.spinner.style.background = `conic-gradient(blue ${this.d}deg, #999 ${this.d}deg)`;
            this.animateToggle = this.createToggle(this.startAnimation, this.stopAnimation);
            this.hideToggle = this.createToggle(this.hide, this.show);
            this.input = this.createInput();
            this.startVal = 0;

            // root.append(this.spinner, this.animateToggle, this.hideToggle, this.input);
            this.settingsList = this.createSettings();
        };

        createInput = () => {
            const inp = document.createElement('input');
            inp.type = 'number';
            inp.classList.add('input-number', 'control');
            inp.value = 0;
            inp.addEventListener('input', () => {
                let val = parseInt(inp.value);
                if (isNaN(val)) {
                    inp.value = 0;
                    this.setValue(0);
                    return;
                }
                inp.value = val;
                if (val > 100) {
                    inp.value = 100;
                    val = 100;
                }
                if (val < 0) {
                    inp.value = 0;
                    val = 0;
                }
                this.setValue(val);
            })
            return inp;
        }

        createSpinner = () => {
            const box = document.createElement('div');
            box.classList.add('box');

            const boxInner = document.createElement('div');
            boxInner.classList.add('box_inner');

            box.append(boxInner);
            return box;
        }

        resetAnimation = () => {
            this.d = this.startVal;
            this.spinner.style.background = `conic-gradient(blue ${this.d}deg, #999 ${this.d}deg)`;
        }

        stopAnimation = () => {
            clearInterval(this.intervalID);
        }

        setValue = (value) => {
            this.d = value * 3.6;
            this.startVal = this.d;
            this.spinner.style.background = `conic-gradient(blue ${this.d}deg, #999 ${this.d}deg)`;
        }

        animate = (spinner) => {
            this.spinner.style.background = `conic-gradient(blue ${this.d}deg, #999 ${this.d}deg)`;
            if (this.d > 361) {
                // this.resetAnimation();
                clearInterval(this.intervalID);
            }
            this.d += 3.6;
        }

        startAnimation = () => {
            this.resetAnimation();

            this.intervalID = setInterval(() => {
                this.animate(this.spinner);
            }, this.speed);
        }

        createToggle = (trueCallback, falseCallback) => {
            const toggle = document.createElement('div');
            toggle.classList.add('toggle', 'control');

            const oval = document.createElement('div');
            oval.classList.add('oval');

            const circle = document.createElement('div');
            circle.classList.add('circle');

            toggle.append(oval, circle);

            toggle.addEventListener('click', () => {
                toggle.classList.toggle('toggle_shifted');
                if (toggle.classList.contains('toggle_shifted')) trueCallback();
                else falseCallback();
            });

            return toggle;
        }

        hide = () => {
            this.spinner.style.display = 'none';
        }

        show = () => {
            this.spinner.style.display = 'inline-flex';
        }

        createSettings = () => {
            const cardSettingsList = document.createElement('ul');
            cardSettingsList.classList.add('card-settings');

            const firstLI = document.createElement('li');
            firstLI.classList.add('card-setting');
            const firstLIText = document.createElement('p');
            firstLIText.textContent = 'Value';
            firstLI.append(this.input, firstLIText);

            const secondLI = document.createElement('li');
            secondLI.classList.add('card-setting');
            const secondLIText = document.createElement('p');
            secondLIText.textContent = 'Animate';
            secondLI.append(this.animateToggle, secondLIText);

            const thirdLI = document.createElement('li');
            thirdLI.classList.add('card-setting');
            const thirdLIText = document.createElement('p');
            thirdLIText.textContent = 'Hide';
            thirdLI.append(this.hideToggle, thirdLIText);

            cardSettingsList.append(
                firstLI,
                secondLI,
                thirdLI
            );
            return cardSettingsList;

        }
    }

    const el = new Element();

    const cardTop = document.querySelector('.card-top');
    cardTop.append(el.spinner);

    const cardBottom = document.querySelector('.card-bottom');
    cardBottom.append(el.settingsList);


});