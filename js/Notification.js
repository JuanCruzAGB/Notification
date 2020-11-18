/**
 * * Notification makes an excellent notification.
 * @export
 * @class Notification
 */
export class Notification{
    /**
     * * Creates an instance of Notification.
     * @param {object} properties - Notification properties.
     * @param {object} status - Notification status.
     * @param {object} ubication - Notification ubication.
     * @memberof Notification
     */
    constructor(properties = {
        id: 'notification-1',
        code: '200',
        message: '',
    }, status = {
        show: false
    }, ubication = {
        element: undefined,
        insertBefore: 0
    }){
        this.createHTML(ubication, properties.id);
        this.setProperties(properties);
        this.setStatus(status);
    }

    /**
     * * Set the Notification properties.
     * @param {object} properties - Notification properties.
     * @memberof Notification
     */
    setProperties(properties = {
        id: 'notification-1',
        code: '200',
        message: '',
    }){
        this.properties = {};
        this.setId(properties);
        this.setCode(properties);
        this.setMessage(properties);
        if(this.properties.code == 300){
            this.setUrl(properties);
            this.setMethod(properties);
        }
    }

    /**
     * * Set the Notification properties.
     * @param {object} status - Notification status.
     * @memberof Notification
     */
    setStatus(status = {
        show: false
    }){
        this.status = {};
        this.setShow(status);
    }

    /**
     * * Set the Notification ID.
     * @param {object} properties - Notification properties.
     * @memberof Notification
     */
    setId(properties = {
        id: 'notification-1',
    }){
        this.properties.id = properties.id;
    }

    /**
     * * Set the Notification code.
     * @param {object} properties - Notification properties.
     * @memberof Notification
     */
    setCode(properties = {
        code: '200',
    }){
        this.properties.code = properties.code;
        switch(this.properties.code){
            case 200:
                this.setSuccessType();
                break;
            case 207:
                this.setInfoType();
                break;
            case 300:
                this.setQuestionType(properties);
                break;
            case 401:
                this.setWarningType();
                break;
            case 403:
                this.setErrorType();
                break;
            case 404:
                this.setErrorType();
                break;
            case 500:
                this.setErrorType();
                break;
        }
    }

    /**
     * * Set the Notification message.
     * @param {object} properties - Notification properties.
     * @memberof Notification
     */
    setMessage(properties = {
        message: '',
    }){
        this.properties.message = properties.message;
        this.message.innerHTML = this.properties.message;
    }

    /**
     * * Set the Notification URL.
     * @param {object} properties - Notification properties.
     * @memberof Notification
     */
    setUrl(properties = {
        url: '/',
    }){
        this.properties.url = properties.url;
    }

    /**
     * * Set the Notification method.
     * @param {object} properties - Notification properties.
     * @memberof Notification
     */
    setMethod(properties = {
        method: 'GET',
    }){
        this.properties.method = properties.method;
    }

    /**
     * * Set the Notification show status.
     * @param {object} status - Notification status.
     * @memberof Notification
     */
    setShow(status = {
        show: false
    }){
        this.status.show = status.show;
        if(this.status.show){
            if(this.html.classList.contains('hidden')){
                this.html.classList.remove('hidden');
            }
        }else{
            this.html.classList.add('hidden');
        }
    }

    /**
     * * Create the Notification HTML Element.
     * @param {object} ubication - Notification ubication.
     * @param {string} id - Notification ID.
     * @memberof Notification
     */
    createHTML(ubication = {
        element: undefined,
        insertBefore: 0
    }, id = 'notification-1'){
        this.html = document.createElement('aside');
        this.html.classList.add('notification', 'notification-success', 'hidden');
        this.html.id = id;
        ubication.element.insertBefore(this.html, ubication.insertBefore);
            let main = document.createElement('main');
            main.classList.add('notification-body');
            this.html.appendChild(main);
                let header = document.createElement('header');
                header.classList.add('notification-header');
                main.appendChild(header);
                    let h2 = document.createElement('h2');
                    h2.classList.add('no-text', 'mb-0');
                    header.appendChild(h2);
                        this.icon = document.createElement('i');
                        this.icon.classList.add('notification-icon', 'fas');
                        h2.appendChild(this.icon);

                let content = document.createElement('main');
                content.classList.add('notification-message');
                main.appendChild(content);
                    this.message = document.createElement('p');
                    this.message.classList.add('mb-0');
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
     * * Remove the Notification class list.
     * @memberof Notification
     */
    removeClassList(){
        if(this.html.classList.contains('notification-success')){
            this.html.classList.remove('notification-success');
            this.icon.classList.remove('fa-check-circle');
        }
        if(this.html.classList.contains('notification-info')){
            this.html.classList.remove('notification-info');
            this.icon.classList.remove('fa-circle-info');
        }
        if(this.html.classList.contains('notification-question')){
            this.html.classList.remove('notification-question');
            this.icon.classList.remove('fa-question-circle');
        }
        if(this.html.classList.contains('notification-warning')){
            this.html.classList.remove('notification-warning');
            this.icon.classList.remove('fa-exclamation-triangle');
        }
        if(this.html.classList.contains('notification-error')){
            this.html.classList.remove('notification-error');
            this.icon.classList.remove('fa-exclamation-circle');
        }
    }

    /**
     * * Set the success Notification.
     * @memberof Notification
     */
    setSuccessType(){
        this.removeClassList();
        this.html.classList.add('notification-success');
        this.icon.classList.add('fa-check-circle');
    }

    /**
     * * Set the information Notification.
     * @memberof Notification
     */
    setInfoType(){
        this.removeClassList();
        this.html.classList.add('notification-info');
        this.icon.classList.add('fa-circle-info');
    }

    /**
     * * Set the question Notification.
     * @param {object} properties - Notification properties.
     * @memberof Notification
     */
    setQuestionType(properties = {
        method: 'GET',
        url: '/',
    }){
        this.removeClassList();
        
        this.form = document.createElement('form');
        this.form.action = properties.url;
        this.form.method = properties.method;
        this.form.classList.add('hidden');
        this.html.appendChild(this.form);
            let csrfToken = document.createElement('input');
            csrfToken.type = 'hidden';
            csrfToken.name = '_token';
            csrfToken.value = document.querySelector('meta[name=csrf-token]').content;
            this.form.appendChild(csrfToken);

        this.html.classList.add('notification-question');
        this.icon.classList.add('fa-question-circle');
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

    /**
     * * Set the warning Notification.
     * @memberof Notification
     */
    setWarningType(){
        this.removeClassList();
        this.html.classList.add('notification-warning');
        this.icon.classList.add('fa-exclamation-triangle');
    }

    /**
     * * Set the error Notification.
     * @memberof Notification
     */
    setErrorType(){
        this.removeClassList();
        this.html.classList.add('notification-error');
        this.icon.classList.add('fa-exclamation-circle');
    }
}