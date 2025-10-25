
const Container = ({children}) => {
  return (
    <div className='container animate-shadowPulse sm:my-[5px] mx-auto bg-[var(--dark)] border-2 border-solid border-[var(--border)] rounded-[6px]'>
      {children}
    </div>
  )
}

export default Container