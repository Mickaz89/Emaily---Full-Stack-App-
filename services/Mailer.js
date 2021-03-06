const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
   constructor({subject, recipients}, content) {
       super();
       this.sgApi = sendgrid(keys.senderGridKey);
       this.from_email = new helper.Email('zanamickael@gmail.com');
       this.subject = subject;
       this.body = new helper.Content('text/html',content);
       this.recipients = this.formatAdresses(recipients);

       this.addContent(this.body);
       this.addClickTracking();
       this.addRecipients();
   }

   formatAdresses(recipients) {
       return recipients.map(({email}) => {
           return new helper.Email(email);
       });
   }
    addClickTracking(){
       const trackingSettings = new helper.TrackingSettings(); // creating default settings
       const clickTracking = new helper.ClickTracking(true, true); // creating click tracking

       trackingSettings.setClickTracking(clickTracking); // setting the click tracking
       this.addTrackingSettings(trackingSettings); // adding the track settings
    }

    addRecipients(){
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send(){
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response =  await this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;
