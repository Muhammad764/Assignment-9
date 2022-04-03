import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p className='text-sky-500 text-xl font-medium mt-5'>What do you know about context api?</p>
            <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <p className='text-sky-500 text-xl font-medium mt-5'>What is semantic tag?</p>
            <p>Ans: Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.</p>
            
        </div>
    );
};

export default Blogs;