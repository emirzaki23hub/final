import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}  style={{backgroundColor: '#fab702'}}>
      <div>
        <center><a href="http://pustikom.unj.ac.id/" target="_blank" rel="noopener noreferrer">UPT TIK UNJ</a>
        <span className="ml-1">&copy; 2021 .</span></center>
    
              </div>
    
    </CFooter>
  )
}

export default React.memo(TheFooter)