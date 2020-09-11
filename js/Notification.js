export class Notification{
    constructor(properties = {
        id: 'notification-1',
        code: '200',
        message: '',
    }, states = {
        show: false
    }, ubication = {
        element: undefined,
        insertBefore: 0
    }){
        this.createHTML(ubication, properties.id);
        this.setProperties(properties);
        this.setStates(states);
    }

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

    setStates(states = {
        show: false
    }){
        this.states = {};
        this.setShow(states);
    }

    setId(properties = {
        id: 'notification-1',
    }){
        this.properties.id = properties.id;
    }

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
        }
    }

    setMessage(properties = {
        message: '',
    }){
        this.properties.message = properties.message;
        this.message.innerHTML = this.properties.message;
    }

    setUrl(properties = {
        url: '/',
    }){
        this.properties.url = properties.url;
    }

    setMethod(properties = {
        method: 'GET',
    }){
        this.properties.method = properties.method;
    }

    setShow(states = {
        show: false
    }){
        this.states.show = states.show;
        if(this.states.show){
            if(this.html.classList.contains('hidden')){
                this.html.classList.remove('hidden');
            }
        }else{
            this.html.classList.add('hidden');
        }
    }

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
                    h2.classList.add('no-text');
                    header.appendChild(h2);
                        this.icon = document.createElement('i');
                        this.icon.classList.add('notification-icon', 'fas');
                        h2.appendChild(this.icon);

                let content = document.createElement('main');
                content.classList.add('notification-message');
                main.appendChild(content);
                    this.message = document.createElement('p');
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

    setSuccessType(){
        this.removeClassList();
        this.html.classList.add('notification-success');
        this.icon.classList.add('fa-check-circle');
    }

    setInfoType(){
        this.removeClassList();
        this.html.classList.add('notification-info');
        this.icon.classList.add('fa-circle-info');
    }

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

    setWarningType(){
        this.removeClassList();
        this.html.classList.add('notification-warning');
        this.icon.classList.add('fa-exclamation-triangle');
    }

    setErrorType(){
        this.removeClassList();
        this.html.classList.add('notification-error');
        this.icon.classList.add('fa-exclamation-circle');
    }
}