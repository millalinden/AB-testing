import React from "react";

export default function ABTestImage(){
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <section>
      <img
        src={`${publicUrl}/assets/dachshund-1519374_640.jpg`}
        alt="Dachshund puppy with blue collar"
        width={400}
        height={300}
      />
      <img
        src="assets/puppy-1047521_640.jpg"
        alt="Lightbrown puppy"
        width={500}
        height={300}
      />
    </section>
  );
};


