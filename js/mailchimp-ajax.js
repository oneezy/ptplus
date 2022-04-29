/*
 * Mailchimp AJAX form submit VanillaJS
 * Vanilla JS
 * Author: Michiel Vandewalle
 * Github author: https://github.com/michiel-vandewalle
 * Github project: https://github.com/michiel-vandewalle/Mailchimp-AJAX-form-submit-vanillaJS
 */

document.addEventListener("DOMContentLoaded", function() {
    
    const body = document.querySelector("body");
    const form = document.querySelector('#mailchimpSubscribe');
    const input = document.querySelector('input');
    const spambot = document.querySelector('#js-validate-robot');
    const MDCSnackbar = mdc.snackbar.MDCSnackbar;
    const snackbar = new MDCSnackbar(document.getElementById('mdc-js-snackbar'));
  
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Check for spam
        if(spambot.value !== '') { return false }

        // Get url for mailchimp
        let url = this.action.replace('/post?', '/post-json?');

        // Add form data to object
        let data = '';
        let inputs = this.querySelectorAll('#js-form-inputs input');
        for (var i = 0; i < inputs.length; i++) {
            data += '&' + inputs[i].name + '=' + encodeURIComponent(inputs[i].value);
        }

        // Create & add post script to the DOM
        let script = document.createElement('script');
        script.src = url + data;
        document.body.appendChild(script);

        // Callback function
        let callback = 'callback';
        window[callback] = function(data) {

            console.log(data);
        
            // Remove post script from the DOM
            delete window[callback];
            document.body.removeChild(script);

            // Snackbar
            const submitButton = document.querySelector('#mc-embedded-subscribe');
            const responseText = document.querySelector('#js-subscribe-response');
            const actionText = document.querySelector('#js-action-button');
          
            var show = function(sb) {
               var textData =  {
                  message: responseText.textContent
               };
               if (actionText.textContent) {
                  textData.actionText = actionText.textContent;
                  textData.actionHandler = function() {
                    console.log(textData);
                  }
               }
               sb.show(textData);
            };

            // jus@oneezy.com
            
            // Mailchimp Messages
            if(data.result === "success") {
                
                // Replace Default Mailchimp Messages
                switch(data.msg) {
                    case "Thank you for subscribing!":
                        responseText.innerHTML = "Thanks for joining! Check your email";
                        break;
                    default:
                        responseText.innerHTML = data.msg;
                }
                input.value = '';
                submitButton.classList.add('custom-success-colors');
                actionText.classList.remove('error');
                actionText.classList.add('success');
                show(snackbar);

            } else if(data.result === "error") {

                let inputemail = input.value;
                let toManySignUps = `Recipient "${inputemail}" has too many recent signup requests`;
                let wayToMany = `Too many subscribe attempts for this email address. Please try again in about 5 minutes. (#5624)`;
                let checkYourEmail = `You've already joined! Check your email`;
                
                // Replace Default Mailchimp Messages
                switch(data.msg) {
                    case toManySignUps:
                        responseText.innerHTML = checkYourEmail;
                        break;
                    
                    case wayToMany:
                        responseText.innerHTML = checkYourEmail;
                        break;

                    default:
                        responseText.innerHTML = "Please enter a valid email address";
                }
                
                if(data.msg.includes("already subscribed")) {
                    responseText.innerHTML = checkYourEmail;
                }

                actionText.classList.remove('success');
                actionText.classList.add('error');
                show(snackbar);
            }

        };

    });


    

    input.addEventListener("focus", (event) => {
        body.classList.add('input-active');
    }, true);
    
    input.addEventListener("blur", (event) => {
        body.classList.remove('input-active');
    }, true);

});