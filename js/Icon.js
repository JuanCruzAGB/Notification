// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

/** @var {object} defaultProps Default properties. */
let defaultProps = {
    id: 'icon-1',
    type: 'success',
};

/** @var {object} defaultState Default state. */
let defaultState = {
    //
};

/**
 * * Icon controls the Notification icons.
 * @export
 * @class Icon.
 * @extends Class
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export class Icon extends Class {
    /**
     * * Creates an instance of Icon.
     * @param {object} [props] Icon properties:
     * @param {string} [props.id] Icon primary key.
     * @param {string} [props.type] Icon type.
     * @memberof Icon
     */
    constructor(props = {
        id: 'icon-1',
        type: 'success',
    }) {
        super({ ...defaultProps, ...props });
        this.setFontAwesomeProperty();
        this.createHTML();
    }

    /**
     * * Set the Icon type.
     * @memberof Icon
     */
    setFontAwesomeProperty () {
        switch (this.props.type) {
            case 'success':
                this.setProps('fontawesome', 'check-circle');
                break;
            case 'info':
                this.setProps('fontawesome', 'circle-info');
                break;
            case 'question':
                this.setProps('fontawesome', 'question-circle');
                break;
            case 'warning':
                this.setProps('fontawesome', 'exclamation-triangle');
                break;
            case 'error':
                this.setProps('fontawesome', 'exclamation-circle');
                break;
        }
    }

    /**
     * * Makes the Icon HTML Element.
     * @memberof Icon
     */
    createHTML () {
        this.html = document.createElement('i');
        this.html.classList.add('notification-icon', 'fas', `fa-${ this.props.fontawesome }`);
    }
}

// ? Default export
export default Icon;