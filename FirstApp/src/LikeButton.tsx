import React,{Component} from "react";

//to use state, create component using class syntax
//function syntax does not support states

export class LikeButton extends Component<{},{likes:number,msg:string}>{
        constructor(props:any){
            super(props)
            this.state={likes:0,msg:'You have '}
        }
        public updateLikes(){
            this.setState((prevState)=>{return{likes:prevState.likes+1} })

        }
        render():React.ReactNode{
          

            return(
                <button
                   onClick={()=>this.updateLikes()}> 
                   {this.state.msg}{this.state.likes}👍
                </button>
            )

            
        }
}

