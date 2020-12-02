/**
 * * Icon controls the Notification icons.
 * @export
 * @class Icon
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Icon{
    /**
     * * Creates an instance of Icon.
     * @param {Object} [properties] Icon properties:
     * @param {String} [properties.id] Icon ID.
     * @param {String} [properties.type] Icon type.
     * @memberof Icon
     */
    constructor(properties = {
        id: 'icon-1',
        type: 'success',
    }){
        this.setProperties(properties);
        this.createHTML();
    }

    /**
     * * Set the Icon properties.
     * @param {Object} [properties] Icon properties:
     * @param {String} [properties.id] Icon ID.
     * @param {String} [properties.type] Icon type.
     * @memberof Icon
     */
    setProperties(properties = {
        id: 'icon-1',
        type: 'success',
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setTypeProperty(properties);
        this.setFontAwesomeProperty();
    }

    /**
     * * Returns the Icon properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Icon
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
     * @memberof Icon
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
     * @memberof Icon
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
     * * Set the Icon ID.
     * @param {Object} [properties] Icon properties:
     * @param {String} [properties.id] Icon ID.
     * @memberof Icon
     */
    setIDProperty(properties = {
        id: 'icon-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'icon-1';
        }
    }

    /**
     * * Returns the Icon ID.
     * @returns {String}
     * @memberof Icon
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Icon type.
     * @param {Object} [properties] Icon properties:
     * @param {String} [properties.type] Icon type.
     * @memberof Icon
     */
    setTypeProperty(properties = {
        type: 'success',
    }){
        if (properties.hasOwnProperty('type')) {
            this.properties.type = properties.type;
        } else {
            this.properties.type = 'success';
        }
    }

    /**
     * * Returns the Icon type.
     * @returns {String}
     * @memberof Icon
     */
    getTypeProperty(){
        return this.properties.type;
    }

    /**
     * * Set the Icon type.
     * @memberof Icon
     */
    setFontAwesomeProperty(){
        switch(this.getProperties('type')){
            case 'success':
                this.properties.fontawesome = 'check-circle';
                break;
            case 'info':
                this.properties.fontawesome = 'circle-info';
                break;
            case 'question':
                this.properties.fontawesome = 'question-circle';
                break;
            case 'warning':
                this.properties.fontawesome = 'exclamation-triangle';
                break;
            case 'error':
                this.properties.fontawesome = 'exclamation-circle';
                break;
        }
    }

    /**
     * * Returns the Icon fontawesome.
     * @returns {String}
     * @memberof Icon
     */
    getFontAwesomeProperty(){
        return this.properties.fontawesome;
    }

    /**
     * * Returns the Icon HTML Element.
     * @returns {HTMLElement}
     * @memberof Icon
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Makes the Icon HTML Element.
     * @memberof Icon
     */
    createHTML(){
        this.html = document.createElement('i');
        this.html.classList.add('notification-icon', 'fas', `fa-${ this.getProperties('fontawesome') }`);
    }
}