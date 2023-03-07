import './Bars.css'



const Bars = ({isOpen}) => {
  return (
    <>
    <div className='bars'>
        <div className='bar bar1' />
        <div className='bar bar2' />
        <div className='bar bar3' />
      
    </div>
    <style jsx> {`

    .bar1{
        transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    .bar2{
        transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${isOpen ? 0 : 1};
    }
    .bar3{
        transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    `}
    </style>
    </>
    
  )
}

export default Bars
