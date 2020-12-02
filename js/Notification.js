// ? Local repository
import { Form } from "./Form.js";
import { Icon } from "./Icon.js";

/**
 * * Notification makes an excellent notification.
 * @export
 * @class Notification
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Notification{
    /**
     * * Creates an instance of Notification.
     * @param {Object} [properties] Notification properties:
     * @param {String} [properties.id] Notification ID.
     * @param {Number} [properties.code] Notification code.
     * @param {String} [properties.message] Notification message.
     * @param {String[]} [properties.classes] Notification class names.
     * @param {Object} [states] Notification states:
     * @param {Boolean} [states.show] Notification show status.
     * @param {Object} [ubication] Notification ubication:
     * @param {HTMLElement} [ubication.element] Notification parent node.
     * @param {HTMLElement} [ubication.insertBefore] Notification next node sibling.
     * @memberof Notification
     */
    constructor(properties = {
        id: 'notification-1',
        code: 200,
        message: '',
        classes: [],
    }, states = {
        show: false
    }, ubication = {
        element: undefined,
        insertBefore: 0
    }){
        this.setProperties(properties);
        this.setStates(states);
        this.setIcon();
        this.createHTML(ubication, properties.id);
        if (this.checkQuestionType()) {
            this.setForm();
        }
        this.checkShowStatus();
    }

    /**
     * * Set the Notification properties.
     * @param {Object} [properties] Notification properties:
     * @param {String} [properties.id] Notification ID.
     * @param {Number} [properties.code] Notification code.
     * @param {String} [properties.message] Notification message.
     * @param {String[]} [properties.classes] Notification class names.
     * @memberof Notification
     */
    setProperties(properties = {
        id: 'notification-1',
        code: 200,
        message: '',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setCodeProperty(properties);
        this.setMessageProperty(properties);
        this.setClassesProperty(properties);
        this.setTypeProperty();
        if(this.getProperties('code') == 300){
            this.setURLProperty(properties);
            this.setMethodProperty(properties);
        }
    }

    /**
     * * Returns the Notification properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Notification
     */
    getProperties(property = ''){
        if (property && property != '') {
            return this.properties[property];
        } else {
            return this.properties;
        }
    }

    /**
     * * Check if there is a property.
     * @param {String} property Property name.
     * @returns {Boolean}
     * @memberof Notification
     */
    hasProperty(property = ''){
        if (this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a property value.
     * @param {String} property Property name.
     * @param {*} value Property value.
     * @memberof Notification
     */
    changeProperty(property = '', value = ''){
        if (this.hasProperty(property)) {
            this.properties[property] = value;
        }
        switch (property) {
            default:
                break;
        }
    }

    /**
     * * Set the Notification ID.
     * @param {Object} [properties] Notification properties:
     * @param {String} [properties.id] Notification ID.
     * @memberof Notification
     */
    setIDProperty(properties = {
        id: 'notification-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'notification-1';
        }
    }

    /**
     * * Returns the Notification ID.
     * @returns {String}
     * @memberof Notification
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Notification code.
     * @param {Object} [properties] Notification properties:
     * @param {Number} [properties.code] Notification code.
     * @memberof Notification
     */
    setCodeProperty(properties = {
        code: 200,
    }){
        if (properties.hasOwnProperty('code')) {
            this.properties.code = properties.code;
        } else {
            this.properties.code = 200;
        }
    }

    /**
     * * Returns the Notification code.
     * @returns {Number}
     * @memberof Notification
     */
    getCodeProperty(){
        return this.properties.code;
    }

    /**
     * * Set the Notification message.
     * @param {Object} [properties] Notification properties:
     * @param {String} [properties.message] Notification message.
     * @memberof Notification
     */
    setMessageProperty(properties = {
        message: '',
    }){
        if (properties.hasOwnProperty('message')) {
            this.properties.message = properties.message;
        } else {
            this.properties.message = 200;
        }
    }

    /**
     * * Returns the Notification message.
     * @returns {String}
     * @memberof Notification
     */
    getMessageProperty(){
        return this.properties.message;
    }

    /**
     * * Set the Notification redirection URl.
     * @param {Object} [properties] Notification properties:
     * @param {String} [properties.url] Notification redirection URl.
     * @memberof Notification
     */
    setURLProperty(properties = {
        url: '/',
    }){
        if (properties.hasOwnProperty('url')) {
            this.properties.url = properties.url;
        } else {
            this.properties.url = '/';
        }
    }

    /**
     * * Returns the Notification redirection URL.
     * @returns {String}
     * @memberof Notification
     */
    getURLProperty(){
        return this.properties.url;
    }

    /**
     * * Set the Notification redirection method.
     * @param {Object} [properties] Notification properties:
     * @param {String} [properties.method] Notification redirection method.
     * @memberof Notification
     */
    setMethodProperty(properties = {
        method: 'GET',
    }){
        if (properties.hasOwnProperty('method')) {
            this.properties.method = properties.method;
        } else {
            this.properties.method = 'GET';
        }
    }

    /**
     * * Returns the Notification redirection method.
     * @returns {String}
     * @memberof Notification
     */
    getMethodProperty(){
        return this.properties.method;
    }

    /**
     * * Set the Notification class names.
     * @param {Object} [properties] Notification properties:
     * @param {String[]} [properties.classes] Notification class names.
     * @memberof Notification
     */
    setClassesProperty(properties = {
        classes: [],
    }){
        if (properties.hasOwnProperty('classes')) {
            this.properties.classes = properties.classes;
        } else {
            this.properties.classes = [];
        }
    }

    /**
     * * Returns the Notification class names.
     * @returns {String[]}
     * @memberof Notification
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Notification type.
     * @memberof Notification
     */
    setTypeProperty(){
        switch(this.getProperties('code')){
            case 200:
                this.properties.type = 'success';
                break;
            case 207:
                this.properties.type = 'info';
                break;
            case 300:
                this.properties.type = 'question';
                break;
            case 401:
                this.properties.type = 'warning';
                break;
            case 403:
                this.properties.type = 'error';
                break;
            case 404:
                this.properties.type = 'error';
                break;
        }
    }

    /**
     * * Returns the Notification type.
     * @returns {String}
     * @memberof Notification
     */
    getTypeProperty(){
        return this.properties.type;
    }

    /**
     * * Check if the Icon type is question.
     * @returns {Boolean}
     * @memberof Notification
     */
    checkQuestionType(){
        switch(this.getProperties('type')){
            case 'question':
                return true;
            default:
                return false;
        }
    }

    /**
     * * Set the Notification states.
     * @param {Object} [states] Notification states:
     * @param {Boolean} [states.show] Notification show status.
     * @memberof Notification
     */
    setStates(states = {
        show: false
    }){
        this.states = {};
        this.setShowStatus(states);
    }

    /**
     * * Returns the Link states or an specific states.
     * @param {String} [property] States name.
     * @returns {Object|*}
     * @memberof Notification
     */
    getStates(property = ''){
        if (property && property != '') {
            return this.states[property];
        } else {
            return this.states;
        }
    }

    /**
     * * Check if there is a status.
     * @param {String} name Status name.
     * @returns {Boolean}
     * @memberof Notification
     */
    hasStates(name = ''){
        if (this.states.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a status value.
     * @param {String} name Status name.
     * @param {*} value Status value.
     * @memberof Notification
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            default:
                break;
        }
    }

    /**
     * * Set the Notification show status.
     * @param {Object} [states] Notification states:
     * @param {Boolean} [states.show] Notification show status.
     * @memberof Notification
     */
    setShowStatus(states = {
        show: false
    }){
        if (states.hasOwnProperty('show')) {
            this.states.show = states.show;
        } else {
            this.states.show = false;
        }
    }

    /**
     * * Check the show status.
     * @memberof Notification
     */
    checkShowStatus(){
        if(this.getStates('show')){
            if(this.html.classList.contains('hidden')){
                this.html.classList.remove('hidden');
            }
        }else{
            this.html.classList.add('hidden');
        }
    }

    /**
     * * Returns the Notification HTML Element.
     * @returns {HTMLElement}
     * @memberof Notification
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Makes the Notification HTML Element.
     * @param {Object} [ubication] Notification ubication:
     * @param {HTMLElement} [ubication.element] Notification parent node.
     * @param {HTMLElement} [ubication.insertBefore] Notification next node sibling.
     * @memberof Notification
     */
    createHTML(ubication = {
        element: undefined,
        insertBefore: 0
    }){
        this.html = document.createElement('aside');
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        this.html.classList.add('notification', `notification-${ this.getProperties('type') }`, 'hidden');
        this.html.id = this.getProperties('id');
        ubication.element.insertBefore(this.html, ubication.insertBefore);
            let main = document.createElement('main');
            main.classList.add('notification-body');
            this.html.appendChild(main);
                let header = document.createElement('header');
                header.classList.add('notification-header');
                main.appendChild(header);
                    let h2 = document.createElement('h2');
                    h2.classList.add('no-text');
                    header.appendChild(h2);
                        h2.appendChild(this.getIcon().getHTML());

                let content = document.createElement('main');
                content.classList.add('notification-message');
                main.appendChild(content);
                    this.message = document.createElement('p');
                    this.message.innerHTML = this.getProperties('message');
                    content.appendChild(this.message);
                
                this.footer = document.createElement('footer');
                this.footer.classList.add('notification-footer');
                main.appendChild(this.footer);
                    let closeBtn = document.createElement('a');
                    closeBtn.href = '#';
                    closeBtn.classList.add('notification-closer');
                    this.footer.appendChild(closeBtn);
                        let icon = document.createElement('i');
                        icon.classList.add('notification-icon', 'fas', 'fa-times');
                        closeBtn.appendChild(icon);

        let notification = this;
        closeBtn.addEventListener('click', function(e){
            e.preventDefault();
            notification.html.parentNode.removeChild(notification.html);
        });
    }

    /**
     * * Set the Notification Icon.
     * @memberof Notification
     */
    setIcon(){
        this.icon = new Icon({
            type: this.getProperties('type'),
        });
    }

    /**
     * * Set the Notification Icon.
     * @returns {Icon}
     * @memberof Notification
     */
    getIcon(){
        return this.icon;
    }

    /**
     * * Set the Notification Form.
     * @memberof Notification
     */
    setForm(){
        this.form = new Form({
            method: this.getProperties('method'),
            url: this.getProperties('url'),
        });
        this.getHTML().appendChild(this.form.getHTML());

        let confirmBtn = document.createElement('a');
        confirmBtn.href = '#'
        confirmBtn.classList.add('notification-accept');
        this.footer.appendChild(confirmBtn);
            let icon = document.createElement('i');
            icon.classList.add('notification-icon', 'fas', 'fa-check');
            confirmBtn.appendChild(icon);
            
        let notification = this;
        confirmBtn.addEventListener('click', function(e){
            e.preventDefault();
            notification.form.submit();
        });
    }
}