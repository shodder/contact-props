

// Using props - basically pass in any/all attributes. The name props is what it is commonly called - but could be whatever!
export default function Contact(props) {
    // console.log(props)
    return (
        <article className="contact-card">
            <img 
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img 
                    src="./images/phone-icon.png" 
                    alt="phone icon" 
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src="./images/mail-icon.png" 
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )

}


// Using props with destructuring
//export default function Contact({img, name, phone, email}) {
// export default function Contact({img: image, name, phone, email}) { // note the img: image is taking the img variable from the destuctured input and renaming it to image
//     // console.log(props)
//     return (
//         <article className="contact-card">
//             <img 
//                 src={image}
//                 alt="Photo of Mr. Whiskerson"
//             />
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img 
//                     src="./images/phone-icon.png" 
//                     alt="phone icon" 
//                 />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img 
//                     src="./images/mail-icon.png" 
//                     alt="mail icon"
//                 />
//                 <p>{email}</p>
//             </div>
//         </article>
//     )

// }




// hard coded version
// export default function Contact() {
//     return (
//         <article className="contact-card">
//             <img 
//                 src="./images/mr-whiskerson.png"
//                 alt="Photo of Mr. Whiskerson"
//             />
//             <h3>Mr. Whiskerson</h3>
//             <div className="info-group">
//                 <img 
//                     src="./images/phone-icon.png" 
//                     alt="phone icon" 
//                 />
//                 <p>(212) 555-1234</p>
//             </div>
//             <div className="info-group">
//                 <img 
//                     src="./images/mail-icon.png" 
//                     alt="mail icon"
//                 />
//                 <p>mr.whiskaz@catnap.meow</p>
//             </div>
//         </article>
//     )
// }

