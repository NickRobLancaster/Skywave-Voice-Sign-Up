const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            primaryPhone: '',
            email: '',
            businessName: '',
            businessAddress: '',
            businessAptUnit: '',
            businessCity: '',
            businessState: '',
            businessZip: '',
            perSeatCost: 50.00,
            usageCost: 0.00,
            automationCost: 0.00,
            textMessageCost: 0.00,
            termsOfServiceChecked: false,
            termsOfServiceCheckboxField: false,
            termsOfServiceAgreedDate: '',
            numberOfSeats: 1,
            selectedNumSeats: 1,
            hideAutoScroll: true,
            thisATest: "Hello tester dude"
            
        };
    },
    watch: {
        
    },
    computed: {
        
    },
    methods: {
        scrollToBottom(){
            this.hideAutoScroll = false;
            let termsDiv = document.getElementById("termsAndConditionsDiv");
            document.querySelector('.end-terms').scrollIntoView({behavior: 'smooth'});

        },

        /*toggleCheck(){
            if(this.termsOfServiceChecked = true){
                this.termsOfServiceChecked = false;
            }
            this.termsOfServiceChecked = true;
        }*/

        
    }

});

app.mount('#appBody');