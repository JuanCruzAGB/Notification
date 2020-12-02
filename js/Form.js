/**
 * * Form controls the Notification icons.
 * @export
 * @class Form
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Form{
    /**
     * * Creates an instance of Form.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.id] Form ID.
     * @param {Number} [properties.code] Form code.
     * @param {String} [properties.message] Form message.
     * @param {String[]} [properties.classes] Form class names.
     * @memberof Form
     */
    constructor(properties = {
        id: 'form-1',
        method: 'GET',
        url: '/',
    }){
        this.setProperties(properties);
        this.createHTML();
    }

    /**
     * * Set the Form properties.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.id] Form ID.
     * @param {Number} [properties.code] Form code.
     * @param {String} [properties.message] Form message.
     * @param {String[]} [properties.classes] Form class names.
     * @memberof Form
     */
    setProperties(properties = {
        id: 'form-1',
        method: 'GET',
        url: '/',
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setURLProperty(properties);
        this.setMethodProperty(properties);
    }

    /**
     * * Returns the Form properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Form
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
     * @memberof Form
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
     * @memberof Form
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
     * * Set the Form ID.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.id] Form ID.
     * @memberof Form
     */
    setIDProperty(properties = {
        id: 'Form-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'Form-1';
        }
    }

    /**
     * * Returns the Form ID.
     * @returns {String}
     * @memberof Form
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Form redirection URl.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.url] Form redirection URl.
     * @memberof Form
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
     * * Returns the Form redirection URL.
     * @returns {String}
     * @memberof Form
     */
    getURLProperty(){
        return this.properties.url;
    }

    /**
     * * Set the Form redirection method.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.method] Form redirection method.
     * @memberof Form
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
     * * Returns the Form redirection method.
     * @returns {String}
     * @memberof Form
     */
    getMethodProperty(){
        return this.properties.method;
    }

    /**
     * * Returns the Form HTML Element.
     * @returns {HTMLElement}
     * @memberof Form
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Makes the Form HTML Element.
     * @memberof Form
     */
    createHTML(){
        this.html = document.createElement('form');
        this.html.action = this.getProperties('url');
        this.html.method = this.getProperties('method');
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
    submit(){
        this.getHTML().submit();
    }
}