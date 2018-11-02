import React from 'react'; 
import webpackerReact from 'webpacker-react';
import { Posts } from '../components/posts/posts';
import { PostForm} from '../components/posts/post_form';
import reqwest from 'reqwest';
export class PostGroup extends React.Component{
   
    constructor(props){
        super(props);
this.add = this.add.bind(this);
        this.state ={
            posts:[] 
               }
    }
    add(post){
this.setState({
    posts: [post].concat(this.state.posts)
});
    }

    componentDidMount(){
        this.getPosts();
    }

getPosts(){
    reqwest({
            url:'/posts.json',
            method:'GET'
        }).then(posts =>{
            this.setState({
                posts: posts
            })
        })
}

    render(){
        return( 
            <div>   
                <PostForm add={this.add}></PostForm>
                  <Posts posts={this.state.posts} ></Posts>
            </div>
 
      
            );
    };
}

webpackerReact.setup({PostGroup})