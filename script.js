let markNote = ['Dell', 'HP', 'Accer', 'Asus', 'Lenovo', 'Apple', ]

let NoteApp = {
    data() {
        return {
            hover:false,
            hoverNumber:-1,
            nameArr:['Pleystantion', 'Ноутбуки', 'Accer', 'Asus', 'Lenovo', 'Apple', ],
            notebookArr:[
                {   name: '1050ti', 
                    model: 'Videocard',
                    memory: '4gb',
                    price: '15000',
                },
                {   name: 'Dell', 
                model: 'Inspirion2',
                procesor: 'i3',
                memory: '500Gb',
                price: '45000',
            },
            {   name: 'Dell', 
            model: 'Inspirion3',
            procesor: 'i3',
            memory: '500Gb',
            price: '25000',
        },
                {   name: 'Accer', 
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '15000',
                },
             
                {   name: 'Asus', 
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '31232',
                },
                {  name: 'Lenovo', 
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '51000',
                },
                {  name: 'Lenovo', 
                model: 'Inspirion2',
                procesor: 'i3',
                memory: '500Gb',
                price: '12000',
                },
                { 
                },
                {  name: 'Lenovo', 
                    model: 'Inspirion4',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '42000',
                },
                {  name: 'Lenovo', 
                model: 'Inspirion5',
                procesor: 'i3',
                memory: '500Gb',
                price: '5000',
                },
                {  name: 'Lenovo', 
                model: 'Inspirion6',
                procesor: 'i3',
                memory: '500Gb',
                price: '31000',
                },
                {  name: 'Lenovo', 
                model: 'Inspirion4',
                procesor: 'i3',
                memory: '500Gb',
                price: '11000',
            },
            {  name: 'Lenovo', 
            model: 'Inspirion5',
            procesor: 'i3',
            memory: '500Gb',
            price: '12000',
            },
            {  name: 'Lenovo', 
            model: 'Inspirion6',
            procesor: 'i3',
            memory: '500Gb',
            price: '15000',
            },
                {   name: 'Apple', 
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '215000',
                },
                {   name: 'Apple', 
                    model: 'Inspirion2',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '115000',
                }
                
            ],
            chooseName: markNote[0],
            chooseIndex:0,
            chooseNotebooks:[],
            search: "",
        }
    },
    methods: {
        showNotebook(index){
            this.chooseNotebooks.length = 0;
            this.chooseName = this.nameArr[index];
            for (elem of this.notebookArr){
                if (elem.name == this.chooseName){
                    this.chooseNotebooks.push(elem);
                }
            }
        },
        searchFunction(){

        },
        myFilter() {
            let searchString = this.search;
            if (!searchString) {
                return this.chooseNotebooks;
            }
            searchString = searchString.trim().toLowerCase();
            
            this.chooseNotebooks.length = 0;
            return this.notebookArr.filter(item => {
                if ((item.name.toLowerCase().indexOf(searchString) !== -1) || (item.model.toLowerCase().indexOf(searchString) !== -1)) {
                    // return item;
                   this.chooseNotebooks.push(item);
                    return this.chooseNotebooks;
                }
            })
        }
    },
    mounted() {
        this.showNotebook(0)
    },

}

Vue.createApp(NoteApp).mount('#container')