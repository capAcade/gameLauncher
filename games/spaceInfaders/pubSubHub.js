class PubSub {
    constructor (){
        this.subscribers = {};
    }
    subscribe(event, callback){
        if(!this.subscribers[event]){
            this.subscribers[event] = []
        }
        this.subscribers[event].push(callback);
        return this.subscribers[event].length - 1;
    }
    publish(event, data){

        if(!this.subscribers[event]){
            return;
        }
        this.subscribers[event].forEach(cb => {
            cb(data);
        });
    }
    unSubscribe(event, index){
        console.log('unsub',event, index)
        if(!this.subscribers[event] || !index){
            return;
        }
        console.log(this.subscribers[event]);
        this.subscribers[event].splice(index, 1);

    }
}