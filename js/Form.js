// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

/** @var {object} defaultProps Default properties. */
let defaultProps = {
    id: 'form-1',
    method: 'GET',
    url: '/',
};

/** @var {object} defaultState Default state. */
let defaultState = {
    //
};

/**
 * * Form controls the Notification icons.
 * @export
 * @class Form
 * @extends Class
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Form extends Class {
    /**
     * * Creates an instance of Form.
     * @param {object} [props] Form properties:
     * @param {string} [props.id] Form primary key.
     * @param {number} [props.code] Form code.
     * @param {string} [props.message] Form message.
     * @param {string[]} [props.classes] Form class names.
     * @memberof Form
     */
    constructor (props = {
        id: 'form-1',
        method: 'GET',
        url: '/',
    }) {
        super({ ...defaultProps, ...props });
        this.createHTML();
    }

    /**
     * * Makes the Form HTML Element.
     * @memberof Form
     */
    createHTML () {
        this.setHTML(document.createElement('form'));
        this.html.action = this.props.url;
        this.html.method = this.props.method;
        this.html.classList.add('hidden');
            let csrfToken = document.createElement('input');
            csrfToken.type = 'hidden';
            csrfToken.name = '_token';
            csrfToken.value = document.querySelector('meta[name=csrf-token]').content;
            this.html.appendChild(csrfToken);
    }

    /**
     * * Submit the Form.
     * @memberof Form
     */
    submit () {
        this.html.submit();
    }
}

// ? Default export
export default Form;