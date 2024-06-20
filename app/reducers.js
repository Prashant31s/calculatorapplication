// reducers.js

const initialState = {
  input: '0',
  result: '',
  history: []
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DIGIT':
      let newInput;
      // console.log(action.payload);
      // console.log(state.input);
      if(state.input.length>=36){
        return {
          ...state
        }
      }
      else if(state.input==='0'){
        newInput=action.payload;
      }
      
      else if(action.payload==='.'){
        let  cnt=0;
        //console.log(state.input.length);
        for(let i=0;i<state.input.length;i++){
          if(state.input.charAt(i)==='.'){
            cnt++;
          }
        }
        console.log(cnt);
        if(cnt){
          return {
            ...state
          }
        }
        else{
          newInput=state.input+action.payload;
          console.log(newInput);

          return {
            ...state,
            input: newInput
          }
          
        }
        // else{
        //   console.log(state.input+action.payload);
          newInput =state.input+action.paylaod;
        // }
        
      }
      else{
        if((state.input.charAt(state.input.length-1)==='+'|| (state.input.charAt(state.input.length-1))==='-'||(state.input.charAt(state.input.length-1))==='*' ||(state.input.charAt(state.input.length-1))==='/' )&& (action.payload==='+'||action.payload==='-'||action.payload==='/'||action.payload==='*')){
          newInput= state.input.slice(0,-1)+action.payload;
          
        }
         
         else{
          newInput = state.input+action.payload;
          
          // console.log(state.input);
          // console.log(action.payload);
        }
        
      }
      //const newInput = state.input === '0' ? action.payload : state.input + action.payload;
      return {
        ...state,
        input: newInput
      };


    case 'CLEAR_INPUT':
      return {
        ...state,
        input: '0',
        result: ''
      };
    case 'CALCULATE_RESULT':
      try {
        const result = eval(state.input); 
        const expression = state.input + ' = ' + result.toString();

        
        // if(state.history.length){
        //   console.log(state.history[0].expression)
        //   console.log(expression)
        // }
        //console.log(result.toString);
        if(state.input===result.toString()){
            return {
              ...state,
              result:result.toString(),
              input:newInput,
              history: [...state.history]
            }

        }
        let newInput=result.toString();
        //console.log(newInput);
        if(state.history.length){
          //console.log(5); 
          if(state.history[state.history.length-1].expression!=expression){
            return{
              ...state,
              result: result.toString(),
              input: newInput,
              history: [...state.history, { expression, result: result.toString() }] 
            }

          }
          else{
            return {
              ...state,
              result:result.toString(),
              input:newInput,
              history: [...state.history]
            }
          }
          
        }
        else{
          return {
            ...state,
            result: result.toString(),
           input: newInput,
            history: [...state.history, { expression, result: result.toString() }]
          };

        }
        
      } catch (error) {
        return {
          ...state,
          result: 'Error'
        };
      };
    // case 'ADD_TO_HISTORY':
    //   return {
    //     ...state,
    //     history: [...state.history, action.payload]
    //   };
    case 'CLEAR_HISTORY':
      return {
        ...state,
        history: []
      };
    default:
      return state;
  }
};

export default calculatorReducer;
