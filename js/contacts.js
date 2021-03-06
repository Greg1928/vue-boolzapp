
const app = new Vue({
    el: "#app",
    data: {
        index: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        messageInput: "",
        searchInput: "",
},
methods:{
    currentMex(i){
        this.index = i;
    },
    lastMessage(i){
        let length = this.contacts[i].messages.length -1;
        return length
    },
    dateHalf(user){
        const full = user.messages[user.messages.length-1].date;
        const half = full.split(" ");
        return half[0];
    },
    hourHalf(index, a){
        const DateTime = luxon.DateTime;
        const full = this.contacts[index].messages[a].date;
        const half = full.split(" ");
        return DateTime.fromFormat(half[1], "hh:mm:ss").toFormat("HH:mm")
        
    },
    lastAccess(index){
        const DateTime = luxon.DateTime;
        len = this.contacts[index].messages.length;
        let date = this.contacts[index].messages[len-1].date;
        const half = date.split(" ");
        return DateTime.fromFormat(half[1], "hh:mm:ss").toFormat("HH:mm")
        
    },
    lastAccessDate(index){
        len = this.contacts[index].messages.length;
        let date = this.contacts[index].messages[len-1].date;
        const half = date.split(" ");
        return half[0];
    },
    sendMessage(index){
        const DateTime = luxon.DateTime;
        if(this.messageInput !== ' '){
           let messageInput = {
               date: DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss"),
               message: this.messageInput,
               status: 'sent'
           };
           this.contacts[index].messages.push(messageInput);
           this.messageInput = "";
         }
    },
    randomAnswer(){
        let x = ["S??, certamente.", "E come non ammetterlo?","Molto bene","Per quel che mi riguarda non mi sembra affatto che tu sbagli.", "Tutto questo a me pare che sia assurdo!", "Pressappoco.", "Tu dici bene: bisogna fare cos??.","Assolutamente.", "Ebbene?", "E che cos'altro potremmo dire?", "?? vero.", "Sicuro!"];
        return x[Math.floor(Math.random() * 11) + 0];
    },
    answer(index){
        setTimeout(() =>{
            const DateTime = luxon.DateTime;
            let answerMex = {
                date: DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss"),
                message: this.randomAnswer(),
                status: 'received'
            }
            this.contacts[index].messages.push(answerMex);
         }, 1000);
    },
    filterContacts(){ 
        for(let i = 0; i<this.contacts.length; i++)
            if(this.contacts[i].name.toLowerCase().includes(this.searchInput.toLowerCase())){
                this.contacts[i].visible = true;
        }else{
            this.contacts[i].visible = false;
        }

    },
}


}
)

