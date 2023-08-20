// const Messages = () => {
//     return ( 
//         <>
//         <div >Navigate to Messages</div>
//         <div id="homeTab">
//         <div className="home">
//           <h1 >Messages Section!</h1>      
//         </div>    
//         </div>
//         </>     
//      );
// }
 // Define a functional component for displaying a message
const Messages = (prop) => {
    // Extract message data from props
    const { message } = prop;
  
    // Render the message components
    return (
      <MessageList>
        <Container>
          <Title>
            {/* Display the message title */}
            <h3>Re: {message.post.title}</h3>
          </Title>
          <Content>
            {/* Display sender information */}
            <div>
              <strong>From:</strong> {message.fromUser.username}
            </div>
            {/* Display message content */}
            <div>
              <strong>Message:</strong> {message.content}
            </div>
          </Content>
        </Container>
      </MessageList>
    );
  };
  
  // Export the Message component as the default export
  export default Messages;
