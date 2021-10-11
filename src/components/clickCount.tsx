import React, { useEffect, useState } from 'react'

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0);
  <button onClick={() => setCount(count + 1)}>+1</button>  
  useEffect(() => {
    console.log(`Clicked the button ${count} times`);
}, [count]);

  return (
    <div>
      ClickCount
    </div>
  )
}

export default ClickCount
