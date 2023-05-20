import React from 'react';

const Blogs = () => {
    return (
        <div>
            <img className='w-full h-96' src="/images/blog.jpg" alt="" />

            <div className='w-10/12 mx-auto md:grid md:grid-cols-2 gap-12'>
                <div className="card w-full bg-base-100 shadow-xl mb-8 md:mb-0">
                    <div className="card-body">
                        <h2 className="card-title">What is different between uncontrolled and controlled component?</h2>
                        <p className='ps-2'><span className='font-bold'>Uncontrolled Component:</span> An uncontrolled component is a form input element, such as an input field or a select dropdown, whose state is managed by the browser. In this approach, the value of the form input is not directly controlled or manipulated by the application. Instead, the application reads the input value when needed, typically through JavaScript events such as onChange or onSubmit. Uncontrolled components are easier to set up as they require less code, but they provide less control over the input and its behavior.</p>
                        <p className='ps-2'><span className='font-bold'>Controlled Component: </span> A controlled component is a form input element whose state is controlled by the application. In this approach, the value of the form input is stored in the application's state and updated through event handlers. Whenever the input value changes, the application updates its state, and the component re-renders with the updated value. Controlled components provide more control and flexibility as the application can validate, manipulate, or perform actions based on the input value at any time. However, they require more code and state management compared to uncontrolled components.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-8 md:mb-0">
                    <div className="card-body">
                        <h2 className="card-title">How to validate React props using proptype?</h2>
                        <p className='grow-0 font-bold mt-8'>To validate React props follwing steps: </p>
                        <ul className='list-disc ps-8'>
                            <li className='my-4'>Install the prop-types package if you haven't already.</li>
                            <li className='my-4'>Import the PropTypes module from the prop-types package in your component file.</li>
                            <li className='my-4'>Define the prop types for your component by adding a propTypes static property.</li>
                            <li className='my-4'>Use the available prop type validators provided by PropTypes.</li>
                            <li className='my-4'>When the component is used, the PropTypes validation will be automatically performed. If a prop doesn't match the specified type or is missing a required prop, a warning will be shown in the console.</li>
                        </ul>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-8">
                    <div className="card-body">
                        <h2 className="card-title">What is different between node js and express js??</h2>
                        <p className='ps-2'>Node.js and Express.js are two popular frameworks used in web development, but they serve different purposes and have distinct scopes. Node.js is a JavaScript runtime environment that enables executing JavaScript code on the server-side. It provides a platform for building server-side applications using JavaScript, offering a rich set of built-in modules and APIs for tasks like file system operations and network communication. Node.js is known for its non-blocking, event-driven architecture, making it highly efficient for handling concurrent requests. With Node.js, developers can build a wide range of applications, including web servers, APIs, real-time applications, and command-line tools. </p>
                        <p className='ps-2'>On the other hand, Express.js is a web application framework built on top of Node.js. It simplifies web development by providing a minimalist and flexible approach. Express.js abstracts common web development tasks such as routing, request handling, and middleware management, making it easier to define routes, handle HTTP requests and responses, and perform web-related operations. The framework offers a concise and intuitive syntax for creating web applications and APIs. Additionally, Express.js provides an ecosystem of middleware that can be seamlessly integrated into applications, enabling functionality such as authentication, logging, error handling, and more. Its extensibility allows developers to incorporate additional libraries and modules to enhance their application's capabilities.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-8">
                    <div className="card-body">
                        <h2 className="card-title">What is the custom Hook and why use custom Hook?</h2>
                        <p>A custom hook in React is a JavaScript function that allows you to reuse stateful logic or side effects across multiple components. It is a way to extract and encapsulate common functionality into a reusable function that can be used in different parts of your application. Custom hooks follow a specific naming convention by starting with the word "use" (e.g., useCustomHook). </p>
                        <p className='font-bold'>There are some application of custom Hook:</p>
                        <ul className='list-disc ps-8'>
                            <li className='py-2 ps-2'><span className='font-bold'>Reuse Logic:</span> Custom hooks allow you to encapsulate and share complex or repetitive logic across multiple components.</li>
                            <li className='py-2 ps-2'><span className='font-bold'>Separation of Concerns:</span> Custom hooks help separate concerns and improve the organization of your code by extracting specific functionality into a separate reusable function.</li>
                            <li className='py-2 ps-2'><span className='font-bold'>Abstraction and Reusability: </span> Custom hooks provide a way to create abstractions and encapsulate complex functionality into a reusable package with a clear interface and API.</li>
                            <li className='py-2 ps-2'><span className='font-bold'>Better Testing:</span> Custom hooks make it easier to test your application logic as they can be unit tested independently without the need to render components.</li>
                            <li className='py-2 ps-2'><span className='font-bold'>Cleaner Component Code: </span> By moving complex logic out of the component, custom hooks help keep the component code focused on rendering and user interaction, resulting in cleaner and more readable code.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;