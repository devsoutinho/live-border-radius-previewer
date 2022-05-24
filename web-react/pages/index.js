import React from 'react';

export default function HomeScreen() {
  const [values, setValues] = React.useState({
    inputGlobalBorderRadius_0: '0',
    inputGlobalBorderRadius_1: '',
    inputGlobalBorderRadius_2: '',
    inputGlobalBorderRadius_3: '',
  });
  const fields = Object.keys(values);
  const [newValue, setNewValue] = React.useState('0');

  React.useEffect(() => {
    // const newValueGenerated = Array
    //   .from($formCSSConfig.querySelectorAll('input'))
    //   .map(($input) => {
    //       if($input.value) return `${$input.value}px`;
    //   })
    //   .filter((value) => Boolean(value))
    //   .join(' ');

    const newValueGenerated = Object
      .values(values)
      .map((value) => {
          if(value) return `${value}px`;
      })
      .filter((value) => Boolean(value))
      .join(' ');

    console.log(newValueGenerated);
    setNewValue(newValueGenerated);
  }, [values]);

  return (
    <>
      <main>
        <form className="css-config">
          {fields.map((fieldName) => (
            <input
              key={fieldName}
              type="number"
              name={fieldName}
              value={values[fieldName]}
              onChange={(infosDoEvento) => {
                console.log('Changes', infosDoEvento.target);
                setValues({
                  ...values,
                  [fieldName]: infosDoEvento.target.value,
                });
              }}
              placeholder="px"
            />
          ))}
        </form>

        <div className="box" style={{ borderRadius: newValue }}>
          border-radius: {newValue};
        </div>
      </main>
      <style global jsx>{`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    background-color: #F9D8C8;
    display: flex;
    align-items: center;
    justify-content: center;
}

main {
    position: relative;
    padding: 40px;
    width: 50vw;
    height: 50vw;
}

main input {
    position: absolute;
    max-width: 50px;
}

main input:nth-child(1) {
    left: 10px;
    top: 10px;
}

main input:nth-child(2) {
    right: 10px;
    top: 10px;
}

main input:nth-child(3) {
    right: 10px;
    bottom: 10px;
}

main input:nth-child(4) {
    left: 10px;
    bottom: 10px;
}

.box {
    width: 100%;
    height: 100%;
    background-color: #DB571A;
    display: flex;
    align-items: center;
    justify-content: center;
}
      `}</style>
    </>

  )
}
