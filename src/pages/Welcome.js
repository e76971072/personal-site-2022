import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div

	>
	<div
	style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
		marginTop:"10%",
		marginLeft:"10%",
		marginRight:"10%",
      }}
	>
      <ReactTypingEffect
        text={["Hey,👋 you made it! Let's build 🛠 something awesome together"]}
		typingDelay={50}
		speed={100}
		eraseDelay={200}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'black'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}
      />
    </div>
	<div
	style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}


	><Link to="/about" style={{ color: "blue", border: "blue"}}> 🔗 knows more</Link>

	</div>

	<br/>
	<div
	style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
		marginLeft:"10%",
		marginRight:"10%",
      }}>
		<ReactTypingEffect
		style={{    fontStyle: 'italic'}}
        staticText={["\"Success is not final, failure is not fatal, it's the courage to continue that counts.\" - Winston Churchill"]}
      />

	</div>
	</div>
  );
};

export default Welcome;