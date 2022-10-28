import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {
	const [posts, setPosts] = useState([]);

	useEffect(()=> {
		axios.get("https://jsonplaceholder.typicode.com/posts")
		.then(res => {
			setPosts(res.data);
		})
		.catch(err => { console.log(err); })				
	}, [])

	return(
		<div>
		<h1> Data Fetching Demo </h1>
		<ol>
		{
			posts.map( post => 
				<li key={post.id}>
				{post.id} 
				</li>
		) }
		</ol>
		</div>
	);
}

export default DataFetching;


