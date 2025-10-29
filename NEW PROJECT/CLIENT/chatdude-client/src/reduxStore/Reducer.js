const Reducer = (state = {name:"karthik"}, action) =>{
    console.log("Reducer is called",state);
    if(action.type === "STRING") {
        state=action.playload
        console.log(state,'exsvhdfhjvfadkjvbdafjvbdfnvbdf')
        return state;
    }

    return state;
};

export default Reducer;