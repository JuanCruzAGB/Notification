// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? NotificationJS repository
import Form from "./Form.js";
import Icon from "./Icon.js";

/**
 * * Notification makes an excellent notification.
 * @export
 * @class Notification
 * @extends Class
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export class Notification extends Class {
    /**
     * * Creates an instance of Notification.
     * @param {object} [props] Notification properties:
     * @param {string} [props.id='notification-1'] Notification primary key.
     * @param {number} [props.code=200] Notification code.
     * @param {string} [props.message=':D'] Notification message.
     * @param {string} [props.classes] Notification class names.
     * @param {object} [state] Notification state:
     * @param {boolean} [state.open=false] Notification open state.
     * @param {HTMLElement} [state.insertBefore=false] Notification html insert before to.
     * @param {HTMLElement} [state.appendChild=false] Notification html append to.
     * @memberof Notification
     */
    constructor (props = {
        id: 'notification-1',
        code: 200,
        message: ':D',
        classes: [],
    }, state = {
        open: false,
        appendChild: false,
        insertBefore: false,
    }) {
        super({ ...Notification.props, ...props }, { ...Notification.state, ...state });
        if (this.props.code === 300) {
            this.setProps('url', (props.hasOwnProperty('url') ? props.url : '/'));
            this.setProps('method', (props.hasOwnProperty('method') ? props.method : 'GET'));
        }
        this.setTypeProperty();
        this.setIcon();
        this.createHTML();
        this.checkState();
    }

    /**
     * * Set the Notification type.
     * @memberof Notification
     */
    setTypeProperty() {
        switch(this.props.code) {
            case 200:
                this.setProps('type', 'success');
                break;
            case 207:
                this.setProps('type', 'info');
                break;
            case 300:
                this.setProps('type', 'question');
                break;
            case 401:
                this.setProps('type', 'warning');
                break;
            case 403:
                this.setProps('type', 'error');
                break;
            case 404:
                this.setProps('type', 'error');
                break;
            case 500:
                this.setProps('type', 'error');
                break;
        }
    }

    /**
     * * Set the Notification Icon.
     * @memberof Notification
     */
    setIcon () {
        this.icon = new Icon({
            type: this.props.type,
        });
    }

    /**
     * * Set the Notification Form.
     * @memberof Notification
     */
    setForm () {
        this.form = new Form({
            method: this.props.method,
            url: this.props.url,
        });
        this.html.appendChild(this.form.html);

        let confirmBtn = document.createElement('a');
        confirmBtn.href = '#';
        confirmBtn.classList.add('notification-accept');
        this.footer.appendChild(confirmBtn);
            let icon = document.createElement('i');
            icon.classList.add('notification-icon', 'fas', 'fa-check');
            confirmBtn.appendChild(icon);
            
        let notification = this;
        confirmBtn.addEventListener('click', function (e) {
            e.preventDefault();
            notification.form.submit();
        });
    }

    /**
     * * Check the state.
     * @memberof Notification
     */
    checkState () {
        if (this.checkQuestionType()) {
            this.setForm();
        }
        this.checkOpenState();
    }

    /**
     * * Check if the Icon type is question.
     * @returns {boolean}
     * @memberof Notification
     */
    checkQuestionType () {
        switch (this.props.type) {
            case 'question':
                return true;
            default:
                return false;
        }
    }

    /**
     * * Check the open state.
     * @memberof Notification
     */
    checkOpenState () {
        if (this.state.open) {
            this.open();
        }
    }

    /**
     * * Check the append HTML Element state.
     * @memberof Notification
     */
    checkAppendChildState () {
        if (this.state.appendChild) {
            this.state.appendChild.appendChild(this.html);
        }
    }

    /**
     * * Check the insert before HTML Element state.
     * @memberof Notification
     */
    checkInsertBeforeState () {
        if (this.state.insertBefore) {
            this.state.insertBefore.parentNode.insertBefore(this.html, this.state.insertBefore);
        }
    }

    /**
     * * Makes the Notification HTML Element.
     * @param {object} [ubication] Notification ubication:
     * @param {HTMLElement} [ubication.element] Notification parent node.
     * @param {HTMLElement} [ubication.insertBefore] Notification next node sibling.
     * @memberof Notification
     */
    createHTML () {
        if (document.querySelector(`#${ this.props.id }.notification`)) {
            this.setHTML(document.querySelector(`#${ this.props.id }.notification`));
        } else {
            this.html = document.createElement('aside');
            this.html.id = this.props.id;
            this.html.classList.add('notification');
            this.checkAppendChildState();
            this.checkInsertBeforeState();
        }
        for (const className of this.props.classes) {
            this.html.classList.add(className);
        }
        this.html.classList.add(`notification-${ this.props.type }`, 'hidden');
        this.html.innerHTML = '';
        this.createHeader();
        this.createBody();
        this.createFooter();
    }

    createHeader () {
        let header = document.createElement('header');
        header.classList.add('notification-header');
        this.html.appendChild(header);
            let title = document.createElement('h1');
            title.classList.add('no-text', 'mb-0');
            header.appendChild(title);
            title.appendChild(this.icon.html);
    }

    createBody () {
        let content = document.createElement('main');
        content.classList.add('notification-message');
        this.html.appendChild(content);
            let paragraph = document.createElement('p');
            paragraph.innerHTML = this.props.message;
            content.appendChild(paragraph);
    }

    createFooter () {
        let instance = this;
        this.footer = document.createElement('footer');
        this.footer.classList.add('notification-footer');
        this.html.appendChild(this.footer);
            if (!this.buttons) {
                this.buttons = [];            
            }
            this.buttons.close = document.createElement('a');
            this.buttons.close.href = '#';
            this.buttons.close.classList.add('notification-closer');
            this.footer.appendChild(this.buttons.close);
            this.buttons.close.addEventListener('click', function (e) {
                e.preventDefault();
                instance.switch();
            });
                let icon = document.createElement('i');
                icon.classList.add('notification-icon', 'fas', 'fa-times');
                this.buttons.close.appendChild(icon);
    }

    /**
     * * Switch the open Notification state.
     * @memberof Notification
     */
    switch () {
        if (this.state.open) {
            this.close();
        } else {
            this.open();
        }
    }

    /**
     * * Open the Notification.
     * @memberof Notification
     */
    open () {
        this.setState('open', true);
        this.html.classList.remove('hidden');
    }

    /**
     * * Close the Notification.
     * @memberof Notification
     */
    close () {
        this.setState('open', false);
        this.html.classList.add('hidden');
    }

    /**
     * @static
     * @var {object} props Default properties.
     */
    static props = {
        id: 'notification-1',
        code: 200,
        message: ':D',
        classes: [],
    };
    
    /**
     * @static
     * @var {object} state Default state.
     */
    static state = {
        open: false,
        appendChild: false,
        insertBefore: false,
    };
}

// ? Notification childs
Notification.Form = Form;
Notification.Icon = Icon;

// ? Default export
export default Notification;