
let initialState = {
    Friends: [{
        name: 'Petr',
        surname: 'Velikiy',
        id: '1'
    }, {
        name: 'Ivan',
        surname: 'Rubsov',
        id: '2'
    }, {
        name: 'Alex',
        surname: 'Grey',
        id: '3'
    }, {
        name: 'Oleg',
        surname: 'Maximilian',
        id: '4'
    }, {
        name: 'Nikita',
        surname: 'Gomnov',
        id: '5'
    }],
    NewMessageBody: '',
    Messages: {
        u1: [{
            text: 'привет',
            from: 'me'
        }, {
            text: 'привет',
            from: 'MessageFromFriend'
        }],
        u2: [],
        u3: []
    }
}

 const ReducerForMessage = (state = initialState,action) => {
     switch (action.type) {
         case 'SEND_MESSAGE':
         let idFriend = `${'u'}${action.id}`;
         let newstate = {...state};
        newstate.Messages = {...state['Messages']};
        newstate.Messages[idFriend] = [...state.Messages[idFriend]];
          newstate.Messages[idFriend].push({
              text: action.message,
              from: 'me'
          })
          return newstate;
             
         default: return state;

     }

 }

export default ReducerForMessage;
